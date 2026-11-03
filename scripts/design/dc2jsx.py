"""Convert the design's .dc.html artboards into React client components.

Usage: python3 scripts/design/dc2jsx.py <dir with .dc.html files> src/app/_design public/images
"""
import html
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import design_config as cfg  # noqa: E402

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}
SVG_TAGS = {"svg", "path", "circle", "ellipse", "line", "polyline", "polygon", "rect", "g", "defs", "lineargradient",
            "radialgradient", "stop", "text", "tspan", "clippath", "mask", "pattern", "use", "symbol", "filter",
            "fegaussianblur", "feoffset", "feblend", "fecolormatrix", "femerge", "femergenode", "textpath", "title", "desc"}
ATTR_MAP = {
    "class": "className", "for": "htmlFor", "tabindex": "tabIndex", "readonly": "readOnly", "maxlength": "maxLength",
    "minlength": "minLength", "autocomplete": "autoComplete", "autofocus": "autoFocus", "inputmode": "inputMode",
    "enterkeyhint": "enterKeyHint", "srcset": "srcSet", "crossorigin": "crossOrigin", "colspan": "colSpan",
    "rowspan": "rowSpan", "frameborder": "frameBorder", "allowfullscreen": "allowFullScreen",
    "contenteditable": "contentEditable", "spellcheck": "spellCheck", "novalidate": "noValidate",
    "datetime": "dateTime", "playsinline": "playsInline", "referrerpolicy": "referrerPolicy",
    "fetchpriority": "fetchPriority", "xlink:href": "xlinkHref", "xml:space": "xmlSpace", "xmlns:xlink": "xmlnsXlink",
    "charset": "charSet", "accept-charset": "acceptCharset", "http-equiv": "httpEquiv",
}
TOKEN = re.compile(
    r"<!--.*?-->"
    r"|<(?P<close>/?)(?P<tag>[a-zA-Z][\w:-]*)(?P<attrs>(?:\s+[^\s=/>]+(?:\s*=\s*(?:\"[^\"]*\"|'[^']*'|[^\s>]+))?)*)\s*(?P<self>/?)>"
    r"|(?P<text>[^<]+)|(?P<lt><)", re.S)
ATTR = re.compile(r"([^\s=/>]+)(?:\s*=\s*(?:\"([^\"]*)\"|'([^']*)'|([^\s>]+)))?")
HOLE = re.compile(r"\{\{\s*(.*?)\s*\}\}")
WARN = []


class Node:
    def __init__(self, tag, attrs=None, parent=None):
        self.tag, self.attrs, self.children, self.parent = tag, attrs or [], [], parent


def parse(src):
    root = Node("#root")
    cur = root
    pos = 0
    raw_until = None
    while pos < len(src):
        if raw_until:
            end = src.lower().find(f"</{raw_until}", pos)
            end = len(src) if end < 0 else end
            cur.children.append(src[pos:end])
            pos = end
            raw_until = None
            continue
        m = TOKEN.match(src, pos)
        pos = m.end()
        if m.group("text") is not None or m.group("lt"):
            cur.children.append(m.group(0))
            continue
        if m.group(0).startswith("<!--"):
            continue
        tag = m.group("tag")
        low = tag.lower()
        if m.group("close"):
            n = cur
            while n is not None and n.tag.lower() != low:
                n = n.parent
            if n is None:
                WARN.append(f"stray </{tag}>")
                continue
            cur = n.parent
            continue
        attrs = [(a.group(1), next((g for g in a.groups()[1:] if g is not None), None)) for a in ATTR.finditer(m.group("attrs") or "")]
        node = Node(tag, attrs, cur)
        cur.children.append(node)
        if m.group("self") or low in VOID:
            continue
        cur = node
        if low in ("style", "script"):
            raw_until = low
    return root


class Ctx:
    def __init__(self, links, images):
        self.links, self.images = links, images
        self.page, self.ids = "", set()


def static_text(node):
    if isinstance(node, str):
        return HOLE.sub("…", html.unescape(node))
    if node.tag.lower() in ("style", "script", "svg"):
        return ""
    return "".join(static_text(c) for c in node.children)


def norm_text(t):
    return re.sub(r"\s+", " ", t).strip()


