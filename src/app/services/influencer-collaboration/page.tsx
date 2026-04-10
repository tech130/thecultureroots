"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, PhoneCall } from "lucide-react";
import CaseStudies from "@/components/CaseStudies";
import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import ThankYouPopup from "@/components/ThankYouPopup";



const otherServices = [
  {
    title: "Branding Strategy",
    img: "/images/services/Branding-and-Strategy.png",
    href: "/services/branding-strategy"
  },
  {
    title: "Translation & Localization",
    img: "/images/services/Translation-and-Localization.png",
    href: "/services/translation-localization"
  },
  {
    title: "Creative Development",
    img: "/images/services/Creative-Development.jpg",
    href: "/services/creative-development"
  },
  {
    title: "Digital Advertising",
    img: "/images/services/Digital-Advertising.jpg",
    href: "/services/digital-advertising"
  },
  {
    title: "Multicultural PR",
    img: "/images/services/Multicultural-PR.png",
    href: "/services/multicultural-pr"
  }
];

// 📝 Reusable Text Cloud for Magnification
const TextCloud = ({ isMagnified = false }: { isMagnified?: boolean }) => (
  <div style={{
    fontSize: isMagnified ? "clamp(2.5rem, 4.5vw, 4.5rem)" : "clamp(2.5rem, 4.5vw, 4.5rem)",
    lineHeight: 1.3,
    letterSpacing: "-0.02em",
    textAlign: "center",
    margin: "0 auto",
    maxWidth: "1200px",
    pointerEvents: "none",
    userSelect: "none",
    color: isMagnified ? "#000" : undefined // Sharper contrast for magnified layer
  }}>
    <span style={{ color: isMagnified ? "#000" : "rgba(24,25,29,0.3)", fontWeight: isMagnified ? 400 : 300 }}>The most powerful thing a brand can have is</span>{" "}
    <span style={{ color: "#18191D", fontWeight: 800 }}>someone their audience already trusts.</span>
    <span style={{ color: isMagnified ? "#000" : "rgba(24,25,29,0.3)", fontWeight: isMagnified ? 400 : 300 }}>We</span>{" "}
    <span style={{ color: "#18191D", fontWeight: 800 }}>find that person</span>{" "}
    <span style={{ color: isMagnified ? "#000" : "rgba(24,25,29,0.3)", fontWeight: isMagnified ? 400 : 300 }}>— for</span>{" "}
    <span style={{ color: "#18191D", fontWeight: 800 }}>every culture,</span>{" "}
    <span style={{ color: isMagnified ? "#000" : "rgba(24,25,29,0.3)", fontWeight: isMagnified ? 400 : 300 }}>across</span>{" "}
    <span style={{ color: "#18191D", fontWeight: 800 }}>every market.</span>
  </div>
);

