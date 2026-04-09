"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#ffffff",
      padding: "2rem 1.5rem 1rem 1.5rem",
      fontFamily: "'Manrope', sans-serif"
    }}>
      <div className="footer-inner-container" style={{
        backgroundColor: "#F5F5F7",
        borderRadius: "40px",
        padding: "5rem 4rem 0 4rem",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        minHeight: "500px" // give it substantial height
      }}>
        {/* Top Content Row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "4rem",
          zIndex: 10,
          position: "relative"
        }}>
          {/* Left Column */}
          <div style={{ maxWidth: "500px" }}>
            <h3 style={{
              fontSize: "1.75rem",
              fontWeight: 500,
              color: "#333",
              lineHeight: 1.4,
              letterSpacing: "-0.02em",
              marginBottom: "4rem"
            }}>

              Built for brands that mean business <br /> across every culture, in every market.
            </h3>

            {/* Social Icons row */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {[
                { alt: "Facebook", src: "/images/logos/FB.png" },
                { alt: "Instagram", src: "/images/logos/INSTA.png" },
                { alt: "Threads", src: "/images/logos/THREADS.png" },
                { alt: "YouTube", src: "/images/logos/YT.png" },
                { alt: "X", src: "/images/logos/X.png" },
                { alt: "LinkedIn", src: "/images/logos/LI.png" },
                { alt: "TikTok", src: "/images/logos/TK.png" }
              ].map((icon, i) => (
                <div key={i} style={{
                  width: "28px", height: "28px",
                  borderRadius: "6px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  overflow: "hidden",
                  position: "relative",
                  backgroundColor: "white"
                }}>
                  <Image src={icon.src} alt={icon.alt} fill style={{ objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem", maxWidth: "450px" }}>
            {/* Contact & Call Row */}
            <div className="footer-links-row" style={{ display: "flex", gap: "4rem", flexWrap: "wrap" }}>
              {/* Contact Us */}
              <div>
                <Link href="#" style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "#FF5E00", fontWeight: 600, fontSize: "1.1rem", textDecoration: "none" }}>
                  Contact Us
                  <div style={{ backgroundColor: "#FF5E00", color: "white", borderRadius: "50%", padding: "2px", width: "16px", height: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ArrowUpRight size={12} strokeWidth={3} />
                  </div>
                </Link>
                <div style={{ fontSize: "0.75rem", color: "#999", marginTop: "0.5rem", fontWeight: 500 }}>Let's Work Together</div>
              </div>

              {/* Call Us */}
              <div>
                <Link href="#" style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "#111", fontWeight: 600, fontSize: "1.1rem", textDecoration: "none" }}>
                  Call Us on
                  <div style={{ backgroundColor: "#FF5E00", color: "white", borderRadius: "50%", padding: "2px", width: "16px", height: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ArrowUpRight size={12} strokeWidth={3} />
                  </div>
                </Link>
                <div style={{ fontSize: "0.75rem", color: "#999", marginTop: "0.5rem", fontWeight: 500 }}>Book Your Free Discovery Call</div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#222", marginBottom: "0.75rem" }}>Location</h4>
              <p style={{ fontSize: "0.75rem", color: "#888", lineHeight: 1.6, fontWeight: 500 }}>
                WeWork Cinnabar Hills, Embassy Golf Links, Business Park,<br />
                SY# 13/2. Location No.8, Challaghatta, Bangalore - 560 071.
              </p>
            </div>
          </div>
        </div>

        {/* Big Typography Header */}
        <div style={{
          marginTop: "6rem",
          width: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingBottom: "0"
        }}>
          {/* Backmost Layer: Solid Grey Text (Shifted up and significantly left) */}
          <div style={{
            position: "absolute",
            bottom: "22%",
            left: "50%",
            transform: "translateX(calc(-50% - 12vw))",
            whiteSpace: "nowrap",
            fontSize: "clamp(6rem, 18vw, 16rem)",
            fontWeight: 900,
            color: "rgba(0,0,0,0.04)", // Very faint solid color
            lineHeight: 0.75,
            letterSpacing: "-0.04em",
            zIndex: 1,
            pointerEvents: "none",
            userSelect: "none"
          }}>
            CultureRoots &nbsp;&nbsp;&nbsp;&nbsp; CultureRoots &nbsp;&nbsp;&nbsp;&nbsp; CultureRoots
          </div>

          {/* Middle Layer: Outlined Text (Shifted up and slightly left) */}
          <div style={{
            position: "absolute",
            bottom: "12%",
            left: "50%",
            transform: "translateX(calc(-50% - 3vw))",
            whiteSpace: "nowrap",
            fontSize: "clamp(6rem, 18vw, 16rem)",
            fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: "1px rgba(0,0,0,0.12)", // Thin crisp outline
            lineHeight: 0.75,
            letterSpacing: "-0.04em",
            zIndex: 2,
            pointerEvents: "none",
            userSelect: "none"
          }}>
            CultureRoots &nbsp;&nbsp;&nbsp;&nbsp; CultureRoots &nbsp;&nbsp;&nbsp;&nbsp; CultureRoots
          </div>

          {/* Solid Foreground Text */}
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: "clamp(6rem, 18vw, 16rem)",
              fontWeight: 900,
              color: "#18191D",
              lineHeight: 0.75, // Crops bottom slightly to match design
              letterSpacing: "-0.04em",
              margin: 0,
              zIndex: 3,
              position: "relative",
              transform: "translateY(18%)" // Pushes text down so it cuts off at the bottom boundary of the card
            }}
          >
            CultureRoots
          </motion.h2>
        </div>
      </div>

      {/* Very Bottom Row */}
      <div style={{
        marginTop: "1.5rem",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "0 2rem",
        gap: "2rem",
        fontSize: "0.65rem",
        fontWeight: 600,
        color: "#444"
      }}>
        <span>TheCulture Roots ©2026</span>
        <span style={{ opacity: 0.5 }}>•</span>
        <Link href="#" style={{ textDecoration: "none", color: "inherit" }}>Privacy Policy</Link>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 768px) {
          .footer-inner-container {
            padding: 3rem 1.5rem 0 1.5rem !important;
            border-radius: 24px !important;
          }
          .footer-links-row {
            gap: 2rem !important;
            flex-direction: column !important;
          }
        }
      `}} />
    </footer>
  );
}
