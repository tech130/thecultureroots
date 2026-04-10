"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import GridDistortion from "./GridDistortion";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Check initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bannerImageSource = isMobile
    ? "/images/hero-section/hero.jpeg"  // <-- IMPORTANT: Replace with your actual mobile image file name
    : "/images/hero-section/Hero-banner.png";

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
      {/* Background Image Container with Grid Distortion */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
      }}>
        <GridDistortion
          imageSrc={bannerImageSource}
          grid={45}
          mouse={0.19}
          strength={0.15}
          relaxation={0.9}
        />
        {/* Dark overlay for text readability */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.4)"
        }} />
      </div>

      <div className="container hero-content-container" style={{
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
          <motion.h1
            className="hero-title"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.8rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
              color: "white"
            }}
          >
            Where Cultures Convert. Brands Win.
          </motion.h1>

          <p className="hero-description" style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            fontWeight: 500,
            opacity: 0.9,
            marginBottom: "3rem",
            maxWidth: "600px",
            color: "white"
          }}>
            The multicultural marketing agency built for brands ready to lead in the world's most diverse markets.
          </p>

          <motion.button
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1PUl1axcbE4O_8tOgSeLP6OGYBJrBAem_WWsrJq9u6MNjgySisCJdUmz43NwVkuGppFuHrstYd", "_blank", "noopener,noreferrer")}
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
            Let's Talk
            <motion.span variants={{ hover: { x: 5 } }}>
              <ArrowRight size={20} />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-content-container {
            padding-bottom: 5vh !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .hero-title {
            font-size: 2.8rem !important;
            line-height: 1.15 !important;
            margin-bottom: 1rem !important;
          }
          .hero-description {
            font-size: 1.05rem !important;
            margin-bottom: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
