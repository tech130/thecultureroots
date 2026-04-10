"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const contentNodes = [
  { type: "text", content: "We're", shade: "light" },
  { type: "img", src: "/images/intro-section/1.jpg", aspect: 2 }, // Wider aspect for the faces
  { type: "text", content: "Culture Roots,", shade: "dark" },
  { type: "break" },
  { type: "text", content: "A", shade: "light" },
  { type: "text", content: "Multicultural", shade: "dark" },
  { type: "text", content: "Media &", shade: "light" },
  { type: "img", src: "/images/intro-section/2.png", aspect: 2 },
  { type: "text", content: "Services", shade: "dark" },
  { type: "text", content: "Agency", shade: "light" },
  { type: "img", src: "/images/intro-section/3.jpg", aspect: 2 },
  { type: "text", content: "helping", shade: "light" },
  { type: "text", content: "brands speak", shade: "dark" },
  { type: "text", content: "to", shade: "light" },
  { type: "text", content: "every culture,", shade: "dark" },
  { type: "img", src: "/images/intro-section/4.jpg", aspect: 2 },
  { type: "text", content: "in every", shade: "light" },
  { type: "text", content: "language,", shade: "dark" },
  { type: "svg" },
  { type: "text", content: "across every", shade: "light" },
  { type: "text", content: "market.", shade: "dark" }
];

export default function Intro() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const child = {
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 12, stiffness: 100 } },
    hidden: { opacity: 0, y: 30 },
  };

  return (
    <section id="intro" className="intro-section" style={{
      paddingTop: "6rem",
      paddingBottom: "4rem",
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "flex-start",
      textAlign: "left"
    }}>
      <div className="container" style={{ position: "relative" }}>

        {/* Schedule a call button */}
        <div className="intro-top-cta" style={{ position: "absolute", top: "-1rem", right: "2rem" }}>
          <button style={{
            background: "none", border: "none", color: "#666", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1rem", cursor: "pointer"
          }}>
            &rarr; Schedule a call
          </button>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ maxWidth: "1200px" }}
        >
          <h2 className="intro-title" style={{
            fontSize: "clamp(1.8rem, 4.3vw, 4.3rem)",
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: "-0.02em",
            wordWrap: "break-word"
          }}>
            {contentNodes.map((node, index) => {
              if (node.type === "break") {
                return <br key={index} className="hidden md:block" />;
              }

              if (node.type === "text") {
                return (
                  <motion.span
                    variants={child}
                    key={index}
                    style={{
                      display: "inline-block",
                      marginRight: "0.2em",
                      color: node.shade === "dark" ? "#111111" : "#A3A3A3",
                      fontWeight: node.shade === "dark" ? 700 : 500,
                    }}
                  >
                    {node.content}
                  </motion.span>
                );
              }

              if (node.type === "img") {
                return (
                  <motion.span variants={child} key={index} style={{ display: "inline-block", marginRight: "0.2em", verticalAlign: "middle" }}>
                    <div style={{
                      position: "relative",
                      height: "1.2em",
                      width: `${1.2 * (node.aspect || 1)}em`,
                      borderRadius: "50px",
                      overflow: "hidden",
                      border: "2px solid #eaeaea",
                      display: "inline-block"
                    }}>
                      <Image src={node.src || ""} alt="Intro graphic" fill style={{ objectFit: "cover" }} />
                    </div>
                  </motion.span>
                );
              }

              if (node.type === "svg") {
                return (
                  <motion.span variants={child} key={index} style={{ display: "inline-block", marginRight: "0.2em", verticalAlign: "middle" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="94" height="56" viewBox="0 0 94 56" fill="none" style={{ height: "1.2em", width: "auto" }}>
                      <g filter="url(#filter0_i_122_555)">
                        <rect x="4" y="6" width="90" height="44" rx="22" fill="url(#paint0_linear_122_555)" />
                      </g>
                      <g filter="url(#filter1_d_122_555)">
                        <circle cx="28" cy="28" r="18" fill="white" />
                      </g>
                      <defs>
                        <filter id="filter0_i_122_555" x="4" y="6" width="91" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="1" dy="1" />
                          <feGaussianBlur stdDeviation="5" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_122_555" />
                        </filter>
                        <filter id="filter1_d_122_555" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_122_555" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_122_555" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_122_555" x1="4" y1="28" x2="94" y2="28" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#517BFF" />
                          <stop offset="1" stopColor="#FF8465" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.span>
                );
              }

              return null;
            })}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="intro-bottom-cta"
            style={{ marginTop: "4rem" }}
          >
            <button style={{
              padding: "1rem 2rem",
              background: "#ffffff",
              color: "#111111",
              border: "1px solid #e0e0e0",
              borderRadius: "50px",
              fontSize: "1rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
            }}>
              Contact Us <span style={{ background: "#111", color: "#fff", borderRadius: "50%", width: "24px", height: "24px", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>&rarr;</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .intro-section {
            padding-top: 4rem !important;
            padding-bottom: 3rem !important;
          }
          .intro-top-cta {
             position: static !important;
             margin-bottom: 2rem !important;
             padding-left: 0.5rem !important;
          }
          .intro-title {
            font-size: 1.85rem !important;
            line-height: 1.3 !important;
          }
          .intro-bottom-cta {
            margin-top: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