def card_report(node):
    p = node.parent
    for _ in range(6):
        if p is None:
            break
        t = static_text(p)
        hits = [route for name, route in cfg.REPORT_NAMES if name in t]
        if len(hits) == 1:
            return hits[0]
        if len(hits) > 1:
            return None
        p = p.parent
    return None


def resolve_link(node, href, text, scope, ctx):
    """Return a JSX expression for the href, or None to keep it."""
    page = ctx.page
    if not (href == "#" or (href.startswith("#") and len(href) > 1)):
        return None
    loops = [s for s in scope if s != "$index"]
    if text == "Order now":
        if page == "Main":
            r = card_report(node)
            return json.dumps(r) if r else None
        if page in ("Name", "Mobile") and "t" in loops:
            return "numCheckoutHref(t?.name)"
        if page == "Milan" and "p" in loops:
            return "`/checkout/milan?pkg=${String(p?.name).includes('Consultation') ? 'call' : 'report'}`"
        if page in cfg.PAGE_CHECKOUT:
            return json.dumps(cfg.PAGE_CHECKOUT[page])
    if text == "View report":
        if "o" in loops:
            return "reportHref(o?.name)"
        r = card_report(node)
        if r:
            return json.dumps(r)
    if text.startswith("Back to ") and page in cfg.CHECKOUT_BACK:
        return cfg.CHECKOUT_BACK[page]
    holes = [h.group(1).strip() for c in node.children if isinstance(c, str) for h in HOLE.finditer(c)]
    for h in holes:
        for (pg, suffix), route in cfg.HOLE_LINKS.items():
            if pg == page and h.replace(".", "?.").endswith(suffix):
                return json.dumps(route)
    if text == "Notify me":
        if href.startswith("#") and href[1:] in ctx.ids:
            return None
        t = static_text(node.parent.parent) if node.parent is not None and node.parent.parent is not None else ""
        return json.dumps("/masterclass" if "Masterclass" in t else "/courses#notify")
    if text in cfg.LINK_TEXT:
        return json.dumps(cfg.LINK_TEXT[text])
    for pre, route, *only in cfg.LINK_PREFIX:
        if text.startswith(pre) and (not only or only[0] == page):
            return json.dumps(route)
    label = (dict(node.attrs).get("aria-label") or "").lower()
    if "home" in label:
        return json.dumps("/")
    if href.startswith("#") and len(href) > 1:
        return None if href[1:] in ctx.ids else json.dumps("/" + href)
    return None


def expr(path, scope):
    path = path.strip()
    if path in ("true", "false", "null", "undefined") or re.fullmatch(r"-?\d+(\.\d+)?", path) or path[:1] in "'\"":
        return path
    parts = path.split(".")
    head = parts[0]
    base = head if head in scope else f"v.{head}"
    return base + "".join(f"?.{p}" for p in parts[1:])


