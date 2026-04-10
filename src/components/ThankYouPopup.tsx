"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


interface ThankYouPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

/* ──────────────────────────────────────────
   Mini SVG: the string-clasp / button closure
   that visually connects the two halves
────────────────────────────────────────── */
function EnvelopeClasp() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "-70px", // straddles the split
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pointerEvents: "none",
      }}
    >
      {/* Top button disc */}
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          backgroundColor: "#2563EB",
          boxShadow: "0 4px 16px rgba(37,99,235,0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Grommet hole */}
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            backgroundColor: "#1A1A1A",
            border: "2px solid #555",
          }}
        />
      </div>

      {/* String lines */}
      <svg
        width="20"
        height="52"
        viewBox="0 0 20 52"
        style={{ display: "block" }}
      >
        <line
          x1="5" y1="0" x2="5" y2="52"
          stroke="#2563EB" strokeWidth="1.8"
          strokeLinecap="round"
        />
        <line
          x1="15" y1="0" x2="15" y2="52"
          stroke="#2563EB" strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>

      {/* Bottom button disc */}
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          backgroundColor: "#2563EB",
          boxShadow: "0 4px 16px rgba(37,99,235,0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "11px",
            height: "11px",
            borderRadius: "50%",
            backgroundColor: "#1A1A1A",
            border: "2px solid #555",
          }}
        />
      </div>
    </div>
  );
}

export default function ThankYouPopup({ isOpen, onClose }: ThankYouPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        /* Backdrop */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            backgroundColor: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(14px)",
          }}
          onClick={onClose}
        >
          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "460px",
              borderRadius: "32px",
              overflow: "hidden",
              boxShadow: "0 40px 100px -20px rgba(0,0,0,0.5)",
              fontFamily: "'Manrope', sans-serif",
              position: "relative",
            }}
          >
            {/* ── TOP HALF (White) ── */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "3.5rem 3rem 5rem", // extra bottom padding so clasp sits centrally
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close popup"
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                  background: "rgba(0,0,0,0.06)",
                  border: "none",
                  borderRadius: "50%",
                  width: "34px",
                  height: "34px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#333",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(0,0,0,0.12)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(0,0,0,0.06)")
                }
              >
                <X size={16} />
              </button>

              {/* "Thank You" heading */}
              <motion.h2
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                style={{
                  fontSize: "clamp(2.4rem, 7vw, 3.2rem)",
                  fontWeight: 900,
                  color: "#0A0A0A",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  margin: "0 0 1rem 0",
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                }}
              >
                Thank{" "}
                <em
                  style={{
                    fontStyle: "normal",
                    fontWeight: 900,
                  }}
                >
                  You
                </em>
              </motion.h2>

              {/* Subtitle badge */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{
                  display: "inline-flex",
                  flexDirection: "column",
                  gap: 0,
                }}
              >
                <span
                  style={{
                    backgroundColor: "#2563EB",
                    color: "#ffffff",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    padding: "5px 16px 4px",
                    letterSpacing: "0.01em",
                    lineHeight: 1.4,
                  }}
                >
                  Looking Forward to
                </span>
                <span
                  style={{
                    backgroundColor: "#0A0A0A",
                    color: "#ffffff",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    padding: "4px 16px 5px",
                    letterSpacing: "0.01em",
                    lineHeight: 1.4,
                  }}
                >
                  Connect with You!
                </span>
              </motion.div>

              {/* Envelope clasp straddles the two halves */}
              <EnvelopeClasp />
            </div>

            {/* ── BOTTOM HALF (Dark) ── */}
            <div
              style={{
                backgroundColor: "#0A0A0A",
                padding: "5.5rem 3rem 3rem", // top padding to clear the clasp
                color: "#ffffff",
              }}
            >
              {/* Contact info row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                }}
              >
                {/* Left: email + phone */}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  <p
                    style={{
                      fontSize: "0.65rem",
                      opacity: 0.5,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      margin: "0 0 2px 0",
                    }}
                  >
                    Email
                  </p>
                  <p style={{ fontSize: "0.82rem", margin: "0 0 1rem 0", opacity: 0.9 }}>
                    hey@thecultureroots.com
                  </p>

                  <p
                    style={{
                      fontSize: "0.65rem",
                      opacity: 0.5,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      margin: "0 0 2px 0",
                    }}
                  >
                    Phone
                  </p>
                  <p style={{ fontSize: "0.82rem", margin: 0, opacity: 0.9 }}>
                    +91 9500011980
                  </p>
                </motion.div>

                {/* Right: Warm Regards */}
                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  style={{ textAlign: "right" }}
                >
                  <p
                    style={{
                      fontSize: "0.78rem",
                      opacity: 0.55,
                      margin: "0 0 4px 0",
                    }}
                  >
                    Warm Regards,
                  </p>
                  {/* Cursive-style signature text */}
                  <p
                    style={{
                      fontSize: "1.9rem",
                      fontFamily: "var(--font-dancing-script), 'Brush Script MT', cursive",
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    CR
                  </p>
                </motion.div>
              </div>

              {/* Divider */}
              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  margin: "2rem 0 1.5rem",
                }}
              />

              {/* Social icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.72rem",
                    opacity: 0.4,
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  Let&apos;s stay connected
                </p>
                <div style={{ display: "flex", gap: "0.6rem" }}>
                  {[
                    { alt: "Facebook", src: "/images/logos/FB.png", href: "https://www.facebook.com/profile.php?id=61573848512602" },
                    { alt: "Instagram", src: "/images/logos/INSTA.png", href: "https://www.instagram.com/thecultureroots/" },
                    { alt: "Threads", src: "/images/logos/THREADS.png", href: "https://www.threads.com/@culturerootsglobal" },
                    { alt: "YouTube", src: "/images/logos/YT.png", href: "https://www.youtube.com/@CultureRootsGlobal" },
                    { alt: "X", src: "/images/logos/X.png", href: "https://x.com/thecultureroots" },
                    { alt: "LinkedIn", src: "/images/logos/LI.png", href: "https://www.linkedin.com/company/culture-roots" }
                  ].map((s) => (
                    <Link
                      key={s.alt}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "6px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "white",
                        position: "relative",
                        overflow: "hidden",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(255,255,255,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <Image
                        src={s.src}
                        alt={s.alt}
                        fill
                        style={{ objectFit: "contain", padding: "4px" }}
                      />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
