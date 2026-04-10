"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Ribbons from "@/components/Ribbons";

const services = [
  {
    num: "01",
    title: "Branding & Strategy",
    desc: "We build brands that earn genuine trust in multicultural markets — through positioning, identity and strategy grounded in cultural truth, not assumption.",
    img: "/images/services/Branding-and-Strategy.png",
    features: ["Brand Positioning", "Cultural Messaging", "Market Entry Strategy", "Brand Architecture"],
    slug: "/services/branding-strategy"
  },
  {
    num: "02",
    title: "Translation & Localization",
    desc: "We make your brand voice feel native across languages, dialects and cultural contexts — so your message lands with the same weight in every market.",
    img: "/images/services/Translation-and-Localization.png",
    features: ["Cultural Adaptation", "Dialect Mapping", "Content Localization", "Multilingual Copywriting"],
    slug: "/services/translation-localization"
  },
  {
    num: "03",
    title: "Creative Development",
    desc: "We develop campaigns and content built with cultural intelligence at the core — every visual and every word designed to connect with the audience you are trying to reach.",
    img: "/images/services/Creative-Development.jpg",
    features: ["Cultural Storytelling", "Visual Identity", "Content Strategy", "Campaign Creative"],
    slug: "/services/creative-development"
  },
  {
    num: "04",
    title: "Digital Advertising",
    desc: "We run precision multicultural ad campaigns across platforms and markets — built to reach the right communities and built to perform.",
    img: "/images/services/Digital-Advertising.jpg",
    features: ["Audience Targeting", "| Paid Media Strategy", "Performance Optimisation", "Cross-Market Campaigns"],
    slug: "/services/digital-advertising"
  },
  {
    num: "05",
    title: "Influencer Collaboration",
    desc: "We connect brands with creators who hold genuine trust across 46+ ethnicities — building campaigns that feel organic to the community and deliver real results.",
    img: "/images/services/Community-Influencer-Collaboration.png",
    features: ["Creator Sourcing ", "Campaign Management", "Community Alignment ", "Authentic Partnerships"],
    slug: "/services/influencer-collaboration"
  },
  {
    num: "06",
    title: "Multicultural PR",
    desc: "We shape brand narratives across diverse media ecosystems — from ethnic press to mainstream outlets — building credibility where it counts most. ",
    img: "/images/services/Multicultural-PR.png",
    features: ["Earned Media Strategy", "Ethnic Media Outreach", " Brand Narrative", "Reputation Building"],
    slug: "/services/multicultural-pr"
  },
];

