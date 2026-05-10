import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AnaMine offers integrated services: supply chain consultancy, digital transformation (ERP, e-sourcing, blockchain), and industrial sourcing of mining chemicals and consumables.",
};

const consultancyServices = [
  {
    title: "Supply Chain Maturity Assessment",
    description:
      "Comprehensive evaluation of your current supply chain capabilities, identifying gaps and opportunities for improvement against global benchmarks.",
  },
  {
    title: "Procurement & Contract Management",
    description:
      "Strategic procurement frameworks, contract design, supplier qualification, and ongoing contract performance management.",
  },
  {
    title: "Logistics, Inventory & Warehouse Management",
    description:
      "End-to-end logistics optimization, inventory right-sizing, and warehouse process design for maximum operational efficiency.",
  },
  {
    title: "Sales & Distribution Strategy",
    description:
      "Market entry strategy, distribution network design, and sales channel optimization for industrial products and services.",
  },
  {
    title: "Risk Assessment & Mitigation",
    description:
      "Identification, quantification, and mitigation planning for supply chain, operational, and commercial risks.",
  },
];

const digitalServices = [
  {
    title: "IT Maturity Assessment",
    description:
      "Structured evaluation of your current IT landscape and digital readiness, benchmarked against industry standards.",
  },
  {
    title: "E-Sourcing Platforms",
    description:
      "Implementation and optimization of electronic sourcing platforms to digitize and streamline procurement processes.",
  },
  {
    title: "Dashboard Implementation",
    description:
      "Real-time operational dashboards and KPI reporting systems tailored to mining and industrial operations.",
  },
  {
    title: "Inventory Optimization Software",
    description:
      "AI-driven inventory management software to reduce stock-outs, excess inventory, and associated carrying costs.",
  },
  {
    title: "Blockchain Solutions",
    description:
      "Supply chain traceability and provenance verification using distributed ledger technology for high-value minerals and chemicals.",
  },
  {
    title: "ERP Implementation Services",
    description:
      "Full-cycle ERP deployment — from needs assessment and vendor selection to implementation, training, and post-go-live support.",
  },
];

const sourcingServices = [
  {
    title: "Minerals Procurement",
    description:
      "Global sourcing of industrial minerals with quality verification, customs clearance, and logistics management.",
  },
  {
    title: "Mining Chemicals",
    description:
      "Procurement and supply of flotation reagents, leaching chemicals, flocculants, and specialty mining chemical formulations.",
  },
  {
    title: "Industrial Consumables",
    description:
      "End-to-end supply of grinding media, liners, PPE, laboratory supplies, and other critical mining consumables.",
  },
];

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
}

