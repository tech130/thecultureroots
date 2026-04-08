"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight, Plus } from "lucide-react";
import TargetCursor from "./TargetCursor";

const allCaseStudies = [
  {
    id: 1,
    title: "Solano Beverages",
    category: "FMCG",
    year: "2024",
    desc: "Ramadan & Eid seasonal campaign across the Middle East and North Africa — Arabic-first social and OOH advertising",
    stats: [
      { label: "REACH", pre: "+", val: "340", post: "%", highlightPre: true, highlightPost: false },
      { label: "ENGAGEMENT", pre: "", val: "12", post: "x", highlightPre: false, highlightPost: true },
      { label: "MARKETS", pre: "", val: "07", post: "", highlightPre: false, highlightPost: false },
    ],
    markets: ["India", "Thailand", "Indonesia", "Malaysia", "Singapore", "Vietnam"],
    img: "/images/case-studies/image-3.png",
    color: "#FF5E00",
    bgColor: "#FFF2EA",
    cardInnerBg: "#FFE6D9",
  },
  {
    id: 2,
    title: "Lumara Cosmetics",
    category: "Beauty",
    year: "2024",
    desc: "Skin diversity and cultural beauty standards campaign across Sub-Saharan Africa — Influencer-led, platform-native content",
    stats: [
      { label: "REACH", pre: "+", val: "410", post: "%", highlightPre: true, highlightPost: false },
      { label: "ENGAGEMENT", pre: "", val: "22", post: "x", highlightPre: false, highlightPost: true },
      { label: "MARKETS", pre: "", val: "05", post: "", highlightPre: false, highlightPost: false },
    ],
    markets: ["Nigeria", "Kenya", "Ghana", "South Africa", "Tanzania"],
    img: "/images/case-studies/image-2.png",
    color: "#2780E2",
    bgColor: "#E9F2FB",
    cardInnerBg: "#D1E6FA",
  },
  {
    id: 3,
    title: "Vega Financials",
    category: "Finance",
    year: "2023",
    desc: "Multilingual financial literacy campaign targeting South Asian diaspora communities across the UK and Canada",
    stats: [
      { label: "REACH", pre: "+", val: "190", post: "%", highlightPre: true, highlightPost: false },
      { label: "ENGAGEMENT", pre: "", val: "9", post: "x", highlightPre: false, highlightPost: true },
      { label: "MARKETS", pre: "", val: "06", post: "", highlightPre: false, highlightPost: false },
    ],
    markets: ["UK", "Canada", "India", "Pakistan", "Bangladesh", "Sri Lanka"],
    img: "/images/case-studies/image-1.png",
    color: "#8B2EE0",
    bgColor: "#F7EEFC",
    cardInnerBg: "#EFD8FC",
  },
  // Duplicate for demonstration of "Load More"
  ...Array.from({ length: 12 }).map((_, i) => ({
    id: i + 4,
    title: i % 2 === 0 ? "Solano Beverages" : "Lumara Cosmetics",
    category: i % 2 === 0 ? "FMCG" : "Beauty",
    year: "2024",
    desc: "Expanding global influence through targeted cultural marketing strategies.",
    stats: [
      { label: "REACH", pre: "+", val: (200 + i * 10).toString(), post: "%", highlightPre: true, highlightPost: false },
      { label: "ENGAGEMENT", pre: "", val: (10 + i).toString(), post: "x", highlightPre: false, highlightPost: true },
      { label: "MARKETS", pre: "", val: "08", post: "", highlightPre: false, highlightPost: false },
    ],
    markets: ["Global", "Regional"],
    img: `/images/case-studies/image-${(i % 3) + 1}.png`,
    color: i % 2 === 0 ? "#FF5E00" : "#2780E2",
    bgColor: i % 2 === 0 ? "#FFF2EA" : "#E9F2FB",
    cardInnerBg: i % 2 === 0 ? "#FFE6D9" : "#D1E6FA",
  }))
];

