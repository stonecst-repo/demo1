interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export default function PageHero({ label, title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative bg-navy-950 overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 border border-gold-600/10 rotate-12" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 border border-gold-600/10 rotate-45" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-white/5 rotate-12" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[350px] bg-navy-800/40 rounded-full blur-3xl" />
      </div>

      {/* Gold left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-600 to-transparent opacity-60" />

      <div className="container-custom relative z-10">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8 tracking-wide flex-wrap">
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-gold-700">›</span>}
                <span className={i === breadcrumb.length - 1 ? "text-gold-400" : ""}>
                  {item.label}
                </span>
              </span>
            ))}
          </nav>
        )}

        {/* Label */}
        <p className="section-label mb-4">{label}</p>

        {/* Gold line */}
        <span className="gold-line mb-6" />

        {/* Title — capped at 3xl/4xl to prevent overflow */}
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-3xl mb-5">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
