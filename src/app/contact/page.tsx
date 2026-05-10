import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact AnaMine for mining chemicals, industrial procurement, supply chain consultancy, or digital transformation inquiries. Offices in Istanbul, Turkey and Luanda, Angola.",
};

const offices = [
  {
    type: "Headquarters",
    city: "Istanbul",
    country: "Turkey",
    flag: "🇹🇷",
    address: "Istanbul, Turkey",
    phone: "+90 (0) ___________",
    email: "info@anamine.com.tr",
    hours: "Monday – Friday: 09:00 – 18:00 (GMT+3)",
  },
  {
    type: "Branch Office",
    city: "Luanda",
    country: "Angola",
    flag: "🇦🇴",
    address: "Condominio Belas Business Park, Etapa V, Edificio Cuanza Sul, 6° Piso, Talatona, Luanda",
    phone: "+244 927 359 000",
    email: "info@anamine.com.tr",
    hours: "Monday – Friday: 08:00 – 17:00 (GMT+1)",
  },
];

const inquiryTypes = [
  "Mining Chemicals & Consumables",
  "Supply Chain Consultancy",
  "Digital Transformation",
  "ERP Implementation",
  "Procurement Services",
  "Partnership Inquiry",
  "General Information",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="Let's Start the Conversation"
        subtitle="Whether you have a specific project in mind or want to explore how AnaMine can support your operations, our team is ready to help."
        breadcrumb={[{ label: "Home" }, { label: "Contact" }]}
      />

      {/* ═══════════════════════ CONTACT MAIN ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <ScrollReveal className="lg:col-span-2">
              <div>
                <p className="section-label mb-4">Get In Touch</p>
                <span className="gold-line mb-6" />
                <h2 className="section-title mb-6">
                  We&apos;d Love to Hear From You
                </h2>
                <p className="text-slate-500 leading-relaxed mb-10">
                  Fill out the form and one of our team members will get back to
                  you within one business day. For urgent matters, please call
                  our Angola office directly.
                </p>

                {/* Office Cards */}
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="border border-slate-100 p-6 hover:border-gold-300 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">{office.flag}</span>
                        <div>
                          <p className="text-gold-600 text-xs font-bold tracking-widest uppercase">
                            {office.type}
                          </p>
                          <p className="font-display font-bold text-navy-900 text-lg">
                            {office.city}, {office.country}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3 text-slate-600">
                          <svg className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          <span className="leading-relaxed">{office.address}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                          <svg className="w-4 h-4 text-gold-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                          <a href={`tel:${office.phone}`} className="hover:text-gold-600 transition-colors">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                          <svg className="w-4 h-4 text-gold-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                          <a href={`mailto:${office.email}`} className="hover:text-gold-600 transition-colors">
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-start gap-3 text-slate-500">
                          <svg className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs leading-relaxed">{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={150} className="lg:col-span-3">
              <div className="bg-slate-50 p-8 md:p-10">
                <h3 className="font-display font-bold text-navy-900 text-2xl mb-8">
                  Send Us a Message
                </h3>
                <ContactForm inquiryTypes={inquiryTypes} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ WHY WORK WITH US ═══════════════════════ */}
      <section className="py-16 bg-navy-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: "⚡",
                title: "Fast Response",
                desc: "We respond to all inquiries within one business day.",
              },
              {
                icon: "🔒",
                title: "Confidential",
                desc: "Your information and project details are treated with strict confidentiality.",
              },
              {
                icon: "🌍",
                title: "Global Capability",
                desc: "Whatever your location, our team can deliver.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="flex flex-col items-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-display font-bold text-white text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
