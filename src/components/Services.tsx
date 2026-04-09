"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  { num: "01", title: "Branding &\nStrategy", desc: "Build a brand identity that resonates across cultures — from positioning and messaging to full visual strategy tailored for diverse markets.", img: "/images/services/Branding-and-Strategy.png", href: "/services/branding-strategy" },
  { num: "02", title: "Translation & Localization", desc: "Beyond words. We adapt your content to sound native, feel local, and land with precision across languages and cultural contexts.", img: "/images/services/Translation-and-Localization.png", href: "/services/translation-localization" },
  { num: "03", title: "Creative Development", desc: "Campaigns, content, and creatives designed with cultural intelligence — visuals and messaging that your audience actually sees themselves in.", img: "/images/services/Creative-Development.jpg", href: "/services/creative-development" },
  { num: "04", title: "Digital Advertising", desc: "Performance-driven multicultural ad campaigns across platforms — targeted, optimised, and built to convert across every demographic.", img: "/images/services/Digital-Advertising.jpg", href: "/services/digital-advertising" },
  { num: "05", title: "Influencer Collaboration", desc: "Connect with authentic voices across 46+ ethnicities — creators who hold real trust within the communities your brand wants to reach.", img: "/images/services/Community-Influencer-Collaboration.png", href: "/services/influencer-collaboration" },
  { num: "06", title: "Multicultural PR", desc: "Shape your brand's narrative across diverse media ecosystems — from ethnic press to mainstream outlets — with stories that earn attention.", img: "/images/services/Multicultural-PR.png", href: "/services/multicultural-pr" },
];
export default function Services() {
  const [expandedIdx, setExpandedIdx] = useState<number>(0);

  return (
    <section id="services" style={{
      paddingTop: "4rem",
      paddingBottom: "6rem",
      backgroundImage: "url('/images/services/Services.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      overflow: "hidden"
    }}>
      <div className="container">
        <h2 style={{
          textAlign: "center",
          fontSize: "2.2rem",
          fontWeight: 700,
          marginBottom: "4rem",
          color: "white",
          textShadow: "0 2px 10px rgba(0,0,0,0.15)"
        }}>
          Services
        </h2>

        <div className="services-accordion-container" style={{
          display: "flex",
          gap: "1rem",
          width: "100%",
        }}>
          {services.map((svc, idx) => {
            const isExpanded = expandedIdx === idx;
            return (
              <motion.div
                key={svc.num}
                onClick={() => setExpandedIdx(idx)}
                onMouseEnter={() => setExpandedIdx(idx)}
                animate={{
                  flex: isExpanded ? 4 : 1,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "60px", // Safeguard for mobile width
                  minHeight: "80px", // Safeguard for mobile height
                }}
                className="service-card"
              >
                {/* Background Image Setup */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
                  <Image src={svc.img} alt={svc.title} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                </div>
                {/* Dark Overlay gradient to ensure text pops */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1,
                  background: isExpanded
                    ? "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)"
                    : "rgba(0,0,0,0.6)",
                  transition: "background 0.5s ease"
                }} />

                {/* Content Overlay */}
                <div style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: isExpanded ? "3rem 2.5rem" : "2rem 0",
                  alignItems: isExpanded ? "flex-start" : "center",
                  color: "white",
                }}>

                  {/* Top spacing / Title Area */}
                  <div style={{
                    flex: 1,
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    justifyContent: isExpanded ? "center" : "center",
                    alignItems: isExpanded ? "flex-start" : "center",
                  }}>
                    {isExpanded ? (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <h3 style={{
                          fontSize: "2rem",
                          fontWeight: 600,
                          lineHeight: 1.2,
                          marginBottom: "1.5rem",
                          whiteSpace: "pre-line"
                        }}>
                          {svc.title}
                        </h3>
                        <p style={{
                          fontSize: "0.875rem",
                          lineHeight: 1.8,
                          opacity: 0.9,
                          whiteSpace: "pre-line",
                          maxWidth: "280px"
                        }}>
                          {svc.desc}
                        </p>
                        <Link
                          href={svc.href}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            marginTop: "1.5rem",
                            color: "white",
                            textDecoration: "none",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            borderBottom: "1px solid rgba(255,255,255,0.4)",
                            paddingBottom: "2px",
                            transition: "border-color 0.3s ease"
                          }}
                          onMouseOver={(e) => e.currentTarget.style.borderBottomColor = "white"}
                          onMouseOut={(e) => e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.4)"}
                        >
                          Explore Service <ArrowUpRight size={16} />
                        </Link>
                      </motion.div>
                    ) : (
                      <h3 className="collapsed-title" style={{
                        fontSize: "1.125rem",
                        fontWeight: 500,
                        letterSpacing: "0.05em",
                        opacity: 0.9
                      }}>
                        {svc.title.replace("\n", " ")}
                      </h3>
                    )}
                  </div>

                  {/* Number at bottom */}
                  <div style={{
                    fontSize: isExpanded ? "2.5rem" : "1.5rem",
                    fontWeight: 300,
                    opacity: 0.4,
                    textAlign: "center",
                    width: "100%",
                    marginTop: "1rem"
                  }}>
                    {svc.num}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .services-accordion-container {
          height: 600px;
          flex-direction: row;
        }
        .collapsed-title {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          white-space: nowrap;
        }

        /* Mobile Responsive Fallback */
        @media (max-width: 768px) {
          .services-accordion-container {
            height: 800px;
            flex-direction: column !important;
          }
          .collapsed-title {
            writing-mode: horizontal-tb !important;
            transform: none !important;
            white-space: normal !important;
            text-align: center;
          }
        }
      `}} />
    </section>
  );
}
