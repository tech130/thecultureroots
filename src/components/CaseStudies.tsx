"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "Solano Beverages",
    category: "FMCG",
    year: "2024",
    desc: "Ramadan & Eid seasonal campaign across the Middle East and North Africa — Arabic-first social and OOH advertising",
    stats: [
      { label: "REACH", pre: "+", val: "340", post: "%", highlightPre: true, highlightPost: false },
      { label: "ENGAGEMENT", pre: "", val: "12", post: "x", highlightPre: false, highlightPost: true },
      { label: "MARKETS", pre: "", val: "07", post: "", highlightPre: false, highlightPost: false },
    ],
    markets: ["India", "Thailand", "Indonesia", "Malaysia", "Singapore", "Vietnam"],
    img: "/images/case-studies/image-3.png",
    color: "#FF5E00",
    bgColor: "#FFF2EA",
    cardInnerBg: "#FFE6D9",
  },
  {
    id: 2,
    title: "Lumara Cosmetics",
    category: "Beauty",
    year: "2024",
    desc: "Skin diversity and cultural beauty standards campaign across Sub-Saharan Africa — Influencer-led, platform-native content",
    stats: [
      { label: "REACH", pre: "+", val: "410", post: "%", highlightPre: true, highlightPost: false },
      { label: "ENGAGEMENT", pre: "", val: "22", post: "x", highlightPre: false, highlightPost: true },
      { label: "MARKETS", pre: "", val: "05", post: "", highlightPre: false, highlightPost: false },
    ],
    markets: ["Nigeria", "Kenya", "Ghana", "South Africa", "Tanzania"],
    img: "/images/case-studies/image-2.png",
    color: "#2780E2",
    bgColor: "#E9F2FB",
    cardInnerBg: "#D1E6FA",
  },
  {
    id: 3,
    title: "Vega Financials",
    category: "Finance",
    year: "2023",
    desc: "Multilingual financial literacy campaign targeting South Asian diaspora communities across the UK and Canada",
    stats: [
      { label: "REACH", pre: "+", val: "190", post: "%", highlightPre: true, highlightPost: false },
      { label: "ENGAGEMENT", pre: "", val: "9", post: "x", highlightPre: false, highlightPost: true },
      { label: "MARKETS", pre: "", val: "06", post: "", highlightPre: false, highlightPost: false },
    ],
    markets: ["UK", "Canada", "India", "Pakistan", "Bangladesh", "Sri Lanka"],
    img: "/images/case-studies/image-1.png",
    color: "#8B2EE0",
    bgColor: "#F7EEFC",
    cardInnerBg: "#EFD8FC",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="case-studies-section"
      style={{
        paddingTop: "6rem",
        paddingBottom: "8rem",
        backgroundColor: "#F3F3F3",
      }}
    >
      <div className="container" style={{ maxWidth: "1400px", width: "100%" }}>
        <h2
          className="case-studies-header"
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 4vw, 2.2rem)",
            fontWeight: 700,
            marginBottom: "4rem",
            color: "#111",
          }}
        >
          Case Studies
        </h2>

        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="case-card"
              style={{
                background: "white",
                borderRadius: "22px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 15px 40px rgba(0,0,0,0.04)",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                minHeight: "var(--card-min-height, 550px)",
                ["--accent" as any]: study.color,
                ["--bg-light" as any]: study.bgColor,
                ["--inner-bg" as any]: study.cardInnerBg,
              }}
            >
              {/* Inner Cut Wrapper */}
              <div
                style={{
                  flex: 1,
                  borderRadius: "18px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                {/* ✅ Full-card background image covering entire card */}
                <Image
                  className="case-card-img"
                  src={study.img}
                  alt={study.title}
                  fill
                  style={{ objectFit: "cover", zIndex: 0 }}
                />

                {/* ✅ Subtle gradient scrim for top area legibility */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.20) 50%, rgba(0,0,0,0.0) 100%)",
                    zIndex: 1,
                  }}
                />

                {/* Top spacer with folder tab */}
                <div
                  style={{
                    height: "var(--tab-height, 250px)",
                    position: "relative",
                    zIndex: 2,
                    flexShrink: 0,
                  }}
                >
                  {/* Folder Cut Edge */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "48px",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    {/* Left Tab */}
                    <div
                      className="dynamic-bg"
                      style={{
                        padding: "0 1rem",
                        height: "100%",
                        backgroundColor: `${study.bgColor}E6`,
                        borderTopRightRadius: "0px",
                        borderTopLeftRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        transition:
                          "backdrop-filter 0.4s ease, -webkit-backdrop-filter 0.4s ease, background-color 0.4s ease",
                      }}
                    >
                      <div
                        className="dynamic-inner-bg dynamic-text-alt"
                        style={{
                          backgroundColor: study.cardInnerBg,
                          color: study.color,
                          padding: "4px 18px",
                          borderRadius: "20px",
                          fontSize: "0.6rem",
                          fontWeight: 800,
                          textTransform: "uppercase",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {study.category}
                      </div>
                      <div
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          color: "#999",
                          paddingRight: "6px",
                        }}
                      >
                        {study.year}
                      </div>
                    </div>

                    {/* S-Curve SVG */}
                    <svg
                      width="36"
                      height="48"
                      viewBox="0 0 36 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginLeft: "-1px" }}
                    >
                      <path
                        className="dynamic-fill"
                        d="M0 0 C 18 0, 18 48, 36 48 L 0 48 Z"
                        fill={`${study.bgColor}E6`}
                        style={{ transition: "fill 0.4s ease" }}
                      />
                    </svg>
                  </div>
                </div>

                {/* ✅ Bottom Stats Panel — semi-transparent so image shows + blur works */}
                <div
                  className="dynamic-bg"
                  style={{
                    flex: 1,
                    backgroundColor: `${study.bgColor}E6`,
                    padding: "1rem 1.5rem 1.5rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    zIndex: 2,
                    transition:
                      "backdrop-filter 0.4s ease, -webkit-backdrop-filter 0.4s ease, background-color 0.4s ease",
                  }}
                >
                  <div style={{ marginBottom: "auto", marginTop: "-2rem" }}>
                    <h3
                      className="dynamic-text"
                      style={{
                        fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                        fontWeight: 800,
                        color: study.color,
                        marginBottom: "0.5rem",
                        letterSpacing: "-0.02em",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {study.title}
                    </h3>
                    <p
                      className="dynamic-desc-content"
                      style={{
                        fontSize: "clamp(0.65rem, 1.5vw, 0.7rem)",
                        lineHeight: 1.6,
                        color: "#444",
                        fontWeight: 500,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {study.desc}
                    </p>
                  </div>

                  {/* Divider */}
                  <div style={{ width: "100%" }}>
                    <hr
                      className="dynamic-hr"
                      style={{
                        border: "none",
                        borderTop: `2px solid ${study.color}`,
                        opacity: 0.15,
                        marginBottom: ".5rem",
                        transition: "border-color 0.3s ease",
                      }}
                    />

                    {/* Stats Dashboard */}
                    <div
                      className="dynamic-inner-bg stats-dashboard"
                      style={{
                        backgroundColor: study.cardInnerBg,
                        borderRadius: "16px",
                        padding: "1rem 1.25rem",
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                        transition: "background 0.3s ease",
                      }}
                    >
                      {study.stats.map((stat, i) => (
                        <div
                          key={i}
                          style={{
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <div
                            className="stat-value"
                            style={{
                              fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                              fontWeight: 800,
                              display: "flex",
                              alignItems: "center",
                              color: "#111",
                              transition: "color 0.3s ease",
                            }}
                          >
                            <span
                              className="dynamic-text-span"
                              style={{
                                color: stat.highlightPre ? study.color : "inherit",
                                paddingRight: "1px",
                                transition: "color 0.3s ease",
                              }}
                            >
                              {stat.pre}
                            </span>
                            <span>{stat.val}</span>
                            <span
                              className="dynamic-text-span"
                              style={{
                                color: stat.highlightPost ? study.color : "inherit",
                                paddingLeft: "1px",
                                transition: "color 0.3s ease",
                              }}
                            >
                              {stat.post}
                            </span>
                          </div>
                          <div
                            className="stat-label"
                            style={{
                              fontSize: "0.55rem",
                              fontWeight: 800,
                              color: "#666",
                              marginTop: "4px",
                              transition: "color 0.3s ease",
                            }}
                          >
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Markets */}
                    <div
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 800,
                          color: "#999",
                          marginTop: "4px",
                        }}
                      >
                        MARKETS
                      </span>
                      <div className="markets-tag-list" style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                        {study.markets.map((m, i) => (
                          <span
                            key={i}
                            className="dynamic-inner-bg market-tag"
                            style={{
                              backgroundColor: study.cardInnerBg,
                              color: "#333",
                              padding: "3px 10px",
                              borderRadius: "10px",
                              fontSize: "0.5rem",
                              fontWeight: 800,
                              transition: "all 0.3s ease",
                            }}
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link
            href="/case-studies"
            className="view-more-cta"
            style={{
              background: "white",
              color: "black",
              border: "1px solid rgba(0,0,0,0.8)",
              borderRadius: "30px",
              padding: "0.4rem 0.4rem 0.4rem 1.5rem",
              fontSize: "0.9rem",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: "1.5rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              textDecoration: "none"
            }}
          >
            View More Case Studies
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </Link>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .case-card-img {
            transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1) !important;
          }

          .case-card:hover .case-card-img {
            transform: scale(1.06);
          }

          .case-card:hover .dynamic-bg {
            backdrop-filter: blur(16px) saturate(1.4) !important;
            -webkit-backdrop-filter: blur(16px) saturate(1.4) !important;
            background-color: rgba(255, 255, 255, 0.22) !important;
          }

          .case-card:hover .dynamic-fill {
            fill: rgba(255, 255, 255, 0.22) !important;
          }

          .case-card:hover .dynamic-inner-bg {
            background-color: rgba(255, 255, 255, 0.35) !important;
          }

          .case-studies-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: .5rem;
          }
          @media (max-width: 1200px) {
            .case-studies-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 768px) {
            .case-studies-section {
               padding-top: 3rem !important;
               padding-bottom: 5rem !important;
            }
            .case-studies-grid {
              // grid-template-columns: 3fr;
              gap: 1.5rem;
              padding: 0 1rem;
            }
            .case-card {
              --card-min-height: 480px;
              --tab-height: 200px;
            }
            .stats-dashboard {
              padding: 0.75rem 1rem !important;
            }
            .view-more-cta {
              font-size: 0.8rem !important;
              padding: 0.3rem 0.3rem 0.3rem 1.25rem !important;
              gap: 1rem !important;
            }
         
          }
            @media (max-width: 480px) {
              .case-studies-grid {
                grid-template-columns: 1fr;
              }
            }
        `,
        }}
      />
    </section>
  );
}