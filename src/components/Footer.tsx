import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-am-lavender text-[15px]"
      style={{ background: "linear-gradient(180deg, #4A0A66 0%, #2E003E 70%)" }}
    >
      <div className="am-stars2 opacity-60" aria-hidden="true" />
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8 relative">
        <div className="grid gap-10 mb-12" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))" }}>
          <div>
            <Image
              src="/images/f0424906cf2ed307d839fd952ac77981.png"
              alt="Ahllya Mystic"
              width={150}
              height={60}
              className="h-[60px] w-auto block mb-4"
            />
            <p className="m-0">Astrology, numerology, Vastu and manifestation, read with care.</p>
          </div>
          <div className="grid gap-2.5 content-start">
            <p className="m-0 mb-1 font-bold text-white">Explore</p>
            <a href="/consult" className="text-am-lavender no-underline">Consultations</a>
            <a href="/#reports" className="text-am-lavender no-underline">Reports</a>
            <a href="/courses" className="text-am-lavender no-underline">Courses</a>
            <a href="/kundli" className="text-am-lavender no-underline">Free Kundli</a>
          </div>
          <div className="grid gap-2.5 content-start">
            <p className="m-0 mb-1 font-bold text-white">Contact</p>
            <a href="https://wa.me/919129237566" className="text-am-lavender no-underline">+91 91292 37566 (WhatsApp)</a>
            <a href="mailto:ahllyamystic@gmail.com" className="text-am-lavender no-underline">ahllyamystic@gmail.com</a>
            <span>Mon to Sun, 11am to 7pm</span>
          </div>
          <div className="grid gap-2.5 content-start">
            <p className="m-0 mb-1 font-bold text-white">Follow</p>
            <a href="https://www.instagram.com/ahllyamystic" className="text-am-lavender no-underline">Instagram</a>
            <a href="https://www.youtube.com/@AhllyaMystic" className="text-am-lavender no-underline">YouTube</a>
            <a href="https://www.facebook.com/ahllyamystic" className="text-am-lavender no-underline">Facebook</a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-white/[0.14] pt-6 text-sm">
          <span>© 2026 Ahllya Mystic. All rights reserved.</span>
          <span className="flex flex-wrap gap-5">
            <a href="/policies/privacy" className="text-am-lavender">Privacy policy</a>
            <a href="/policies/refunds" className="text-am-lavender">Refund policy</a>
            <a href="/policies/delivery" className="text-am-lavender">Delivery policy</a>
            <a href="/policies/terms" className="text-am-lavender">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
