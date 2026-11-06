// Birth place search. Ported from the Janam Kundali Artifact: an offline city list and gazetteer,
// ranked by exact name, prefix, alias, substring, region and finally spelling-tolerant matches.
// An online lookup (OpenStreetMap Photon, then Open-Meteo) tops up sparse results.
import tzlookup from "tz-lookup";
import { CITY_DATA } from "./data/cities";
import { GAZ_IN } from "./data/gazetteer-in";
import { GAZ_W } from "./data/gazetteer-world";

export interface Place { n: string; r: string; la: number; lo: number; tz: string; online?: boolean }

interface Entry extends Place { f: string; fr: string; g: boolean; v: boolean }

/* Fold case, strip accents and punctuation so "Sri Ganganagar" matches "sriganganagar". */
export const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");

/* Old and colloquial names people actually type. alias -> canonical city name. */
const ALIAS_RAW = `bombay:Mumbai|calcutta:Kolkata|madras:Chennai|bangalore:Bengaluru|banglore:Bengaluru
mysore:Mysuru|poona:Pune|baroda:Vadodara|trivandrum:Thiruvananthapuram|cochin:Kochi|ernakulam:Kochi
calicut:Kozhikode|trichur:Thrissur|quilon:Kollam|cannanore:Kannur|palghat:Palakkad|alleppey:Alappuzha
trichy:Tiruchirappalli|tuticorin:Thoothukudi|tanjore:Thanjavur|ooty:Udhagamandalam
ootacamund:Udhagamandalam|pondicherry:Puducherry|pondy:Puducherry|simla:Shimla|gurgaon:Gurugram
allahabad:Prayagraj|banaras:Varanasi|benares:Varanasi|kashi:Varanasi|faizabad:Ayodhya|cawnpore:Kanpur
mangalore:Mangaluru|hubli:Hubballi|belgaum:Belagavi|gulbarga:Kalaburagi|bellary:Ballari
bijapur:Vijayapura|shimoga:Shivamogga|tumkur:Tumakuru|chikmagalur:Chikkamagaluru
chickmagalur:Chikkamagaluru|bhatinda:Bathinda|ropar:Rupnagar|sas nagar:Mohali
sahibzada ajit singh nagar:Mohali|mohali punjab:Mohali|vizag:Visakhapatnam|waltair:Visakhapatnam
vizianagram:Vizianagaram|berhampur:Brahmapur|bhubaneshwar:Bhubaneswar|nasik:Nashik
aurangabad:Chhatrapati Sambhajinagar|sambhajinagar:Chhatrapati Sambhajinagar|osmanabad:Dharashiv
panjim:Panaji|vasco:Vasco da Gama|jubbulpore:Jabalpur|hoshangabad:Narmadapuram|nagercoil:Nagercoil
muktsar:Sri Muktsar Sahib|nawanshahr:Shaheed Bhagat Singh Nagar|firozpur:Ferozepur
ferozpur:Ferozepur|gandhi nagar:Gandhinagar|new bombay:Navi Mumbai|bandra:Mumbai|andheri:Mumbai
borivali:Mumbai|dadar:Mumbai|salt lake:Kolkata|dumdum:Kolkata|nizamuddin:Delhi|dwarka delhi:Delhi
rohini:Delhi|saket:Delhi|karol bagh:Delhi|gurgaon haryana:Gurugram|bhabhua:Bhabua
nalanda:Bihar Sharif|rohtas:Sasaram|vaishali:Hajipur|kaimur:Bhabua|orissa:Bhubaneswar
puduchery:Puducherry|thiruvanantapuram:Thiruvananthapuram|vishakhapatnam:Visakhapatnam
visakapatnam:Visakhapatnam|jaipur rajasthan:Jaipur|udupi karnataka:Udupi|coorg:Madikeri
mercara:Madikeri|nilgiris:Udhagamandalam|kotagiri:Coonoor|bhiwadi:Alwar|manesar:Gurugram
sonepat:Sonipat|sahibabad:Ghaziabad|kanpur nagar:Kanpur|gautam buddha nagar:Noida
bhagalpur bihar:Bhagalpur|siliguri wb:Siliguri|new jalpaiguri:Siliguri|burdwan:Bardhaman
barddhaman:Bardhaman|midnapur:Midnapore|murshidabad:Berhampore|santiniketan:Bolpur
shantiniketan:Bolpur|jamshedpur tatanagar:Jamshedpur|tatanagar:Jamshedpur|steel city:Jamshedpur
wayanad:Kalpetta|idukki:Painavu|kodagu:Madikeri|nilgiri:Udhagamandalam|dakshina kannada:Mangaluru
tirupathi:Tirupati|thirupathi:Tirupati|hardwar:Haridwar|dehra dun:Dehradun|jullundur:Jalandhar
umballa:Ambala|gaziabad:Ghaziabad|mahaboobnagar:Mahbubnagar|ranga reddy:Hyderabad
srinagar kashmir:Srinagar|srinagar uttarakhand:Srinagar Garhwal|kanpur dehat:Kanpur
north 24 parganas:Barasat|south 24 parganas:Diamond Harbour|hooghly:Chandannagar
nadia:Krishnanagar|birbhum:Suri|paschim medinipur:Midnapore|purba medinipur:Tamluk
east godavari:Kakinada|west godavari:Eluru|krishna:Machilipatnam|guntur district:Guntur
chittoor district:Chittoor|ysr kadapa:Kadapa|sri potti sriramulu:Nellore
thane district:Thane|raigad:Alibag|palghar:Vasai|nashik district:Nashik`;