def interp(value, scope, whole_ok=True):
    """Return a JSX attribute value expression (without braces) for a possibly-holed string."""
    holes = list(HOLE.finditer(value))
    if not holes:
        return json.dumps(value, ensure_ascii=False)
    if whole_ok and len(holes) == 1 and holes[0].span() == (0, len(value)):
        return expr(holes[0].group(1), scope)
    out, last = "`", 0
    for h in holes:
        out += value[last:h.start()].replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
        out += "${" + f"({expr(h.group(1), scope)}) ?? ''" + "}"
        last = h.end()
    out += value[last:].replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${") + "`"
    return out


def split_decls(style):
    decls, buf, depth, quote = [], "", 0, None
    for ch in style:
        if quote:
            buf += ch
            if ch == quote:
                quote = None
            continue
        if ch in "\"'":
            quote = ch
        elif ch == "(":
            depth += 1
        elif ch == ")":
            depth -= 1
        elif ch == ";" and depth == 0:
            decls.append(buf)
            buf = ""
            continue
        buf += ch
    decls.append(buf)
    return [d.strip() for d in decls if d.strip()]


def camel(prop):
    if prop.startswith("--"):
        return json.dumps(prop)
    prop = prop.lower()
    if prop.startswith("-webkit-"):
        prop = "webkit-" + prop[8:]
    elif prop.startswith("-moz-"):
        prop = "moz-" + prop[5:]
    elif prop.startswith("-ms-"):
        prop = "ms-" + prop[4:]
    parts = prop.split("-")
    name = parts[0] + "".join(p[:1].upper() + p[1:] for p in parts[1:])
    if name.startswith("webkit"):
        name = "Webkit" + name[6:]
    if name.startswith("moz"):
        name = "Moz" + name[3:]
    return name


def style_expr(value, scope):
    if HOLE.fullmatch(value.strip() or "x") and value.strip().startswith("{{"):
        return f"sx({expr(HOLE.fullmatch(value.strip()).group(1), scope)})"
    normal, important = [], []
    for d in split_decls(value):
        if ":" not in d:
            continue
        k, val = d.split(":", 1)
        val = val.strip()
        imp = val.lower().endswith("!important")
        if imp:
            val = val[: -len("!important")].strip()
        (important if imp else normal).append((camel(k.strip()), interp(val, scope, whole_ok=True)))
    items = [f"{k}: {v}" for k, v in normal + important]
    return "{" + ", ".join(items) + "}"


def map_href(val, ctx):
    if HOLE.search(val):
        return None
    m = re.match(r"^(?:\./)?(?:/)?([A-Za-z]+)\.dc\.html(.*)$", val)
    if m:
        route = ctx.links.get(m.group(1))
        if route is None:
            WARN.append(f"unmapped link {val}")
            return val
        rest = m.group(2)
        if rest.startswith("#") and route != "/":
            return route + rest
        return (route if not rest else ("/" + rest if route == "/" else route + rest))
    return val


def map_src(val, ctx):
    m = re.match(r"^/_blob/([0-9a-f]+)", val)
    if m:
        f = ctx.images.get(m.group(1))
        if not f:
            WARN.append(f"missing image {val}")
            return val
        return "/images/" + f
    if val.startswith("./kp-kundli.html"):
        return "/kp-kundli.html"
    return val


def attr_name(tag, name, is_svg):
    low = name.lower()
    if low in ATTR_MAP:
        return ATTR_MAP[low]
    if low.startswith(("data-", "aria-")):
        return low
    if is_svg and "-" in name:
        p = name.split("-")
        return p[0] + "".join(x[:1].upper() + x[1:] for x in p[1:])
    return name


def emit_children(node, scope, ctx, ind):
    out = []
    for ch in node.children:
        if isinstance(ch, str):
            if node.tag.lower() in ("style", "script"):
                out.append(ind + "{" + json.dumps(ch, ensure_ascii=False) + "}")
                continue
            text = html.unescape(ch)
            # The design runtime drops whitespace-only text unless it holds a real space.
            if not text or (not HOLE.search(text) and not text.strip() and " " not in text):
                continue
            last = 0
            for h in HOLE.finditer(text):
                if h.start() > last:
                    out.append(ind + "{" + json.dumps(text[last:h.start()], ensure_ascii=False) + "}")
                out.append(ind + "{hole(" + expr(h.group(1), scope) + ")}")
                last = h.end()
            if last < len(text):
                out.append(ind + "{" + json.dumps(text[last:], ensure_ascii=False) + "}")
        else:
            out.append(emit(ch, scope, ctx, ind))
    return out


def emit(node, scope, ctx, ind="      "):
    tag = node.tag
    low = tag.lower()
    attrs = dict()
    order = []
    for k, v in node.attrs:
        if k not in attrs:
            order.append(k)
        attrs[k] = v

    if low == "sc-for":
        lst = interp(attrs.get("list") or "", scope)
        var = (attrs.get("as") or "item").strip()
        inner = scope | {var, "$index"}
        kids = "\n".join(emit_children(node, inner, ctx, ind + "    "))
        return (f"{ind}{{({lst} || []).map(({var}, $index) => (\n{ind}  <React.Fragment key={{$index}}>\n{kids}\n"
                f"{ind}  </React.Fragment>\n{ind}))}}")
    if low == "sc-if":
        cond = interp(attrs.get("value") or "", scope)
        kids = "\n".join(emit_children(node, scope, ctx, ind + "    "))
        return f"{ind}{{{cond} ? (\n{ind}  <>\n{kids}\n{ind}  </>\n{ind}) : null}}"
    if low in ("helmet",):
        return ""
    if low == "x-dc":
        return "\n".join(emit_children(node, scope, ctx, ind))

    is_svg = low in SVG_TAGS or any(a.tag.lower() == "svg" for a in ancestors(node))
    jsx_tag = tag if is_svg else low
    if is_svg:
        jsx_tag = {"lineargradient": "linearGradient", "radialgradient": "radialGradient", "clippath": "clipPath",
                   "textpath": "textPath", "fegaussianblur": "feGaussianBlur"}.get(low, tag)

    props = []
    has_handler = any(re.match(r"on[A-Z]", k) for k in order)

    wrapper = None
    if low in ("a", "button"):
        text = norm_text(static_text(node))
        page = ctx.page
        if page in cfg.PAY and text.startswith("Pay "):
            wrapper = ("PayButton", f"order={{{cfg.PAY[page]}}}")
        elif (page, text) in cfg.FIXED_PAY:
            extra_req = " requireCustomer={false}" if page in cfg.NO_CUSTOMER_FORM else ""
            wrapper = ("PayButton", f"order={{{cfg.FIXED_PAY[(page, text)]}}}{extra_req}")
        elif (page, text) in cfg.FORMS:
            ep, extra = cfg.FORMS[(page, text)]
            wrapper = ("FormButton", f"endpoint={json.dumps(ep)} extra={{{extra}}}")
        if low == "a" and wrapper is None and "href" in attrs and attrs["href"] is not None:
            target = resolve_link(node, html.unescape(attrs["href"]), text, scope, ctx)
            if target is not None:
                attrs["href"] = None
                props.append(f"href={{{target}}}")
    textarea_text = None
    if low == "textarea":
        textarea_text = "".join(c for c in node.children if isinstance(c, str))
        node.children = []
    select_default = None
    if low == "select":
        for opt in [c for c in node.children if isinstance(c, Node) and c.tag.lower() == "option"]:
            oa = dict(opt.attrs)
            if "selected" in oa:
                select_default = oa.get("value") or "".join(c for c in opt.children if isinstance(c, str)).strip()
                opt.attrs = [(k, v) for k, v in opt.attrs if k != "selected"]

    for k in order:
        val = attrs[k]
        lk = k.lower()
        if lk.startswith("hint-") or lk in ("data-dc-tpl",):
            continue
        name = attr_name(low, k, is_svg)
        if lk == "href" and any(p.startswith("href=") for p in props):
            continue
        if wrapper and lk == "type":
            continue
        if val is None:
            if lk == "checked" and low == "input" and not has_handler:
                props.append("defaultChecked")
            elif lk == "selected":
                continue
            else:
                props.append(name)
            continue
        val = html.unescape(val)
        if lk == "style":
            props.append(f"style={{{style_expr(val, scope)}}}")
            continue
        if lk == "href":
            mapped = map_href(val, ctx)
            if mapped is not None:
                val = mapped
        if lk == "src":
            val = map_src(val, ctx)
        if lk == "value" and low in ("input", "textarea") and not HOLE.search(val) and attrs.get("type", "text") not in ("radio", "checkbox", "submit", "button", "hidden"):
            name = "defaultValue"
        props.append(f"{name}={{{interp(val, scope)}}}")
    if textarea_text and textarea_text.strip():
        props.append(f"defaultValue={json.dumps(html.unescape(textarea_text), ensure_ascii=False)}")
    if select_default is not None:
        props.append(f"defaultValue={json.dumps(select_default, ensure_ascii=False)}")

    if wrapper:
        props = [f'as="{low}"', wrapper[1]] + props
        jsx_tag = wrapper[0]
    open_tag = f"<{jsx_tag}" + ("" if not props else " " + " ".join(props))
    if low in VOID or (not node.children):
        return f"{ind}{open_tag} />"
    children = node.children
    if low == "table" and any(isinstance(c, Node) and c.tag.lower() == "tr" for c in children):
        tb = Node("tbody", [], node)
        tb.children = children
        node.children = [tb]
    if low == "p" and any(isinstance(c, Node) and c.tag.lower() in ("div", "p", "ul", "ol", "h1", "h2", "h3", "h4", "table", "section") for c in node.children):
        WARN.append("block element inside <p>")
    kids = "\n".join(emit_children(node, scope, ctx, ind + "  "))
    return f"{ind}{open_tag}>\n{kids}\n{ind}</{jsx_tag}>"


def ancestors(n):
    p = n.parent
    while p is not None:
        yield p
        p = p.parent


def patch_initial_state(logic):
    """Let the route seed state: this.state = {...} becomes Object.assign({...}, props.initialState)."""
    i = logic.find("this.state = {")
    if i < 0:
        return logic
    j = i + len("this.state = ")
    depth = 0
    for k in range(j, len(logic)):
        if logic[k] == "{":
            depth += 1
        elif logic[k] == "}":
            depth -= 1
            if depth == 0:
                return logic[:j] + "Object.assign(" + logic[j:k + 1] + ", props && props.initialState)" + logic[k + 1:]
    return logic


def convert(path, name, ctx):
    src = open(path, encoding="utf-8").read()
    page = os.path.basename(path).replace(".dc.html", "")
    ctx.page = page
    body = re.search(r"<x-dc>(.*)</x-dc>", src, re.S).group(1)
    body = re.sub(r"<helmet>.*?</helmet>", "", body, flags=re.S)
    ctx.ids = set(re.findall(r'\bid="([^"{]+)"', body))
    logic_m = re.search(r"<script[^>]*(?:data-dc-script|type=\"text/x-dc\")[^>]*>(.*?)</script>", src, re.S) or \
        re.search(r"<script>\s*(class Component[\s\S]*?)</script>", src)
    logic = logic_m.group(1).strip() if logic_m else "class Component extends DCLogic { renderVals() { return {}; } }"
    for pg, old, new in cfg.LOGIC_PATCHES:
        if pg == page:
            if old not in logic:
                raise SystemExit(f"{page}: logic patch target not found: {old[:60]}")
            logic = logic.replace(old, new)
    logic = re.sub(r"class\s+Component\s+extends\s+DCLogic", f"class {name} extends React.Component", logic, count=1)
    logic = patch_initial_state(logic)
    logic = re.sub(r"/_blob/[0-9a-f]+", lambda m: map_src(m.group(0), ctx), logic)
    root = parse(body)
    jsx = "\n".join(emit_children(root, set(), ctx, "      "))
    jsx = "\n".join(l for l in jsx.split("\n") if l.strip())
    render = (f"\n\n{name}.prototype.render = function render() {{\n  const v = this.renderVals() || {{}};\n  return (\n"
              f"    <div data-design-page=\"{page}\" style={{{{ display: \"contents\" }}}}>\n{jsx}\n    </div>\n  );\n}};\n")
    for pg, old, new in cfg.OUTPUT_PATCHES:
        if pg in (None, page):
            if pg and old not in render:
                raise SystemExit(f"{page}: output patch target not found: {old[:60]}")
            render = render.replace(old, new)
    mount = ""
    if page in cfg.MOUNT:
        mount = f"\n{name}.prototype.componentDidMount = function componentDidMount() {{\n  {cfg.MOUNT[page]}\n}};\n"
    header = ('"use client";\n/* eslint-disable */\n// Generated from the design file ' + os.path.basename(path) +
              ' by scripts/design/dc2jsx.py. Edit the design, then regenerate.\nimport React from "react";\nimport { sx, hole } from "./sx";\n'
              'import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState } from "./wire";\n\n')
    return header + logic + render + mount + f"\nexport default {name};\n"


if __name__ == "__main__":
    src_dir, out_dir, images_dir = sys.argv[1], sys.argv[2], sys.argv[3]
    images = {f.split(".")[0]: f for f in os.listdir(images_dir)}
    ctx = Ctx({}, images)
    for base, comp in cfg.PAGES.items():
        WARN.clear()
        code = convert(os.path.join(src_dir, base + ".dc.html"), comp, ctx)
        with open(os.path.join(out_dir, comp + ".jsx"), "w", encoding="utf-8") as fh:
            fh.write(code)
        print(f"{base} -> {comp}.jsx ({len(code)} chars)" + (f"  WARN: {sorted(set(WARN))}" if WARN else ""))
