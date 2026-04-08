"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, MapPin, Users, Globe } from "lucide-react";

/* ─────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────── */
const countries = [
  {
    id: 1,
    num: "01",
    name: "CANADA",
    slug: "canada",
    img: "/images/markets/Canada-1.jpg",
    altImg: "/images/markets/Canada-2.jpg",
    tagline: "Where Multiculturalism Is Policy",
    description:
      "Canada is one of the world's most culturally diverse nations. With over 200 languages spoken and aggressive immigration targets, reaching multicultural communities here isn't optional — it's essential for any brand that wants to grow.",
    stats: [
      { value: "8.3M+", label: "South Asian Diaspora" },
      { value: "1.7M+", label: "Chinese Community" },
      { value: "500K+", label: "Arab Speakers" },
      { value: "40%", label: "Foreign-Born in Toronto" },
    ],
    communities: ["South Asian", "Chinese", "Filipino", "Arabic", "African", "Korean"],
    color: "#C41E3A",
  },
  {
    id: 2,
    num: "02",
    name: "UNITED\nSTATES",
    slug: "united-states",
    img: "/images/markets/United-States.jpg",
    altImg: "/images/markets/United-States.jpg",
    tagline: "The World's Largest Multicultural Economy",
    description:
      "The United States is a nation of immigrants with a $4.7 trillion multicultural market. Hispanic, Asian, and Black American consumers are the fastest-growing demographic segments — brands that ignore them leave massive revenue on the table.",
    stats: [
      { value: "62M+", label: "Hispanic Americans" },
      { value: "24M+", label: "Asian Americans" },
      { value: "48M+", label: "Black Americans" },
      { value: "$4.7T", label: "Multicultural Market" },
    ],
    communities: ["Hispanic", "South Asian", "Chinese", "Filipino", "Vietnamese", "Korean"],
    color: "#3C3B6E",
  },
  {
    id: 3,
    num: "03",
    name: "UNITED\nKINGDOM",
    slug: "united-kingdom",
    img: "/images/markets/United-Kingdom.jpg",
    altImg: "/images/markets/United-Kingdom.jpg",
    tagline: "Diversity Woven into Society",
    description:
      "The UK's multicultural landscape stretches from London's global communities to new diaspora hubs in Birmingham and Manchester. Nearly 15% of the population identify as ethnic minority — creating a dynamic, influential, and deeply connected audience.",
    stats: [
      { value: "3.1M+", label: "South Asian Heritage" },
      { value: "1.9M+", label: "Black British" },
      { value: "420K+", label: "Chinese Community" },
      { value: "14%", label: "Ethnic Minority Population" },
    ],
    communities: ["South Asian", "African", "Arabic", "Chinese", "Bangladeshi", "Caribbean"],
    color: "#003087",
  },
  {
    id: 4,
    num: "04",
    name: "AUSTRALIA",
    slug: "australia",
    img: "/images/markets/Australia.jpg",
    altImg: "/images/markets/Australia.jpg",
    tagline: "A Continent of Cultures",
    description:
      "One in three Australians was born overseas. Cities like Sydney and Melbourne rival any global metropolis for cultural diversity. From Southeast Asian communities to growing South Asian populations, Australia's multicultural market is booming.",
    stats: [
      { value: "3.5M+", label: "Asian Australians" },
      { value: "700K+", label: "South Asian Community" },
      { value: "200+", label: "Languages Spoken" },
      { value: "30%", label: "Overseas-Born Population" },
    ],
    communities: ["Chinese", "South Asian", "Filipino", "Vietnamese", "Korean", "Indigenous"],
    color: "#00843D",
  },
  {
    id: 5,
    num: "05",
    name: "NEW\nZEALAND",
    slug: "new-zealand",
    img: "/images/markets/New-Zealand.jpg",
    altImg: "/images/markets/New-Zealand.jpg",
    tagline: "Aotearoa's Multicultural Future",
    description:
      "New Zealand's population is rapidly diversifying, led by Pacific Islander and Asian communities. The growing South Asian and Chinese populations are reshaping consumer culture — presenting enormous opportunity for culturally fluent brands.",
    stats: [
      { value: "700K+", label: "Asian New Zealanders" },
      { value: "380K+", label: "Pasifika Community" },
      { value: "28%", label: "Ethnic Minority Share" },
      { value: "160+", label: "Ethnicities Represented" },
    ],
    communities: ["South Asian", "Chinese", "Pasifika", "Filipino", "Korean", "Māori"],
    color: "#00247D",
  },
];

