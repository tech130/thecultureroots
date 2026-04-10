"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const MotionLink = motion(Link);
import Footer from "@/components/Footer";
import { User, Languages, Calendar, LineChart, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

/* ─── OTHER COUNTRIES DATA ─── */
const otherCountries = [
  { num: "01", name: "CANADA", slug: "canada", img: "/images/markets/Canada-1.jpg" },
  { num: "02", name: "UNITED STATES", slug: "united-states", img: "/images/markets/United-States.jpg" },
  { num: "03", name: "UNITED KINGDOM", slug: "united-kingdom", img: "/images/markets/United-Kingdom.jpg" },
  { num: "05", name: "NEW ZEALAND", slug: "new-zealand", img: "/images/markets/New-Zealand.jpg" },
];

/* ─── FEATURES FOR RIGHT PANEL ─── */
const understandFeatures = [
  {
    num: "01",
    title: "On-The-Ground Research",
    subtitle: "Native cultural consultants in every market",
    desc: "We track cultural shifts, community sentiment and buying behaviour across Australia's most diverse cities — Sydney, Melbourne, Brisbane, Perth and Adelaide — through real people and real community networks, not just data points.",
    icon: User
  },
  {
    num: "02",
    title: "Language & Dialect Intelligence",
    subtitle: "Beyond translation - tone, slang, unspoken rules",
    desc: "Over 350 languages are documented across Australia. We map the linguistic codes, dialect differences and cultural nuances that determine whether your brand message connects or gets lost in translation.",
    icon: Languages
  },
  {
    num: "03",
    title: "Cultural Calendar & Moments",
    subtitle: "Ramadan, Diwali, Eid, Lunar New Year & more",
    desc: "From Diwali celebrations in Melbourne to Lunar New Year in Sydney to cultural festivals across every major city, we identify the moments that matter most to each community and build campaigns around them.",
    icon: Calendar
  },
  {
    num: "04",
    title: "Audience Behaviour Data",
    subtitle: "Cultural intuition backed by hard data",
    desc: "We combine platform data, community insights and purchase patterns across Australia's multicultural segments to build audience profiles that reflect how diverse Australians actually live, spend and decide.",
    icon: LineChart
  },
];

const ALL_CITIES = [
  { name: "Sydney", src: "/images/countries/australia/Sydney.webp", objectPosition: "center", filter: "none" },
  { name: "Melbourne", src: "/images/countries/australia/Melbourne.jpg", objectPosition: "center", filter: "none" },
  { name: "Brisbane", src: "/images/countries/australia/Brisbane.jpeg", objectPosition: "center", filter: "none" },
  { name: "Perth", src: "/images/countries/australia/Perth.webp", objectPosition: "center", filter: "none" },
  { name: "Adelaide", src: "/images/countries/australia/Adelaide.jpg", objectPosition: "center", filter: "none" },
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
        src="/images/markets/Australia.jpg"
        alt="Australia — A Continent of Cultures"
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
          A Continent<br />of Cultures
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
          With nearly one in three Australians born overseas and over 270 ethnic groups calling the country home, Australia's consumer market is as diverse as any on the planet.
          For brands willing to show up with cultural intelligence, it is a market wide open for the taking.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <MotionLink
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1PUl1axcbE4O_8tOgSeLP6OGYBJrBAem_WWsrJq9u6MNjgySisCJdUmz43NwVkuGppFuHrstYd"
            target="_blank"
            rel="noopener noreferrer"
            initial="initial"
            whileHover="hover"
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
            <motion.div
              variants={{ hover: { x: 5 } }}
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.3)",
                display: "flex",
                justifyContent: "center",
                fontSize: "0.85rem",
              }}
            >
              →
            </motion.div>
          </MotionLink>
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
        AU.
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 1024px)");
    const onChange = () => setIsMobile(mql.matches);
    setIsMobile(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCity((prev) => (prev + 1) % cities.length);
    }, 3500); // Change slide every 3.5 seconds

    return () => clearInterval(interval);
  }, [cities.length]);

  return (
    <section
      className="market-culture-section"
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
          Australia
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
          One of the World's Most Diverse Nations Per Capita.

        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#000",
            lineHeight: 1.8,
            maxWidth: "560px",
          }}
        >

          With 31.5% of Australians born overseas as of June 2024, Australia has reached its highest proportion of overseas-born residents since 1892. - The population today consists of more than 270 ethnic groups spanning every continent. For brands, Australia is not just a market — it is a mosaic of communities actively underserved by mainstream marketing, and wide open for brands that show up with cultural intelligence.

        </p>
      </motion.div>

      {/* ── RIGHT: City Carousel ── */}
      <div
        className="market-carousel-container"
        style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "9rem 0 1rem 0",
        }}
      >
        <motion.div
          animate={{ x: isMobile ? `-${activeCity * 100}%` : `calc(${-activeCity * 55}%)` }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          style={{ display: "flex", gap: isMobile ? "0" : "16px", paddingLeft: isMobile ? "0" : "2rem", alignItems: "center" }}
        >
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              onClick={() => setActiveCity(i)}
              animate={{ scale: activeCity === i ? 1 : 0.94, opacity: activeCity === i ? i === activeCity ? 1 : 0.65 : 0.65 }}
              transition={{ duration: 0.4 }}
              style={{
                minWidth: isMobile ? "100%" : "calc(55% - 1rem)",
                height: isMobile ? "300px" : "420px",
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
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.45) 100%)", zIndex: 1 }} />
              <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem", color: "#fff", fontWeight: 700, fontSize: "1.15rem", zIndex: 2, letterSpacing: "-0.01em" }}>
                {city.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div style={{
          display: "flex",
          gap: "8px",
          paddingLeft: isMobile ? "0" : "2rem",
          justifyContent: isMobile ? "center" : "flex-start",
          marginTop: "1.5rem"
        }}>
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
    { value: "28M+", label: "Population" },
    { value: "31.5%", label: "Overseas Born" },
    { value: "270+", label: "Ethnic Groups" },
    { value: "4.3M+", label: "Asian Australians" },
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
        className="market-understand-grid"
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
          className="understand-image-card"
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
            src="/images/markets/Australia.jpg"
            alt="Canada Landscape"
            fill
            style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
          />
          {/* Dark Overlay */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)", zIndex: 1 }} />

          <div style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            <p className="understand-card-label" style={{ fontSize: "0.85rem", opacity: 0.8, marginBottom: "1.5rem" }}>Countries & Audiences</p>
            <h2
              className="understand-card-heading"
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
            <p className="understand-card-desc" style={{ fontSize: "1rem", opacity: 0.8, maxWidth: "450px", lineHeight: 1.6 }}>
              Our cultural intelligence across Australia goes beyond ancestry data. It captures community rhythms, language preferences, purchasing behaviour and the cultural moments that move diverse audiences to act.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="understand-stats-grid" style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
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
          className="understand-right-panel"
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {/* <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.9rem", color: "#666", letterSpacing: "0.05em" }}>How We Understand Them</p>
          </div> */}

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
            <MotionLink
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1PUl1axcbE4O_8tOgSeLP6OGYBJrBAem_WWsrJq9u6MNjgySisCJdUmz43NwVkuGppFuHrstYd"
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              whileHover="hover"
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
            >
              Start an AU Campaign
              <motion.div
                variants={{ hover: { x: 5 } }}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  width: "28px", height: "28px",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}
              >
                <ArrowRight size={14} color="#111" />
              </motion.div>
            </MotionLink>
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
          className="market-audience-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridAutoRows: "minmax(min-content, auto)",
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
                className="audience-item"
                style={{
                  gridColumn: `span var(--col-span, ${item.colSpan})`,
                  gridRow: `span var(--row-span, ${item.rowSpan})`,
                  position: "relative",
                  borderRadius: "9999px",
                  overflow: "hidden",
                  aspectRatio: isCircle ? "1 / 1" : "auto",
                  minHeight: isCircle ? "auto" : "clamp(120px, 15vw, 180px)",
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
          animate={isHovered ? { x: 8 } : { x: 0 }}
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
export default function AustraliaPage() {
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

      <style jsx global>{`

        /* ══════════════════════════════════════
           CULTURE SECTION (Section 2)
        ══════════════════════════════════════ */
        @media (max-width: 1024px) {
          .market-culture-section {
            grid-template-columns: 1fr !important;
          }
          .market-carousel-container {
            padding-top: 2rem !important;
          }
        }

        /* ══════════════════════════════════════
           HOW WE UNDERSTAND (Section 3)
        ══════════════════════════════════════ */

        /* Desktop default: right panel has padding */
        .understand-right-panel {
          padding-right: 2rem;
        }

        @media (max-width: 1024px) {
          .market-understand-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .understand-image-card {
            height: 560px !important;
            padding: 3rem 2.5rem !important;
          }
          .understand-image-card .understand-card-label {
            font-size: 0.8rem !important;
            margin-bottom: 1rem !important;
          }
          .understand-image-card .understand-card-heading {
            font-size: clamp(1.8rem, 3.5vw, 2.8rem) !important;
            margin-bottom: 0.75rem !important;
          }
          .understand-image-card .understand-card-desc {
            font-size: 0.95rem !important;
          }
          .understand-stats-grid {
            gap: 0.85rem !important;
          }
          .understand-stats-grid > div {
            padding: 1.25rem 1.5rem !important;
          }
          .understand-stats-grid > div > div:first-child {
            font-size: 2rem !important;
          }
          .understand-stats-grid > div > div:last-child {
            font-size: 0.9rem !important;
          }
          .understand-right-panel {
            padding-right: 0 !important;
          }
        }

        @media (max-width: 768px) {
          .market-understand-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 0 1rem !important;
          }
          .understand-image-card {
            height: auto !important;
            min-height: 480px !important;
            padding: 2rem 1.5rem !important;
            border-radius: 20px !important;
          }
          .understand-image-card .understand-card-label {
            font-size: 0.75rem !important;
            margin-bottom: 0.75rem !important;
          }
          .understand-image-card .understand-card-heading {
            font-size: clamp(1.5rem, 5vw, 2rem) !important;
            margin-bottom: 0.6rem !important;
          }
          .understand-image-card .understand-card-desc {
            font-size: 0.88rem !important;
            line-height: 1.55 !important;
            max-width: 100% !important;
          }
          .understand-stats-grid {
            gap: 0.6rem !important;
          }
          .understand-stats-grid > div {
            padding: 1rem 1.1rem !important;
            border-radius: 12px !important;
          }
          .understand-stats-grid > div > div:first-child {
            font-size: 1.65rem !important;
            margin-bottom: 0.15rem !important;
          }
          .understand-stats-grid > div > div:last-child {
            font-size: 0.8rem !important;
          }
          .understand-right-panel {
            padding-right: 0 !important;
          }
        }

        @media (max-width: 480px) {
          .understand-image-card {
            min-height: 420px !important;
            padding: 1.5rem 1.25rem !important;
            border-radius: 16px !important;
          }
          .understand-image-card .understand-card-label {
            font-size: 0.7rem !important;
            margin-bottom: 0.5rem !important;
          }
          .understand-image-card .understand-card-heading {
            font-size: clamp(1.25rem, 6vw, 1.6rem) !important;
            margin-bottom: 0.5rem !important;
          }
          .understand-image-card .understand-card-desc {
            font-size: 0.82rem !important;
            line-height: 1.5 !important;
          }
          .understand-stats-grid {
            gap: 0.5rem !important;
          }
          .understand-stats-grid > div {
            padding: 0.85rem 1rem !important;
            border-radius: 10px !important;
          }
          .understand-stats-grid > div > div:first-child {
            font-size: 1.4rem !important;
          }
          .understand-stats-grid > div > div:last-child {
            font-size: 0.75rem !important;
          }
        }

        /* ══════════════════════════════════════
           AUDIENCES (Section 4)
        ══════════════════════════════════════ */
        @media (max-width: 1024px) {
          .market-audience-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 12px !important;
          }
          /* All cards: 1×1 uniform */
          .market-audience-grid .audience-item {
            --col-span: 1 !important;
            --row-span: 1 !important;
            min-height: 160px !important;
            aspect-ratio: 1 / 1 !important;
            height: auto !important;
          }
        }

        @media (max-width: 768px) {
          .market-audience-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 10px !important;
          }
          /* All cards: 1×1 uniform */
          .market-audience-grid .audience-item {
            --col-span: 1 !important;
            --row-span: 1 !important;
            min-height: 0 !important;
            aspect-ratio: 1 / 1 !important;
            height: auto !important;
          }
        }

        @media (max-width: 480px) {
          .market-audience-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
          }
          /* All cards: 1×1 uniform */
          .market-audience-grid .audience-item {
            --col-span: 1 !important;
            --row-span: 1 !important;
            min-height: 0 !important;
            aspect-ratio: 1 / 1 !important;
            height: auto !important;
          }
        }

        /* ══════════════════════════════════════
           GENERAL SECTION PADDING (mobile)
        ══════════════════════════════════════ */
        @media (max-width: 768px) {
          .market-culture-section > div {
            padding: 1rem 0 2rem 0 !important;
          }
          .market-culture-section > div:first-child {
            padding: 1rem 5% 2rem 5% !important;
          }
          section {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
          }
        }
      `}</style>
    </main>
  );
}