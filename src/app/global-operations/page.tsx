import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Global Operations",
  description:
    "AnaMine operates from headquarters in Istanbul, Turkey and a branch office in Luanda, Angola — positioned to serve mining and industrial clients across Europe, the Middle East, and Sub-Saharan Africa.",
};

const offices = [
  {
    type: "Headquarters",
    city: "Istanbul",
    country: "Turkey",
    continent: "Europe / Middle East",
    address: "Istanbul, Turkey",
    phone: "+90 (0) ___________",
    email: "info@anamine.com.tr",
    description:
      "Our headquarters in Istanbul serves as the strategic and operational hub for AnaMine's global activities. Turkey's position as a bridge between Europe, the Middle East, and Central Asia makes Istanbul an ideal base for managing our global client relationships, supplier network, and digital service delivery.",
    markets: ["Turkey", "Europe", "Middle East", "Central Asia"],
    capabilities: [
      "Global strategic management",
      "Procurement & supply chain",
      "Digital transformation services",
      "ERP & e-sourcing platforms",
      "Client relationship management",
      "R&D and product development",
    ],
    accent: "from-navy-900 to-navy-950",
    flag: "🇹🇷",
  },
  {
    type: "Branch Office",
    city: "Luanda",
    country: "Angola",
    continent: "Sub-Saharan Africa",
    address: "Condominio Belas Business Park, Etapa V, Edificio Cuanza Sul, 6° Piso, Talatona Municipality, Luanda, Angola",
    phone: "+244 927 359 000",
    email: "info@anamine.com.tr",
    description:
      "Our Luanda office positions AnaMine at the heart of one of Africa's fastest-growing mining and oil & gas markets. Located in the prestigious Belas Business Park, our Angola operations team brings AnaMine's full service portfolio to West African clients — with deep local knowledge and strong government and industry relationships.",
    markets: ["Angola", "DRC", "Zambia", "West Africa"],
    capabilities: [
      "Mining chemicals supply",
      "Industrial consumables sourcing",
      "Local procurement management",
      "Business development",
      "Supply chain logistics",
      "Government & stakeholder relations",
    ],
    accent: "from-gold-700 to-gold-800",
    flag: "🇦🇴",
  },
];

const globalStrength = [
  {
    title: "Strategic Location",
    description:
      "Istanbul sits at the crossroads of Europe, the Middle East, and Asia — giving AnaMine unparalleled access to global supplier networks and client markets.",
  },
  {
    title: "African Market Access",
    description:
      "Our Luanda office opens doors to the rapidly expanding Sub-Saharan African mining sector, including Angola, DRC, Zambia, and beyond.",
  },
  {
    title: "Multilingual Capability",
    description:
      "Our teams operate in Turkish, English, and Portuguese — the languages of our key markets — ensuring seamless communication with all stakeholders.",
  },
  {
    title: "Local Compliance",
    description:
      "Deep understanding of local regulatory environments in Turkey and Angola, ensuring full compliance with trade, procurement, and operational regulations.",
  },
  {
    title: "Time Zone Coverage",
    description:
      "Our two offices span multiple time zones, allowing us to respond promptly to client needs across Europe, Africa, and the Middle East.",
  },
  {
    title: "Cultural Intelligence",
    description:
      "28+ years of operating across diverse cultural and business environments, enabling sensitive and effective engagement in every market we serve.",
  },
];