function ServiceCard({ title, description, index }: ServiceCardProps) {
  return (
    <ScrollReveal delay={index * 80}>
      <div className="group flex gap-5 p-5 border border-slate-100 hover:border-gold-300 hover:shadow-md transition-all duration-300">
        <div className="w-8 h-8 bg-gold-600/10 text-gold-600 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <div>
          <h4 className="font-display font-bold text-navy-900 text-base mb-1.5 group-hover:text-gold-700 transition-colors">
            {title}
          </h4>
          <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Comprehensive Solutions for Industrial Leaders"
        subtitle="Three integrated service lines — consultancy, digital transformation, and sourcing — designed to strengthen every dimension of your industrial operations."
        breadcrumb={[{ label: "Home" }, { label: "Services" }]}
      />

      {/* ═══════════════════════ OVERVIEW ═══════════════════════ */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Consultancy",
                desc: "Supply chain maturity, procurement strategy, logistics, and risk assessment.",
                href: "#consultancy",
              },
              {
                num: "02",
                title: "Digital Transformation",
                desc: "ERP, e-sourcing, blockchain, dashboards, and IT assessments.",
                href: "#digital",
              },
              {
                num: "03",
                title: "Industrial Sourcing",
                desc: "Minerals, mining chemicals, and industrial consumables procurement.",
                href: "#sourcing",
              },
            ].map((s) => (
              <a
                key={s.num}
                href={s.href}
                className="group flex gap-5 p-6 bg-slate-50 hover:bg-navy-950 transition-colors duration-300"
              >
                <div className="text-gold-600/40 group-hover:text-gold-500 font-display font-bold text-4xl leading-none flex-shrink-0 transition-colors">
                  {s.num}
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-900 group-hover:text-white text-xl mb-2 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 group-hover:text-white/60 text-sm leading-relaxed transition-colors">
                    {s.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CONSULTANCY ═══════════════════════ */}
      <section id="consultancy" className="py-20 md:py-28 bg-white scroll-mt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left info */}
            <ScrollReveal>
              <div className="lg:col-span-2">
                <p className="section-label mb-4">Service Line 01</p>
                <span className="gold-line mb-6" />
                <h2 className="section-title mb-6">
                  Supply Chain & Procurement Consultancy
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6">
                  We help industrial organisations assess, design, and execute
                  world-class supply chain and procurement strategies. From
                  initial maturity benchmarking through to full transformation
                  programmes, AnaMine brings deep sector expertise and practical,
                  results-oriented thinking.
                </p>
                <p className="text-slate-500 leading-relaxed mb-8">
                  Our consultants have hands-on experience in Turkey, Angola, and
                  across global mining and energy operations — meaning our
                  recommendations are grounded in real-world context.
                </p>
                <Link href="/contact" className="btn-primary text-sm">
                  Discuss Your Needs
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            {/* Services grid */}
            <div className="lg:col-span-3 grid grid-cols-1 gap-4">
              {consultancyServices.map((s, i) => (
                <ServiceCard key={s.title} {...s} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ DIGITAL TRANSFORMATION ═══════════════════════ */}
      <section id="digital" className="py-20 md:py-28 bg-navy-950 scroll-mt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Services grid first on mobile */}
            <div className="lg:col-span-3 grid grid-cols-1 gap-4 lg:order-1 order-2">
              {digitalServices.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 70}>
                  <div className="group flex gap-5 p-5 border border-white/5 hover:border-gold-600/40 hover:bg-white/5 transition-all duration-300">
                    <div className="w-8 h-8 bg-gold-600/20 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-base mb-1.5">{s.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Right info */}
            <ScrollReveal className="lg:col-span-2 lg:order-2 order-1">
              <div>
                <p className="section-label mb-4">Service Line 02</p>
                <span className="gold-line mb-6" />
                <h2 className="section-title-light mb-6">
                  Digital Transformation
                </h2>
                <p className="text-white/65 leading-relaxed mb-6">
                  The mining and industrial sectors are undergoing a profound
                  digital shift. AnaMine leads this transition for our clients —
                  implementing enterprise systems, analytics platforms, and
                  emerging technologies that create lasting operational
                  advantages.
                </p>
                <p className="text-white/65 leading-relaxed mb-8">
                  We don&apos;t just implement technology — we ensure adoption,
                  deliver training, and measure outcomes to guarantee real ROI.
                </p>
                <Link href="/contact" className="btn-outline text-sm">
                  Start Your Digital Journey
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SOURCING ═══════════════════════ */}
      <section id="sourcing" className="py-20 md:py-28 bg-white scroll-mt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left info */}
            <ScrollReveal>
              <div className="lg:col-span-2">
                <p className="section-label mb-4">Service Line 03</p>
                <span className="gold-line mb-6" />
                <h2 className="section-title mb-6">
                  Industrial Sourcing
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6">
                  AnaMine&apos;s sourcing capabilities span the global minerals
                  and chemicals market. We leverage our extensive supplier
                  network and logistics expertise to ensure our clients receive
                  the right products, at the right quality, at competitive prices
                  — on time, every time.
                </p>
                <p className="text-slate-500 leading-relaxed mb-8">
                  Our quality assurance protocols and supplier vetting processes
                  mean you can trust the integrity of every product we source.
                </p>
                <Link href="/contact" className="btn-primary text-sm">
                  Request Sourcing Quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            {/* Sourcing cards */}
            <div className="lg:col-span-3 grid grid-cols-1 gap-6">
              {sourcingServices.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 100}>
                  <div className="group p-8 bg-slate-50 border border-slate-100 hover:border-gold-300 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-navy-950 text-gold-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.5c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 5c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-navy-900 text-lg mb-2 group-hover:text-gold-700 transition-colors">
                          {s.title}
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold-600 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 -right-16 w-64 h-64 border border-white/15 rotate-12" />
          <div className="absolute -bottom-8 left-1/4 w-48 h-48 border border-white/10 rotate-45" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
              Not sure which service you need?
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Our team will help you identify the right combination of services
              to meet your specific operational and business goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-gold-700 hover:bg-navy-950 hover:text-white font-bold px-8 py-4 text-sm tracking-wide uppercase transition-colors duration-300"
            >
              Talk to an Expert
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
