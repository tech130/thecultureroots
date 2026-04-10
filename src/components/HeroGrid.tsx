"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroGrid() {
  return (
    <section id="hero-grid" style={{
      width: "100%",
      display: "flex",
      justifyContent: "center"
    }}>
      <div style={{
        display: "grid",
        width: "100%",
        // Use inline styles for responsive grid mapping
      }}
        className="hero-bento-grid"
      >
        {/* Card 1: Text (White Bg) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
            padding: "4rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 style={{
            fontSize: "1.25rem",
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: "-0.01em",
            maxWidth: "250px"
          }}>
            Campaign-ready.<br />
            Culture-first.<br />
            Every frame built to connect.
          </h2>
        </motion.div>

        {/* Card 2: Video (Image Cover with Play Button) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            position: "relative",
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1
            }}
          >
            <source src="/images/hero-section/Hero-Small-Card.mp4" type="video/mp4" />
          </video>
          {/* Play Button Overlay */}
          <div style={{
            position: "relative",
            zIndex: 10,
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "2px solid white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.2)"
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </div>
        </motion.div>

        {/* Card 3: Upper Text & Lower Image */}
        <div style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr",
        }}>
          {/* Upper Text (Blue Bg) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              backgroundColor: "#052698", // Deep Blue
              color: "#ffffff",
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <p style={{ fontSize: "1rem", opacity: 0.9, marginBottom: "1.5rem" }}>The Roots</p>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.5, opacity: 0.95 }}>
              We connect businesses to the cultural currents that move real people.
            </p>
          </motion.div>
          {/* Lower Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ position: "relative", overflow: "hidden" }}
          >
            <Image
              src="/images/hero-section/Hero-img.jpg"
              alt="Cultural dancer"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>

        {/* Card 5 & 6 (Dark Gray Bg area) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            backgroundColor: "#16181C", // Dark Gray
            color: "#ffffff",
            padding: "4rem 3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          {/* Card 5 text */}
          <p style={{ fontSize: "1.125rem", lineHeight: 1.6, opacity: 0.9 }}>
            Current Cultural strategy<br />
            as a competitive edge
          </p>

          {/* Card 6 text */}
          <div style={{ fontSize: "1.125rem", lineHeight: 1.6, opacity: 0.9 }}>
            <p>Insight Markets<br /> shift.<br />
              Cultures shapes<br /> them.</p>
          </div>
        </motion.div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hero-bento-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1200px) {
          .hero-bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .hero-bento-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </section>
  );
}