export default function GlobalOperationsPage() {
  return (
    <>
      <PageHero
        label="Global Operations"
        title="Two Continents. One Integrated Partner."
        subtitle="Strategic offices in Istanbul, Turkey and Luanda, Angola give AnaMine the geographic reach, market intelligence, and operational capability to serve clients across Europe, Africa, and beyond."
        breadcrumb={[{ label: "Home" }, { label: "Global Operations" }]}
      />

      {/* ═══════════════════════ GLOBAL MAP VISUAL ═══════════════════════ */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container-custom">
          {/* Simple visual map representation */}
          <div className="bg-navy-950 rounded-none p-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: `linear-gradient(#C9963F 1px, transparent 1px), linear-gradient(90deg, #C9963F 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }} />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-around gap-8">
                <ScrollReveal>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-600 mb-4">
                      <span className="text-3xl">🇹🇷</span>
                    </div>
                    <div className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-1">HQ</div>
                    <div className="text-white font-display font-bold text-xl">Istanbul, Turkey</div>
                    <div className="text-white/50 text-sm mt-1">Europe / Middle East Hub</div>
                  </div>
                </ScrollReveal>

                {/* Connection line */}
                <div className="hidden md:flex flex-1 items-center gap-2 max-w-xs">
                  <div className="flex-1 h-px bg-gradient-to-r from-gold-600 to-gold-700/50" />
                  <div className="w-2 h-2 bg-gold-600 rotate-45" />
                  <div className="flex-1 h-px bg-gradient-to-r from-gold-700/50 to-gold-600" />
                </div>

                <ScrollReveal delay={150}>
                  <div className="text-center">
                    <div className="text-white/60 text-xs tracking-widest uppercase mb-2">
                      Global Supply Network
                    </div>
                    <div className="text-gold-400 font-display font-bold text-4xl">28+</div>
                    <div className="text-white/50 text-sm">Years Operational</div>
                  </div>
                </ScrollReveal>

                {/* Connection line */}
                <div className="hidden md:flex flex-1 items-center gap-2 max-w-xs">
                  <div className="flex-1 h-px bg-gradient-to-r from-gold-600 to-gold-700/50" />
                  <div className="w-2 h-2 bg-gold-600 rotate-45" />
                  <div className="flex-1 h-px bg-gradient-to-r from-gold-700/50 to-gold-600" />
                </div>

                <ScrollReveal delay={300}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-navy-700 mb-4">
                      <span className="text-3xl">🇦🇴</span>
                    </div>
                    <div className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-1">Branch</div>
                    <div className="text-white font-display font-bold text-xl">Luanda, Angola</div>
                    <div className="text-white/50 text-sm mt-1">Sub-Saharan Africa Hub</div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ OFFICE DETAILS ═══════════════════════ */}
      {offices.map((office, idx) => (
        <section
          key={office.city}
          className={`py-20 md:py-28 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Office info card */}
              <ScrollReveal className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                <div className={`bg-gradient-to-br ${office.accent} p-10 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 border border-white/10 rotate-12" />
                  <div className="text-4xl mb-4">{office.flag}</div>
                  <div className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-2">
                    {office.type}
                  </div>
                  <h2 className="font-display text-4xl font-bold text-white mb-1">
                    {office.city}
                  </h2>
                  <p className="text-white/60 text-lg mb-6">{office.country} · {office.continent}</p>

                  <div className="space-y-4 mb-8">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <p className="text-white/70 text-sm leading-relaxed">{office.address}</p>
                    </div>
                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gold-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-white/70 text-sm hover:text-gold-300 transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gold-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <a href={`mailto:${office.email}`} className="text-white/70 text-sm hover:text-gold-300 transition-colors">
                        {office.email}
                      </a>
                    </div>
                  </div>

                  {/* Markets */}
                  <div className="border-t border-white/15 pt-6">
                    <p className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-3">Markets Served</p>
                    <div className="flex flex-wrap gap-2">
                      {office.markets.map((market) => (
                        <span key={market} className="text-xs text-white/70 border border-white/20 px-3 py-1">
                          {market}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Description & capabilities */}
              <ScrollReveal delay={150} className={idx % 2 !== 0 ? "lg:order-1" : ""}>
                <div>
                  <p className="section-label mb-4">{office.type} · {office.country}</p>
                  <span className="gold-line mb-6" />
                  <h3 className="section-title mb-6">{office.city} Office</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {office.description}
                  </p>

                  <h4 className="font-display font-bold text-navy-900 text-base mb-4 flex items-center gap-3">
                    <span className="w-8 h-px bg-gold-600" />
                    Office Capabilities
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {office.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gold-50 border border-gold-200 text-gold-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-slate-600 text-sm">{cap}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="btn-primary text-sm">
                    Contact This Office
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* ═══════════════════════ GLOBAL STRENGTH ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-navy-950">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="section-label mb-4">Our Global Advantage</p>
              <span className="gold-line mx-auto mb-6" />
              <h2 className="section-title-light mb-5">
                Why Our Global Footprint Matters
              </h2>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Being present on two continents isn&apos;t just about geography
                — it translates into real advantages for our clients.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalStrength.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="p-6 border border-white/8 hover:border-gold-600/40 transition-colors duration-300 group">
                  <div className="w-10 h-10 bg-gold-600/15 border border-gold-600/30 flex items-center justify-center mb-4 group-hover:bg-gold-600 transition-colors duration-300">
                    <span className="text-gold-400 group-hover:text-white font-display font-bold text-sm transition-colors">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="section-title mb-6 max-w-xl mx-auto">
              Ready to Partner With Our Global Team?
            </h2>
            <p className="text-slate-500 text-sm md:text-base mb-8 max-w-lg mx-auto">
              Reach out to the office closest to you and let&apos;s explore how
              AnaMine can serve your operations.
            </p>
            <Link href="/contact" className="btn-primary">
              Get In Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
