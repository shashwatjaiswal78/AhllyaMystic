"use client";
/* eslint-disable */
// Generated from the design file Contact.dc.html by scripts/design/dc2jsx.py. Edit the design, then regenerate.
import React from "react";
import { sx, hole } from "./sx";
import { PayButton, FormButton, reportHref, numCheckoutHref, consultProduct, readUrlState, maskDate, maskTime, maskTimeHM, maskPart } from "./wire";

var POLICIES = [{"eyebrow": "Policies", "updated": "Last updated 24 October 2026", "isContact": false, "notContact": true, "id": "privacy", "title": "Privacy policy", "short": "Privacy", "intro": "Your birth details are personal. This policy explains what we collect, why we collect it, and how we keep it safe. It follows the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000.", "sections": [{"h": "Who we are", "ps": [[{"t": "Ahllya Mystic (“we”, “us”) is run by Ahalya Sangeeta and Maneswita, a mother and daughter based in Lucknow, Uttar Pradesh, offering astrology, numerology and Vastu services.", "chip": false, "plain": true}], [{"t": "For any privacy question, WhatsApp +91 91292 37566 or email ahllyamystic@gmail.com.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "What you share with us", "ps": [[{"t": "We only ask for what we need to prepare your reading or deliver your order:", "chip": false, "plain": true}]], "items": [[{"t": "Your name, gender, and date, time and place of birth", "chip": false, "plain": true}], [{"t": "Details of other people you order for, such as a partner, child or business owner", "chip": false, "plain": true}], [{"t": "Your email address and WhatsApp number", "chip": false, "plain": true}], [{"t": "Your questions, notes and anything you tell us on a call", "chip": false, "plain": true}], [{"t": "A delivery address, if you buy a physical product from us in future", "chip": false, "plain": true}]], "hasItems": true}, {"h": "What we collect automatically", "ps": [[{"t": "When you visit our website, we collect basic technical information such as your browser and device type, approximate location, the pages you view and how you arrived. This helps us keep the site working and improve it.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Cookies, analytics and ads", "ps": [[{"t": "We use cookies and similar tools, including analytics and advertising tools such as Google Analytics and the Meta pixel, to understand how our site is used and to measure our ads on platforms like Facebook and Instagram. You can block or delete cookies in your browser settings.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Payments", "ps": [[{"t": "Payments are processed securely by Razorpay. We never see or store your card, UPI or bank details. Razorpay’s own privacy policy applies to payment data.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "How we use your data", "ps": [[{"t": "We use your details only to:", "chip": false, "plain": true}]], "items": [[{"t": "Prepare your report, consultation, course or order", "chip": false, "plain": true}], [{"t": "Call you to confirm your name and birth details before we begin", "chip": false, "plain": true}], [{"t": "Send your report and updates on email and WhatsApp", "chip": false, "plain": true}], [{"t": "Answer your questions and provide support", "chip": false, "plain": true}], [{"t": "Improve our website, services and ads", "chip": false, "plain": true}], [{"t": "Send offers, horoscopes or launch news, only if you agree", "chip": false, "plain": true}]], "hasItems": true}, {"h": "Messages from us", "ps": [[{"t": "By placing an order, you agree that we may call you or message you on WhatsApp, SMS or email about that order. Offers and updates are sent only if you choose to receive them, and you can stop them at any time by replying STOP or telling us.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Who we share it with", "ps": [[{"t": "We never sell your data. We share it only with the services we need to run our work, such as payment processing, email and WhatsApp messaging, video calls, analytics and website hosting, and only as much as each one needs. Some of these providers may store data outside India. We may also disclose data if the law requires it.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Details of other people", "ps": [[{"t": "When you share the birth details of someone else, such as a partner or a child, please make sure they, or their parent or guardian, are happy for you to do so. For a child under 18, the order must be placed by a parent or guardian.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Recordings and testimonials", "ps": [], "items": [[{"t": "We do not record your consultation unless we ask you first and you agree.", "chip": false, "plain": true}], [{"t": "Live masterclass and course sessions may be recorded for participants. We will always tell you before a session is recorded.", "chip": false, "plain": true}], [{"t": "We share your feedback or testimonial on our website or social media only with your permission, using just your first name and city.", "chip": false, "plain": true}]], "hasItems": true}, {"h": "How we keep it safe", "ps": [[{"t": "Our website uses encryption (HTTPS), and only our own team can see your details. No system is perfectly secure, but we take care to protect your data.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "How long we keep it", "ps": [[{"t": "We keep your details for as long as you are our client, so we can refer back to your chart in future readings. You can ask us to delete them at any time, unless we must keep a record by law, such as for tax.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Your rights", "ps": [[{"t": "You can ask to see, correct or delete your personal data, withdraw your consent, or nominate someone to act for you, by writing to ahllyamystic@gmail.com. We reply within 7 working days.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Grievance officer", "ps": [[{"t": "If you have a complaint about how your data is handled, contact our grievance officer, Ahalya Sangeeta (Founder), at ahllyamystic@gmail.com or on WhatsApp at +91 91292 37566. We respond to complaints within 30 days.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Changes to this policy", "ps": [[{"t": "We may update this policy from time to time. The latest version is always on this page, with the date it was last updated.", "chip": false, "plain": true}]], "items": [], "hasItems": false}], "todos": [], "hasTodos": false}, {"eyebrow": "Policies", "updated": "Last updated 24 October 2026", "isContact": false, "notContact": true, "id": "terms", "title": "Terms and conditions", "short": "Terms", "intro": "By using ahllyamystic.com or buying any of our services or products, you agree to these terms. Please read them carefully.", "sections": [{"h": "Our services", "ps": [[{"t": "We offer astrology, numerology and Vastu reports, consultations, courses, masterclasses and free tools, and may offer physical products such as gemstones and rudraksha in future. Paid reports and consultations are prepared personally by Ahalya Sangeeta and Maneswita. We use software for calculations, such as birth charts and dasha periods, but every paid reading is interpreted by us. Free tools, such as the free Kundli and daily horoscope, are calculated automatically.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Guidance, not a guarantee", "ps": [[{"t": "Astrology and numerology are interpretive. They offer guidance for reflection and decision-making, and results differ from person to person. We do not guarantee any particular outcome. Our readings are not a substitute for medical, legal, financial or psychological advice. For those, please consult a qualified professional.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Who can use our services", "ps": [[{"t": "You must be 18 or older and able to enter a contract under Indian law. Orders for a child must be placed by a parent or guardian. If you use our services from outside India, you are responsible for following your local laws.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Your details", "ps": [[{"t": "Your reading depends on the details you give us. Please check your name, date, time and place of birth before paying. We call you within 24 hours of payment to confirm them. We are not responsible for a reading based on incorrect details you provided.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Prices and payment", "ps": [], "items": [[{"t": "All prices are in Indian rupees and include applicable taxes unless stated. International cards are charged in rupees, and your bank may add a conversion fee.", "chip": false, "plain": true}], [{"t": "Payments are made online through Razorpay. Please use only a card or account you own or are allowed to use.", "chip": false, "plain": true}], [{"t": "Prices, offers and services may change at any time. The price shown when you pay is the price you get.", "chip": false, "plain": true}], [{"t": "If a price is shown wrongly by mistake, we may cancel the order and refund you in full.", "chip": false, "plain": true}]], "hasItems": true}, {"h": "Consultations", "ps": [[{"t": "We fix your call time with you on WhatsApp. Please join on time and be ready with your questions. Rescheduling and missed calls are covered in our refund and cancellation policy.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Courses, masterclasses and recordings", "ps": [], "items": [[{"t": "Course access is for you alone. Please do not share your login or course material.", "chip": false, "plain": true}], [{"t": "How long you can access a course, and its format, will be stated when you enrol.", "chip": false, "plain": true}], [{"t": "You may not record, copy or share our consultations, live sessions or course videos without our written permission.", "chip": false, "plain": true}]], "hasItems": true}, {"h": "Physical products", "ps": [[{"t": "If we sell physical products in future, natural items such as gemstones and rudraksha vary, so the item you receive may look slightly different from its photos. Delivery dates are estimates.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Our content", "ps": [[{"t": "All content on this website, including text, reports, designs, course material and our name and logo, belongs to Ahllya Mystic. You may use it for your own personal, non-commercial purposes only. Copying, reselling, republishing or scraping it is not allowed without our written permission.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Fair use", "ps": [[{"t": "Please do not give false information, misuse our free tools, send spam, or treat our team with disrespect. We may refuse or stop service to anyone who misuses our website or services.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Feedback", "ps": [[{"t": "If you send us feedback or a testimonial, we may use it to improve our work. We publish it only with your permission.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Other websites and services", "ps": [[{"t": "Our website may link to other sites, and we use services such as Razorpay, WhatsApp and video call apps. We are not responsible for their content or how they work.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Limit of liability", "ps": [[{"t": "Our website and services are provided as they are. To the extent the law allows, we are not liable for any indirect loss, and our total liability for any claim is limited to the amount you paid for the service in question.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Indemnity", "ps": [[{"t": "If you break these terms or the law, and this leads to a claim against us, you agree to cover our reasonable costs.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Disputes and governing law", "ps": [[{"t": "If something goes wrong, please contact us first. Most issues can be sorted out quickly. These terms are governed by the laws of India, and any dispute that cannot be settled between us will be handled by the courts of Lucknow, Uttar Pradesh.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Changes", "ps": [[{"t": "We may update these terms from time to time. The latest version is always on this page. By continuing to use our website or services after a change, you accept the updated terms.", "chip": false, "plain": true}]], "items": [], "hasItems": false}], "todos": [], "hasTodos": false}, {"eyebrow": "Policies", "updated": "Last updated 24 October 2026", "isContact": false, "notContact": true, "id": "refund", "title": "Refund and cancellation policy", "short": "Refunds and cancellation", "intro": "Every report and consultation is prepared by hand for one person, and we begin work as soon as you pay. For this reason, payments are not refundable, except when there is a delay from our side. This policy explains how it works.", "sections": [{"h": "Confirmation call", "ps": [[{"t": "Once your payment is successful, a member of our team will call you within 24 hours to confirm the name and the date, time and place of birth you provided. This makes sure your report is analysed correctly. Please keep your phone handy.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "No refunds after payment", "ps": [[{"t": "Once a payment is made, it cannot be cancelled or refunded. This applies to reports, consultations, bundles, the masterclass and anything bought on offer or at a discount. Please check your details and your choice of service before you pay.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "When we do refund", "ps": [], "items": [[{"t": "If we do not deliver your report within 10 working days of payment, not counting Sundays and public holidays, you can ask for a full refund.", "chip": false, "plain": true}], [{"t": "If we have to cancel your consultation and cannot offer a time that suits you, you get a full refund.", "chip": false, "plain": true}], [{"t": "If we cancel or move the masterclass, you can join the next batch or get a full refund.", "chip": false, "plain": true}], [{"t": "If you are charged twice for the same order by a payment error, the extra amount is refunded in full.", "chip": false, "plain": true}]], "hasItems": true}, {"h": "Wrong birth details", "ps": [], "items": [[{"t": "If you entered a detail incorrectly, tell us within 24 to 36 hours of your payment and we will correct it free of charge. After that, a corrected report is a new order.", "chip": false, "plain": true}], [{"t": "If we made a mistake in your report, we will correct it free of charge.", "chip": false, "plain": true}]], "hasItems": true}, {"h": "Name correction", "ps": [[{"t": "Name correction packages include one revision. If you are not comfortable with the names we suggest, tell us within 7 days of delivery and we will work on them once more.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Consultations", "ps": [], "items": [[{"t": "You can reschedule your consultation once, free of charge, if you tell us at least 24 hours before your call.", "chip": false, "plain": true}], [{"t": "Please join on time. If you have not joined within 10 minutes of the start time, the call counts as missed.", "chip": false, "plain": true}], [{"t": "Consultations are not refundable if you cancel, or if you miss your call.", "chip": false, "plain": true}], [{"t": "In a genuine emergency, such as a medical emergency, we may offer a new time at our discretion.", "chip": false, "plain": true}]], "hasItems": true}, {"h": "Courses", "ps": [[{"t": "Course fees are not refundable once you have been given access. If we cancel or postpone a live course, you can move to the next batch or get a full refund. Any course-specific terms will be shared when enrolment opens.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Physical products (when available)", "ps": [], "items": [[{"t": "If a product arrives damaged or defective, tell us within 7 days of delivery with photos, and we will replace it or refund it once it is returned in its original packaging.", "chip": false, "plain": true}], [{"t": "Energised items, and items made or sized for you, cannot be returned unless they arrive damaged.", "chip": false, "plain": true}]], "hasItems": true}, {"h": "How refunds are paid", "ps": [[{"t": "Approved refunds are paid only to your original payment method, within 5 to 7 working days. Your bank may take a little longer to show it. If you have not received it after that, please check with your bank first, then contact us.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Before you raise a dispute", "ps": [[{"t": "If anything is wrong with your order, please contact us before raising a dispute with your bank or payment app. We reply within 24 hours and will do our best to put it right.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "How to reach us", "ps": [[{"t": "WhatsApp +91 91292 37566 or email ahllyamystic@gmail.com with your name and order details.", "chip": false, "plain": true}]], "items": [], "hasItems": false}], "todos": [], "hasTodos": false}, {"eyebrow": "Policies", "updated": "Last updated 24 October 2026", "isContact": false, "notContact": true, "id": "delivery", "title": "Delivery policy", "short": "Delivery", "intro": "Our reports, consultations and courses are digital. If we sell physical products in future, this policy also covers how they are shipped.", "sections": [{"h": "Confirmation call", "ps": [[{"t": "After a successful payment, a member of our team calls you within 24 hours to confirm the name and the date, time and place of birth you provided, so your report is analysed correctly.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Reports", "ps": [[{"t": "Your report is sent as a PDF to your email and WhatsApp within 5 to 7 working days of payment, not counting Sundays and public holidays. If we need any detail from you, the timeline starts once we have it.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Consultations", "ps": [[{"t": "We fix your call time with you on WhatsApp. Calls are usually held 7 to 10 days after payment, between 11 am and 7 pm, on audio or video, in Hindi or English.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Masterclass and courses", "ps": [[{"t": "Joining details for live sessions are sent on WhatsApp before each session. Course access details are shared when you enrol.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Free tools", "ps": [[{"t": "Your free Kundli and daily horoscope appear on screen straight away. The free Kundli PDF downloads instantly.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Physical products (when available)", "ps": [[{"t": "Products will be shipped within India to your delivery address, with tracking details shared on WhatsApp. Delivery times depend on your PIN code and will be shown at checkout.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Delays", "ps": [[{"t": "If your order will take longer than expected, we will tell you on WhatsApp. If a report does not arrive within 10 working days, see our refund policy.", "chip": false, "plain": true}]], "items": [], "hasItems": false}, {"h": "Didn’t receive it?", "ps": [[{"t": "Please check your spam folder first, then WhatsApp us at +91 91292 37566 and we will resend it.", "chip": false, "plain": true}]], "items": [], "hasItems": false}], "todos": [], "hasTodos": false}, {"eyebrow": "Get in touch", "updated": "We usually reply within a few hours, 11 am to 7 pm.", "isContact": true, "notContact": false, "id": "contact", "title": "Contact us", "short": "Contact", "intro": "Have a question about a report, a consultation or anything else? Write to us and we will get back to you.", "sections": [], "todos": [], "hasTodos": false}];
class ContactPage extends React.Component {
  constructor(props) { super(props); this.state = Object.assign({ menuOpen: false, pol: 'contact', topic: 'A report' }, props && props.initialState); }
  renderVals() {
    var cur = POLICIES.filter((p) => p.id === this.state.pol)[0] || POLICIES[0];
    return {
      cur: cur,
      topics: ['A report', 'A consultation', 'Numerology', 'Courses', 'Something else'].map((t) => ({ label: t, sel: this.state.topic === t, notSel: this.state.topic !== t, pick: () => this.setState({ topic: t }) })),
      go: { privacy: () => this.setState({ pol: 'privacy' }), refund: () => this.setState({ pol: 'refund' }), delivery: () => this.setState({ pol: 'delivery' }), terms: () => this.setState({ pol: 'terms' }) },
      menuOpen: !!this.state.menuOpen, menuExpanded: this.state.menuOpen ? 'true' : 'false', openMenu: () => this.setState({ menuOpen: true }), closeMenu: () => this.setState({ menuOpen: false })
    };
  }
}

ContactPage.prototype.render = function render() {
  const v = this.renderVals() || {};
  return (
    <div data-design-page="Contact" style={{ display: "contents" }}>
      <div style={{fontFamily: "'Manrope', system-ui, sans-serif", color: "#1E1830", background: "#FBF7F0", fontSize: "16px", lineHeight: "1.6"}}>
        <div style={{background: "#FFFFFF", color: "#921A11", fontSize: "14px", fontWeight: "600", textAlign: "center", padding: "10px 16px", borderBottom: "1px solid #EADFD3"}}>
          <a href={"/masterclass"} style={{color: "#921A11", textDecoration: "none"}}>
            {"Live 2-day Manifestation Masterclass. Dates announced soon. Register for ₹99 →"}
          </a>
        </div>
        <header style={{position: "sticky", top: "0", zIndex: "50", background: "rgba(46,0,62,0.94)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderBottom: "1px solid rgba(255,255,255,0.08)"}}>
          <nav aria-label={"Main"} style={{maxWidth: "1200px", margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px"}}>
            <a href={"/"} aria-label={"Ahllya Mystic home"} style={{display: "block", flex: "none"}}>
              <img className={"am-navlogo"} src={"/images/f0424906cf2ed307d839fd952ac77981.png"} alt={"Ahllya Mystic"} style={{height: "48px", width: "auto", display: "block"}} />
            </a>
            <div className={"am-navlinks"} style={{alignItems: "center", gap: "30px", fontSize: "15px", fontWeight: "500"}}>
              <a href={"/#consult"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Consultations"}
              </a>
              <a href={"/kundli"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Free Kundli"}
              </a>
              <a href={"/#free"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Free Calculators"}
              </a>
              <a href={"/#reports"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Reports"}
              </a>
              <a href={"/courses"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Courses"}
              </a>
              <a href={"/horoscope"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Horoscope"}
              </a>
              <a href={"/#blog"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"Blogs"}
              </a>
              <a href={"/about"} style={{color: "#FFFFFF", textDecoration: "none"}}>
                {"About"}
              </a>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
              <a href={"https://wa.me/919129237566"} className={"am-navwa"} aria-label={"Chat on WhatsApp"} style={{display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF"}}>
                <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <path d={"M4 20l1.3-3.9A8 8 0 1 1 8 19z"} />
                  <path d={"M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2z"} />
                </svg>
              </a>
              <a href={"/consult"} className={"am-navcta"} style={{alignItems: "center", minHeight: "44px", padding: "0 22px", borderRadius: "999px", border: "2px solid #FCCE07", color: "#FFFFFF", fontWeight: "700", fontSize: "15px", textDecoration: "none"}}>
                {"Book a consultation"}
              </a>
              <button type={"button"} className={"am-burger"} aria-label={"Open menu"} aria-controls={"am-drawer"} aria-expanded={v.menuExpanded} onClick={v.openMenu} style={{alignItems: "center", justifyContent: "center", width: "44px", height: "44px", padding: "0", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.3)", background: "transparent", color: "#FFFFFF", cursor: "pointer"}}>
                <svg aria-hidden={"true"} width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"}>
                  <path d={"M4 7h16M4 12h16M10 17h10"} />
                </svg>
              </button>
            </div>
          </nav>
        </header>
        {v.menuOpen ? (
          <>
            <div style={{position: "fixed", inset: "0", zIndex: "100"}}>
              <button type={"button"} className={"am-fade"} aria-label={"Close menu"} onClick={v.closeMenu} style={{position: "absolute", inset: "0", width: "100%", height: "100%", padding: "0", border: "0", background: "rgba(20,0,28,0.6)", cursor: "pointer"}} />
              <div id={"am-drawer"} className={"am-slide"} role={"dialog"} aria-modal={"true"} aria-label={"Menu"} style={{position: "absolute", top: "0", right: "0", bottom: "0", width: "min(330px, 86vw)", overflowY: "auto", background: "linear-gradient(180deg, #2E003E 0%, #4A0A66 55%, #6C1594 100%)", color: "#FFFFFF", boxShadow: "-24px 0 48px rgba(0,0,0,0.4)"}}>
                <div className={"am-stars"} aria-hidden={"true"} />
                <div style={{position: "relative", padding: "18px 22px 32px", display: "flex", flexDirection: "column", minHeight: "100%", boxSizing: "border-box"}}>
                  <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px"}}>
                    <img src={"/images/f0424906cf2ed307d839fd952ac77981.png"} alt={"Ahllya Mystic"} style={{height: "44px", width: "auto", display: "block"}} />
                    <button type={"button"} aria-label={"Close menu"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", padding: "0", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.3)", background: "transparent", color: "#FFFFFF", cursor: "pointer"}}>
                      <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"}>
                        <path d={"M6 6l12 12M18 6L6 18"} />
                      </svg>
                    </button>
                  </div>
                  <div aria-hidden={"true"} style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px"}}>
                    <svg width={"12"} height={"12"} viewBox={"0 0 14 14"}>
                      <path d={"M7 0L14 7L7 14L0 7Z"} fill={"#FFFFFF"} />
                    </svg>
                    <span style={{flex: "1", height: "1px", background: "rgba(255,255,255,0.3)"}} />
                  </div>
                  <a href={"/#consult"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Consultations"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <a href={"/kundli"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Free Kundli"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <a href={"/#free"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Free Calculators"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <a href={"/#reports"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Reports"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <a href={"/courses"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Courses"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <a href={"/horoscope"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Horoscope"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <a href={"/#blog"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"Blogs"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <a href={"/about"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "56px", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", textDecoration: "none", fontFamily: "'Marcellus', serif", fontSize: "22px"}}>
                    {"About"}
                    <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9 6l6 6-6 6"} />
                    </svg>
                  </a>
                  <div style={{marginTop: "28px", display: "grid", gap: "12px"}}>
                    <a href={"/consult"} onClick={v.closeMenu} style={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: "52px", borderRadius: "999px", border: "2px solid #FCCE07", color: "#FFFFFF", fontWeight: "700", textDecoration: "none"}}>
                      {"Book a consultation"}
                    </a>
                    <a href={"https://wa.me/919129237566"} style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", minHeight: "52px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.35)", color: "#FFFFFF", fontWeight: "600", textDecoration: "none"}}>
                      <svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                        <path d={"M4 20l1.3-3.9A8 8 0 1 1 8 19z"} />
                      </svg>
                      {"WhatsApp us"}
                    </a>
                  </div>
                  <p style={{margin: "auto 0 0", paddingTop: "32px", fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "17px", color: "#EADFF2", textAlign: "center"}}>
                    {"ज्योतिष · अंक शास्त्र · वास्तु"}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <div style={{background: "radial-gradient(ellipse at 100% 0%, rgba(108,21,148,0.08), rgba(108,21,148,0) 50%), #FBF7F0", borderBottom: "1px solid #E8DFD0"}}>
          <div style={{maxWidth: "900px", margin: "0 auto", padding: "22px 24px 40px"}}>
            <nav aria-label={"Breadcrumb"} style={{fontSize: "14px", color: "#5C5470", marginBottom: "28px"}}>
              <a href={"/"} style={{color: "#5C5470", textDecoration: "none"}}>
                {"Home"}
              </a>
              <span aria-hidden={"true"} style={{margin: "0 8px"}}>
                {"/"}
              </span>
              <span style={{color: "#1E1830", fontWeight: "600"}}>
                {hole(v.cur?.title)}
              </span>
            </nav>
            <p style={{margin: "0 0 10px", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#921A11", fontWeight: "700"}}>
              {hole(v.cur?.eyebrow)}
            </p>
            <h1 style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "clamp(34px, 4vw, 50px)", lineHeight: "1.1"}}>
              {hole(v.cur?.title)}
            </h1>
            <p style={{margin: "0", fontSize: "15px", color: "#5C5470"}}>
              {hole(v.cur?.updated)}
            </p>
          </div>
        </div>
        <div style={{maxWidth: "900px", margin: "0 auto", padding: "40px 24px 88px"}}>
          <div>
            <article style={{background: "#FFFFFF", border: "1px solid #E8DFD0", borderRadius: "22px", padding: "clamp(24px, 4vw, 48px)", outline: "1px solid #EFE6D8", outlineOffset: "-9px"}}>
              {v.cur?.hasTodos ? (
                <>
                  <div style={{marginBottom: "28px", padding: "16px 18px", border: "1.5px dashed #C9B3D6", borderRadius: "14px", background: "#FBF7FD"}}>
                    <p style={{margin: "0 0 8px", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: "700", color: "#6C1594"}}>
                      {"Design note: confirm before going live"}
                    </p>
                    {(v.cur?.todos || []).map((t, $index) => (
                      <React.Fragment key={$index}>
                        <p style={{margin: "0 0 4px", fontSize: "14px", color: "#3D0752"}}>
                          {"· "}
                          {hole(t)}
                        </p>
                      </React.Fragment>
                    ))}
                  </div>
                </>
              ) : null}
              <p style={{margin: "0 0 32px", fontSize: "18px", lineHeight: "1.7", color: "#3A3350"}}>
                {hole(v.cur?.intro)}
              </p>
              {v.cur?.isContact ? (
                <>
                  <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "14px", marginBottom: "32px"}}>
                    <a href={"https://wa.me/919129237566"} className={"am-lift"} style={{display: "flex", alignItems: "center", gap: "14px", padding: "18px 20px", border: "1px solid #E8DFD0", borderRadius: "18px", background: "#FBF7F0", color: "#1E1830", textDecoration: "none"}}>
                      <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "46px", height: "46px", borderRadius: "999px", background: "#FCCE07", color: "#921A11"}}>
                        <svg aria-hidden={"true"} width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                          <path d={"M4 20l1.3-3.9A8 8 0 1 1 8 19z"} />
                        </svg>
                      </span>
                      <span style={{minWidth: "0"}}>
                        <span style={{display: "block", fontSize: "13px", color: "#5C5470"}}>
                          {"WhatsApp"}
                        </span>
                        <span style={{display: "block", fontWeight: "700", fontSize: "17px", overflowWrap: "anywhere"}}>
                          {"+91 91292 37566"}
                        </span>
                      </span>
                    </a>
                    <a href={"mailto:ahllyamystic@gmail.com"} className={"am-lift"} style={{display: "flex", alignItems: "center", gap: "14px", padding: "18px 20px", border: "1px solid #E8DFD0", borderRadius: "18px", background: "#FBF7F0", color: "#1E1830", textDecoration: "none"}}>
                      <span style={{flex: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "46px", height: "46px", borderRadius: "999px", background: "#FCCE07", color: "#921A11"}}>
                        <svg aria-hidden={"true"} width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                          <rect x={"3"} y={"5"} width={"18"} height={"14"} rx={"2"} />
                          <path d={"M3 7l9 6 9-6"} />
                        </svg>
                      </span>
                      <span style={{minWidth: "0"}}>
                        <span style={{display: "block", fontSize: "13px", color: "#5C5470"}}>
                          {"Email"}
                        </span>
                        <span style={{display: "block", fontWeight: "700", fontSize: "17px", overflowWrap: "anywhere"}}>
                          {"ahllyamystic@gmail.com"}
                        </span>
                      </span>
                    </a>
                  </div>
                  <form style={{display: "grid", gap: "16px", paddingTop: "28px", borderTop: "1px solid #EFE6D8"}}>
                    <p style={{margin: "0", fontFamily: "'Marcellus', serif", fontSize: "26px"}}>
                      {"Send us a message"}
                    </p>
                    <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "14px"}}>
                      <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                        {"Name"}
                        <input type={"text"} placeholder={"Your name"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                      </label>
                      <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                        {"WhatsApp number"}
                        <input type={"tel"} placeholder={"+91"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                      </label>
                    </div>
                    <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                      {"Email"}
                      <input type={"email"} placeholder={"you@example.com"} style={{minHeight: "48px", padding: "0 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9"}} />
                    </label>
                    <div style={{display: "grid", gap: "8px"}}>
                      <span style={{fontSize: "14px", fontWeight: "600"}}>
                        {"What is it about?"}
                      </span>
                      <div style={{display: "flex", flexWrap: "wrap", gap: "8px"}}>
                        {(v.topics || []).map((t, $index) => (
                          <React.Fragment key={$index}>
                            {t?.sel ? (
                              <>
                                <button type={"button"} role={"radio"} aria-checked={"true"} onClick={t?.pick} style={{minHeight: "42px", padding: "0 16px", borderRadius: "999px", border: "1.5px solid #6C1594", background: "#F3E8F7", color: "#6C1594", font: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer"}}>
                                  {hole(t?.label)}
                                </button>
                              </>
                            ) : null}
                            {t?.notSel ? (
                              <>
                                <button type={"button"} role={"radio"} aria-checked={"false"} onClick={t?.pick} style={{minHeight: "42px", padding: "0 16px", borderRadius: "999px", border: "1px solid #D9CEBD", background: "#FFFFFF", color: "#1E1830", font: "inherit", fontSize: "14px", fontWeight: "600", cursor: "pointer"}}>
                                  {hole(t?.label)}
                                </button>
                              </>
                            ) : null}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <label style={{display: "grid", gap: "6px", fontSize: "14px", fontWeight: "600"}}>
                      {"Your message"}
                      <textarea rows={"5"} placeholder={"Tell us how we can help"} style={{padding: "12px 14px", border: "1px solid #D9CEBD", borderRadius: "12px", font: "inherit", fontWeight: "400", background: "#FFFDF9", resize: "vertical"}} />
                    </label>
                    <FormButton as="button" endpoint="/api/contact" extra={{ topic: this.state.topic }} style={{justifySelf: "start", minHeight: "52px", padding: "0 32px", border: "0", borderRadius: "999px", background: "#FCCE07", color: "#921A11", font: "inherit", fontWeight: "700", cursor: "pointer"}}>
                      {"Send message"}
                    </FormButton>
                    <p style={{margin: "0", fontSize: "13px", color: "#5C5470"}}>
                      {"We reply on WhatsApp or email. Your details are used only to answer you."}
                    </p>
                  </form>
                </>
              ) : null}
              {(v.cur?.sections || []).map((s, $index) => (
                <React.Fragment key={$index}>
                  <section style={{padding: "22px 0", borderTop: "1px solid #EFE6D8"}}>
                    <h2 style={{margin: "0 0 10px", fontFamily: "'Marcellus', serif", fontWeight: "400", fontSize: "24px", lineHeight: "1.25"}}>
                      {hole(s?.h)}
                    </h2>
                    {(s?.ps || []).map((p, $index) => (
                      <React.Fragment key={$index}>
                        <p style={{margin: "0 0 10px", fontSize: "16px", lineHeight: "1.75", color: "#3A3350"}}>
                          {(p || []).map((x, $index) => (
                            <React.Fragment key={$index}>
                              {x?.plain ? (
                                <>
                                  {hole(x?.t)}
                                </>
                              ) : null}
                              {x?.chip ? (
                                <>
                                  <span style={{display: "inline-block", margin: "2px 0", padding: "1px 10px", border: "1.5px dashed #C9B3D6", borderRadius: "8px", background: "#F8F1FB", color: "#6C1594", fontSize: "14px", fontWeight: "600"}}>
                                    {hole(x?.t)}
                                  </span>
                                </>
                              ) : null}
                            </React.Fragment>
                          ))}
                        </p>
                      </React.Fragment>
                    ))}
                    {s?.hasItems ? (
                      <>
                        <ul style={{margin: "4px 0 0", padding: "0", listStyle: "none", display: "grid", gap: "10px"}}>
                          {(s?.items || []).map((i, $index) => (
                            <React.Fragment key={$index}>
                              <li style={{display: "flex", gap: "12px", fontSize: "16px", lineHeight: "1.65", color: "#3A3350"}}>
                                <span aria-hidden={"true"} style={{flex: "none", width: "7px", height: "7px", marginTop: "10px", borderRadius: "999px", background: "#6C1594"}} />
                                <span>
                                  {(i || []).map((x, $index) => (
                                    <React.Fragment key={$index}>
                                      {x?.plain ? (
                                        <>
                                          {hole(x?.t)}
                                        </>
                                      ) : null}
                                      {x?.chip ? (
                                        <>
                                          <span style={{display: "inline-block", margin: "2px 0", padding: "1px 10px", border: "1.5px dashed #C9B3D6", borderRadius: "8px", background: "#F8F1FB", color: "#6C1594", fontSize: "14px", fontWeight: "600"}}>
                                            {hole(x?.t)}
                                          </span>
                                        </>
                                      ) : null}
                                    </React.Fragment>
                                  ))}
                                </span>
                              </li>
                            </React.Fragment>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </section>
                </React.Fragment>
              ))}
            </article>
          </div>
        </div>
        <footer style={{position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #4A0A66 0%, #2E003E 70%)", color: "#EADFF2", fontSize: "15px"}}>
          <div className={"am-stars2"} aria-hidden={"true"} style={{opacity: "0.6"}} />
          <div style={{maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 32px", position: "relative"}}>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "40px", marginBottom: "48px"}}>
              <div>
                <img src={"/images/f0424906cf2ed307d839fd952ac77981.png"} alt={"Ahllya Mystic"} style={{height: "60px", width: "auto", display: "block", marginBottom: "16px"}} />
                <p style={{margin: "0"}}>
                  {"Astrology, numerology, Vastu and manifestation, read with care."}
                </p>
              </div>
              <div style={{display: "grid", gap: "10px", alignContent: "start"}}>
                <p style={{margin: "0 0 4px", fontWeight: "700", color: "#FFFFFF"}}>
                  {"Explore"}
                </p>
                <a href={"/#consult"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Consultations"}
                </a>
                <a href={"/#reports"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Reports"}
                </a>
                <a href={"/courses"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Courses"}
                </a>
                <a href={"/kundli"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Free Kundli"}
                </a>
              </div>
              <div style={{display: "grid", gap: "10px", alignContent: "start"}}>
                <p style={{margin: "0 0 4px", fontWeight: "700", color: "#FFFFFF"}}>
                  {"Contact"}
                </p>
                <a href={"https://wa.me/919129237566"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"+91 91292 37566 (WhatsApp)"}
                </a>
                <a href={"mailto:ahllyamystic@gmail.com"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"ahllyamystic@gmail.com"}
                </a>
                <span>
                  {"Mon to Sun, 11am to 7pm"}
                </span>
              </div>
              <div style={{display: "grid", gap: "10px", alignContent: "start"}}>
                <p style={{margin: "0 0 4px", fontWeight: "700", color: "#FFFFFF"}}>
                  {"Follow"}
                </p>
                <a href={"https://www.instagram.com/ahllyamystic"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Instagram"}
                </a>
                <a href={"https://www.youtube.com/@AhllyaMystic"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"YouTube"}
                </a>
                <a href={"https://www.facebook.com/ahllyamystic"} style={{color: "#EADFF2", textDecoration: "none"}}>
                  {"Facebook"}
                </a>
              </div>
            </div>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: "24px", fontSize: "14px"}}>
              <span>
                {"© 2026 Ahllya Mystic. All rights reserved."}
              </span>
              <span style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
                <a href={"/policies/privacy"} onClick={v.go?.privacy} style={{color: "#EADFF2"}}>
                  {"Privacy policy"}
                </a>
                <a href={"/policies/refunds"} onClick={v.go?.refund} style={{color: "#EADFF2"}}>
                  {"Refund policy"}
                </a>
                <a href={"/policies/delivery"} onClick={v.go?.delivery} style={{color: "#EADFF2"}}>
                  {"Delivery policy"}
                </a>
                <a href={"/policies/terms"} onClick={v.go?.terms} style={{color: "#EADFF2"}}>
                  {"Terms"}
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;
