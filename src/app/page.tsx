import type { Metadata } from "next";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "AnaMine | Mining, Industrial Chemicals & Digital Transformation",
  description:
    "AnaMine delivers integrated mining chemicals, industrial procurement, supply chain consultancy, and digital transformation solutions globally.",
};

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "Supply Chain & Procurement Consultancy",
    description:
      "End-to-end supply chain maturity assessment, procurement strategy, contract management, and logistics optimization tailored for industrial operations.",
    href: "/services#consultancy",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Digital Transformation",
    description:
      "IT maturity assessments, e-sourcing platforms, ERP implementation, blockchain solutions, and dashboard systems to modernize your industrial operations.",
    href: "/services#digital",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.5c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 5c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "Industrial Sourcing",
    description:
      "Global procurement of minerals, mining chemicals, and industrial consumables with quality assurance and optimized supply chain logistics.",
    href: "/services#sourcing",
  },
];

const industries = [
  {
    title: "Mining",
    subtitle: "Core Expertise",
    description:
      "Comprehensive mining solutions including chemicals, consumables, and digital tools purpose-built for modern mine operations worldwide.",
    stat: "Primary Industry",
    href: "/industries#mining",
    gradient: "from-navy-950 to-navy-800",
  },
  {
    title: "Automotive",
    subtitle: "40+ Years in Turkey",
    description:
      "Deep-rooted expertise in the Turkish automotive sector, now leveraged for operations in Angola and growing African markets.",
    stat: "Established Market",
    href: "/industries#automotive",
    gradient: "from-navy-900 to-navy-700",
  },
  {
    title: "Oil & Gas",
    subtitle: "40+ Years Experience",
    description:
      "Proven track record in oil & gas procurement and supply chain, delivering high-reliability solutions for upstream and downstream operations.",
    stat: "High Complexity",
    href: "/industries#oil-gas",
    gradient: "from-navy-800 to-navy-600",
  },
];

