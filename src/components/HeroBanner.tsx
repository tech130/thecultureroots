"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function HeroBanner() {
  return (
    <section style={{
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }}>
      {/* Background Image Container */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
      }}>
        <Image
          src="/images/hero-section/hero-banner.png"
          alt="Hero Background"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        {/* Dark overlay for text readability */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          // background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)"
        }} />
      </div>

      <div className="container" style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        height: "100%",
        paddingBottom: "10vh",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ maxWidth: "800px" }}
        >
          <motion.h1 style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem"
          }}>
            Culture Flows.Brands Follow.
            {/* <span style={{ color: "var(--accent-orange)" }}>Brands Follow.</span> */}
          </motion.h1>

          <p style={{
            fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
            fontWeight: 500,
            opacity: 0.9,
            marginBottom: "3rem",
            maxWidth: "600px"
          }}>
            The world doesn't adapt to your brand — your brand adapts to the world          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("hero-grid")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "1rem 2rem",
              background: "white",
              color: "black",
              border: "none",
              borderRadius: "50px",
              fontSize: "1rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
          >
            Contact Us<ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
