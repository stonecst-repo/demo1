import Link from "next/link";
import Image from "next/image";

const services = [
  "Supply Chain Maturity Assessment",
  "Procurement & Contract Management",
  "E-Sourcing Platforms",
  "ERP Implementation",
  "Mining Chemicals Sourcing",
  "Inventory Optimization Software",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/industries", label: "Industries" },
  { href: "/global-operations", label: "Global Operations" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="AnaMine"
                width={140}
                height={44}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Transforming Vision into Business Success. AnaMine delivers
              integrated mining chemicals, procurement consultancy, and digital
              transformation solutions to industrial clients worldwide.
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-white/60">
              <a
                href="mailto:info@anamine.com.tr"
                className="hover:text-gold-400 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-gold-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@anamine.com.tr
              </a>
              <a
                href="tel:+244927359000"
                className="hover:text-gold-400 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-gold-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +244 927 359 000
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-gold-600/50 group-hover:w-5 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-gold-600/50 group-hover:w-5 transition-all duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-6">
              Our Office
            </h4>
            <div className="space-y-2 text-sm text-white/60 leading-relaxed mb-6">
              <p className="text-gold-500 font-semibold text-xs tracking-widest uppercase">
                Luanda, Angola
              </p>
              <p>
                Condominio Belas Business Park<br />
                Etapa V, Edificio Cuanza Sul<br />
                6° Piso, Talatona Municipality<br />
                Luanda, Angola
              </p>
            </div>
            <div className="space-y-2 text-sm text-white/60 leading-relaxed">
              <p className="text-gold-500 font-semibold text-xs tracking-widest uppercase">
                Turkey (HQ)
              </p>
              <p>Istanbul, Turkey</p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/40 text-xs mb-3 uppercase tracking-widest">Languages</p>
              <div className="flex gap-3">
                {["EN", "FR", "PT"].map((lang) => (
                  <span key={lang} className="text-white/50 text-xs border border-white/20 px-2 py-0.5 hover:text-gold-400 hover:border-gold-600/40 transition-colors cursor-pointer">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-700/50 to-transparent" />

      {/* Bottom Bar */}
      <div className="container-custom py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>
            © {new Date().getFullYear()} AnaMine Comercio e Servicos LDA. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-gold-400 transition-colors">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
