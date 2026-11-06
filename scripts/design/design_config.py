"""Site wiring for the generated design pages: where placeholder links go and which buttons pay or submit."""

# Design file (without .dc.html) -> generated component name.
PAGES = {
    "Main": "HomePage", "About": "AboutPage", "Contact": "ContactPage", "Policies": "PoliciesPage",
    "Consult": "ConsultPage", "ConsultLanding": "ConsultLandingPage", "Courses": "CoursesPage",
    "Masterclass": "MasterclassPage", "Horoscope": "HoroscopePage", "Kundli": "KundliPage", "KpKundli": "KpKundliPage",
    "Report": "ReportKundliPage", "Varshphal": "ReportVarshphalPage", "LalKitab": "ReportLalKitabPage",
    "Milan": "ReportMilanPage", "Name": "ReportNamePage", "Mobile": "ReportMobilePage",
    "Checkout": "CheckoutKundliPage", "VarshphalCheckout": "CheckoutVarshphalPage",
    "LalKitabCheckout": "CheckoutLalKitabPage", "MilanCheckout": "CheckoutMilanPage",
    "NumCheckout": "CheckoutNumerologyPage",
}

# Exact link text -> route (applies on every page).
LINK_TEXT = {
    "Home": "/", "Consultations": "/consult", "Free Kundli": "/kundli", "Free Calculators": "/#free",
    "Reports": "/#reports", "Courses": "/courses", "Horoscope": "/horoscope", "Blogs": "/#blog", "About": "/about",
    "Book a consultation": "/consult", "Book a call": "/consult", "Book complete call": "/consult",
    "Get a personal reading": "/consult", "See the offer": "/consult", "See the masterclass": "/masterclass",
    "View all courses →": "/courses", "See all reports →": "/#reports", "Buy now": "/contact",
    "Privacy policy": "/policies/privacy", "Refund policy": "/policies/refunds",
    "Delivery policy": "/policies/delivery", "Terms": "/policies/terms",
    "Continue to order": "/checkout/kundli", "Check yours free": "/#free", "Check my name": "/#free",
    "Edit details": "/#free", "Meet us": "/about", "Read all articles →": "/#blog",
    "Personalised Kundli Report": "/report/kundli", "Name Numerology Report": "/report/name-numerology",
    "Mobile Number Report": "/report/mobile-number", "Get your free Kundli": "/kundli",
}

# Link text prefix -> route.
LINK_PREFIX = [
    ("Live 2-day Manifestation Masterclass", "/masterclass"),
    ("Read the full", "/horoscope"),
    ("See a sample page", "/report/kundli"),
    ("Get my report", "/checkout/kundli"),
    ("Back to home", "/"),
    ("Send to WhatsApp", "https://wa.me/919129237566"),
    ("Kundli readings", "/report/kundli", "About"),
    ("Numerology", "/report/name-numerology", "About"),
    ("Kundli Milan", "/report/milan", "About"),
    ("Consultations", "/consult", "About"),
    ("Courses", "/courses", "About"),
    ("Free tools", "/#free", "About"),
]

# Links whose text is a data hole: (page, hole path suffix) -> route.
HOLE_LINKS = {
    ("Horoscope", "L?.home"): "/", ("Horoscope", "L?.horoscope"): "/horoscope",
    ("Horoscope", "L?.ctaReport"): "/report/kundli", ("Horoscope", "L?.ctaFree"): "/kundli",
    ("Main", "pl?.cta"): "/consult",
}

# Checkout page -> its report page, for the "Back to …" link.
CHECKOUT_BACK = {"Checkout": "\"/report/kundli\"", "VarshphalCheckout": "\"/report/varshphal\"",
                 "LalKitabCheckout": "\"/report/lal-kitab\"", "MilanCheckout": "\"/report/milan\"",
                 "NumCheckout": "(v.isMob ? '/report/mobile-number' : '/report/name-numerology')"}

REPORT_NAMES = [
    ("Personalised Kundli", "/report/kundli"), ("Varshphal 2027", "/report/varshphal"),
    ("Lal Kitab Report", "/report/lal-kitab"), ("Couple Kundli Milan", "/report/milan"),
    ("Name Numerology Report", "/report/name-numerology"), ("Mobile Number Report", "/report/mobile-number"),
]

