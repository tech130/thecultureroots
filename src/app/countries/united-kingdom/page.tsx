"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Languages, Calendar, LineChart, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

/* ─── OTHER COUNTRIES DATA ─── */
const otherCountries = [
  { num: "01", name: "CANADA", slug: "canada", img: "/images/markets/Canada-1.jpg" },
  { num: "02", name: "UNITED STATES", slug: "united-states", img: "/images/markets/United-States.jpg" },
  { num: "04", name: "AUSTRALIA", slug: "australia", img: "/images/markets/Australia.jpg" },
  { num: "05", name: "NEW ZEALAND", slug: "new-zealand", img: "/images/markets/New-Zealand.jpg" },
];

/* ─── FEATURES FOR RIGHT PANEL ─── */
const understandFeatures = [
  {
    num: "01",
    title: "On-The-Ground Research",
    subtitle: "Native cultural consultants in every market",
    desc: "We have native cultural consultants in every market we serve — not remote researchers, but people who grew up inside these communities, turning lived experience into brand intelligence.",
    icon: User
  },
  {
    num: "02",
    title: "Language & Dialect Intelligence",
    subtitle: "Beyond translation - tone, slang, unspoken rules",
    desc: "We dive deep into local dialects to ensure your brand's voice resonates authentically with your target demographics.",
    icon: Languages
  },
  {
    num: "03",
    title: "Cultural Calendar & Moments",
    subtitle: "Ramadan, Diwali, Eid, Lunar New Year & more",
    desc: "Strategic planning around key cultural events to maximize your brand's relevance and impact throughout the year.",
    icon: Calendar
  },
  {
    num: "04",
    title: "Audience Behaviour Data",
    subtitle: "Cultural intuition backed by hard data",
    desc: "Combining qualitative cultural insights with quantitative behavioral data to drive measurable campaign success.",
    icon: LineChart
  },
];

const ALL_CITIES = [
  { name: "London", src: "/images/countries/united-kingdom/London.avif", objectPosition: "center", filter: "none" },
  { name: "Birmingham", src: "/images/countries/united-kingdom/Birmingham.webp", objectPosition: "center", filter: "none" },
  { name: "Manchester", src: "/images/countries/united-kingdom/Manchester.jpg", objectPosition: "center", filter: "none" },
  { name: "Leicester", src: "/images/countries/united-kingdom/Leicester.jpg", objectPosition: "center", filter: "none" },
  { name: "Bradford", src: "/images/countries/united-kingdom/Bradford.jpg", objectPosition: "center", filter: "none" },
];

/* ═══════════════════════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {/* Sharp full-screen background */}
      <Image
        src="/images/markets/United-Kingdom.jpg"
        alt="United Kingdom — Diversity Woven into Society"
        fill
        style={{ objectFit: "cover", objectPosition: "center center", zIndex: 0 }}
        priority
        sizes="100vw"
      />

      {/* Left blur overlay */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: 0, bottom: 0, left: 0,
          width: "55%",
          zIndex: 2,
          backdropFilter: "blur(15px) brightness(0.9)",
          WebkitBackdropFilter: "blur(15px) brightness(0.9)",
          clipPath: "polygon(0 0, 85% 0, 70% 100%, 0% 100%)",
        }}
      />

      {/* Right blur overlay */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        style={{
          position: "absolute",
          top: 0, bottom: 0, right: 0,
          width: "45%",
          zIndex: 2,
          backdropFilter: "blur(15px) brightness(0.9)",
          WebkitBackdropFilter: "blur(15px) brightness(0.9)",
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 15% 100%)",
        }}
      />

      {/* Left content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: "absolute",
          left: "15%",
          top: "20%",
          width: "clamp(260px, 85%, 700px)",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
            fontWeight: 200,
            lineHeight: 1.1,
            color: "#ffffff",
            marginBottom: "1.25rem",
          }}
        >
          Diversity Woven<br />into Society
        </h1>

        <p
          style={{
            fontSize: "clamp(0.75rem, 1vw, 1rem)",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.88)",
            marginBottom: "2rem",
            maxWidth: "650px",
          }}
        >
          Canada&apos;s Cultures Are Its Strength. We Help Brands Tap Into Them.
          From South Asian communities in Toronto to Arab families in Montreal —
          we run culturally intelligent campaigns across Canada&apos;s most
          vibrant audiences.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.75rem 1.75rem",
              borderRadius: "100px",
              border: "1px solid rgba(255,255,255,0.55)",
              color: "#ffffff",
              fontSize: "0.9rem",
              fontWeight: 500,
              textDecoration: "none",
              backdropFilter: "blur(6px)",
              backgroundColor: "rgba(255,255,255,0.06)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.18)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.85)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)";
            }}
          >
            Contact Us
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
              }}
            >
              →
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* CA. country code */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          position: "absolute",
          bottom: "18%",
          right: "15%",
          zIndex: 10,
          fontSize: "clamp(4rem, 10vw, 8rem)",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          color: "#ffffff",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        UK.
      </motion.div>
    </section>
  );
}



