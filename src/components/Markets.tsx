"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const markets: any[] = [
  { id: 1, title: "CANADA", num: "01", img: "/images/markets/Canada-1.jpg" },
  {
    id: 2,
    title: (
      <span style={{ display: "inline-block", textAlign: "left" }}>
        <span style={{ display: "block" }}>UNITED</span>
        <span style={{ display: "block" }}>
          <span style={{ visibility: "hidden" }}>UNITED</span>STATES
        </span>
      </span>
    ),
    num: "02",
    img: "/images/markets/United-States.jpg"
  },
  {
    id: 3,
    title: (
      <span style={{ display: "inline-block", textAlign: "left" }}>
        <span style={{ display: "block" }}>UNITED</span>
        <span style={{ display: "block" }}>
          <span style={{ visibility: "hidden" }}>UNITED</span>KINGDOM
        </span>
      </span>
    ),
    num: "03",
    img: "/images/markets/United-Kingdom.jpg"
  },
  { id: 4, title: "AUSTRALIA", num: "04", img: "/images/markets/Australia.jpg" },
  {
    id: 5,
    title: (
      <span style={{ display: "inline-block", textAlign: "left" }}>
        <span style={{ display: "block" }}>NEW</span>
        <span style={{ display: "block" }}>
          <span style={{ visibility: "hidden" }}>NEW</span>ZEALAND
        </span>
      </span>
    ),
    num: "05",
    img: "/images/markets/New-Zealand.jpg"
  }
];

export default function Markets() {
  const [current, setCurrent] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % markets.length);
    }, 5500); // 5.5 sec per slide
    return () => clearInterval(timer);
  }, []);

  const slide = markets[current];

  return (
    <section id="markets" style={{
      position: "relative",
      height: "100vh",
      width: "100%",
      overflow: "hidden",
      backgroundColor: "#000"
    }}>
      {/* Background Images Crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 0
          }}
        >
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* The 50% Blurred Left Screen Overlay */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, bottom: 0, width: "50%",
        backdropFilter: "blur(20px) brightness(0.85)",
        WebkitBackdropFilter: "blur(20px) brightness(0.85)",
        zIndex: 1,
        borderRight: "1px solid rgba(255,255,255,0.05)"
      }} />

      {/* Static "Our Markets" Left Text */}
      <h2 style={{
        position: "absolute",
        left: "2rem",
        top: "50%",
        transform: "translateY(-50%) rotate(180deg)",
        writingMode: "vertical-rl",
        color: "white",
        fontSize: "3rem",
        fontWeight: 800,
        letterSpacing: "0.1em",
        zIndex: 5,
        margin: 0
      }}>
        Our Markets
      </h2>

      {/* Numbering at top left (01, 02...) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "absolute",
            top: "8%",
            left: "14%", // Pushes it in nicely aligned to the blurred zone
            zIndex: 5
          }}
        >
          <div style={{
            fontSize: "clamp(6rem, 18vw, 12rem)",
            fontWeight: 500,
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.5)",
            fontFamily: "'Inter', sans-serif"
          }}>
            {slide.num}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Main Split-Color Text "CANADA" */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        pointerEvents: "none"
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, letterSpacing: "1rem" }}
            animate={{ opacity: 1, letterSpacing: "-0.01em" }}
            exit={{ opacity: 0, letterSpacing: "2rem", filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              position: "relative",
              width: "100vw", // Force full screen width alignment
              display: "flex",
              justifyContent: "center"
            }}
          >
            {/* Left Side (Spans full width but is covered on right): Dark Translucent Fill */}
            <h3 style={{
              position: "absolute",
              width: "100%",
              textAlign: "center",
              fontSize: "clamp(4rem, 12vw, 10rem)",
              fontWeight: 900,
              margin: 0,
              padding: 0,
              lineHeight: 1,
              color: "rgba(0,0,0,0.5)", // Dark semi-transparent fill so the blurred bg is clearly seen through it
            }}>
              {slide.title}
            </h3>

            {/* Right Side Overlay: Solid White fill, rigidly cropped to start at exactly 50% screen width */}
            <h3 style={{
              position: "absolute",
              width: "100%",
              textAlign: "center",
              fontSize: "clamp(4rem, 12vw, 10rem)",
              fontWeight: 900,
              margin: 0,
              padding: 0,
              lineHeight: 1,
              color: "#ffffff",
              clipPath: "inset(0 0 0 50%)" // Removes the left 50% perfectly
            }}>
              {slide.title}
            </h3>

            {/* Invisible structural block to give parent absolute positioning context height */}
            <h3 style={{
              visibility: "hidden",
              width: "100%",
              textAlign: "center",
              fontSize: "clamp(4rem, 14vw, 12rem)",
              fontWeight: 900,
              margin: 0,
              padding: 0,
              lineHeight: 1,
            }}>
              {slide.title}
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Left "Learn More" */}
      <div style={{
        position: "absolute",
        bottom: "10%",
        left: "14%",
        zIndex: 5
      }}>
        <div style={{
          color: "rgba(255,255,255,0.8)",
          fontSize: "1.1rem",
          fontWeight: 400,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          cursor: "pointer",
          pointerEvents: "auto",
          transition: "opacity 0.3s ease"
        }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "0.8"}
        >
          Explore USA → <span>&rarr;</span>
        </div>
      </div>

      {/* Pagination Bottom Right */}
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "6%",
        zIndex: 5,
        display: "flex",
        gap: "0.75rem",
        alignItems: "center"
      }}>
        {markets.map((m, idx) => (
          <div
            key={m.id}
            onClick={() => setCurrent(idx)}
            style={{
              width: current === idx ? "40px" : "15px",
              height: "2px",
              backgroundColor: current === idx ? "white" : "rgba(255,255,255,0.3)",
              transition: "all 0.4s ease",
              cursor: "pointer",
              pointerEvents: "auto"
            }}
          />
        ))}
      </div>
    </section>
  );
}