PAGE_CHECKOUT = {"Report": "/checkout/kundli", "Varshphal": "/checkout/varshphal", "LalKitab": "/checkout/lal-kitab",
                 "Milan": "/checkout/milan", "Name": "/checkout/numerology?kind=self", "Mobile": "/checkout/numerology?kind=mob"}

CALL = "(this.state.call ? (this.state.callMode === 'san' ? 'san' : 'man') : null)"
EXTRA_Q = "Math.max(0, (this.state.picks || []).length - 2)"

# Page -> order expression for its "Pay ₹… securely" button.
PAY = {
    "Checkout": f"{{ productId: 'report-kundli', extraQuestions: {EXTRA_Q}, call: {CALL} }}",
    "LalKitabCheckout": f"{{ productId: 'report-lal-kitab', extraQuestions: {EXTRA_Q}, call: {CALL} }}",
    "VarshphalCheckout": f"{{ productId: 'report-varshphal', call: {CALL} }}",
    "MilanCheckout": "{ productId: this.state.pkg === 'call' ? 'report-milan-call' : 'report-milan' }",
    "NumCheckout": "{ productId: 'num-' + v.__pkgId }",
    "Consult": "{ productId: consultProduct(this.state) }",
}

# (page, exact link text) -> order expression for buttons that pay straight away.
FIXED_PAY = {
    ("Masterclass", "Register now at ₹99"): "{ productId: 'masterclass-99' }",
    ("ConsultLanding", "Maneswita ji se baat karein"): "{ productId: 'consult-landing-expert' }",
    ("ConsultLanding", "Ahalya ji se baat karein"): "{ productId: 'consult-landing-senior' }",
    ("ConsultLanding", "Ahalya Sangeeta ji se baat karein"): "{ productId: 'consult-landing-senior' }",
    ("ConsultLanding", "Vastu consultation book karein"): "{ productId: 'consult-landing-vastu' }",
}
# Pages whose paying buttons have no name/phone fields next to them; Razorpay collects contact details.
NO_CUSTOMER_FORM = {"ConsultLanding"}

# (page, exact text) -> (endpoint, extra payload expression).
FORMS = {
    ("Contact", "Send message"): ("/api/contact", "{ topic: this.state.topic }"),
    ("Policies", "Send message"): ("/api/contact", "{ topic: this.state.topic }"),
    ("Courses", "Notify me on WhatsApp"): ("/api/courses/interest", "{ topics: this.state.picks || [] }"),
}

# Logic patches: (page, old, new). Applied to the design's logic class source.
LOGIC_PATCHES = [
    ("Main", "var todayDate = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });",
     "var todayDate = this.state.__now ? new Date(this.state.__now).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : '';"),
    ("Consult", "var base = new Date(); base.setHours(12, 0, 0, 0);",
     "var base = new Date(this.state.__now || 0); base.setHours(12, 0, 0, 0);"),
    ("Consult", "for (var i = 7; i <= 14; i++) {", "for (var i = 7; i <= 14 && this.state.__now; i++) {"),
    ("NumCheckout", "return {\n      backTo: meta.back,", "return {\n      __pkgId: c.id,\n      backTo: meta.back,"),
]

# Readability fixes on top of the design: (page or None for all, old, new) applied to the generated JSX.
OUTPUT_PATCHES = [
    (None, 'color: "#8E86A3"', 'color: "#736B8A"'),
    ("ConsultLanding", 'color: "#FFFFFF", textShadow: "0 1px 2px rgba(90,60,10,0.35)"', 'color: "#2E003E"'),
    ("ConsultLanding", 'style={{color: "#FFFFFF", opacity: "0.6", fontWeight: "400"}}', 'style={{color: "#2E003E", opacity: "0.45", fontWeight: "400"}}'),
]

# Page -> componentDidMount body.
MOUNT = {
    "Main": "var q = readUrlState(['tool']); var next = { __now: Date.now() }; if (['kundli', 'kp', 'name', 'mobile'].indexOf(q.tool) >= 0) next.tool = q.tool; this.setState(next);",
    "Consult": "this.setState({ __now: Date.now() });",
    "NumCheckout": "var q = readUrlState(['kind', 'pkg']); if (q.kind || q.pkg) this.setState(q);",
    "MilanCheckout": "var q = readUrlState(['pkg']); if (q.pkg === 'call' || q.pkg === 'report') this.setState(q);",
}
