import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PolicySection {
  h: string;
  ps: Array<Array<{ t: string; chip: boolean; plain: boolean }>>;
  items: Array<Array<{ t: string; chip: boolean; plain: boolean }>>;
  hasItems: boolean;
}

interface Policy {
  eyebrow: string;
  updated: string;
  id: string;
  title: string;
  short: string;
  intro: string;
  sections: PolicySection[];
}

const POLICIES: Policy[] = [
  {
    eyebrow: "Policies", updated: "Last updated 24 October 2026", id: "privacy", title: "Privacy policy", short: "Privacy",
    intro: "Your birth details are personal. This policy explains what we collect, why we collect it, and how we keep it safe. It follows the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000.",
    sections: [
      { h: "Who we are", ps: [[{t:'Ahllya Mystic ("we", "us") is run by Ahalya Sangeeta and Maneswita, a mother and daughter based in Lucknow, Uttar Pradesh, offering astrology, numerology and Vastu services.',chip:false,plain:true}],[{t:"For any privacy question, WhatsApp +91 91292 37566 or email ahllyamystic@gmail.com.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "What you share with us", ps: [[{t:"We only ask for what we need to prepare your reading or deliver your order:",chip:false,plain:true}]], items: [[{t:"Your name, gender, and date, time and place of birth",chip:false,plain:true}],[{t:"Details of other people you order for, such as a partner, child or business owner",chip:false,plain:true}],[{t:"Your email address and WhatsApp number",chip:false,plain:true}],[{t:"Your questions, notes and anything you tell us on a call",chip:false,plain:true}],[{t:"A delivery address, if you buy a physical product from us in future",chip:false,plain:true}]], hasItems: true },
      { h: "What we collect automatically", ps: [[{t:"When you visit our website, we collect basic technical information such as your browser and device type, approximate location, the pages you view and how you arrived. This helps us keep the site working and improve it.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Cookies, analytics and ads", ps: [[{t:"We use cookies and similar tools, including analytics and advertising tools such as Google Analytics and the Meta pixel, to understand how our site is used and to measure our ads on platforms like Facebook and Instagram. You can block or delete cookies in your browser settings.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Payments", ps: [[{t:"Payments are processed securely by Razorpay. We never see or store your card, UPI or bank details. Razorpay's own privacy policy applies to payment data.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "How we use your data", ps: [[{t:"We use your details only to:",chip:false,plain:true}]], items: [[{t:"Prepare your report, consultation, course or order",chip:false,plain:true}],[{t:"Call you to confirm your name and birth details before we begin",chip:false,plain:true}],[{t:"Send your report and updates on email and WhatsApp",chip:false,plain:true}],[{t:"Answer your questions and provide support",chip:false,plain:true}],[{t:"Improve our website, services and ads",chip:false,plain:true}],[{t:"Send offers, horoscopes or launch news, only if you agree",chip:false,plain:true}]], hasItems: true },
      { h: "Messages from us", ps: [[{t:"By placing an order, you agree that we may call you or message you on WhatsApp, SMS or email about that order. Offers and updates are sent only if you choose to receive them, and you can stop them at any time by replying STOP or telling us.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Who we share it with", ps: [[{t:"We never sell your data. We share it only with the services we need to run our work, such as payment processing, email and WhatsApp messaging, video calls, analytics and website hosting, and only as much as each one needs. Some of these providers may store data outside India. We may also disclose data if the law requires it.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Details of other people", ps: [[{t:"When you share the birth details of someone else, such as a partner or a child, please make sure they, or their parent or guardian, are happy for you to do so. For a child under 18, the order must be placed by a parent or guardian.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Recordings and testimonials", ps: [], items: [[{t:"We do not record your consultation unless we ask you first and you agree.",chip:false,plain:true}],[{t:"Live masterclass and course sessions may be recorded for participants. We will always tell you before a session is recorded.",chip:false,plain:true}],[{t:"We share your feedback or testimonial on our website or social media only with your permission, using just your first name and city.",chip:false,plain:true}]], hasItems: true },
      { h: "How we keep it safe", ps: [[{t:"Our website uses encryption (HTTPS), and only our own team can see your details. No system is perfectly secure, but we take care to protect your data.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "How long we keep it", ps: [[{t:"We keep your details for as long as you are our client, so we can refer back to your chart in future readings. You can ask us to delete them at any time, unless we must keep a record by law, such as for tax.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Your rights", ps: [[{t:"You can ask to see, correct or delete your personal data, withdraw your consent, or nominate someone to act for you, by writing to ahllyamystic@gmail.com. We reply within 7 working days.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Grievance officer", ps: [[{t:"If you have a complaint about how your data is handled, contact our grievance officer, Ahalya Sangeeta (Founder), at ahllyamystic@gmail.com or on WhatsApp at +91 91292 37566. We respond to complaints within 30 days.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Changes to this policy", ps: [[{t:"We may update this policy from time to time. The latest version is always on this page, with the date it was last updated.",chip:false,plain:true}]], items: [], hasItems: false },
    ],
  },
  {
    eyebrow: "Policies", updated: "Last updated 24 October 2026", id: "terms", title: "Terms and conditions", short: "Terms",
    intro: "By using ahllyamystic.com or buying any of our services or products, you agree to these terms. Please read them carefully.",
    sections: [
      { h: "Our services", ps: [[{t:"We offer astrology, numerology and Vastu reports, consultations, courses, masterclasses and free tools, and may offer physical products such as gemstones and rudraksha in future. Paid reports and consultations are prepared personally by Ahalya Sangeeta and Maneswita. We use software for calculations, such as birth charts and dasha periods, but every paid reading is interpreted by us. Free tools, such as the free Kundli and daily horoscope, are calculated automatically.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Guidance, not a guarantee", ps: [[{t:"Astrology and numerology are interpretive. They offer guidance for reflection and decision-making, and results differ from person to person. We do not guarantee any particular outcome. Our readings are not a substitute for medical, legal, financial or psychological advice. For those, please consult a qualified professional.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Who can use our services", ps: [[{t:"You must be 18 or older and able to enter a contract under Indian law. Orders for a child must be placed by a parent or guardian. If you use our services from outside India, you are responsible for following your local laws.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Your details", ps: [[{t:"Your reading depends on the details you give us. Please check your name, date, time and place of birth before paying. We call you within 24 hours of payment to confirm them. We are not responsible for a reading based on incorrect details you provided.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Prices and payment", ps: [], items: [[{t:"All prices are in Indian rupees and include applicable taxes unless stated. International cards are charged in rupees, and your bank may add a conversion fee.",chip:false,plain:true}],[{t:"Payments are made online through Razorpay. Please use only a card or account you own or are allowed to use.",chip:false,plain:true}],[{t:"Prices, offers and services may change at any time. The price shown when you pay is the price you get.",chip:false,plain:true}],[{t:"If a price is shown wrongly by mistake, we may cancel the order and refund you in full.",chip:false,plain:true}]], hasItems: true },
      { h: "Consultations", ps: [[{t:"We fix your call time with you on WhatsApp. Please join on time and be ready with your questions. Rescheduling and missed calls are covered in our refund and cancellation policy.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Courses, masterclasses and recordings", ps: [], items: [[{t:"Course access is for you alone. Please do not share your login or course material.",chip:false,plain:true}],[{t:"How long you can access a course, and its format, will be stated when you enrol.",chip:false,plain:true}],[{t:"You may not record, copy or share our consultations, live sessions or course videos without our written permission.",chip:false,plain:true}]], hasItems: true },
      { h: "Physical products", ps: [[{t:"If we sell physical products in future, natural items such as gemstones and rudraksha vary, so the item you receive may look slightly different from its photos. Delivery dates are estimates.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Our content", ps: [[{t:"All content on this website, including text, reports, designs, course material and our name and logo, belongs to Ahllya Mystic. You may use it for your own personal, non-commercial purposes only. Copying, reselling, republishing or scraping it is not allowed without our written permission.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Fair use", ps: [[{t:"Please do not give false information, misuse our free tools, send spam, or treat our team with disrespect. We may refuse or stop service to anyone who misuses our website or services.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Disputes and governing law", ps: [[{t:"If something goes wrong, please contact us first. Most issues can be sorted out quickly. These terms are governed by the laws of India, and any dispute that cannot be settled between us will be handled by the courts of Lucknow, Uttar Pradesh.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Changes", ps: [[{t:"We may update these terms from time to time. The latest version is always on this page. By continuing to use our website or services after a change, you accept the updated terms.",chip:false,plain:true}]], items: [], hasItems: false },
    ],
  },
  {
    eyebrow: "Policies", updated: "Last updated 24 October 2026", id: "refunds", title: "Refund and cancellation policy", short: "Refunds",
    intro: "Every report and consultation is prepared by hand for one person, and we begin work as soon as you pay. For this reason, payments are not refundable, except when there is a delay from our side. This policy explains how it works.",
    sections: [
      { h: "Confirmation call", ps: [[{t:"Once your payment is successful, a member of our team will call you within 24 hours to confirm the name and the date, time and place of birth you provided. This makes sure your report is analysed correctly. Please keep your phone handy.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "No refunds after payment", ps: [[{t:"Once a payment is made, it cannot be cancelled or refunded. This applies to reports, consultations, bundles, the masterclass and anything bought on offer or at a discount. Please check your details and your choice of service before you pay.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "When we do refund", ps: [], items: [[{t:"If we do not deliver your report within 10 working days of payment, not counting Sundays and public holidays, you can ask for a full refund.",chip:false,plain:true}],[{t:"If we have to cancel your consultation and cannot offer a time that suits you, you get a full refund.",chip:false,plain:true}],[{t:"If we cancel or move the masterclass, you can join the next batch or get a full refund.",chip:false,plain:true}],[{t:"If you are charged twice for the same order by a payment error, the extra amount is refunded in full.",chip:false,plain:true}]], hasItems: true },
      { h: "Wrong birth details", ps: [], items: [[{t:"If you entered a detail incorrectly, tell us within 24 to 36 hours of your payment and we will correct it free of charge. After that, a corrected report is a new order.",chip:false,plain:true}],[{t:"If we made a mistake in your report, we will correct it free of charge.",chip:false,plain:true}]], hasItems: true },
      { h: "Consultations", ps: [], items: [[{t:"You can reschedule your consultation once, free of charge, if you tell us at least 24 hours before your call.",chip:false,plain:true}],[{t:"Please join on time. If you have not joined within 10 minutes of the start time, the call counts as missed.",chip:false,plain:true}],[{t:"Consultations are not refundable if you cancel, or if you miss your call.",chip:false,plain:true}],[{t:"In a genuine emergency, such as a medical emergency, we may offer a new time at our discretion.",chip:false,plain:true}]], hasItems: true },
      { h: "Courses", ps: [[{t:"Course fees are not refundable once you have been given access. If we cancel or postpone a live course, you can move to the next batch or get a full refund. Any course-specific terms will be shared when enrolment opens.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "How refunds are paid", ps: [[{t:"Approved refunds are paid only to your original payment method, within 5 to 7 working days. Your bank may take a little longer to show it. If you have not received it after that, please check with your bank first, then contact us.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "How to reach us", ps: [[{t:"WhatsApp +91 91292 37566 or email ahllyamystic@gmail.com with your name and order details.",chip:false,plain:true}]], items: [], hasItems: false },
    ],
  },
  {
    eyebrow: "Policies", updated: "Last updated 24 October 2026", id: "delivery", title: "Delivery policy", short: "Delivery",
    intro: "Our reports, consultations and courses are digital. If we sell physical products in future, this policy also covers how they are shipped.",
    sections: [
      { h: "Confirmation call", ps: [[{t:"After a successful payment, a member of our team calls you within 24 hours to confirm the name and the date, time and place of birth you provided, so your report is analysed correctly.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Reports", ps: [[{t:"Your report is sent as a PDF to your email and WhatsApp within 5 to 7 working days of payment, not counting Sundays and public holidays. If we need any detail from you, the timeline starts once we have it.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Consultations", ps: [[{t:"We fix your call time with you on WhatsApp. Calls are usually held 7 to 10 days after payment, between 11 am and 7 pm, on audio or video, in Hindi or English.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Masterclass and courses", ps: [[{t:"Joining details for live sessions are sent on WhatsApp before each session. Course access details are shared when you enrol.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Free tools", ps: [[{t:"Your free Kundli and daily horoscope appear on screen straight away. The free Kundli PDF downloads instantly.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Delays", ps: [[{t:"If your order will take longer than expected, we will tell you on WhatsApp. If a report does not arrive within 10 working days, see our refund policy.",chip:false,plain:true}]], items: [], hasItems: false },
      { h: "Didn't receive it?", ps: [[{t:"Please check your spam folder first, then WhatsApp us at +91 91292 37566 and we will resend it.",chip:false,plain:true}]], items: [], hasItems: false },
    ],
  },
];

const POLICY_MAP: Record<string, string> = {
  privacy: "privacy", terms: "terms", refunds: "refunds", delivery: "delivery",
};

export async function generateMetadata({ params }: { params: Promise<{ policy: string }> }): Promise<Metadata> {
  const { policy } = await params;
  const pol = POLICIES.find(p => p.id === POLICY_MAP[policy]);
  if (!pol) return {};
  return { title: pol.title };
}

export async function generateStaticParams() {
  return Object.keys(POLICY_MAP).map(policy => ({ policy }));
}

function renderInline(items: Array<{ t: string; chip: boolean; plain: boolean }>) {
  return items.map((x, i) =>
    x.chip
      ? <span key={i} className="inline-block my-0.5 px-2.5 py-0 border-[1.5px] border-dashed border-[#C9B3D6] rounded-lg bg-[#F8F1FB] text-am-purple text-sm font-semibold">{x.t}</span>
      : <span key={i}>{x.t}</span>
  );
}

export default async function PolicyPage({ params }: { params: Promise<{ policy: string }> }) {
  const { policy } = await params;
  const pol = POLICIES.find(p => p.id === POLICY_MAP[policy]);
  if (!pol) notFound();

  return (
    <>
      <Nav />
      <div style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(108,21,148,0.08), rgba(108,21,148,0) 50%), #FBF7F0", borderBottom: "1px solid #E8DFD0" }}>
        <div className="max-w-[900px] mx-auto px-6 pt-6 pb-10">
          <nav aria-label="Breadcrumb" className="text-sm text-am-ink-soft mb-7">
            <a href="/" className="text-am-ink-soft no-underline">Home</a>
            <span aria-hidden="true" className="mx-2">/</span>
            <span className="text-am-ink font-semibold">{pol.title}</span>
          </nav>
          <p className="m-0 mb-2.5 text-[13px] tracking-[0.14em] uppercase text-am-maroon font-bold">{pol.eyebrow}</p>
          <h1 className="m-0 mb-2.5 font-serif-display font-normal text-[clamp(34px,4vw,50px)] leading-[1.1]">{pol.title}</h1>
          <p className="m-0 text-[15px] text-am-ink-soft">{pol.updated}</p>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 pt-10 pb-22">
        <article className="bg-white border border-am-cream-border rounded-[22px] p-[clamp(24px,4vw,48px)] outline outline-[#EFE6D8] outline-offset-[-9px]">
          <p className="m-0 mb-8 text-[18px] leading-[1.7] text-[#3A3350]">{pol.intro}</p>
          {pol.sections.map((s, i) => (
            <section key={i} className="py-5 border-t border-[#EFE6D8]">
              <h2 className="m-0 mb-2.5 font-serif-display font-normal text-[24px] leading-[1.25]">{s.h}</h2>
              {s.ps.map((p, j) => (
                <p key={j} className="m-0 mb-2.5 text-base leading-[1.75] text-[#3A3350]">{renderInline(p)}</p>
              ))}
              {s.hasItems && (
                <ul className="mt-1 p-0 list-none grid gap-2.5">
                  {s.items.map((item, k) => (
                    <li key={k} className="flex gap-3 text-base leading-[1.65] text-[#3A3350]">
                      <span aria-hidden="true" className="flex-none w-[7px] h-[7px] mt-2.5 rounded-full bg-am-purple" />
                      <span>{renderInline(item)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </div>
      <Footer />
    </>
  );
}
