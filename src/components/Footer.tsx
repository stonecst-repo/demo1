import Link from "next/link";

const services = [
  "Supply Chain Consultancy",
  "Digital Transformation",
  "E-Sourcing Platforms",
  "ERP Implementation",
  "Mining Chemicals Sourcing",
  "Procurement Management",
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
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-600 flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">A</span>
              </div>
              <div className="leading-none">
                <span className="font-display font-bold text-xl text-white tracking-tight">
                  Ana<span className="text-gold-500">Mine</span>
                </span>
                <p className="text-[9px] tracking-[0.18em] uppercase mt-0.5 text-white/40">
                  Global Industrial Solutions
                </p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Exceptional Services, Unique Values. Serving the mining,
              automotive, and oil &amp; gas industries with integrated
              consultancy, digital transformation, and sourcing solutions.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <a href="mailto:info@anamine.com.tr" className="hover:text-gold-400 transition-colors flex items-center gap-2">
                <span className="text-gold-600">✉</span> info@anamine.com.tr
              </a>
              <a href="tel:+244927359000" className="hover:text-gold-400 transition-colors flex items-center gap-2">
                <span className="text-gold-600">✆</span> +244 927 359 000
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

          {/* Offices */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-6">
              Global Offices
            </h4>
            <div className="space-y-5">
              <div>
                <p className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-1">
                  Headquarters — Turkey
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Istanbul, Turkey
                </p>
              </div>
              <div>
                <p className="text-gold-500 text-xs font-bold tracking-widest uppercase mb-1">
                  Branch — Angola
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Condominio Belas Business Park<br />
                  Etapa V, Edificio Cuanza Sul<br />
                  6° Piso, Talatona<br />
                  Luanda, Angola
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-700/50 to-transparent" />

      {/* Bottom Bar */}
      <div className="container-custom py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs">
          <p>
            © {new Date().getFullYear()} AnaMine Comercio e Servico LDA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-gold-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