const MAJOR = new Set(["Mumbai", "Delhi", "New Delhi", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune",
  "Ahmedabad", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Bhopal", "Patna", "Ludhiana",
  "Chandigarh", "Mohali", "Amritsar", "Varanasi", "Agra", "Nashik", "Vadodara", "Rajkot", "Coimbatore",
  "Kochi", "Thiruvananthapuram", "Visakhapatnam", "Vijayawada", "Guwahati", "Bhubaneswar", "Ranchi",
  "Raipur", "Dehradun", "Shimla", "Srinagar", "Jammu", "Gurugram", "Noida", "Thane", "Madurai", "Mysuru"]);

class Gaz implements Entry {
  f: string; fr: string; g = true; _tz = "";
  constructor(public n: string, public r: string, public la: number, public lo: number, private cc: string, public v: boolean) {
    this.f = fold(n);
    this.fr = fold(r);
  }
  get tz() { return this._tz || (this._tz = this.cc === "IN" ? "Asia/Kolkata" : tzlookup(this.la, this.lo)); }
}

const CITIES: Entry[] = CITY_DATA.split("\n").map((l) => {
  const [n, r, la, lo, tz] = l.split("|");
  return { n, r, la: +la, lo: +lo, tz, f: fold(n), fr: fold(r), g: false, v: false };
});
const ALIASES = ALIAS_RAW.split(/[\n|]/).map((x) => x.trim()).filter(Boolean).map((x) => {
  const i = x.indexOf(":");
  const a = x.slice(0, i).trim();
  const c = x.slice(i + 1).trim();
  return { a, f: fold(a), city: CITIES.find((e) => e.n === c) };
});

let GAZ: Entry[] | null = null;
function buildGaz(): Entry[] {
  if (GAZ) return GAZ;
  const out: Entry[] = [];
  const byName = new Map<string, Entry[]>();
  CITIES.forEach((c) => { const l = byName.get(c.f); if (l) l.push(c); else byName.set(c.f, [c]); });
  const dupe = (f: string, la: number, lo: number) => (byName.get(f) || []).some((c) => Math.abs(c.la - la) < 0.3 && Math.abs(c.lo - lo) < 0.3);
  const load = (txt: string, india: boolean) => {
    let st = "", di = "";
    for (const line of txt.split("\n")) {
      if (!line) continue;
      const h = line[0];
      if (h === "@") { st = line.slice(1); di = ""; continue; }
      if (h === "#") { di = line.slice(1); continue; }
      const a = line.split("|");
      const la = +a[1], lo = +a[2];
      const g = new Gaz(a[0], india ? [di, st, "India"].filter(Boolean).join(", ") : st, la, lo, india ? "IN" : "", india && !!di);
      if (!india || !di) { if (dupe(g.f, la, lo)) continue; }
      out.push(g);
    }
  };
  load(GAZ_IN, true);
  load(GAZ_W, false);
  return (GAZ = out);
}

/* Levenshtein, bailing out once the distance exceeds max. */
function editDistance(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let best = i;
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (cur[j] < best) best = cur[j];
    }
    if (best > max) return max + 1;
    prev = cur;
  }
  return prev[b.length];
}

/* Ranked place search. Tiers: exact name, name prefix, alias, name substring, region substring, then a
   spelling-tolerant pass so typos still resolve. "Village, district" narrows by the part after the comma. */
