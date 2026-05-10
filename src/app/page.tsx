import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "AnaMine | Mining, Industrial Chemicals & Digital Transformation",
  description:
    "AnaMine delivers integrated mining chemicals, procurement consultancy, and digital transformation solutions — Exceptional Services, Unique Values.",
};

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    num: "01",
    title: "Supply Chain & Procurement Consultancy",
    description:
      "Maturity assessments, procurement strategy, contract management, logistics optimisation, and risk assessment tailored for industrial operations.",
    href: "/services#consultancy",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    num: "02",
    title: "Digital Transformation",
    description:
      "IT maturity assessments, e-sourcing platforms, ERP implementation, inventory optimisation software, blockchain, and dashboard solutions.",
    href: "/services#digital",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.5c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 5c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    num: "03",
    title: "Industrial Sourcing",
    description:
      "Global procurement of minerals, mining chemicals, and industrial consumables with quality assurance and optimised supply chain logistics.",
    href: "/services#sourcing",
  },
];

const whyChooseUs = [
  {
    iconFile: "/images/choose-icon1.svg",
    title: "Expertise",
    description:
      "Our team comprises mining industry experts and digital transformation specialists who deeply understand the challenges and opportunities in the sector.",
  },
  {
    iconFile: "/images/choose-icon2.svg",
    title: "End-to-End Solutions",
    description:
      "We deliver a seamless experience — from digital strategy development to consumables delivery — simplifying your operations with a single trusted partner.",
  },
  {
    iconFile: "/images/choose-icon3.svg",
    title: "Efficiency",
    description:
      "Our services are designed to enhance operational efficiency, reducing downtime and maximising productivity across your mining and industrial operations.",
  },
  {
    iconFile: "/images/choose-icon4.svg",
    title: "Reliability",
    description:
      "We provide timely and dependable supply chain solutions, ensuring your mining operations run smoothly with the right materials at the right time.",
  },
];

