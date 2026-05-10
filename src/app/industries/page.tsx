import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "AnaMine serves the mining, automotive, and oil & gas industries with specialized procurement, consultancy, and digital transformation solutions.",
};

const industries = [
  {
    id: "mining",
    label: "Primary Industry",
    title: "Mining",
    headline: "Powering the World's Mining Operations",
    description: [
      "Mining is the core of AnaMine's business. We have built deep expertise in every facet of the mining supply chain — from chemicals and consumables procurement to digital tools that transform how mines are managed and optimized.",
      "Modern mining operations demand increasingly sophisticated solutions. AnaMine bridges the gap between traditional mining practice and next-generation operational technology, helping our clients improve recovery rates, reduce input costs, and meet environmental and safety obligations.",
      "Our mining-specific offerings span the complete value chain: from chemical reagents that optimize mineral extraction, to ERP systems that give operations managers real-time visibility across their sites.",
    ],
    capabilities: [
      "Flotation reagents & leaching chemicals",
      "Grinding media & mill liners",
      "Laboratory consumables & PPE",
      "Mine site ERP implementation",
      "Supply chain audit & optimization",
      "Inventory management systems",
      "Blockchain-based material traceability",
      "Procurement outsourcing",
    ],
    stats: [
      { value: "28+", label: "Years in Mining" },
      { value: "35K+", label: "Projects Delivered" },
      { value: "2", label: "Continents Served" },
    ],
  },
  {
    id: "automotive",
    label: "Established Expertise",
    title: "Automotive",
    headline: "40+ Years of Automotive Industry Knowledge",
    description: [
      "AnaMine's roots in Turkey's automotive sector run deep. Over four decades, we have supported automotive manufacturers, tier-1 suppliers, and aftermarket distributors with procurement, supply chain consulting, and operational solutions.",
      "Turkey is one of Europe's leading automotive production hubs — and AnaMine's position at the heart of that industry has given us unparalleled understanding of the complex supply chains that underpin vehicle manufacturing.",
      "We are now leveraging this automotive expertise in Angola and other emerging markets, where the growing middle class and infrastructure development are driving demand for automotive products and services.",
    ],
    capabilities: [
      "Automotive parts procurement",
      "Supplier network development",
      "Supply chain risk management",
      "Distribution network design",
      "Inventory optimization",
      "Demand forecasting",
      "Import/export logistics management",
      "Aftermarket supply solutions",
    ],
    stats: [
      { value: "40+", label: "Years Experience" },
      { value: "Turkey", label: "Primary Market" },
      { value: "Angola", label: "Expanding Into" },
    ],
  },
  {
    id: "oil-gas",
    label: "High Complexity Sector",
    title: "Oil & Gas",
    headline: "Proven in the World's Most Demanding Operations",
    description: [
      "Oil and gas operations require procurement and supply chain capabilities that meet the highest standards of reliability, compliance, and technical specification. AnaMine has served this sector for over four decades in Turkey, building expertise that translates directly to emerging market contexts.",
      "From upstream drilling consumables to downstream process chemicals, our sourcing network and quality assurance protocols are designed to meet the stringent requirements of oil and gas operators.",
      "Our digital transformation capabilities are particularly valuable in oil and gas — where real-time data, integrated ERP systems, and smart inventory management can dramatically improve operational efficiency and reduce downtime.",
    ],
    capabilities: [
      "Drilling consumables & chemicals",
      "Process chemicals procurement",
      "Safety equipment supply",
      "ERP & CMMS implementation",
      "Procurement process optimization",
      "Contract management",
      "Supply chain compliance",
      "MRO optimization",
    ],
    stats: [
      { value: "40+", label: "Years Experience" },
      { value: "Turkey", label: "Core Market" },
      { value: "Global", label: "Supply Network" },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        label="Industries We Serve"
        title="Deep Expertise Across Three Critical Sectors"
        subtitle="Mining, automotive, and oil & gas operations demand specialized knowledge and proven capabilities. AnaMine brings decades of real-world experience to every client engagement."
        breadcrumb={[{ label: "Home" }, { label: "Industries" }]}
      />

      {/* Sector navigation tabs */}
      <nav className="bg-white border-b border-slate-200 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex overflow-x-auto">
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="flex-shrink-0 px-6 py-4 text-sm font-bold text-slate-500 hover:text-navy-900 hover:border-b-2 hover:border-gold-600 tracking-wide uppercase transition-colors duration-200"
              >
                {ind.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ═══ Industry Sections ═══ */}
      {industries.map((ind, idx) => (
        <section
          key={ind.id}
          id={ind.id}
          className={`py-20 md:py-28 scroll-mt-36 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Content */}
              <ScrollReveal className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                <div>
                  <p className="section-label mb-4">{ind.label}</p>
                  <span className="gold-line mb-6" />
                  <h2 className="section-title mb-3">{ind.title}</h2>
                  <p className="text-gold-700 font-semibold text-lg mb-6">{ind.headline}</p>
                  <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
                    {ind.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex gap-6 mb-8 pt-6 border-t border-slate-100">
                    {ind.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="font-display font-bold text-2xl text-navy-900">
                          {stat.value}
                        </div>
                        <div className="text-slate-500 text-xs tracking-wide uppercase mt-0.5">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="btn-primary text-sm">
                    Discuss Your {ind.title} Needs
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>

              {/* Capabilities list */}
              <ScrollReveal delay={150} className={idx % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="bg-navy-950 p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 border border-gold-600/10 rotate-12" />
                  <h3 className="font-display font-bold text-white text-lg mb-6 flex items-center gap-3">
                    <span className="w-8 h-px bg-gold-600" />
                    Key Capabilities
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ind.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gold-600/20 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-white/70 text-sm leading-relaxed">{cap}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <Link
                      href="/services"
                      className="text-gold-400 text-sm font-bold tracking-wide uppercase flex items-center gap-2 hover:gap-3 transition-all duration-200"
                    >
                      View Related Services
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Cross-industry value proposition */}
      <section className="py-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#C9963F 1px, transparent 1px), linear-gradient(90deg, #C9963F 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="section-label mb-4">Cross-Industry Advantage</p>
              <span className="gold-line mx-auto mb-6" />
              <h2 className="section-title-light mb-6">
                One Partner. Three Sectors. Unified Approach.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                AnaMine&apos;s multi-sector experience creates a unique
                cross-pollination of ideas, best practices, and network
                connections — benefits that single-sector specialists simply
                cannot offer.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Shared Best Practices",
                desc: "Procurement and supply chain innovations from automotive translated into mining operations — and vice versa.",
              },
              {
                title: "Unified Supplier Network",
                desc: "Leverage supplier relationships built across three sectors for better pricing, faster delivery, and higher reliability.",
              },
              {
                title: "Integrated Digital Platform",
                desc: "Digital tools built for one sector often unlock improvements in others — maximising your technology investment.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="p-6 border border-white/10 hover:border-gold-600/40 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gold-600/20 border border-gold-600/30 mb-4 flex items-center justify-center">
                    <span className="text-gold-400 font-display font-bold text-lg">0{i + 1}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-3">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
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
              Operating in One of These Sectors?
            </h2>
            <p className="text-slate-500 text-lg mb-8 max-w-lg mx-auto">
              Let&apos;s talk about how AnaMine&apos;s industry expertise can
              create value for your operations.
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