export default function CaseStudiesPage() {
  const [visibleCount, setVisibleCount] = useState(9);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  return (
    <main style={{ backgroundColor: "#18191D", minHeight: "100vh", color: "#FFFFFF" }}>
      <TargetCursor 
        targetSelector=".case-card"
        spinDuration={2}
        hideDefaultCursor
        hoverDuration={0.2}
        parallaxOn
      />
      <Navbar />

      {/* 🚀 Hero Banner Section */}
      <section style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "#18191D"
      }}>
        {/* Background Blue Beam with Horizontal Expansion Animation */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "150px", opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // Smooth cinematic expansion
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            height: "100vh",
            background: "linear-gradient(180deg, rgba(5, 40, 150, 0.00) 0%, rgba(5, 40, 150, 0.40) 25%, #0037E4 50%, rgba(5, 40, 150, 0.40) 75%, rgba(5, 40, 150, 0.00) 100%)",
            boxShadow: "0 0 60px rgba(0, 55, 228, 0.6), 0 0 100px rgba(0, 55, 228, 0.3)",
            filter: "blur(2px)",
            zIndex: 1,
            transformOrigin: "center center"
          }}
        />

        <div style={{ zIndex: 10, maxWidth: "1000px", marginTop: "-22rem" }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "clamp(1rem, 6vw, 3.2rem)",
              fontWeight: 200,
              lineHeight: 1.1,
              letterSpacing: "-0.02em"
            }}
          >
            The Campaigns that <br /> Changed the Conversations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{
              fontSize: ".8rem",
              fontWeight: 200,
              letterSpacing: "0.05em",
              marginBottom: "4rem",
              color: "#FFFFFF"
            }}
          >
            Real Brands · Real Cultures · Real Results - Across every market we&apos;ve entered
          </motion.p>
        </div>

        {/* Floating Stats Widgets */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 12 }}>
          {/* 340% Widget */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", top: "45%", left: "25%", textAlign: "center" }}
          >
            <div style={{ fontSize: "2rem", fontWeight: 800 }}>340%</div>
            <div style={{ fontSize: "0.6rem", opacity: 0.5, textTransform: "uppercase" }}>Average Engagement Lifts</div>
          </motion.div>

          {/* 64+ Widget */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{ position: "absolute", top: "62%", left: "42%", textAlign: "center" }}
          >
            <div style={{ fontSize: "2rem", fontWeight: 800 }}>64+</div>
            <div style={{ fontSize: "0.6rem", opacity: 0.5, textTransform: "uppercase" }}>Ethnicities Served</div>
          </motion.div>

          {/* 7B+ Widget */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ position: "absolute", top: "45%", right: "25%", textAlign: "center" }}
          >
            <div style={{ fontSize: "2rem", fontWeight: 800 }}>7B+</div>
            <div style={{ fontSize: "0.6rem", opacity: 0.5, textTransform: "uppercase" }}>People Reached</div>
          </motion.div>
        </div>

        {/* Bottom Clouds Framing */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100vh", // Even taller for massive clouds
          zIndex: 15,
          pointerEvents: "none"
        }}>
          {/* Left Cloud */}
          <motion.div
            initial={{ x: "-30%", y: "15%", opacity: 0 }}
            animate={{ x: "0%", y: "0%", opacity: 1 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute",
              bottom: "-20%",
              left: "-10%",
              width: "75%",
              height: "100%",
              zIndex: 16
            }}
          >
            <Image
              src="/images/case-studies/left.png"
              alt="Clouds"
              fill
              style={{ objectFit: "contain", objectPosition: "bottom left", filter: "brightness(1.1) contrast(0.9)" }}
              priority
            />
          </motion.div>

          {/* Right Cloud */}
          <motion.div
            initial={{ x: "30%", y: "15%", opacity: 0 }}
            animate={{ x: "0%", y: "0%", opacity: 1 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "absolute",
              bottom: "-20%",
              right: "-10%",
              width: "75%",
              height: "115%",
              zIndex: 16
            }}
          >
            <Image
              src="/images/case-studies/right.png"
              alt="Clouds"
              fill
              style={{ objectFit: "contain", objectPosition: "bottom right", filter: "brightness(1.1) contrast(0.9)" }}
              priority
            />
          </motion.div>

          {/* Smoky connectivity layer - Fading to the section background color #F3F3F3 */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "linear-gradient(to top, #F3F3F3 10%, #F3F3F3aa 40%, transparent 100%)",
            zIndex: 20
          }} />

          {/* Extra white glow for smoky effect */}
          <div style={{
            position: "absolute",
            bottom: "-50px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "120%",
            height: "300px",
            background: "radial-gradient(ellipse at center, rgba(243, 243, 243, 0.8) 0%, transparent 70%)",
            zIndex: 15,
            filter: "blur(40px)"
          }} />
        </div>
      </section>

      {/* 📁 Case Studies Grid Section - REPLICATING HOMEPAGE STYLE */}
      <section style={{ padding: "4rem 5%", backgroundColor: "#F3F3F3", color: "#111" }}>
        <div className="container" style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              fontSize: "clamp(1rem, 4vw, 2rem)",
              fontWeight: 700,
              marginBottom: "3rem", // Generous space below heading
              color: "#111",
              letterSpacing: "-0.01em"
            }}
          >
            Case Studies
          </motion.h2>

          <div className="case-studies-grid">
            {allCaseStudies.slice(0, visibleCount).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className="case-card cursor-target"
                style={{
                  background: "white",
                  borderRadius: "22px",
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.04)",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  minHeight: "550px",
                  ["--accent" as any]: study.color,
                  ["--bg-light" as any]: study.bgColor,
                  ["--inner-bg" as any]: study.cardInnerBg,
                }}
              >
                {/* Inner Cut Wrapper */}
                <div style={{
                  flex: 1,
                  borderRadius: "18px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}>
                  {/* Full-card background image covering entire card */}
                  <Image
                    className="case-card-img"
                    src={study.img}
                    alt={study.title}
                    fill
                    style={{ objectFit: "cover", zIndex: 0 }}
                  />

                  {/* Subtle gradient scrim */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.20) 50%, rgba(0,0,0,0.0) 100%)",
                    zIndex: 1,
                  }} />

                  {/* Top spacer with folder tab */}
                  <div style={{ height: "250px", position: "relative", zIndex: 2, flexShrink: 0 }}>
                    {/* Folder Cut Edge */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, height: "48px", display: "flex", alignItems: "flex-end" }}>
                      {/* Left Tab */}
                      <div className="dynamic-bg" style={{
                        padding: "0 1rem",
                        height: "100%",
                        backgroundColor: `${study.bgColor}E6`,
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        transition: "backdrop-filter 0.4s ease, background-color 0.4s ease",
                      }}>
                        <div className="dynamic-inner-bg" style={{
                          backgroundColor: study.cardInnerBg,
                          color: study.color,
                          padding: "4px 18px",
                          borderRadius: "20px",
                          fontSize: "0.6rem",
                          fontWeight: 800,
                          textTransform: "uppercase"
                        }}>
                          {study.category}
                        </div>
                        <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "#999", paddingRight: "6px" }}>{study.year}</div>
                      </div>

                      {/* S-Curve SVG */}
                      <svg width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "-1px" }}>
                        <path className="dynamic-fill" d="M0 0 C 18 0, 18 48, 36 48 L 0 48 Z" fill={`${study.bgColor}E6`} style={{ transition: "fill 0.4s ease" }} />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Stats Panel */}
                  <div className="dynamic-bg" style={{
                    flex: 1,
                    backgroundColor: `${study.bgColor}E6`,
                    padding: "1rem 1.5rem 1.5rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    zIndex: 2,
                    transition: "backdrop-filter 0.4s ease, background-color 0.4s ease",
                  }}>
                    <div style={{ marginBottom: "auto", marginTop: "-2rem" }}>
                      <h3 style={{ fontSize: "1rem", fontWeight: 800, color: study.color, marginBottom: "0.5rem" }}>{study.title}</h3>
                      <p style={{ fontSize: "0.65rem", lineHeight: 1.6, color: "#444", fontWeight: 500 }}>{study.desc}</p>
                    </div>

                    <div style={{ width: "100%" }}>
                      <hr style={{ border: "none", borderTop: `2px solid ${study.color}`, opacity: 0.15, marginBottom: ".5rem" }} />

                      {/* Stats Dashboard */}
                      <div className="dynamic-inner-bg" style={{
                        backgroundColor: study.cardInnerBg,
                        borderRadius: "16px",
                        padding: "1rem 1.25rem",
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem"
                      }}>
                        {study.stats.map((stat, i) => (
                          <div key={i} style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ fontSize: "1.5rem", fontWeight: 800, display: "flex", alignItems: "center", color: "#111" }}>
                              <span style={{ color: stat.highlightPre ? study.color : "inherit" }}>{stat.pre}</span>
                              <span>{stat.val}</span>
                              <span style={{ color: stat.highlightPost ? study.color : "inherit" }}>{stat.post}</span>
                            </div>
                            <div style={{ fontSize: "0.55rem", fontWeight: 800, color: "#666", marginTop: "4px" }}>{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Markets */}
                      <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                        <span style={{ fontSize: "0.6rem", fontWeight: 800, color: "#999", marginTop: "4px" }}>MARKETS</span>
                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                          {study.markets.map((m, i) => (
                            <span key={i} className="dynamic-inner-bg" style={{
                              backgroundColor: study.cardInnerBg,
                              color: "#333",
                              padding: "3px 10px",
                              borderRadius: "10px",
                              fontSize: "0.5rem",
                              fontWeight: 800
                            }}>
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ➕ Load More Button */}
          {visibleCount < allCaseStudies.length && (
            <div style={{ textAlign: "center", marginTop: "5rem" }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={loadMore}
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#111",
                  border: "1px solid rgba(0,0,0,0.1)",
                  padding: "0.4rem 0.4rem 0.4rem 1.5rem",
                  borderRadius: "100px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
                }}
              >
                Load More
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                  <Plus size={20} />
                </div>
              </motion.button>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{
        __html: `
        .case-card-img {
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }
        .case-card:hover .case-card-img {
          transform: scale(1.06);
        }
        .case-card:hover .dynamic-bg {
          backdrop-filter: blur(16px) saturate(1.4) !important;
          -webkit-backdrop-filter: blur(16px) saturate(1.4) !important;
          background-color: rgba(255, 255, 255, 0.22) !important;
        }
        .case-card:hover .dynamic-fill {
          fill: rgba(255, 255, 255, 0.22) !important;
        }
        .case-card:hover .dynamic-inner-bg {
          background-color: rgba(255, 255, 255, 0.35) !important;
        }
        .case-studies-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1200px) {
          .case-studies-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .case-studies-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </main>
  );
}