const newsItems = [
  {
    date: "29 Jun 2021",
    image: "/images/news1.jpg",
    category: "Digital Innovation",
    title: "Exciting News on Inventory Optimization!",
    excerpt:
      "AnaMine announces a major advancement in inventory optimisation technology, bringing smarter stock management to mining operations.",
  },
  {
    date: "29 Jun 2021",
    image: "/images/news2.jpg",
    category: "Sourcing",
    title: "AnaMine to Source Ferro Alloys in Angola!",
    excerpt:
      "Exciting news as AnaMine expands its mineral sourcing capabilities in Angola, establishing supply lines for ferro alloys to serve local mining clients.",
  },
  {
    date: "29 Jun 2021",
    image: "/images/news3.jpg",
    category: "Sourcing",
    title: "Exciting News In Conveyor Belts Sourcing for Angola Mines!",
    excerpt:
      "AnaMine secures supply agreements for industrial conveyor belts, strengthening its consumables offering to Angola's growing mining sector.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════ HERO SLIDER ═══════════════════════ */}
      <HeroSlider />

      {/* ═══════════════════════ STATS BANNER ═══════════════════════ */}
      <section className="bg-navy-900 py-14">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:divide-x divide-white/10">
            <AnimatedCounter end={35000} suffix="+" label="Projects Completed" description="Across all verticals" />
            <AnimatedCounter end={28} suffix="+" label="Years of Experience" description="Since 1996" />
            <AnimatedCounter end={15} suffix="+" label="Years Current Operations" description="Ongoing excellence" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════ ABOUT / INTRO ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <ScrollReveal>
              <div className="relative">
                <div className="relative overflow-hidden aspect-[4/5] max-w-md mx-auto lg:max-w-none">
                  <Image
                    src="/images/about1.jpg"
                    alt="AnaMine mining operations — aerial view of open pit mine"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-4 -right-4 bg-gold-600 p-5 shadow-xl hidden sm:block">
                  <div className="font-display font-bold text-white text-3xl leading-none">28+</div>
                  <div className="text-white/80 text-xs tracking-widest uppercase mt-1">Years of Excellence</div>
                </div>
                {/* Gold border accent */}
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold-600" />
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal delay={150}>
              <div>
                <p className="section-label mb-4">Who We Are</p>
                <span className="gold-line mb-6" />
                <h2 className="section-title mb-6">
                  Transforming Vision into Business Success
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
                  <p>
                    AnaMine is a dynamic organisation that combines cutting-edge
                    digital transformation services with comprehensive consumables
                    supply, delivering excellence to mining companies worldwide.
                  </p>
                  <p>
                    We are a team of dedicated professionals with 28+ years of
                    solid international experience in the mining, automotive, and
                    oil &amp; gas sectors — bringing together deep industry knowledge
                    and modern digital capabilities under one roof.
                  </p>
                  <p>
                    From our offices in Istanbul and Luanda, we serve clients across
                    Europe, the Middle East, and Sub-Saharan Africa — providing
                    integrated consultancy, digital tools, and industrial sourcing
                    solutions that create lasting competitive advantage.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/about" className="btn-primary text-sm">
                    Learn More About Us
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                  <Link href="/contact" className="btn-outline-dark text-sm">
                    Contact Us
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SERVICES ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-label mb-4">What We Do</p>
              <span className="gold-line mx-auto mb-6" />
              <h2 className="section-title mb-5">
                Integrated Solutions for Industrial Excellence
              </h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                Three service lines — consultancy, digital transformation, and
                sourcing — designed to strengthen every dimension of your
                industrial operations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 120}>
                <Link href={service.href} className="group block h-full">
                  <div className="bg-white border border-slate-100 p-7 h-full card-hover hover:border-gold-300 flex flex-col">
                    <div className="w-13 h-13 w-12 h-12 bg-navy-50 text-navy-700 group-hover:bg-gold-600 group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-300 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="text-xs font-bold text-gold-600 tracking-widest mb-2">
                      {service.num}
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy-900 mb-3 leading-snug group-hover:text-gold-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-gold-600 text-xs font-bold tracking-wide uppercase group-hover:gap-3 transition-all mt-auto">
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
            <div className="text-center mt-10">
              <Link href="/services" className="btn-outline-dark text-sm">
                View All Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════ WHY CHOOSE US ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-navy-950 relative overflow-hidden">
        {/* BG pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#C9963F 1px, transparent 1px), linear-gradient(90deg, #C9963F 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-label mb-4">Why Choose AnaMine</p>
              <span className="gold-line mx-auto mb-6" />
              <h2 className="section-title-light mb-5">
                Your Trusted Industrial Solutions Partner
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed">
                We combine decades of hands-on expertise with cutting-edge digital
                capabilities to deliver measurable results in demanding environments.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="group p-6 border border-white/8 hover:border-gold-600/40 hover:bg-white/5 transition-all duration-300 flex flex-col items-start gap-4 h-full">
                  {/* Icon from reference site */}
                  <div className="w-14 h-14 bg-gold-600/15 border border-gold-600/20 group-hover:bg-gold-600 flex items-center justify-center flex-shrink-0 transition-colors duration-300 p-3">
                    <Image
                      src={item.iconFile}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ INDUSTRIES STRIP ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-2xl mb-14">
              <p className="section-label mb-4">Sectors We Serve</p>
              <span className="gold-line mb-6" />
              <h2 className="section-title mb-5">Deep Industry Expertise</h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                With 28+ years operating in demanding industrial environments,
                AnaMine brings unmatched sector knowledge to every engagement.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Mining",
                subtitle: "Core Industry",
                description: "Supply chain and digital transformation solutions under the Kaizen philosophy, delivering continuous improvement to mining operations worldwide.",
                gradient: "from-navy-950 to-navy-800",
              },
              {
                title: "Automotive",
                subtitle: "40+ Years in Turkey",
                description: "Deep-rooted expertise in Turkey's automotive sector, now leveraged for operations in Angola and growing African markets.",
                gradient: "from-navy-900 to-navy-700",
              },
              {
                title: "Oil & Gas",
                subtitle: "40+ Years Experience",
                description: "Proven track record in spare parts and supply chain for oil & gas, delivering high-reliability solutions for upstream and downstream operations.",
                gradient: "from-navy-800 to-navy-600",
              },
            ].map((ind, i) => (
              <ScrollReveal key={ind.title} delay={i * 120}>
                <Link href={`/industries#${ind.title.toLowerCase().replace(" & ", "-")}`} className="group block">
                  <div className={`bg-gradient-to-br ${ind.gradient} p-8 h-64 flex flex-col justify-between relative overflow-hidden hover:scale-[1.01] transition-transform duration-300`}>
                    <div className="absolute -bottom-10 -right-10 w-44 h-44 border border-white/5 rotate-12 group-hover:border-gold-600/20 transition-colors" />
                    <div>
                      <span className="text-gold-500 text-xs font-bold tracking-widest uppercase block mb-2">
                        {ind.subtitle}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-white mb-3">
                        {ind.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
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

      {/* ═══════════════════════ NEWS SECTION ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
              <div>
                <p className="section-label mb-4">Latest Updates</p>
                <span className="gold-line mb-6" />
                <h2 className="section-title">News &amp; Insights</h2>
              </div>
              <Link href="/contact" className="btn-outline-dark text-sm self-start sm:self-auto whitespace-nowrap">
                View All News
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 120}>
                <div className="bg-white border border-slate-100 group hover:shadow-xl hover:border-gold-200 transition-all duration-300 flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-gold-600 text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1">
                      {item.category}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-slate-400 text-xs tracking-wide mb-3 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      {item.date}
                    </p>
                    <h3 className="font-display font-bold text-navy-900 text-base leading-snug mb-3 group-hover:text-gold-700 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-gold-600 text-xs font-bold tracking-wide uppercase group-hover:gap-3 transition-all mt-auto">
                      Read More
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ GLOBAL PRESENCE ═══════════════════════ */}
      <section className="py-14 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#C9963F 1px, transparent 1px), linear-gradient(90deg, #C9963F 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <ScrollReveal>
              <div>
                <p className="section-label mb-3">Global Presence</p>
                <h2 className="text-white font-display text-2xl md:text-3xl font-bold leading-snug">
                  Operating Across Two Continents
                </h2>
              </div>
            </ScrollReveal>
            <div className="flex flex-col sm:flex-row gap-6">
              {[
                { flag: "🇹🇷", label: "Headquarters", city: "Istanbul, Turkey" },
                { flag: "🇦🇴", label: "Branch Office", city: "Luanda, Angola" },
              ].map((office, i) => (
                <ScrollReveal key={office.city} delay={i * 100}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold-600/20 border border-gold-600/30 flex items-center justify-center text-xl flex-shrink-0">
                      {office.flag}
                    </div>
                    <div>
                      <p className="text-gold-400 text-xs font-bold tracking-widest uppercase">{office.label}</p>
                      <p className="text-white font-semibold text-sm">{office.city}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={200}>
              <Link href="/global-operations" className="btn-outline text-sm whitespace-nowrap">
                Our Global Offices
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <section className="py-24 bg-gold-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 -right-16 w-64 h-64 border border-white/15 rotate-12" />
          <div className="absolute -bottom-8 left-1/4 w-48 h-48 border border-white/10 rotate-45" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <p className="text-white/70 text-xs font-bold tracking-[0.25em] uppercase mb-4">
              Ready to Partner With Us?
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Let&apos;s Build Something Exceptional Together
            </h2>
            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you need procurement consultancy, digital transformation, or
              industrial sourcing — our team is ready to deliver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gold-700 hover:bg-navy-950 hover:text-white font-bold px-8 py-4 text-sm tracking-wide uppercase transition-colors duration-300"
              >
                Start the Conversation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-gold-700 font-bold px-8 py-4 text-sm tracking-wide uppercase transition-colors duration-300"
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
