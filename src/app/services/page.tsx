"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Branding & Strategy",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,",
    img: "/images/services/Branding-and-Strategy.png",
    features: ["Brand Positioning", "Cultural Strategy", "Market Entry Planning", "Campaign Architecture"]
  },
  {
    num: "02",
    title: "Translation & Localization",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,",
    img: "/images/services/Translation-and-Localization.png",
    features: ["Brand Positioning", "Cultural Strategy", "Market Entry Planning", "Campaign Architecture"]
  },
  {
    num: "03",
    title: "Creative Development",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,",
    img: "/images/services/Creative-Development.jpg",
    features: ["Brand Positioning", "Cultural Strategy", "Market Entry Planning", "Campaign Architecture"]
  },
  {
    num: "04",
    title: "Digital Advertising",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,",
    img: "/images/services/Digital-Advertising.jpg",
    features: ["Brand Positioning", "Cultural Strategy", "Market Entry Planning", "Campaign Architecture"]
  },
  {
    num: "05",
    title: "Influencer Collaboration",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,",
    img: "/images/services/Community-Influencer-Collaboration.png",
    features: ["Brand Positioning", "Cultural Strategy", "Market Entry Planning", "Campaign Architecture"]
  },
  {
    num: "06",
    title: "Multicultural PR",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,",
    img: "/images/services/Multicultural-PR.png",
    features: ["Brand Positioning", "Cultural Strategy", "Market Entry Planning", "Campaign Architecture"]
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

      {/* Redesigned Hero Section ("What We Do") */}
      <section style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 10%",
        overflow: "hidden",
        backgroundColor: "#18191D",
        backgroundImage: "url('/images/services/Frame-38.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>

        {/* Animated Ripple Background */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end", // Emerge from bottom-right as in reference
          paddingRight: "5vw",
          overflow: "visible"
        }}>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{
                scale: [0.6, 1],
                opacity: [0, (0.03 + (12 - i) * 0.03)]
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1], // cinematic smooth ease
              }}
              style={{
                position: "absolute",
                width: `${300 + i * 220}px`,
                height: `${240 + i * 180}px`,
                borderRadius: "160px",
                border: "1.5px solid",
                borderColor: i < 4 ? "rgba(255, 94, 0, 0.5)" : "rgba(74, 144, 226, 0.3)",
                background: i === 0
                  ? "radial-gradient(circle, rgba(255, 94, 0, 0.4) 0%, rgba(255, 94, 0, 0) 70%)"
                  : "transparent",
                filter: `blur(${10 + i * 2}px)`,
                opacity: 0.1,
                transform: "translate(15%, 15%)", // Shifted towards bottom-right
              }}
            />
          ))}

          {/* Main Expanding Glow Core */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{
              position: "absolute",
              width: "1400px",
              height: "1400px",
              background: "radial-gradient(circle at 70% 70%, rgba(255, 94, 0, 0.15) 0%, rgba(74, 144, 226, 0.1) 40%, transparent 80%)",
              filter: "blur(100px)",
              bottom: "-10%",
              right: "0%",
              zIndex: -1
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
            <h1 style={{
              fontSize: "clamp(6rem, 8vw, 8rem)",
              opacity: 0.3,
              fontWeight: 200,
              lineHeight: 0.9,
              marginBottom: "3rem",
              letterSpacing: "-0.04em",
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
              The world doesn&apos;t adapt to your brand — your brand adapts to the world.
              The world doesn&apos;t adapt to your brand — your brand adapts to the world.
            </p>
          </motion.div>

          {/* Bottom Elements Row */}
          <div style={{
            marginTop: "auto",
            paddingTop: "15vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end"
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
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  transition: "color 0.3s ease",
                  opacity: 0.3,
                }}
                onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = "#FF5E00"}
                onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
              >
                Learn More
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            {/* Get Started Button (P pill style) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8, type: "spring" }}
            >
              <button style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "2rem 5rem",
                borderRadius: "100px",
                color: "white",
                fontSize: "2rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 0 25px rgba(255, 255, 255, 0.1)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  const target = e.currentTarget;
                  target.style.transform = "scale(1.05) translateY(-8px)";
                  target.style.background = "rgba(255, 255, 255, 0.25)";
                  // target.style.boxShadow = "0 35px 70px rgba(255, 94, 0, 0.3), inset 0 0 45px rgba(255, 255, 255, 0.2)";
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
            </motion.div>
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
              fontSize: "clamp(2rem, 10vw, 5rem)",
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
                      gap: "0.75rem",
                      marginBottom: "3rem"
                    }}>
                      {svc.features.map((feature, fIdx) => (
                        <div key={fIdx} style={{
                          padding: "0.7rem 1.4rem",
                          borderRadius: "100px",
                          background: fIdx % 2 === 0
                            ? "linear-gradient(270deg, #FF8465 0%, #517BFF 100%)"
                            : "linear-gradient(270deg, #FF8465 0%, #517BFF 100%)",
                          color: "#FFFFFF",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          letterSpacing: "0.01em",
                          opacity: 0.9
                        }}>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Learn More pill */}
                    <Link
                      href="#"
                      style={{
                        width: "fit-content",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.75rem 1.5rem",
                        borderRadius: "100px",
                        border: "1px solid #E5E5E5",
                        color: "#000000",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        const target = e.currentTarget;
                        target.style.background = "#F9F9F9";
                        target.style.borderColor = "#CCCCCC";
                      }}
                      onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        const target = e.currentTarget;
                        target.style.background = "transparent";
                        target.style.borderColor = "#E5E5E5";
                      }}
                    >
                      Learn More
                      <div style={{
                        background: "#EBEBEB",
                        borderRadius: "50%",
                        width: "28px",
                        height: "28px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                        <ArrowRight size={16} color="#444444" />
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
          @media (max-width: 992px) {
            .service-card-white {
              flex-direction: column !important;
              padding: 2rem 1.5rem !important;
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
    </main>
  );
}