export default function ServicesPage() {
  return (
    <main style={{
      backgroundColor: "#18191D",
      color: "#ffffff",
      fontFamily: "'Manrope', sans-serif",
      minHeight: "100vh",
      overflowX: "hidden"
    }}>
      <Navbar />

      <div style={{ position: "absolute", inset: 0, zIndex: 99999999999, pointerEvents: "none" }}>
        <Ribbons
          baseThickness={60}
          colors={["#f0542c", "#7b3d62", "#002cc3"]}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={false}
        />
      </div>

      {/* Redesigned Hero Section ("What We Do") */}
      <section
        className="services-hero-section"
        style={{
          minHeight: "100vh",
          width: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 10%",
          overflow: "hidden",
          background: `
      radial-gradient(#F0542C 0%, #7B3D62 40%, #002CC3 100%),
      #18191D
    `,
        }}
      >


        {/* High-Fidelity Ripple Overlay using Image + Blend Mode */}
        <div style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeOut" }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/images/services/Frame-38.png')",
              backgroundSize: "contain",
              backgroundPosition: "center right",
              backgroundRepeat: "no-repeat",
              mixBlendMode: "screen", // Creates the 'tinted' glow effect on arcs
              opacity: 1, // Full visibility of the arcs
              filter: "brightness(1.1)", // Slight boost to match vibrancy
            }}
          />
        </div>

        {/* Content Container */}
        <div style={{ position: "relative", zIndex: 10, maxWidth: "1400px", width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ maxWidth: "800px" }}
          >
            <h1 className="services-hero-title" style={{
              fontSize: "clamp(4.5rem, 10vw, 10rem)",
              opacity: 0.9, // Brighter as in reference
              fontWeight: 200,
              lineHeight: 0.85,
              marginBottom: "3rem",
              letterSpacing: "-0.04em",
              color: "#FFFFFF"
            }}>
              What We Do
            </h1>

            <p style={{
              fontSize: "clamp(0.8rem, 1.2vw, 1.4rem)",
              opacity: 0.3,
              lineHeight: 1.5,
              maxWidth: "500px",
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}>
              We Are the Bridge Between Your Brand and the World's Most Diverse Markets. <br />

              From strategy to storytelling to performance — we give brands the cultural intelligence, creative depth and media reach to grow where it matters most.
            </p>
          </motion.div>

          {/* Bottom Elements Row */}
          <div style={{
            marginTop: "auto",
            paddingTop: "15vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end"
          }}>
            {/* Learn More Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Link
                href="#services"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  transition: "color 0.3s ease",
                  opacity: 0.3,
                }}
                onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = "#FF5E00"}
                onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = "#fff"}
              >
                Learn More
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            {/* Get Started Button (P pill style) with Entance Animation */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8, duration: 1, type: "spring" }} 
            >
              <button style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "1rem 3rem",
                borderRadius: "100px",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 0 25px rgba(255, 255, 255, 0.1)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                marginTop: "-100px"
              }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  const target = e.currentTarget;
                  target.style.transform = "scale(1.02) translateY(-8px)";
                  target.style.background = "rgba(255, 255, 255, 0.25)";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  const target = e.currentTarget;
                  target.style.transform = "scale(1) translateY(0)";
                  target.style.background = "rgba(255, 255, 255, 0.15)";
                  target.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 0 25px rgba(255, 255, 255, 0.1)";
                }}
              >
                Get Started
              </button>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Redesigned Services Grid with Alternating White Cards */}
      <section id="services" style={{ padding: "1rem 0 6rem", backgroundColor: "#18191D" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "clamp(1rem, 8vw, 5rem)",
              fontWeight: 200,
              textAlign: "center",
              marginBottom: "6rem",
              color: "#FFFFFF",
              letterSpacing: "-0.04em",
              lineHeight: 1
            }}
          >
            What We Do
          </motion.h2>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8rem"
          }}>
            {services.map((svc, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={svc.num}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover="hover"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    display: "flex",
                    flexDirection: isEven ? "row" : "row-reverse",
                    alignItems: "center",
                    background: "#FFFFFF",
                    borderRadius: "48px",
                    overflow: "visible",
                    position: "relative",
                    minHeight: "450px",
                    boxShadow: "0 25px 80px rgba(0,0,0,0.15)",
                    padding: "0 3%"
                  }}
                  className="service-card-white"
                >
                  {/* Image Side (Pop-out effect) */}
                  <div style={{
                    flex: 1,
                    position: "relative",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <motion.div
                      variants={{
                        hover: {
                          x: 0,
                          scale: 1,
                        }
                      }}
                      initial={{
                        x: isEven ? "-18%" : "18%",
                        scale: 0.95
                      }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 90, damping: 20 }}
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1/1",
                        borderRadius: "40px",
                        overflow: "hidden",
                        boxShadow: "0 40px 100px rgba(0,0,0,0.25)",
                        zIndex: 20,
                        transform: "translateX(var(--tx, 0))"
                      }}
                      className="svc-image-container"
                    >
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </motion.div>
                  </div>

                  {/* Text Side */}
                  <div style={{
                    flex: 1.2,
                    padding: "4rem 4% 4rem 6%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: "#000000"
                  }}>
                    <div style={{
                      fontSize: "2.5rem",
                      fontWeight: 300,
                      color: "#18191D",
                      marginBottom: "0.5rem",
                      fontFamily: "'Manrope', sans-serif"
                    }}>
                      {svc.num}
                    </div>
                    <h2 style={{
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 700,
                      marginBottom: "1.5rem",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                      color: "#18191D"
                    }}>
                      {svc.title}
                    </h2>
                    <p style={{
                      fontSize: "1.125rem",
                      color: "#18191D",
                      lineHeight: 1.6,
                      marginBottom: "2.5rem",
                      maxWidth: "500px"
                    }}>
                      {svc.desc}
                    </p>

                    {/* Features/Tags */}
                    <div style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "1rem",
                      marginBottom: "3rem"
                    }}>
                      {svc.features.map((feature, fIdx) => (
                        <div key={fIdx} className="feature-tag-wrapper">
                          <div className="feature-tag-content">
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Learn More pill */}
                    <Link
                      href={svc.slug}
                      className="learn-more-pill"
                    >
                      Learn More
                      <div className="arrow-circle">
                        <ArrowRight size={16} strokeWidth={3} />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes gradientBorder {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .feature-tag-wrapper {
            position: relative;
            padding: 2px;
            border-radius: 100px;
            background: linear-gradient(90deg, #FF5E00, #517BFF, #FF5E00); /* Use brand orange instead of #FF8465 */
            background-size: 200% 200%;
            animation: gradientBorder 3s linear infinite;
            display: inline-flex;
            box-shadow: 0 4px 15px rgba(255,94,0,0.15); /* Soft premium glow */
            transition: transform 0.3s ease;
          }
          .feature-tag-wrapper:hover {
            //  transform: translateY(-2px) scale(1.02);
          }
          .feature-tag-content {
            background: #ffffff;
            padding: 0.7rem 1.4rem;
            border-radius: 100px;
            color: #18191D;
            font-size: 0.85rem;
            font-weight: 700;
            letter-spacing: 0.02em;
            text-transform: uppercase;
          }

          .learn-more-pill {
            background: #fff;
            color: #000;
            padding: 0.85rem 1.5rem;
            border-radius: 100px;
            font-size: 0.95rem;
            font-weight: 700;
            display: inline-flex;
            align-items: center;
            gap: 1rem;
            text-decoration: none;
            border: 1px solid #18191D;
            transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
            width: fit-content;
          }
          .learn-more-pill .arrow-circle {
            background: #000;
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: rotate(-45deg); /* Arrow points up-right initially */
            transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), background 0.3s ease;
          }
          .learn-more-pill:hover {
            background: transparent;
            color: #18191D;
          }
          .learn-more-pill:hover .arrow-circle {
            transform: rotate(0deg) scale(1.1); /* Arrow points flat right and pops */
            background: #18191D; /* Arrow container turns black */
          }

          @media (max-width: 992px) {
            .services-hero-section {
              padding: 0 5% !important;
            }
            .services-hero-title {
              font-size: clamp(3rem, 12vw, 5rem) !important;
            }
            .service-card-white {
              flex-direction: column !important;
              // padding: 2rem 1.5rem !important;-
              border-radius: 32px !important;
              min-height: auto !important;
              gap: 0 !important;
            }
            .service-card-white > div {
              padding: 1.5rem 1rem !important;
              flex: none !important;
              width: 100% !important;
            }
            .service-card-white h2 {
              font-size: 2rem !important;
            }
            .svc-image-container {
              transform: none !important;
              margin-bottom: 1rem;
            }
          }
        `}} />
      </section>



      <Footer />
    </main >
  );
}
