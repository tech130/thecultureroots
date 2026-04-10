"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import LightRays from "@/components/LightRays";
import { useContactForm } from "@/hooks/useContactForm";
import ThankYouPopup from "@/components/ThankYouPopup";

export default function ContactUs() {
  const [isOn, setIsOn] = useState(false);
  const [isFlickering, setIsFlickering] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);

  const { formData, handleChange, handleSubmit, isSubmitting } = useContactForm(() => {
    setShowThankYou(true);
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsFlickering(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      style={{
        backgroundColor: "#08081A",
        color: "#ffffff",
        fontFamily: "'Manrope', sans-serif",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Navbar />

      {/* Wrapper for Hero + HELLO */}
      <div style={{ position: "relative", width: "100%", zIndex: 0 }}>

        {/* Grid Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: "12.8vh",
            zIndex: -1,
            opacity: 1,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/contact/bg.png"
            alt="Grid Pattern"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "linear-gradient(to bottom, rgba(8,8,26,0) 0%, rgba(8,8,26,1) 100%)",
          }} />
        </div>

        {/* Light Rays */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100vh", zIndex: 0, pointerEvents: "none" }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#FFFFFF"
            raysSpeed={3}
            lightSpread={0.3}
            rayLength={4}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0.1}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1.5}
            saturation={1}
          />
        </div>

        {/* ── Hero Section ── */}
        <section
          className="contact-hero-section"
          style={{
            paddingTop: "12rem",
            paddingBottom: "8rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ textAlign: "center", zIndex: 2 }}
          >
            {/* "Your brand's" */}
            <h2
              className="contact-your-brands"
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.01em",
                marginBottom: "-2rem",
                marginTop: 0,
              }}
            >
              Your brand's
            </h2>

            {/* "growth" with toggle */}
            <h1
              className="contact-growth-heading"
              style={{
                fontSize: "clamp(5rem, 16vw, 12rem)",
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-0.03em",
                margin: "0 0 1rem 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              gr
              <motion.div
                className="contact-toggle"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  width: "clamp(100px, 18vw, 220px)",
                  height: "clamp(60px, 8vw, 160px)",
                  borderRadius: "600px",
                  padding: "clamp(12px, 2vw, 30px)",
                  background: "linear-gradient(90deg, #FFFFFF 0%, #F0542c 100%)",
                  margin: "0 clamp(4px, 1vw, 16px)",
                  position: "relative",
                  boxShadow: "0 0 40px rgba(255, 107, 74, 0.3)",
                  marginTop: "6%",
                }}
              >
                <div style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  background: "#08081A",
                  borderRadius: "700px",
                  zIndex: 2,
                }}>
                  <motion.div
                    animate={{ x: ["-100%", "100%"], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(90deg, transparent, rgba(255, 107, 74, 0.2), transparent)",
                      zIndex: 1,
                      borderRadius: "700px",
                    }}
                  />
                  <motion.div
                    animate={{
                      left: ["0%", "100%"],
                      x: ["0%", "-100%"],
                      boxShadow: [
                        "0 15px 25px rgba(0,0,0,0.3), inset 0 0 0 2px #E5E5E5, inset 0 4px 12px rgba(0,0,0,0.1)",
                        "0 15px 30px rgba(255, 107, 74, 0.15), 0 0 10px rgba(255, 255, 255, 0.1), inset 0 0 0 2px #E5E5E5, inset 0 4px 12px rgba(0,0,0,0.1)",
                        "0 20px 45px rgba(255, 107, 74, 0.7), 0 0 60px rgba(255, 255, 255, 0.5), inset 0 0 0 2px #E5E5E5, inset 0 4px 12px rgba(0,0,0,0.1)",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: [0.45, 0.05, 0.55, 0.95],
                      times: [0, 0.7, 1],
                    }}
                    style={{
                      position: "absolute",
                      top: "-15%",
                      transform: "translateY(-50%)",
                      width: "clamp(28px, 6vw, 84px)",
                      height: "clamp(28px, 6vw, 84px)",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "50%",
                      border: "6px solid #F8F9FA",
                      zIndex: 3,
                    }}
                  />
                </div>
              </motion.div>
              wth
            </h1>

            {/* "Lives in Culture" */}
            <div
              className="contact-lives-row"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              <Image
                src="/images/contact/Frame-52.svg"
                alt="Culture Icon"
                width={36}
                height={36}
                className="contact-culture-icon"
                style={{ width: "clamp(20px, 4vw, 40px)", height: "auto" }}
              />
              <h2
                className="contact-lives-heading"
                style={{
                  fontSize: "clamp(1.6rem, 5vw, 3.5rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                Lives in Culture
              </h2>
            </div>

            {/* CTA button */}
            <motion.button
              whileHover="hover"
              onClick={() => window.open(
                "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1PUl1axcbE4O_8tOgSeLP6OGYBJrBAem_WWsrJq9u6MNjgySisCJdUmz43NwVkuGppFuHrstYd",
                "_blank",
                "noopener,noreferrer"
              )}
              className="contact-schedule-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "50px",
                fontSize: "0.875rem",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
            >
              Schedule a Call
              <motion.span
                variants={{ hover: { x: 3 } }}
                style={{
                  background: "white",
                  color: "#111",
                  borderRadius: "50%",
                  padding: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowRight size={14} />
              </motion.span>
            </motion.button>
          </motion.div>
        </section>

        {/* ── HELLO + CultureRoots Signature ── */}
        <section
          className="contact-hello-section"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "clamp(200px, 35vh, 600px)",
            paddingTop: "2rem",
            paddingBottom: "4rem",
            overflow: "visible",
            zIndex: 1,
          }}
        >
          {/* HELLO background text */}
          <div
            className="contact-hello-bg"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "clamp(5rem, 18vw, 18rem)",
              fontWeight: 700,
              textAlign: "center",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              userSelect: "none",
              zIndex: 0,
              opacity: 0.06,
              background: "linear-gradient(180deg, #FFF 25.81%, rgba(255, 255, 255, 0.40) 51.98%, rgba(255, 255, 255, 0.00) 78.14%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              overflow: "visible",
            }}
          >
            HELLO
          </div>

          {/* CultureRoots signature */}
          <div
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              zIndex: 2,
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            <p
              className="contact-signature"
              style={{
                fontFamily: "var(--font-brittney), cursive",
                fontSize: "clamp(1.5rem, 8vw, 4rem)",
                color: "#ffffff",
                margin: 0,
                lineHeight: 1.1,
                opacity: 0.92,
              }}
            >
              CultureRoots
            </p>
          </div>
        </section>
      </div>

      {/* ── Let's Get In Touch + Form ── */}
      <section
        className="contact-form-section"
        style={{
          padding: "4rem 5%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          className="contact-form-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="contact-lets-heading"
              style={{
                fontSize: "clamp(3rem, 12vw, 9rem)",
                fontWeight: 200,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Let's
              <br />
              &nbsp;&nbsp;Get In
              <br />
              Touch
            </h2>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ paddingTop: "2rem" }}
          >
            <form
              style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
              onSubmit={handleSubmit}
            >
              {[
                { label: "Full Name", type: "text", name: "fullName" as const },
                { label: "Mail Id", type: "email", name: "email" as const },
                { label: "Company (Optional)", type: "text", name: "company" as const },
                { label: "Message", type: "text", name: "message" as const },
              ].map((field, idx) => (
                <div key={idx} style={{ position: "relative" }}>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.label}
                    required={field.name !== "company"}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.7)",
                      color: "white",
                      padding: "0.5rem 0",
                      fontSize: "1.125rem",
                      outline: "none",
                      fontFamily: "inherit",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--accent-orange, #FF5E00)")}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.7)")}
                  />
                </div>
              ))}

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  initial="initial"
                  whileHover={isSubmitting ? {} : "hover"}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "white",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "50px",
                    fontSize: "0.875rem",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                  onMouseOver={(e) => !isSubmitting && (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                  <motion.span
                    variants={{ hover: { x: 5 } }}
                    style={{
                      background: "white",
                      color: "#111",
                      borderRadius: "50%",
                      padding: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ArrowRight size={14} />
                  </motion.span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* ── Contact Info Bottom ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="contact-info-bottom"
          style={{
            marginTop: "6rem",
            marginBottom: "4rem",
            textAlign: "center",
          }}
        >
          <motion.div
            initial="initial"
            whileHover="hover"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1rem",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Contact Us
            <motion.span
              variants={{ hover: { x: 3 } }}
              style={{
                background: "white",
                color: "#111",
                borderRadius: "50%",
                padding: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowRight size={14} />
            </motion.span>
          </motion.div>

          <div
            className="contact-info-details"
            style={{
              fontSize: "1.25rem",
              fontWeight: 300,
              opacity: 0.8,
            }}
          >
            hey@thecultureroots.com | +91 95000 11980
          </div>
        </motion.div>
      </section>

      <ThankYouPopup isOpen={showThankYou} onClose={() => setShowThankYou(false)} />
      <Footer />

      <style jsx global>{`

        /* ══════════════════════════════════════
           HERO SECTION
        ══════════════════════════════════════ */

        @media (max-width: 1024px) {
          .contact-hero-section {
            padding-top: 10rem !important;
            padding-bottom: 5rem !important;
          }
          .contact-your-brands {
            margin-bottom: -1.5rem !important;
          }
        }

        @media (max-width: 768px) {
          .contact-hero-section {
            padding-top: 8rem !important;
            padding-bottom: 4rem !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .contact-your-brands {
            font-size: clamp(1.6rem, 6vw, 2.5rem) !important;
            margin-bottom: -1rem !important;
          }
          .contact-growth-heading {
            font-size: clamp(3.5rem, 16vw, 7rem) !important;
          }
          .contact-lives-row {
            gap: 0.5rem !important;
            margin-bottom: 1.5rem !important;
          }
          .contact-lives-heading {
            font-size: clamp(1.4rem, 6vw, 2.5rem) !important;
          }
          .contact-culture-icon {
            width: clamp(18px, 5vw, 28px) !important;
          }
          .contact-schedule-btn {
            font-size: 0.8rem !important;
            padding: 0.45rem 0.9rem !important;
          }
        }

        @media (max-width: 480px) {
          .contact-hero-section {
            padding-top: 8.5rem !important;
            padding-bottom: 3rem !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .contact-your-brands {
            font-size: clamp(1.3rem, 7vw, 2rem) !important;
            margin-bottom: -0.75rem !important;
          }
          .contact-growth-heading {
            font-size: clamp(3rem, 18vw, 5rem) !important;
          }
          .contact-toggle {
            width: clamp(60px, 16vw, 100px) !important;
            height: clamp(28px, 9vw, 50px) !important;
            padding: clamp(8px, 1.5vw, 14px) !important;
          }
          .contact-lives-row {
            gap: 0.4rem !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
          .contact-lives-heading {
            font-size: clamp(1.2rem, 7vw, 2rem) !important;
          }
        }

        /* ══════════════════════════════════════
           HELLO + SIGNATURE SECTION
        ══════════════════════════════════════ */

        @media (max-width: 768px) {
          .contact-hello-section {
            min-height: clamp(160px, 25vh, 320px) !important;
            padding-bottom: 2.5rem !important;
          }
          .contact-hello-bg {
            font-size: clamp(4rem, 20vw, 10rem) !important;
          }
          .contact-signature {
            font-size: clamp(1.25rem, 8vw, 2.5rem) !important;
          }
        }

        @media (max-width: 480px) {
          .contact-hello-section {
            min-height: clamp(120px, 20vh, 240px) !important;
            padding-bottom: 1.5rem !important;
          }
          .contact-hello-bg {
            font-size: clamp(3rem, 22vw, 7rem) !important;
          }
          .contact-signature {
            font-size: clamp(1rem, 9vw, 2rem) !important;
          }
        }

        /* ══════════════════════════════════════
           FORM SECTION — LET'S GET IN TOUCH
        ══════════════════════════════════════ */

        @media (max-width: 1024px) {
          .contact-form-section {
            padding: 3rem 5% !important;
          }
          .contact-form-grid {
            gap: 3rem !important;
          }
          .contact-lets-heading {
            font-size: clamp(3rem, 10vw, 7rem) !important;
          }
        }

        @media (max-width: 768px) {
          .contact-form-section {
            padding: 2.5rem 5% !important;
          }
          /* Stack columns naturally via auto-fit, reduce gap */
          .contact-form-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .contact-lets-heading {
            font-size: clamp(2.5rem, 12vw, 5rem) !important;
            /* Remove indent on mobile — too tight */
          }
          /* Tighten form field gaps */
          .contact-form-grid form {
            gap: 2rem !important;
          }
          /* Reduce form top padding */
          .contact-form-grid > div:last-child {
            padding-top: 0 !important;
          }
        }

        @media (max-width: 480px) {
          .contact-form-section {
            padding: 2rem 4% !important;
          }
          .contact-lets-heading {
            font-size: clamp(2.2rem, 14vw, 4rem) !important;
          }
          .contact-form-grid form {
            gap: 1.75rem !important;
          }
          /* Input font size */
          .contact-form-grid input {
            font-size: 1rem !important;
          }
        }

        /* ══════════════════════════════════════
           CONTACT INFO BOTTOM
        ══════════════════════════════════════ */

        @media (max-width: 768px) {
          .contact-info-bottom {
            margin-top: 3.5rem !important;
            margin-bottom: 2.5rem !important;
          }
          .contact-info-details {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .contact-info-bottom {
            margin-top: 2.5rem !important;
            margin-bottom: 2rem !important;
          }
          .contact-info-details {
            font-size: 0.85rem !important;
            /* Stack email and phone on very small screens */
            display: flex !important;
            flex-direction: column !important;
            gap: 0.35rem !important;
            align-items: center !important;
          }
        }
      `}</style>
    </main>
  );
}