export function searchPlaces(query: string, limit = 10): Place[] {
  const parts = String(query).split(",");
  const q = fold(parts[0]);
  const rf = fold(parts.slice(1).join(""));
  if (q.length < 2) return [];
  const scored = new Map<Entry, number>();
  const add = (c: Entry | undefined, tier: number) => {
    if (!c) return;
    if (rf && !c.fr.includes(rf)) return;
    const bonus = MAJOR.has(c.n) ? -0.5 : 0;
    const s = tier + bonus + c.n.length / 1000 + (c.g ? 0.3 + (c.v ? 0.3 : 0) : 0);
    const old = scored.get(c);
    if (old === undefined || old > s) scored.set(c, s);
  };
  const pools = [CITIES, buildGaz()];
  for (const pool of pools) for (const c of pool) {
    if (c.f === q) add(c, 0);
    else if (c.f.startsWith(q)) add(c, 1);
  }
  if (!rf) for (const x of ALIASES) {
    if (x.f === q) add(x.city, 0.5);
    else if (x.f.startsWith(q)) add(x.city, 1.5);
  }
  if (scored.size < limit) for (const pool of pools) for (const c of pool) if (c.f.includes(q)) add(c, 2);
  if (scored.size < limit && !rf) for (const c of CITIES) if (c.fr.includes(q)) add(c, 3);
  if (!scored.size && q.length >= 4) {
    const max = q.length <= 5 ? 1 : 2;
    for (const pool of pools) for (const c of pool) {
      if (Math.abs(c.f.length - q.length) > max) continue;
      const d = editDistance(q, c.f, max);
      if (d <= max) add(c, 4 + d);
    }
  }
  return [...scored.entries()].sort((a, b) => a[1] - b[1]).slice(0, limit)
    .map(([c]) => ({ n: c.n, r: c.r, la: c.la, lo: c.lo, tz: c.tz }));
}

/* ---- online lookup: OpenStreetMap Photon, with Open-Meteo as a fallback ---- */
async function getJSON<T>(url: string, ms = 5000): Promise<T> {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), ms);
  try {
    const r = await fetch(url, { signal: ctl.signal, cache: "no-store" });
    if (!r.ok) throw new Error("http " + r.status);
    return (await r.json()) as T;
  } finally {
    clearTimeout(t);
  }
}
const joinParts = (a: (string | undefined)[]) => a.filter((x, i): x is string => !!x && a.indexOf(x) === i).join(", ");

/* Time zone from coordinates, fully offline. Returns "" if the point has no zone. */
export function zoneAt(la: number, lo: number): string {
  try { return tzlookup(la, lo); } catch { return ""; }
}

interface PhotonResponse { features?: { properties?: { name?: string; county?: string; district?: string; state?: string; country?: string; countrycode?: string; osm_key?: string; osm_value?: string }; geometry?: { coordinates?: number[] } }[] }
interface OpenMeteoResponse { results?: { name?: string; admin1?: string; admin2?: string; country?: string; country_code?: string; latitude: number; longitude: number; timezone?: string }[] }

export async function onlineSearch(q: string): Promise<Place[] | null> {
  try {
    const j = await getJSON<PhotonResponse>("https://photon.komoot.io/api/?lang=en&limit=10&lat=22.5&lon=79&q=" + encodeURIComponent(q));
    type Hit = { place: Place; key: string };
    const out = (j.features || []).map((f): Hit | null => {
      const p = f.properties || {};
      const g = f.geometry && f.geometry.coordinates;
      if (!g || !p.name) return null;
      return {
        place: { n: joinParts([p.name, p.county || p.district, p.state, p.country]), r: p.osm_value ? String(p.osm_value).replace(/_/g, " ") : "place", la: +g[1], lo: +g[0], tz: p.countrycode === "IN" ? "Asia/Kolkata" : zoneAt(+g[1], +g[0]), online: true },
        key: p.osm_key ?? "",
      };
    }).filter((x): x is Hit => !!x && !!x.place.tz);
    const places = out.filter((x) => x.key === "place" || x.key === "boundary");
    const pick = places.length ? places : out;
    if (pick.length) return pick.map((x) => x.place);
  } catch { /* fall through to the second provider */ }
  try {
    const j = await getJSON<OpenMeteoResponse>("https://geocoding-api.open-meteo.com/v1/search?count=10&language=en&format=json&name=" + encodeURIComponent(q));
    return (j.results || []).map((r) => ({
      n: joinParts([r.name, r.admin2, r.admin1, r.country]), r: "place", la: +r.latitude, lo: +r.longitude,
      tz: r.timezone || (r.country_code === "IN" ? "Asia/Kolkata" : zoneAt(+r.latitude, +r.longitude)), online: true,
    })).filter((p) => p.tz);
  } catch { return null; }
}

/* Offline results first, topped up online when there are only a few. */
export async function findPlaces(q: string): Promise<Place[]> {
  const offline = searchPlaces(q, 10);
  const query = q.trim();
  if (query.length < 3 || offline.length >= 6) return offline;
  const online = await onlineSearch(query);
  if (!online) return offline;
  const seen = new Set(offline.map((c) => fold(c.n)));
  const extra = online.filter((c) => { const k = fold(c.n); if (seen.has(k)) return false; seen.add(k); return true; });
  return offline.concat(extra).slice(0, 14);
}