export default function InfluencerCollaborationPage() {
  const [showThankYou, setShowThankYou] = useState(false);

  const { formData, handleChange, handleSubmit, isSubmitting } = useContactForm(() => {
    setShowThankYou(true);
  });

  return (
    <main style={{ backgroundColor: "#FFFFFF", color: "#18191D", minHeight: "100vh" }}>
      <Navbar />

      {/* 🚀 Hero Section */}
      <section className="inner-hero-section" style={{
        backgroundColor: "#2C2C2C", // Adjusted dark background
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10%",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Background Vertical Line */}
        <div style={{
          position: "absolute",
          left: "45%",
          top: 0,
          bottom: 0,
          width: "1px",
          zIndex: 1
        }} />

        <div style={{ maxWidth: "1200px", zIndex: 10, position: "relative" }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "clamp(3rem, 5.4vw, 6.2rem)",
              fontWeight: 200,
              color: "#FFFFFF",
              lineHeight: 1.05,
              marginBottom: "3rem",
              letterSpacing: "0.01em",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <span>Influencer</span>
            <span style={{ paddingLeft: "20%" }}>Collaboration</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: "0.85rem",
              lineHeight: 1.8,
              color: "#FFFFFF",
              maxWidth: "500px",
              marginBottom: "3rem",
              fontWeight: 300
            }}
          >
            We connect brands with creators who hold real trust inside the communities you want to reach — and build campaigns that feel genuine, not paid for.
          </motion.p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
            {/* Get Started Button */}
            <motion.button
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                backgroundColor: "#FFFFFF",
                color: "#18191D",
                padding: "0.4rem 0.4rem 0.4rem 1.5rem",
                borderRadius: "100px",
                fontSize: "0.95rem",
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "1.5rem"
              }}
            >
              Get Started
              <motion.div 
                variants={{ hover: { x: 5 } }}
                style={{ backgroundColor: "#18191D", color: "#FFFFFF", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </motion.button>

            {/* Contact Us Outline Button */}
            <Link
              href="/contact"
              style={{ textDecoration: "none" }}
            >
              <motion.div
                whileHover="hover"
                style={{
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  padding: "0.4rem 0.4rem 0.4rem 1.5rem",
                  borderRadius: "100px",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  border: "1px solid rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem"
                }}
              >
                Contact Us
                <motion.div 
                  variants={{ hover: { x: 5 } }}
                  style={{ backgroundColor: "#FFFFFF", color: "#18191D", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Cinematic Chess King Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0
          }}
        >
          <Image
            src="/images/services/influencer-collaboration/banner.png"
            alt="Influencer Collaboration - Image"
            fill
            style={{ objectFit: "contain", objectPosition: "right" }}
            priority
          />
          {/* Overlay to ensure text readability */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)",
            zIndex: 1
          }} />
        </motion.div>
      </section>


      {/* 🏡 Interactive Intro Section ("Feel Like Home" with Real Magnification) */}
      <section
        onMouseEnter={() => {
          document.body.style.cursor = 'none';
        }}
        onMouseLeave={() => {
          document.body.style.cursor = 'default';
        }}
        style={{
          padding: "10rem 10%",
          backgroundColor: "#FFFFFF",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Top Right "Schedule a call" */}
        <div style={{ position: "absolute", top: "4rem", right: "10%", zIndex: 10 }}>
          <button
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#333", fontSize: "1.1rem", textDecoration: "none", fontWeight: 500, background: "none", border: "none", cursor: "pointer" }}
          >
            &rarr; Schedule a call
          </button>
        </div>

        {/* Text Layers Container */}
        <div
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const revealed = document.getElementById("revealed-layer") as HTMLElement;
            const magnifierFrame = document.getElementById("magnifier-frame") as HTMLElement;
            const content = document.getElementById("magnified-content") as HTMLElement;

            if (revealed && magnifierFrame && content) {
              // Update Magnifier Frame
              magnifierFrame.style.left = `${x}px`;
              magnifierFrame.style.top = `${y}px`;
              magnifierFrame.style.opacity = "1";

              // Update Reveal Mask (matching new 200px frame = 100px radius)
              revealed.style.clipPath = `circle(100px at ${x}px ${y}px)`;
              revealed.style.opacity = "1";

              // Align Magnified Content (Compensate for scale(1.15) shift)
              const dx = x * -0.15;
              const dy = y * -0.15;
              content.style.transform = `translate(${dx}px, ${dy}px) scale(1.15)`;
            }
          }}
          onMouseLeave={() => {
            const revealed = document.getElementById("revealed-layer") as HTMLElement;
            const magnifierFrame = document.getElementById("magnifier-frame") as HTMLElement;
            if (revealed && magnifierFrame) {
              revealed.style.opacity = "0";
              magnifierFrame.style.opacity = "0";
            }
          }}
          style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 5, cursor: "none" }}
        >

          {/* 🔍 Magnifier Frame (Decorative + King) - Matched to Reference Image */}
          <div
            id="magnifier-frame"
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              pointerEvents: "none",
              transform: "translate(-50%, -50%)",
              zIndex: 30,
              // Soft outer shadow + Strong inner glow for spherical look
              boxShadow: "0 30px 60px rgba(0,0,0,0.12), inset 0 0 40px rgba(255,255,255,0.95)",
              border: "1px solid rgba(255,255,255,0.4)",
              backgroundColor: "rgba(255,255,255,0.02)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden", // Clipped to circle
              opacity: 0,
              transition: "opacity 0.4s ease, left 0.1s ease-out, top 0.1s ease-out",
            }}
          >
            {/* Soft Glass Highlight / Reflection (Matches top-left shine in reference) */}
            <div style={{
              position: "absolute",
              top: "5%",
              left: "15%",
              width: "50%",
              height: "40%",
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.5) 0%, transparent 70%)",
              borderRadius: "50%",
              transform: "rotate(-15deg)",
              pointerEvents: "none",
              filter: "blur(2px)"
            }} />

            {/* The Chess King (Foreground) */}
            <div style={{ position: "relative", width: "100%", height: "100%", pointerEvents: "none", overflow: "hidden" }}>
              <Image
                src="/images/services/influencer-collaboration/banner.png"
                alt="Influencer Collaboration - Image"
                fill
                style={{
                  objectFit: "contain",
                  transform: "scale(1.2)",

                  filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.2))"
                }}
                priority
              />
            </div>
          </div>

          {/* 1. Base Layer (Normal Text) */}
          <div style={{ position: "relative", zIndex: 5, opacity: 1 }}>
            <TextCloud />
          </div>

          {/* 2. Revealed Layer (Magnified Text) */}
          <div
            id="revealed-layer"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 10,
              pointerEvents: "none",
              clipPath: "circle(0px at 0px 0px)",
              backgroundColor: "#FFF",
              opacity: 0,
              transition: "opacity 0.3s ease"
            }}
          >
            <div id="magnified-content" style={{ transformOrigin: "0 0", width: "100%", height: "100%" }}>
              <TextCloud isMagnified />
            </div>
          </div>

          {/* Bottom Button */}
          <motion.div
            onMouseEnter={() => {
              const revealed = document.getElementById("revealed-layer") as HTMLElement;
              const magnifierFrame = document.getElementById("magnifier-frame") as HTMLElement;
              if (revealed && magnifierFrame) {
                revealed.style.opacity = "0";
                magnifierFrame.style.opacity = "0";
              }
              document.body.style.cursor = "default";
            }}
            onMouseLeave={() => {
              document.body.style.cursor = "none";
            }}
            onMouseMove={(e) => e.stopPropagation()}
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            style={{ display: "inline-flex", alignItems: "center", borderRadius: "100px", overflow: "hidden", cursor: "pointer", marginTop: "6rem", position: "relative", zIndex: 50 }}
          >
            <div style={{ backgroundColor: "#18191D", color: "#FFF", padding: "1rem 2.8rem", fontWeight: 600, fontSize: "1rem" }}>
              Reach Us
            </div>
            <div style={{ backgroundColor: "#18191D", padding: "1rem", color: "#FFF", borderLeft: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ backgroundColor: "#FFF", color: "#18191D", borderRadius: "50%", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ArrowDownRight size={14} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* 📁 Case Studies Section (Replicated from Homepage) */}
      <CaseStudies />


      {/* ✉️ Contact Form Section */}
      <section id="contact-form" style={{ backgroundColor: "#111111", padding: "14rem 10% 8rem", color: "#FFFFFF", position: "relative", overflow: "hidden" }}>

        {/* Background Layer: HELLO + Cursive Overlay */}
        <div style={{
          position: "absolute",
          top: "0%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          width: "100%",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0
        }}>
          <div style={{
            fontSize: "clamp(12rem, 20vw, 22rem)",
            fontWeight: 800,
            color: "rgba(255,255,255,0.01)",
            letterSpacing: "0.02em",
            zIndex: 0,
            opacity: 0.06, // boosted slightly because 0.05 is virtually invisible against #08081A
            background: "linear-gradient(180deg, #FFF 25.81%, rgba(255, 255, 255, 0.40) 51.98%, rgba(255, 255, 255, 0.00) 78.14%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            overflow: "visible",
          }}>
            HELLO
          </div>


          <div style={{
            fontFamily: "'Brittney Signature'",
            fontStyle: "normal",
            fontSize: "clamp(3.5rem, 2vw, 2.5rem)",
            color: "#fff",
            marginTop: "-15rem",
            fontWeight: 200
          }}>
            Ready to Reach
          </div>
        </div>

        <div className="contact-grid-layout" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "4rem", position: "relative", zIndex: 10, alignItems: "flex-start" }}>
          {/* Left Column: Staggered Heading */}
          <div style={{ paddingTop: "8rem" }}>
            <div style={{ fontSize: "clamp(5rem, 8vw, 9rem)", fontWeight: 200, lineHeight: 0.9, letterSpacing: "-0.04em" }}>
              <div style={{ opacity: 1 }}>Step</div>
              <div style={{ marginLeft: "6rem", opacity: 1 }}>into the</div>
              <div style={{ marginLeft: "4rem", opacity: 1 }}>right</div>
              <div style={{ opacity: 1 }}>Culture !</div>
            </div>
          </div>

          {/* Right Column: Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2.5rem", paddingTop: "5rem" }}>
              <p style={{ opacity: 0.8, fontSize: "clamp(0.85rem, 1vw, 1.1rem)", color: "#FFFFFF", maxWidth: "450px", lineHeight: 1.5, marginBottom: "1rem" }}>
                Tell Us About Your Brand And The Communities You Want To Connect With. We&apos;ll Take It From There.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                {[
                  { label: "Full Name", name: "fullName" as const },
                  { label: "Mail Id", name: "email" as const },
                  { label: "Company (Optional)", name: "company" as const },
                  { label: "Message", name: "message" as const }
                ].map((field, i) => (
                  <div key={i} style={{ borderBottom: "1.5px solid rgba(255,255,255,0.8)", position: "relative" }}>
                    <label style={{ display: "block", fontSize: "1.1rem", fontWeight: 300, color: "rgba(255,255,255,0.4)" }}>
                      {field.label}
                    </label>
                    <input
                      type={field.name === "email" ? "email" : "text"}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.name !== "company"}
                      aria-label={field.label}
                      title={field.label}
                      style={{ background: "transparent", border: "none", width: "100%", color: "#FFF", fontSize: "1.2rem", outline: "none", padding: "0.5rem 0", fontWeight: 300 }}
                    />
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={isSubmitting ? {} : "hover"}
                  style={{
                    backgroundColor: "transparent",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,0.4)",
                    padding: "0.5rem .5rem 0.5rem 1.5rem",
                    borderRadius: "100px",
                    fontSize: "1rem",
                    fontWeight: 300,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                  <motion.div 
                    variants={{ hover: { x: 5 } }}
                    style={{ backgroundColor: "#FFFFFF", color: "#000", borderRadius: "50%", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.button>
              </div>
            </form>
        </div>

        {/* Bottom Action Footer */}
        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", position: "relative", zIndex: 10 }}>
          <motion.div 
            initial="initial"
            whileHover="hover"
            style={{ fontSize: "1.25rem", color: "#FFFFFF", display: "flex", alignItems: "center", gap: "0.75rem", fontWeight: 400 }}
          >
            Call Us on 
            <motion.span variants={{ hover: { x: 5 } }}>
              <ArrowRight size={20} />
            </motion.span>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1PUl1axcbE4O_8tOgSeLP6OGYBJrBAem_WWsrJq9u6MNjgySisCJdUmz43NwVkuGppFuHrstYd", "_blank", "noopener,noreferrer")}
            style={{
              backgroundColor: "#FFFFFF",
              color: "#000000",
              padding: "1rem 3rem",
              borderRadius: "100px",
              fontSize: "1rem",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
          >
            Book a Free Strategy Call
          </motion.button>
        </div>
      </section>


      {/* 🔄 Other Services Grid */}
      <section style={{ padding: "2rem 5%", backgroundColor: "#FFFFFF" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 700, marginBottom: "4rem", letterSpacing: "-0.02em" }}>Other Services</h2>

        <div className="other-services-carousel" style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem"
        }}>
          {otherServices.map((service, idx) => (
            <Link key={idx} href={service.href} style={{ textDecoration: "none", flexShrink: 0 }}>
              <motion.div
                whileHover={{
                  scale: 0.93,
                  zIndex: 50,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="other-services-card"
                style={{
                  width: "320px",
                  height: "560px",
                  position: "relative",
                  borderRadius: "40px",
                  overflow: "hidden",
                  cursor: "pointer",
                  marginLeft: idx === 0 ? 0 : "-4rem",
                  boxShadow: "-15px 0 45px rgba(0,0,0,0.12)",
                  backgroundColor: "#000",
                  transition: "margin-left 0.4s ease-out",
                }}
              >
                <Image src={service.img} alt={service.title} fill style={{ objectFit: "cover" }} />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 100%)",
                  padding: "2.5rem"
                }}>
                  <h3 style={{
                    color: "#FFF",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    maxWidth: "200px"
                  }}>
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <ThankYouPopup isOpen={showThankYou} onClose={() => setShowThankYou(false)} />
      <Footer />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
        
        @font-face {
          font-family: 'Brittney Signature';
          src: url('/fonts/brittney-signature/Brittney Signature.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @media (max-width: 1024px) {
          .inner-hero-section {
            flex-direction: column !important;
            justify-content: center !important;
            text-align: center;
            padding-top: 5rem !important;
          }
          .inner-hero-section > div {
            align-items: center;
          }
          .inner-hero-section h1 {
            align-items: center !important;
          }
          .other-services-carousel {
            justify-content: flex-start !important;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 2rem !important;
          }
          .other-services-card {
            margin-left: 1rem !important;
            scroll-snap-align: start;
          }
        }

        @media (max-width: 900px) {
          .contact-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .contact-grid-layout > div {
            padding-top: 2rem !important;
          }
        }

        @media (max-width: 768px) {
          #magnifier-frame, #revealed-layer {
            display: none !important;
          }
        }

        body {
          font-family: 'Manrope', sans-serif;
        }

        @media (max-width: 1024px) {
          section {
            padding-left: 5% !important;
            padding-right: 5% !important;
          }
          .grid-5 {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .grid-5 {
            grid-template-columns: repeat(1, 1fr) !important;
          }
          section {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </main >
  );
}
