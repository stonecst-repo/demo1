"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/global-operations", label: "Global Operations" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navBg = scrolled || !isHome
    ? "bg-white shadow-md"
    : "bg-transparent";

  const logoColor = scrolled || !isHome ? "text-navy-900" : "text-white";
  const logoAccent = "text-gold-600";
  const linkColor = scrolled || !isHome
    ? "text-navy-700 hover:text-gold-600"
    : "text-white/90 hover:text-white";
  const activeColor = scrolled || !isHome ? "text-gold-600" : "text-gold-400";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gold-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-display font-bold text-lg">A</span>
            </div>
            <div className="leading-none">
              <span className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${logoColor}`}>
                Ana<span className={logoAccent}>Mine</span>
              </span>
              <p className={`text-[9px] tracking-[0.18em] uppercase mt-0.5 transition-colors duration-300 ${scrolled || !isHome ? "text-slate-400" : "text-white/60"}`}>
                Global Industrial Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-semibold tracking-wide transition-colors duration-200 relative group ${
                  pathname === link.href ? activeColor : linkColor
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gold-600 transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 bg-gold-600 hover:bg-gold-700 text-white text-[12px] font-bold tracking-widest uppercase px-5 py-2.5 transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden flex flex-col gap-1.5 p-2 transition-colors ${scrolled || !isHome ? "text-navy-900" : "text-white"}`}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                mobileOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                mobileOpen ? "w-0 opacity-0" : "w-5"
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                mobileOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-navy-950 transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] border-t border-white/10" : "max-h-0"
        }`}
      >
        <nav className="container-custom py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3 px-4 text-sm font-semibold tracking-wide transition-colors duration-200 border-b border-white/5 ${
                pathname === link.href
                  ? "text-gold-400 bg-white/5"
                  : "text-white/80 hover:text-gold-400 hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 bg-gold-600 text-white text-center py-3 text-sm font-bold tracking-widest uppercase"
          >
            Get In Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