/* ─────────────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────────────── */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{ textAlign: "center" }}
    >
      <div style={{
        fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
        fontWeight: 800,
        letterSpacing: "-0.03em",
        color: "#ffffff",
        lineHeight: 1,
        marginBottom: "0.5rem"
      }}>
        {value}
      </div>
      <div style={{
        fontSize: "0.85rem",
        fontWeight: 500,
        color: "rgba(255,255,255,0.5)",
        letterSpacing: "0.05em",
        textTransform: "uppercase"
      }}>
        {label}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────
   COUNTRY SECTION
───────────────────────────────────────────────────── */
function CountrySection({ country, index }: { country: typeof countries[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const isEven = index % 2 === 0;

  return (
    <motion.section
      ref={ref}
      id={country.slug}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: isEven ? "row" : "row-reverse",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* Image Side */}
      <motion.div
        style={{
          position: "relative",
          flex: 1,
          overflow: "hidden",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src={country.img}
            alt={country.name}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="50vw"
          />
          {/* Gradient overlay over image */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: isEven
              ? "linear-gradient(to right, rgba(0,0,0,0) 60%, rgba(10,10,10,1) 100%)"
              : "linear-gradient(to left, rgba(0,0,0,0) 60%, rgba(10,10,10,1) 100%)"
          }} />
        </motion.div>

        {/* Country Number Overlay */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: isEven ? "2rem" : "auto",
            right: isEven ? "auto" : "2rem",
            fontSize: "clamp(5rem, 12vw, 9rem)",
            fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.3)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {country.num}
        </motion.div>
      </motion.div>

      {/* Content Side */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "6rem 5% 6rem 5%",
        position: "relative",
        zIndex: 5,
      }}>
        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            width: "60px",
            height: "3px",
            backgroundColor: country.color,
            transformOrigin: "left",
            marginBottom: "2rem",
            borderRadius: "2px"
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "1rem"
          }}
        >
          {country.tagline}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            color: "#ffffff",
            marginBottom: "2rem",
            whiteSpace: "pre-line",
          }}
        >
          {country.name}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.55)",
            maxWidth: "480px",
            marginBottom: "3rem",
          }}
        >
          {country.description}
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem 2rem",
            marginBottom: "3rem",
            padding: "2rem",
            background: "rgba(255,255,255,0.04)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {country.stats.map((stat, i) => (
            <AnimatedStat key={i} value={stat.value} label={stat.label} />
          ))}
        </motion.div>

        {/* Community Tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{ marginBottom: "3rem" }}
        >
          <p style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            marginBottom: "0.75rem"
          }}>
            Communities We Reach
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {country.communities.map((tag, i) => (
              <span
                key={i}
                style={{
                  padding: "0.35rem 1rem",
                  borderRadius: "100px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.65)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = country.color;
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.9rem 2rem",
              borderRadius: "100px",
              background: "#ffffff",
              color: "#000000",
              fontSize: "0.95rem",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = country.color;
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.color = "#000000";
            }}
          >
            Start a Campaign in {country.name.replace("\n", " ")}
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      {/* Divider */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: "5%",
        right: "5%",
        height: "1px",
        background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)"
      }} />
    </motion.section>
  );
}