const whyChooseUs = [
  {
    number: "01",
    title: "28+ Years of Expertise",
    description:
      "Decades of proven experience in industrial procurement, mining, and supply chain across multiple continents.",
  },
  {
    number: "02",
    title: "Global Reach, Local Knowledge",
    description:
      "Operational presence in Turkey and Angola, combining global standards with deep local market understanding.",
  },
  {
    number: "03",
    title: "Integrated Solutions",
    description:
      "Unique capability to deliver consultancy, digital tools, and physical sourcing under one roof — simplifying your vendor landscape.",
  },
  {
    number: "04",
    title: "Digital-First Approach",
    description:
      "Pioneering the adoption of blockchain, e-sourcing, and ERP systems in sectors where digitalisation is transformative.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0">
          {/* Gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(#C9963F 1px, transparent 1px), linear-gradient(90deg, #C9963F 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          {/* Glow orbs */}
          <div className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full bg-navy-700/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gold-900/10 blur-3xl" />
        </div>

        {/* Geometric decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 border border-gold-700/15 rotate-12" />
          <div className="absolute top-40 right-40 w-48 h-48 border border-gold-700/10 rotate-12" />
          <div className="absolute bottom-20 left-10 w-40 h-40 border border-white/5 rotate-45" />
          <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-gold-600/30 rotate-45" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold-500/50 rounded-full" />
          <div className="absolute bottom-1/3 right-1/5 w-3 h-3 bg-gold-600/40 rotate-12" />
        </div>

        {/* Gold left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-600 to-transparent" />

        <div className="container-custom relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Pre-title badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-gold-600" />
              <span className="text-gold-400 text-xs font-bold tracking-[0.25em] uppercase">
                Global Industrial Solutions
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              Transforming{" "}
              <span className="text-gold-500 relative">
                Industrial
                <span className="absolute bottom-0 left-0 right-0 h-px bg-gold-500/40" />
              </span>{" "}
              <br className="hidden md:block" />
              Operations Globally
            </h1>

            {/* Subheadline */}
            <p className="text-white/65 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              AnaMine delivers integrated mining chemicals, procurement
              consultancy, and digital transformation solutions — from Turkey to
              Angola and beyond. Exceptional Services, Unique Values.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn-primary text-sm">
                Explore Our Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-outline text-sm">
                Contact Our Team
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 mt-14 pt-10 border-t border-white/10">
              <div className="text-center">
                <div className="text-white font-display font-bold text-2xl">28+</div>
                <div className="text-white/50 text-xs tracking-wide uppercase mt-0.5">Years</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-white font-display font-bold text-2xl">35K+</div>
                <div className="text-white/50 text-xs tracking-wide uppercase mt-0.5">Projects</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-white font-display font-bold text-2xl">2</div>
                <div className="text-white/50 text-xs tracking-wide uppercase mt-0.5">Continents</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-white font-display font-bold text-2xl">3</div>
                <div className="text-white/50 text-xs tracking-wide uppercase mt-0.5">Industries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════ STATS BANNER ═══════════════════════ */}
      <section className="bg-navy-900 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
            <AnimatedCounter end={28} suffix="+" label="Years of Experience" description="Since 1996" />
            <AnimatedCounter end={35000} suffix="+" label="Projects Completed" description="Across all verticals" />
            <AnimatedCounter end={3} label="Core Industries" description="Mining · Auto · Oil & Gas" />
            <AnimatedCounter end={2} label="Global Offices" description="Turkey & Angola" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SERVICES OVERVIEW ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="section-label mb-4">What We Do</p>
              <span className="gold-line mx-auto mb-6" />
              <h2 className="section-title mb-5">
                Integrated Solutions for Industrial Excellence
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                From strategy to execution, we provide end-to-end services that
                empower mining and industrial organizations to operate more
                efficiently and competitively.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 120}>
                <Link href={service.href} className="group block">
                  <div className="bg-white border border-slate-100 p-8 h-full card-hover hover:border-gold-300">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-navy-50 text-navy-700 group-hover:bg-gold-600 group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
                      {service.icon}
                    </div>
                    {/* Number */}
                    <div className="text-xs font-bold text-gold-600 tracking-widest mb-3">
                      0{i + 1}
                    </div>
                    <h3 className="font-display text-xl font-bold text-navy-900 mb-3 leading-snug group-hover:text-gold-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-gold-600 text-xs font-bold tracking-wide uppercase group-hover:gap-3 transition-all">
                      Learn More
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center mt-12">
              <Link href="/services" className="btn-outline-dark text-sm">
                View All Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════ INDUSTRIES ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <p className="section-label mb-4">Sectors We Serve</p>
              <span className="gold-line mb-6" />
              <h2 className="section-title mb-5">
                Deep Industry Expertise
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                With 28+ years operating in demanding industrial environments,
                AnaMine brings unmatched sector knowledge to every engagement.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.title} delay={i * 120}>
                <Link href={ind.href} className="group block">
                  <div className={`bg-gradient-to-br ${ind.gradient} p-8 h-72 flex flex-col justify-between relative overflow-hidden hover:scale-[1.01] transition-transform duration-300`}>
                    {/* Background decoration */}
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 border border-white/5 rotate-12 group-hover:border-gold-600/20 transition-colors" />
                    <div className="absolute -top-8 -left-8 w-32 h-32 border border-white/5 rotate-12" />

                    <div>
                      <span className="text-gold-500 text-xs font-bold tracking-widest uppercase block mb-2">
                        {ind.subtitle}
                      </span>
                      <h3 className="font-display text-3xl font-bold text-white mb-4">
                        {ind.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {ind.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-gold-400 text-xs font-bold tracking-wide uppercase group-hover:gap-3 transition-all">
                      Explore
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ WHY CHOOSE US ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="section-label mb-4">Why AnaMine</p>
                <span className="gold-line mb-6" />
                <h2 className="section-title mb-6">
                  Your Trusted Partner in Industrial Excellence
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  We combine decades of hands-on experience with cutting-edge
                  digital capabilities to deliver measurable results for our
                  clients across challenging industrial environments.
                </p>
                <Link href="/about" className="btn-primary text-sm">
                  Learn About AnaMine
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item, i) => (
                <ScrollReveal key={item.number} delay={i * 100}>
                  <div className="p-6 border border-slate-100 hover:border-gold-300 hover:shadow-lg transition-all duration-300">
                    <div className="text-gold-600/30 font-display font-bold text-4xl leading-none mb-4">
                      {item.number}
                    </div>
                    <h3 className="font-display font-bold text-navy-900 text-base mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ GLOBAL PRESENCE STRIP ═══════════════════════ */}
      <section className="py-16 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#C9963F 1px, transparent 1px), linear-gradient(90deg, #C9963F 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <ScrollReveal>
              <div>
                <p className="section-label mb-3">Global Presence</p>
                <h2 className="text-white font-display text-2xl md:text-3xl font-bold">
                  Operating Across Two Continents
                </h2>
              </div>
            </ScrollReveal>
            <div className="flex flex-col sm:flex-row gap-6">
              <ScrollReveal delay={100}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-600/20 border border-gold-600/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-1">Headquarters</p>
                    <p className="text-white font-semibold">Istanbul, Turkey</p>
                  </div>
                </div>
              </ScrollReveal>
              <div className="w-px bg-white/10 hidden sm:block" />
              <ScrollReveal delay={200}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-600/20 border border-gold-600/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-1">Branch Office</p>
                    <p className="text-white font-semibold">Luanda, Angola</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={300}>
              <Link href="/global-operations" className="btn-outline text-sm whitespace-nowrap">
                Our Global Offices
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA SECTION ═══════════════════════ */}
      <section className="py-24 md:py-32 bg-gold-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 border border-white/15 rotate-12" />
          <div className="absolute bottom-0 left-1/4 w-60 h-60 border border-white/10 rotate-45" />
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white/20 rotate-45" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <p className="text-white/70 text-xs font-bold tracking-[0.25em] uppercase mb-4">
              Ready to Partner With Us?
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Build Something
              <br />
              Exceptional Together
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you need procurement consultancy, digital transformation, or
              industrial sourcing — our team is ready to deliver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-gold-700 hover:bg-navy-950 hover:text-white font-bold px-8 py-4 text-sm tracking-wide uppercase transition-colors duration-300"
              >
                Start the Conversation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-gold-700 font-bold px-8 py-4 text-sm tracking-wide uppercase transition-colors duration-300"
              >
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
