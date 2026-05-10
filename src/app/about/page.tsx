import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AnaMine's 28+ year journey in mining, industrial chemicals, procurement consultancy, and digital transformation across Turkey and Angola.",
};

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.01 12c.009 3.182 1.244 6.073 3.236 8.25m0 0c.84.967 1.77 1.85 2.788 2.62M4.847 17.25c1.195.738 2.54 1.274 3.974 1.56m0 0c.28.057.562.11.847.16M12 12a9 9 0 01-9 9m9-9a9 9 0 009 9m-9-9a9 9 0 009-9m0 0a9 9 0 01-9 9" />
      </svg>
    ),
    title: "Integrity",
    description:
      "We operate with full transparency and ethical conduct in all client and partner relationships.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Innovation",
    description:
      "Continuously pioneering digital solutions that push industrial operations beyond conventional boundaries.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Partnership",
    description:
      "We see our clients as long-term partners, invested in their success as deeply as our own.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Excellence",
    description:
      "Every project, every deliverable, every interaction — held to the highest professional standard.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Global Mindset",
    description:
      "Operating across continents while respecting local cultures, regulations, and market nuances.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Results-Driven",
    description:
      "Our success is measured by the tangible outcomes we achieve for our clients — efficiency, savings, and growth.",
  },
];

const timeline = [
  {
    year: "1996",
    title: "Company Founded",
    description:
      "AnaMine established in Turkey, focusing on industrial procurement and supply chain services.",
  },
  {
    year: "2005",
    title: "Automotive & Oil & Gas Expansion",
    description:
      "Deep specialization in Turkey's automotive and oil & gas sectors, building 40+ years of combined expertise.",
  },
  {
    year: "2015",
    title: "Digital Transformation Division",
    description:
      "Launched digital services including ERP implementation, e-sourcing platforms, and inventory optimization software.",
  },
  {
    year: "2018",
    title: "Mining Chemicals Specialization",
    description:
      "Dedicated mining chemicals sourcing and supply chain unit established, serving major mining operators.",
  },
  {
    year: "2020",
    title: "Angola Operations",
    description:
      "Opened branch office in Luanda, Angola — Belas Business Park — to serve West African mining and industrial markets.",
  },
  {
    year: "Today",
    title: "Global Growth",
    description:
      "35,000+ projects delivered, expanding digital transformation capabilities with blockchain and advanced analytics.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About AnaMine"
        title="Built on Expertise. Driven by Innovation."
        subtitle="For over 28 years, AnaMine has been at the intersection of industrial expertise and digital transformation — delivering exceptional solutions to mining and industrial clients across two continents."
        breadcrumb={[{ label: "Home" }, { label: "About Us" }]}
      />

      {/* ═══════════════════════ STORY SECTION ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="section-label mb-4">Our Story</p>
                <span className="gold-line mb-6" />
                <h2 className="section-title mb-6">
                  A Legacy of Industrial Excellence
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    AnaMine Comercio e Servico LDA was founded with a singular
                    vision: to revolutionize how mining and industrial companies
                    manage their supply chains, procurement, and operational
                    technology. Since 1996, we have grown from a focused Turkish
                    procurement firm into a global industrial solutions partner.
                  </p>
                  <p>
                    Our journey spans decades of hands-on work in Turkey&apos;s
                    demanding automotive and oil &amp; gas sectors, knowledge we
                    have translated into a market-leading position in mining
                    chemicals and consumables across Africa and beyond.
                  </p>
                  <p>
                    Today, AnaMine operates from offices in Istanbul, Turkey and
                    Luanda, Angola — two strategic hubs that give us unparalleled
                    access to Europe, the Middle East, and Sub-Saharan African
                    markets. We combine global standards with local intelligence
                    to deliver what our clients need, when they need it.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Stats Cards */}
            <ScrollReveal delay={150}>
              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0 lg:max-w-none">
                {[
                  { value: "28+", label: "Years Experience", desc: "Since 1996" },
                  { value: "35K+", label: "Projects", desc: "Completed globally" },
                  { value: "2", label: "Continents", desc: "Europe & Africa" },
                  { value: "3", label: "Industries", desc: "Mining · Auto · O&G" },
                ].map((s) => (
                  <div key={s.label} className="bg-navy-950 p-6 text-center">
                    <div className="font-display font-bold text-3xl text-white mb-1">
                      {s.value}
                    </div>
                    <div className="text-gold-400 font-semibold text-xs tracking-widest uppercase mb-1">
                      {s.label}
                    </div>
                    <div className="text-white/40 text-xs">{s.desc}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ MISSION / VISION ═══════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-navy-950 p-10 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 border border-gold-600/15 rotate-12" />
                <div className="text-gold-600 mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/65 leading-relaxed">
                  To revolutionize industrial operations through integrated
                  procurement consultancy, cutting-edge digital transformation,
                  and reliable supply chain solutions — enabling our clients to
                  achieve sustainable competitive advantage in demanding global
                  markets.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-gold-600 p-10 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 border border-white/15 rotate-12" />
                <div className="text-white mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/85 leading-relaxed">
                  To be the most trusted and innovative industrial solutions
                  partner in emerging markets — recognized globally for
                  excellence in mining, energy, and industrial sectors, and for
                  our role in driving digital transformation across Africa and
                  beyond.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ VALUES ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="section-label mb-4">What Guides Us</p>
              <span className="gold-line mx-auto mb-6" />
              <h2 className="section-title mb-5">Our Core Values</h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                These principles define how we work, how we think, and how we
                show up for our clients every single day.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <ScrollReveal key={val.title} delay={i * 80}>
                <div className="group p-6 border border-slate-100 hover:border-gold-300 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-navy-50 text-navy-700 group-hover:bg-gold-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300">
                    {val.icon}
                  </div>
                  <h3 className="font-display font-bold text-navy-900 text-lg mb-2">
                    {val.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TIMELINE ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-navy-950">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="section-label mb-4">Our Journey</p>
              <span className="gold-line mx-auto mb-6" />
              <h2 className="section-title-light mb-5">28 Years of Growth</h2>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Key milestones that shaped AnaMine into the global industrial
                solutions partner it is today.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative pl-6 border-l border-gold-700/40 max-w-2xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 100}>
                  <div className="relative">
                    {/* Dot */}
                    <div className="absolute -left-[33px] top-5 w-4 h-4 bg-gold-600 border-2 border-gold-400 rounded-full z-10" />
                    <div className="bg-navy-900 border border-white/5 p-6">
                      <span className="text-gold-500 font-display font-bold text-sm tracking-wide">{item.year}</span>
                      <h3 className="font-display font-bold text-white text-base mt-1 mb-2">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <p className="section-label mb-4">Work With Us</p>
            <h2 className="section-title mb-6 max-w-xl mx-auto">
              Ready to Start a Partnership?
            </h2>
            <p className="text-slate-500 text-sm md:text-base mb-8 max-w-lg mx-auto">
              Contact our team to explore how AnaMine can support your industrial
              and digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="/services" className="btn-outline-dark">
                Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
