"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const baseAudiences = [
  { label: "South Asian", img: "/images/audiences/South-Asian.jpg" },
  { label: "Chinese", img: "/images/audiences/Chinese.jpg" },
  { label: "Arabic", img: "/images/audiences/Arabic.jpg" },
  { label: "Vietnamese", img: "/images/audiences/Vietnamese.jpg" },
  { label: "Malaysian", img: "/images/audiences/Malaysian.jpg" },
  { label: "Singaporean", img: "/images/audiences/Singaporean.jpg" },
  { label: "Indian", img: "/images/audiences/Indian.jpg" },
  { label: "Korean", img: "/images/audiences/Korean.jpg" },
  { label: "African", img: "/images/audiences/African.jpg" },
  { label: "Bangladeshi", img: "/images/audiences/Bangladeshi.jpg" },
  { label: "Indigenous", img: "/images/audiences/Indigenous.jpg" },
  { label: "Filipino", img: "/images/audiences/Filipino.jpg" },
  { label: "Hispanics", img: "/images/audiences/Hispanics.jpg" },
  { label: "Japanese", img: "/images/audiences/Japanese.jpg" },
  { label: "Taiwanese", img: "/images/audiences/Taiwanese.jpg" },
];
// We duplicate the cards enough to form a complete 360 degree circle
const totalCards = 30; // 30 cards to space them out (loops the 15 items twice)
const angleStep = 360 / totalCards; // 12 degrees between each card
const cardsData = Array.from({ length: totalCards }).map((_, i) => baseAudiences[i % baseAudiences.length]);
export default function Audiences() {
  return (
    <section id="audiences" style={{
      backgroundColor: "#18191D",
      minHeight: "800px",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      /* Define design tokens for the wheel */
      "--hub-pos": "1700px",
      "--card-radius": "1500px",
      "--card-radius-neg": "-1500px",
      "--card-width": "260px",
      "--card-height": "360px",
      "--bottom-text-size": "1.5rem"
    } as any}>
      {/* Top Title */}
      <div style={{ paddingTop: "5rem", zIndex: 10 }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700, color: "white" }}>Audiences</h2>
      </div>
      {/* Giant Background Outline Text */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        textAlign: "center",
        zIndex: 0,
        pointerEvents: "none"
      }}>
        <h1 style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "clamp(6rem, 24vw, 20rem)",
          fontWeight: 800,
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255, 0.2)", // Reduced opacity for cleaner look
          margin: 0,
          marginTop: "-2rem",
          lineHeight: 1,
          whiteSpace: "nowrap"
        }}>
          Audiences
        </h1>
      </div>
      {/* The Rotating Fan Wheel */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 5
      }}>
        {/* Hub: The rotational center point positioned way below the screen */}
        <motion.div
          style={{
            position: "absolute",
            top: "var(--hub-pos)",
            left: "50%",
            width: 0,
            height: 0,
          }}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        >
          {cardsData.map((card, idx) => (
            <div
              key={idx}
              style={{
                position: "absolute",
                top: "var(--card-radius-neg)",
                left: "calc(var(--card-width) / -2)",
                width: "var(--card-width)",
                height: "var(--card-height)",
                transformOrigin: "50% var(--card-radius)",
                transform: `rotate(${idx * angleStep}deg)`,
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                backgroundColor: "#222"
              }}
            >
              <Image src={card.img} alt={card.label} fill style={{ objectFit: "cover" }} />
              {/* Bottom Label and Gradient */}
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0, height: "120px",
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                paddingBottom: "1.25rem"
              }}>
                <span style={{ color: "white", fontSize: "0.95rem", fontWeight: 500 }}>
                  {card.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Bottom Text */}
      <div style={{
        position: "absolute",
        bottom: "4rem",
        zIndex: 10,
        textAlign: "center",
        width: "100%",
        padding: "0 1.5rem"
      }}>
        <p className="audience-bottom-text" style={{
          color: "rgba(255,255,255,0.9)",
          fontSize: "var(--bottom-text-size)",
          fontWeight: 400,
          letterSpacing: "0.01em",
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          46+ Ethnicities. 5 Markets. One Agency That Reaches Them All.
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
           #audiences {
            --hub-pos: 1400px !important;
            --card-radius: 1200px !important;
            --card-radius-neg: -1200px !important;
            --card-width: 200px !important;
            --card-height: 280px !important;
          }
        }
        @media (max-width: 768px) {
          #audiences {
            --hub-pos: 1100px !important;
            --card-radius: 950px !important;
            --card-radius-neg: -950px !important;
            --card-width: 160px !important;
            --card-height: 220px !important;
            --bottom-text-size: 1.1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