/* ═══════════════════════════════════════════════════════
   SECTION 2 — WHERE EVERY CULTURE HAS A VOICE (WITH AUTO-SCROLL)
═══════════════════════════════════════════════════════ */
function CultureSection() {
  const [activeCity, setActiveCity] = useState(0);
  const cities = ALL_CITIES;

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCity((prev) => (prev + 1) % cities.length);
    }, 3500); // Change slide every 3.5 seconds

    return () => clearInterval(interval);
  }, [cities.length]);

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        backgroundColor: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── LEFT: Text Content ── */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          padding: "1rem 5% 4rem 8%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: "2rem", color: "#000", fontWeight: 300 }}>
          United Kingdom
        </p>
        <h2
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.1rem)",
            fontWeight: 700,
            color: "#111",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
          }}
        >
          Diversity Woven<br />into Society
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#000",
            lineHeight: 1.8,
            maxWidth: "560px",
          }}
        >
          The UK's multicultural landscape stretches from London's global communities to new diaspora hubs in Birmingham and Manchester. Nearly 15% of the population identify as ethnic minority — creating a dynamic, influential, and deeply connected audience.</p>
      </motion.div>

      {/* ── RIGHT: City Carousel ── */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "9rem 0 1rem 0",
        }}
      >
        {/* Scrollable track */}
        <motion.div
          animate={{ x: `calc(${-activeCity * 50}% - ${activeCity * 16}px)` }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          style={{
            display: "flex",
            gap: "16px",
            paddingLeft: "2rem",
            alignItems: "center",
          }}
        >
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              onClick={() => setActiveCity(i)}
              animate={{
                scale: activeCity === i ? 1 : 0.94,
                opacity: activeCity === i ? 1 : 0.65,
              }}
              transition={{ duration: 0.4 }}
              style={{
                /* Match design: ~42% of container width, tall rounded cards */
                minWidth: "calc(55% - 1rem)",
                height: "420px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <Image
                src={city.src}
                alt={city.name}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: city.objectPosition,
                  filter: city.filter,
                  transition: "transform 0.6s ease",
                }}
                sizes="30vw"
              />
              {/* Subtle gradient at bottom */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.45) 100%)",
                  zIndex: 1,
                }}
              />
              {/* City name label */}
              <div
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  left: "1.25rem",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  zIndex: 2,
                  letterSpacing: "-0.01em",
                }}
              >
                {city.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dot pagination — bottom left of carousel area */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            paddingLeft: "2rem",
            marginTop: "1.5rem",
          }}
        >
          {cities.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveCity(i)}
              style={{
                width: activeCity === i ? "40px" : "28px",
                height: "4px",
                borderRadius: "2px",
                border: "none",
                backgroundColor: activeCity === i ? "#111" : "#ccc",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 3 — HOW WE UNDERSTAND THEM  (Light bg)
═══════════════════════════════════════════════════════ */
function UnderstandSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [activeFeature, setActiveFeature] = useState(0);

  const stats = [
    { value: "67M+", label: "Population" },
    { value: "14%", label: "Foreign Born Residents" },
    { value: "100+", label: "Ethnic Groups" },
    { value: "10M+", label: "Multicultural Audiences" },
  ];

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#f9f9f9",
        padding: "4rem 2%",
        paddingTop: "6rem",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto", marginBottom: "3rem" }}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{
            fontSize: "clamp(2rem, 3vw, 2.5rem)",
            fontWeight: 600,
            color: "#111",
            textAlign: "center",
            margin: 0,
            letterSpacing: "-0.02em"
          }}
        >
          How We Understand Them
        </motion.h2>
      </div>

      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center"
        }}
      >
        {/* ── LEFT: Image card with stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            position: "relative",
            borderRadius: "32px",
            height: "700px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4rem 3rem",
            color: "white"
          }}
        >
          {/* Background Image */}
          <Image
            src="/images/markets/United-Kingdom.jpg"
            alt="Canada Landscape"
            fill
            style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
          />
          {/* Dark Overlay */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)", zIndex: 1 }} />

          <div style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            <p style={{ fontSize: "0.85rem", opacity: 0.8, marginBottom: "1.5rem" }}>Countries & Audiences</p>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                marginBottom: "1rem",
                maxWidth: "500px"
              }}
            >
              We Don&apos;t Study Cultures,<br />
              We Live In Them
            </h2>
            <p style={{ fontSize: "1rem", opacity: 0.8, maxWidth: "450px", lineHeight: 1.6 }}>
              Four layers of cultural intelligence — built over years of on-the-ground experience across every market we serve.
            </p>
          </div>

          {/* Stats Grid */}
          <div style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  padding: "1.5rem 2rem",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.2)"
                }}
              >
                <div style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "0.2rem", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: "1rem", fontWeight: 400, opacity: 0.9 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT: Feature accordion ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingRight: "2rem" }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.9rem", color: "#666", letterSpacing: "0.05em" }}>How We Understand Them</p>
          </div>

          {understandFeatures.map((feat, i) => {
            const isActive = activeFeature === i;
            const Icon = feat.icon;
            return (
              <div
                key={i}
                onClick={() => setActiveFeature(i)}
                style={{
                  border: isActive ? "1px solid #111" : "1px solid #ddd",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  cursor: "pointer",
                  backgroundColor: isActive ? "#fff" : "transparent",
                  transition: "all 0.3s ease",
                  boxShadow: isActive ? "0 10px 30px rgba(0,0,0,0.05)" : "none"
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
                  {/* Number & Icon */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <span style={{ fontSize: "1.1rem", color: "#888", fontWeight: 300 }}>{feat.num}</span>
                    <div style={{
                      width: "48px", height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "#f5f5f5",
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                      <Icon size={20} color="#333" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div style={{ flex: 1, paddingTop: "0.25rem" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "#111", margin: "0 0 0.25rem 0" }}>{feat.title}</h3>
                    <p style={{ fontSize: "0.9rem", color: "#666", margin: 0 }}>{feat.subtitle}</p>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: "1rem" }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          style={{ overflow: "hidden" }}
                        >
                          <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: 1.6, margin: 0 }}>
                            {feat.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Accordion Arrow */}
                  <div style={{
                    width: "36px", height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "#f0f0f0",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginTop: "0.5rem",
                    flexShrink: 0
                  }}>
                    {isActive ? <ChevronUp size={16} color="#333" /> : <ChevronDown size={16} color="#333" />}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Start Campaign Button */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.8rem 1.25rem 0.8rem 1.5rem",
                borderRadius: "100px",
                background: "#111",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Start a UK Campaign
              <div style={{
                backgroundColor: "#fff",
                borderRadius: "50%",
                width: "28px", height: "28px",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <ArrowRight size={14} color="#111" />
              </div>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 4 — AUDIENCES
═══════════════════════════════════════════════════════ */
function AudiencesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const audiences = [
    // Row 1
    { name: "South Asian", img: "/images/audiences/South-Asian.jpg", colSpan: 1, rowSpan: 2 },
    { name: "Taiwanese", img: "/images/audiences/Taiwanese.jpg", colSpan: 1, rowSpan: 1 },
    { name: "Korean", img: "/images/audiences/Korean.jpg", colSpan: 1, rowSpan: 1 },
    { name: "Japanese", img: "/images/audiences/Japanese.jpg", colSpan: 1, rowSpan: 1 },
    { name: "Arabic", img: "/images/audiences/Arabic.jpg", colSpan: 2, rowSpan: 1 },
    // Row 2
    { name: "Hispanic", img: "/images/audiences/Hispanics.jpg", colSpan: 1, rowSpan: 1 },
    { name: "Filipino", img: "/images/audiences/Filipino.jpg", colSpan: 2, rowSpan: 1 },
    { name: "Indigenous", img: "/images/audiences/Indigenous.jpg", colSpan: 1, rowSpan: 1 },
    { name: "Chinese", img: "/images/audiences/Chinese.jpg", colSpan: 1, rowSpan: 1 },
    // Row 3
    { name: "African", img: "/images/audiences/African.jpg", colSpan: 1, rowSpan: 1 },
    { name: "Malaysian", img: "/images/audiences/Malaysian.jpg", colSpan: 2, rowSpan: 1 },
    { name: "Vietnamese", img: "/images/audiences/Vietnamese.jpg", colSpan: 1, rowSpan: 1 },
    { name: "Bangladeshi", img: "/images/audiences/Bangladeshi.jpg", colSpan: 1, rowSpan: 1 },
    { name: "Singaporean", img: "/images/audiences/Singaporean.jpg", colSpan: 1, rowSpan: 1 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.2, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 85,
        damping: 12,
        mass: 0.8
      }
    },
  };

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#ffffff",
        position: "relative",
        padding: "6rem 5%",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{
            fontSize: "clamp(2rem, 3.5vw, 2.1rem)",
            fontWeight: 700,
            textAlign: "center",
            color: "#111",
            margin: "0 0 4rem 0",
            letterSpacing: "-0.02em"
          }}
        >
          Audiences
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "clamp(12px, 1.5vw, 24px)",
            width: "100%",
          }}
        >
          {audiences.map((item, i) => {
            const isCircle = item.colSpan === 1 && item.rowSpan === 1;
            return (
              <motion.div
                key={item.name}
                variants={itemVariants}
                style={{
                  gridColumn: `span ${item.colSpan}`,
                  gridRow: `span ${item.rowSpan}`,
                  position: "relative",
                  borderRadius: "9999px",
                  overflow: "hidden",
                  aspectRatio: isCircle ? "1 / 1" : "auto",
                  height: "100%",
                }}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1280px) 25vw, 20vw"
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: "10%",
                    left: 0, right: 0,
                    display: "flex",
                    justifyContent: "center",
                    pointerEvents: "none",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(0,0,0,0.35)",
                      backdropFilter: "blur(6px)",
                      WebkitBackdropFilter: "blur(6px)",
                      padding: "5px 18px",
                      borderRadius: "20px",
                    }}
                  >
                    <span
                      style={{
                        color: "#fff",
                        fontSize: "0.85rem",
                        fontWeight: 400,
                        letterSpacing: "0.02em"
                      }}
                    >
                      {item.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SECTION 5 — OTHER COUNTRIES  (dark)
═══════════════════════════════════════════════════════ */
function CountryBlock({ c, i, inView }: { c: any, i: number, inView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(250px, 30vh, 400px)",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src={c.img}
          alt={c.name}
          fill
          style={{
            objectFit: "cover",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.7s ease",
          }}
        />
        {/* Permanent light overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.2)",
        }} />

        {/* Dark overlay that slides down on hover */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.85)",
          transform: isHovered ? "translateY(100%)" : "translateY(0%)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }} />
      </div>

      <Link
        href={`/countries/${c.slug}`}
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          padding: "0 8%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textDecoration: "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          <span style={{
            fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
            fontWeight: 200,
            color: "white",
            lineHeight: 1,
            opacity: 0.95,
          }}>{c.num}</span>

          <div style={{ position: "relative" }}>
            <span style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}>{c.name}</span>
            <div style={{
              position: "absolute",
              bottom: "-4px",
              left: 0,
              height: "3px",
              backgroundColor: "white",
              width: isHovered ? "100%" : "0%",
              transition: "width 0.4s ease",
            }} />
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : -20,
          }}
          transition={{ duration: 0.3 }}
          style={{ color: "white" }}
        >
          <ArrowRight size={60} strokeWidth={2} />
        </motion.div>
      </Link>
    </motion.div>
  );
}

function OtherCountriesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section style={{ backgroundColor: "#FFFFFF" }}>
      <div ref={ref} style={{ padding: "1.5rem", borderBottom: "1px solid #e0e0e0", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700, color: "#111", margin: 0 }}>Other Countries</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {otherCountries.map((c, i) => (
          <CountryBlock key={c.slug} c={c} i={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE ROOT
═══════════════════════════════════════════════════════ */
export default function UnitedKingdomPage() {
  return (
    <main
      style={{
        fontFamily: "'Manrope', sans-serif",
        overflowX: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      <Navbar />
      <HeroSection />
      <CultureSection />
      <UnderstandSection />
      <AudiencesSection />
      <OtherCountriesSection />
      <Footer />
    </main>
  );
}