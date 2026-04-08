"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import LightRays from "@/components/LightRays";

export default function ContactUs() {
  const [isOn, setIsOn] = useState(false);
  const [isFlickering, setIsFlickering] = useState(true);

  // Simulate tubelight flickering on load
  useEffect(() => {
    const timer = setTimeout(() => setIsFlickering(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      style={{
        backgroundColor: "#08081A", // Very dark background
        color: "#ffffff",
        fontFamily: "'Manrope', sans-serif",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Navbar />

      {/* Wrapper for Hero + HELLO to share the background map */}
      <div style={{ position: "relative", width: "100%", zIndex: 0 }}>
        {/* Grid Background Image spanning down to half of HELLO */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: "12.8vh", // Stops approximately halfway through the HELLO section
            zIndex: -1,
            opacity: 1, // User requested opacity tweak
            pointerEvents: "none",
            overflow: "hidden" // Removed mixBlendMode to ensure visibility over dark background
          }}
        >
          <Image
            src="/images/contact/bg.png"
            alt="Grid Pattern"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
          {/* Subtle gradient overlay to merge with dark background nicely */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "linear-gradient(to bottom, rgba(8,8,26,0) 0%, rgba(8,8,26,1) 100%)"
          }} />
        </div>

        {/* 🪄 Atmosphere Light Rays */}
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

        {/* Top Section */}
        <section
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
            {/* 'Your brand's' text */}
            <h2
              style={{
                fontSize: "clamp(1.5rem, 5.5vw, 4.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.01em",
                marginBottom: "-2rem",
                marginTop: 0,
              }}
            >
              Your brand's
            </h2>

            <h1
              style={{
                fontSize: "clamp(5rem, 16vw, 12rem)", // Increased size for 'growth'
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-0.03em",
                margin: "0 0 1rem 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              gr
              {/* Toggle Switch with Gradient Border representing 'o' */}
              <motion.div
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  width: "clamp(120px, 18vw, 220px)",
                  height: "clamp(56px, 8vw, 160px)",
                  borderRadius: "600px",
                  padding: "30px", // Increased padding for more 'around' space
                  background: "linear-gradient(90deg, #FFFFFF 0%, #F0542c 100%)", // Gradient border
                  margin: "0 clamp(8px, 1vw, 16px)",
                  position: "relative",
                  boxShadow: "0 0 40px rgba(255, 107, 74, 0.3)",
                  cursor: "pointer",
                  marginTop: "6%",
                }}
              >
                {/* Dark Inner Track (The 'Gap') */}
                <div style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  background: "#08081A",
                  borderRadius: "700px",
                  // Removed overflow: hidden to prevent clipping of the circle's glow
                  zIndex: 2
                }}>
                  {/* Subtle track glow that moves with the knob */}
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(90deg, transparent, rgba(255, 107, 74, 0.2), transparent)",
                      zIndex: 1,
                      borderRadius: "700px"
                    }}
                  />

                  {/* Circular Knob (Automatic left-to-right with progressive glow) */}
                  <motion.div
                    animate={{
                      left: ["0%", "100%"],
                      x: ["0%", "-100%"],
                      boxShadow: [
                        "0 15px 25px rgba(0,0,0,0.3), inset 0 0 0 2px #E5E5E5, inset 0 4px 12px rgba(0,0,0,0.1)", // At 0% (No glow)
                        "0 15px 30px rgba(255, 107, 74, 0.15), 0 0 10px rgba(255, 255, 255, 0.1), inset 0 0 0 2px #E5E5E5, inset 0 4px 12px rgba(0,0,0,0.1)", // At 70% (Still low glow)
                        "0 20px 45px rgba(255, 107, 74, 0.7), 0 0 60px rgba(255, 255, 255, 0.5), inset 0 0 0 2px #E5E5E5, inset 0 4px 12px rgba(0,0,0,0.1)"  // At 100% (Full glow)
                      ]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "reverse", 
                      ease: [0.45, 0.05, 0.55, 0.95],
                      times: [0, 0.7, 1] // Glow appears late in the move to the right
                    }}
                    style={{
                      position: "absolute",
                      top: "-15%", 
                      transform: "translateY(-50%)",
                      width: "clamp(48px, 6vw, 84px)",
                      height: "clamp(48px, 6vw, 84px)",
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

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              {/* The icon beside "Lives in Culture" */}
              <Image
                src="/images/contact/Frame-52.svg"
                alt="Culture Icon"
                width={36}
                height={36}
                style={{ width: "clamp(24px, 4vw, 40px)", height: "auto" }}
              />
              <h2
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                Lives in Culture
              </h2>
            </div>

            <button
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
              <span
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
              </span>
            </button>
          </motion.div>
        </section>

        {/* Transitional HELLO & CultureRoots Signature Section */}
        <section
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "clamp(300px, 35vh, 600px)", // Increased organically so text doesn't cut
            paddingTop: "2rem",
            paddingBottom: "4rem",
            overflow: "visible", // Removed 'hidden' so huge text can bleed without getting sliced
            zIndex: 1,
          }}
        >
          {/* Faint 'HELLO' background */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "clamp(7rem, 18vw, 18rem)",
              fontWeight: 700,
              textAlign: "center",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              userSelect: "none",
              zIndex: 0,
              opacity: 0.06, // boosted slightly because 0.05 is virtually invisible against #08081A
              background: "linear-gradient(180deg, #FFF 25.81%, rgba(255, 255, 255, 0.40) 51.98%, rgba(255, 255, 255, 0.00) 78.14%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              overflow: "visible",
            }}
          >
            HELLO
          </div>

          {/* Signature Image overlay */}
          <div
            style={{
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "clamp(180px, 30vw, 250px)",
              height: "auto",
              pointerEvents: "none",
              zIndex: 2,
            }}
          >
            <Image
              src="/images/contact/CultureRoots.png"
              alt="CultureRoots Signature"
              width={250}
              height={50}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
              priority
            />
          </div>
        </section>
      </div>

      {/* Main Content (Let's Get In Touch + Form) */}
      <section
        style={{
          padding: "4rem 5%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              style={{
                fontSize: "clamp(4rem, 12vw, 9rem)",
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

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              paddingTop: "2rem",
            }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              {[
                { label: "Full Name", type: "text" },
                { label: "Mail Id", type: "email" },
                { label: "Company (Optional)", type: "text" },
                { label: "Message", type: "text" },
              ].map((field, idx) => (
                <div key={idx} style={{ position: "relative" }}>
                  <input
                    type={field.type}
                    placeholder={field.label}
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
                <button
                  type="submit"
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
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  Submit
                  <span
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
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Contact Info Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            marginTop: "6rem",
            marginBottom: "4rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1rem",
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            Contact Us
            <span
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
            </span>
          </div>
          <div
            style={{
              fontSize: "1.25rem",
              fontWeight: 300,
              opacity: 0.8,
            }}
          >
            hey@cultureroots.com | +91 98765 43210
          </div>
        </motion.div>
      </section>

      {/* Adding global footer at the bottom */}
      <Footer />
    </main >
  );
}
