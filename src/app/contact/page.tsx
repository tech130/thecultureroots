"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

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
          {/* Tubelight Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isFlickering ? { 
              opacity: [0, 1, 0, 1, 0.2, 1],
              transition: { duration: 1.5, times: [0, 0.1, 0.2, 0.3, 0.4, 1] } 
            } : { opacity: 1 }}
            style={{
              position: "absolute",
              top: "10rem",
              left: "50%",
              transform: "translateX(-50%)",
              width: "clamp(200px, 60vw, 800px)",
              height: "2px",
              background: "#4A90E2",
              borderRadius: "50%",
              boxShadow: "0 0 20px #4A90E2, 0 0 40px #4A90E2, 0 0 60px #4A90E2",
              zIndex: 0,
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ textAlign: "center", zIndex: 2 }}
          >
            {/* 'Your brand's' text */}
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                marginBottom: "0.25rem",
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
              {/* Interactive Toggle Switch */}
              <motion.div
                onClick={() => setIsOn(!isOn)}
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  width: "clamp(120px, 18vw, 220px)",
                  height: "clamp(56px, 8vw, 100px)",
                  borderRadius: "100px",
                  background: isOn 
                    ? "linear-gradient(90deg, #FF5E00 0%, #FFFFFF 100%)" 
                    : "linear-gradient(90deg, #FFFFFF 0%, #FF5E00 100%)",
                  margin: "0 clamp(8px, 1vw, 16px)",
                  position: "relative",
                  boxShadow: isOn 
                    ? "0 0 30px rgba(255, 94, 0, 0.6), inset 0 4px 10px rgba(0,0,0,0.15)"
                    : "inset 0 4px 10px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                }}
              >
                {/* Glow Effect when ON */}
                <AnimatePresence>
                  {isOn && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1.1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      style={{
                        position: "absolute",
                        top: "-20%",
                        left: "-10%",
                        right: "-10%",
                        bottom: "-20%",
                        background: "radial-gradient(circle, rgba(255,94,0,0.3) 0%, rgba(255,94,0,0) 70%)",
                        borderRadius: "100px",
                        zIndex: -1,
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* White Circle */}
                <motion.div
                  animate={{ 
                    x: isOn ? "calc(100% - clamp(48px, 7vw, 84px) - clamp(4px, 0.5vw, 8px) * 2)" : 0 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    position: "absolute",
                    left: "clamp(4px, 0.5vw, 8px)",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "clamp(48px, 7vw, 84px)",
                    height: "clamp(48px, 7vw, 84px)",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2), inset -2px -2px 6px rgba(0,0,0,0.05)",
                  }}
                />
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
                fontSize: "clamp(4rem, 10vw, 8rem)",
                fontWeight: 300,
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
