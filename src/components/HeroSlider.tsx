"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/hero1.jpg",
    label: "Industrial Excellence",
    heading: "Exceptional Services,\nUnique Values!",
    subheading: "We are a team of dedicated professionals committed to transforming mining and industrial operations worldwide.",
    cta1: { text: "Explore Our Services", href: "/services" },
    cta2: { text: "Contact Us", href: "/contact" },
  },
  {
    image: "/images/hero2.jpg",
    label: "Global Reach",
    heading: "Solid International\nExperience",
    subheading: "Qualified solution provider in the industry. 28+ years of expertise across mining, automotive, and oil & gas sectors.",
    cta1: { text: "Who We Are", href: "/about" },
    cta2: { text: "Our Industries", href: "/industries" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 300);
    },
    [animating, current]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={s.image}
              alt={s.label}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-900/40" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#C9963F 1px, transparent 1px), linear-gradient(90deg, #C9963F 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gold left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-600 to-transparent z-10" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Slide label */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-500 ${
              animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <div className="h-px w-10 bg-gold-600" />
            <span className="text-gold-400 text-xs font-bold tracking-[0.25em] uppercase">
              {slide.label}
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 whitespace-pre-line transition-all duration-500 delay-75 ${
              animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {slide.heading.split("\n").map((line, i) => (
              <span key={i}>
                {i === 0 ? (
                  line
                ) : (
                  <>
                    <br />
                    <span className="text-gold-400">{line}</span>
                  </>
                )}
              </span>
            ))}
          </h1>

          {/* Subheading */}
          <p
            className={`text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl transition-all duration-500 delay-150 ${
              animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {slide.subheading}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-14 transition-all duration-500 delay-200 ${
              animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <Link href={slide.cta1.href} className="btn-primary text-sm">
              {slide.cta1.text}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link href={slide.cta2.href} className="btn-outline text-sm">
              {slide.cta2.text}
            </Link>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/10">
            {[
              { value: "35K+", label: "Projects Completed" },
              { value: "28+", label: "Years Experience" },
              { value: "15+", label: "Years Current Ops" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-bold text-2xl text-white">
                  {s.value}
                </div>
                <div className="text-white/50 text-xs tracking-wide uppercase mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 ${
              i === current
                ? "w-8 h-1 bg-gold-500"
                : "w-2 h-2 bg-white/30 hover:bg-white/60 rounded-full"
            }`}
          />
        ))}
      </div>

      {/* Nav arrows */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-gold-600 border border-white/20 hover:border-gold-600 text-white flex items-center justify-center transition-all duration-200 hidden md:flex"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-gold-600 border border-white/20 hover:border-gold-600 text-white flex items-center justify-center transition-all duration-200 hidden md:flex"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </section>
  );
}