/* ─────────────────────────────────────────────────────
   COUNTRY INDEX NAVIGATION
───────────────────────────────────────────────────── */
function CountryIndex({ active, onSelect }: { active: number; onSelect: (i: number) => void }) {
  return (
    <div style={{
      position: "fixed",
      right: "2rem",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 40,
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      alignItems: "flex-end",
    }}>
      {countries.map((c, i) => (
        <button
          key={c.id}
          onClick={() => onSelect(i)}
          title={c.name.replace("\n", " ")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: 0,
          }}
        >
          <span style={{
            fontSize: "0.65rem",
            fontWeight: 600,
            color: active === i ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0)",
            transition: "color 0.3s ease",
            textTransform: "uppercase",
            letterSpacing: "0.1em"
          }}>
            {c.slug}
          </span>
          <div style={{
            width: active === i ? "28px" : "12px",
            height: "2px",
            borderRadius: "2px",
            backgroundColor: active === i ? "#FF5E00" : "rgba(255,255,255,0.25)",
            transition: "all 0.4s ease",
          }} />
        </button>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────────── */
function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrentBg((p) => (p + 1) % countries.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{
      position: "relative",
      height: "100vh",
      width: "100%",
      overflow: "hidden",
      display: "flex",
      alignItems: "flex-end",
      backgroundColor: "#000",
    }}>
      {/* Background Crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src={countries[currentBg].img}
            alt={countries[currentBg].name}
            fill
            style={{ objectFit: "cover" }}
            priority={currentBg === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.4) 100%)",
        zIndex: 2
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        padding: "0 5% 8vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: "2rem",
      }}>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "1rem"
            }}
          >
            Where We Operate
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontSize: "clamp(4rem, 12vw, 10rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.88,
              color: "#ffffff",
              margin: 0,
            }}
          >
            Our<br />Markets
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{ maxWidth: "380px" }}
        >
          <p style={{
            fontSize: "1.1rem",
            fontWeight: 400,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.7,
            marginBottom: "2rem"
          }}>
            We don&apos;t study cultures. We live in them.
            Reach the communities that matter most — in every market, in every language.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[
              { icon: <Globe size={16} />, label: "5 Countries" },
              { icon: <Users size={16} />, label: "38M+ Reach" },
              { icon: <MapPin size={16} />, label: "200+ Languages" },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.85rem",
                fontWeight: 500,
              }}>
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          color: "rgba(255,255,255,0.35)",
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase"
        }}
      >
        <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.2)" }} />
        Scroll
      </motion.div>

      {/* Bottom country indicator bar */}
      <div style={{
        position: "absolute",
        bottom: "3rem",
        right: "5%",
        zIndex: 10,
        display: "flex",
        gap: "0.5rem",
        alignItems: "center"
      }}>
        {countries.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentBg(i)}
            style={{
              width: currentBg === i ? "36px" : "12px",
              height: "2px",
              borderRadius: "2px",
              backgroundColor: currentBg === i ? "white" : "rgba(255,255,255,0.25)",
              transition: "all 0.4s ease",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   HOW WE UNDERSTAND THEM
───────────────────────────────────────────────────── */
function UnderstandSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  const globalStats = [
    { value: "38M+", label: "Readers / Month" },
    { value: "23%", label: "Avg. Engagement Lift" },
    { value: "300+", label: "Cultural Campaigns" },
    { value: "7M+", label: "Community Reached" },
  ];

  return (
    <section style={{
      backgroundColor: "#ffffff",
      padding: "8rem 5%",
      position: "relative",
      overflow: "hidden",
    }}>
      <div ref={ref} style={{ maxWidth: "1300px", margin: "0 auto" }}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#999",
            marginBottom: "1rem",
            textAlign: "center"
          }}
        >
          How We Understand Them
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "#111",
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          We Don&apos;t Study Cultures.<br />
          <span style={{ color: "#FF5E00" }}>We Live In Them.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "1.1rem",
            color: "#888",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto 5rem",
            textAlign: "center",
          }}
        >
          Our teams are embedded in each market — native speakers, cultural insiders,
          and community connectors who transform research into resonance.
        </motion.p>

        {/* Stats Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2px",
          backgroundColor: "#eaeaea",
          borderRadius: "24px",
          overflow: "hidden",
        }}>
          {globalStats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              style={{
                backgroundColor: "#ffffff",
                padding: "3rem 2rem",
                textAlign: "center",
              }}
            >
              <div style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                color: "#111",
                lineHeight: 1,
                marginBottom: "0.75rem",
              }}>
                {s.value}
              </div>
              <div style={{
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "#999",
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two col content row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          marginTop: "5rem",
          alignItems: "center",
        }}>
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              position: "relative",
              aspectRatio: "4/3",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.12)"
            }}
          >
            <Image
              src="/images/markets/Countries.png"
              alt="Our Markets Overview"
              fill
              style={{ objectFit: "cover" }}
              sizes="50vw"
            />
          </motion.div>

          {/* Right: features list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 style={{
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#111",
              marginBottom: "1.5rem",
              lineHeight: 1.2,
            }}>
              Cultural Intelligence<br />at Every Level
            </h3>
            <p style={{
              fontSize: "1rem",
              color: "#888",
              lineHeight: 1.75,
              marginBottom: "2.5rem"
            }}>
              From brand strategy to content production, we embed cultural understanding
              at every stage — ensuring your message lands with authenticity and impact.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { title: "Language Intelligence", desc: "Native-language content in 40+ languages" },
                { title: "Community Networks", desc: "Direct relationships with diaspora leaders" },
                { title: "Cultural Validation", desc: "Every campaign reviewed by community insiders" },
                { title: "Real-Time Insights", desc: "Data-driven decisions grounded in cultural context" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "1.25rem",
                    borderRadius: "16px",
                    border: "1px solid #f0f0f0",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  whileHover={{ borderColor: "#FF5E00", x: 4 }}
                >
                  <div style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#FF5E00",
                    flexShrink: 0,
                    marginTop: "6px"
                  }} />
                  <div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111", marginBottom: "0.25rem" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "#999" }}>{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   OTHER COUNTRIES INDEX (LIST VIEW)
───────────────────────────────────────────────────── */
function CountriesIndex() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section style={{ backgroundColor: "#0a0a0a", padding: "8rem 5%" }}>
      <div ref={ref} style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            marginBottom: "3rem",
            textAlign: "center"
          }}
        >
          All Markets
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {countries.map((c, i) => (
            <motion.a
              key={c.id}
              href={`/countries/${c.slug}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                padding: "2.5rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                textDecoration: "none",
                color: "white",
                position: "relative",
                overflow: "hidden",
                transition: "padding 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.paddingLeft = "1rem";
                const num = el.querySelector(".idx-num") as HTMLElement;
                const name = el.querySelector(".idx-name") as HTMLElement;
                const arrow = el.querySelector(".idx-arrow") as HTMLElement;
                if (num) num.style.color = c.color;
                if (name) name.style.color = "#fff";
                if (arrow) { arrow.style.opacity = "1"; arrow.style.transform = "translateX(0)"; }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.paddingLeft = "0";
                const num = el.querySelector(".idx-num") as HTMLElement;
                const name = el.querySelector(".idx-name") as HTMLElement;
                const arrow = el.querySelector(".idx-arrow") as HTMLElement;
                if (num) num.style.color = "rgba(255,255,255,0.2)";
                if (name) name.style.color = "rgba(255,255,255,0.75)";
                if (arrow) { arrow.style.opacity = "0"; arrow.style.transform = "translateX(-10px)"; }
              }}
            >
              <span
                className="idx-num"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.2)",
                  letterSpacing: "-0.04em",
                  transition: "color 0.3s ease",
                  minWidth: "3rem",
                }}
              >
                {c.num}
              </span>
              <span
                className="idx-name"
                style={{
                  fontSize: "clamp(2rem, 6vw, 5rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.75)",
                  flex: 1,
                  transition: "color 0.3s ease",
                }}
              >
                {c.name.replace("\n", " ")}
              </span>
              <ArrowRight
                className="idx-arrow"
                size={28}
                style={{
                  opacity: 0,
                  transform: "translateX(-10px)",
                  transition: "all 0.3s ease",
                  color: "white",
                  flexShrink: 0,
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   CTA SECTION
───────────────────────────────────────────────────── */
function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section style={{
      backgroundColor: "#111111",
      padding: "8rem 5%",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background text */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "clamp(8rem, 20vw, 20rem)",
        fontWeight: 900,
        color: "transparent",
        WebkitTextStroke: "1px rgba(255,255,255,0.04)",
        whiteSpace: "nowrap",
        pointerEvents: "none",
        userSelect: "none",
        letterSpacing: "-0.05em",
        lineHeight: 1,
      }}>
        GLOBAL
      </div>

      <div ref={ref} style={{ position: "relative", zIndex: 5 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            marginBottom: "2rem",
          }}
        >
          Ready to Go Global?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            color: "#ffffff",
            marginBottom: "2rem",
          }}
        >
          Your Brand Deserves<br />a Seat in Every Market.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.45)",
            maxWidth: "500px",
            margin: "0 auto 3.5rem",
            lineHeight: 1.7,
          }}
        >
          Let&apos;s connect your brand to the communities that will champion it — across borders, cultures, and languages.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1.1rem 2.5rem",
              borderRadius: "100px",
              background: "#FF5E00",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            Book a Free Discovery Call
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1.1rem 2.5rem",
              borderRadius: "100px",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.8)",
              fontSize: "1rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color = "rgba(255,255,255,0.8)";
            }}
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────── */
export default function CountriesPage() {
  const [activeCountry, setActiveCountry] = useState(0);

  // Track scroll to update sidebar indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = countries.map((c) => document.getElementById(c.slug));
      const windowMid = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, i) => {
        if (!section) return;
        const { top, bottom } = section.getBoundingClientRect();
        const absTop = top + window.scrollY;
        const absBottom = bottom + window.scrollY;
        if (windowMid >= absTop && windowMid <= absBottom) setActiveCountry(i);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCountry = (idx: number) => {
    const el = document.getElementById(countries[idx].slug);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main style={{
      backgroundColor: "#0a0a0a",
      color: "#ffffff",
      fontFamily: "'Manrope', sans-serif",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <Navbar />

      {/* Sidebar Nav */}
      <CountryIndex active={activeCountry} onSelect={scrollToCountry} />

      {/* Hero */}
      <HeroSection />

      {/* Country Showcase Sections */}
      {countries.map((country, index) => (
        <CountrySection key={country.id} country={country} index={index} />
      ))}

      {/* Countries Index */}
      <CountriesIndex />

      {/* How We Understand Them */}
      <UnderstandSection />

      {/* CTA */}
      <CTASection />

      <Footer />
    </main>
  );
}
