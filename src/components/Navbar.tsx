"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [countriesExpanded, setCountriesExpanded] = useState(false);
  const pathname = usePathname();

  // Disable Next.js built-in scroll restoration once on mount
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  // Scroll to top on every route change
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    const raf = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = "";
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  // Track scroll position for navbar shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? "1rem 2rem" : "1.5rem 3rem",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          transition: "padding 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
          background: "transparent",
          pointerEvents: "none",
          mixBlendMode: "difference",
        }}
      >
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-start", pointerEvents: "auto" }}>
          <AnimatePresence>
            {!scrolled && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src="/images/logos/logo.png"
                    alt="CultureRoots Logo"
                    width={180}
                    height={40}
                    style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
                    priority
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.5rem",
            pointerEvents: "auto",
          }}
          aria-label="Open Menu"
        >
          <Menu size={36} strokeWidth={1} />
        </button>
      </motion.nav>

      {/* Slide-in Right Side Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 100 }}>

            {/* Dark Full-Screen Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "absolute",
                top: 0, left: 0, right: 0, bottom: 0,
                background: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(6px)",
                cursor: "pointer",
              }}
            />

            {/* The Actual Sliding Menu Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                width: "460px",
                maxWidth: "100vw",
                background: "rgba(30, 30, 30, 0.45)",
                backdropFilter: "blur(20px)",
                display: "flex",
                flexDirection: "column",
                borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "1.5rem 2rem",
              }}
            >
              {/* Drawer Top Header (Close Button) */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  onClick={() => setMenuOpen(false)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    padding: "0.5rem",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(90deg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "rotate(0deg)")}
                >
                  <X size={36} strokeWidth={1} />
                </button>
              </div>

              {/* Menu Links List */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "2.5rem",
                  marginTop: "-2rem",
                }}
              >
                {["Services", "Countries", "Case Studies", "Contact Us"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                    style={{ display: "flex", flexDirection: "column", width: "fit-content" }}
                    onMouseEnter={() => item === "Countries" && setCountriesExpanded(true)}
                    onMouseLeave={() => item === "Countries" && setCountriesExpanded(false)}
                  >
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      style={{ position: "relative", cursor: "pointer", display: "inline-block" }}
                    >
                      <Link
                        href={
                          item === "Services" ? "/services" :
                            item === "Countries" ? "" :
                              item === "Case Studies" ? "/case-studies" :
                                item === "Contact Us" ? "/contact" :
                                  `#${item.toLowerCase().replace(" ", "-")}`
                        }
                        onClick={() => {
                          if (item !== "Countries") {
                            setMenuOpen(false);
                          }
                        }}
                        style={{
                          color: "white",
                          textDecoration: "none",
                          fontSize: "2.25rem",
                          fontWeight: 500,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {item}
                      </Link>

                      {/* Growing Orange Underline Hover Effect */}
                      <motion.div
                        variants={{
                          rest: { scaleX: 0, opacity: 0 },
                          hover: { scaleX: 1, opacity: 1 },
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{
                          position: "absolute",
                          bottom: "-4px",
                          left: 0,
                          right: 0,
                          height: "3px",
                          background: "#FF5E00",
                          transformOrigin: "left",
                        }}
                      />
                    </motion.div>

                    {/* Countries Dropdown */}
                    {item === "Countries" && (
                      <AnimatePresence>
                        {countriesExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "1rem",
                              overflow: "hidden",
                              paddingTop: "1rem",
                              paddingLeft: "1.5rem",
                              borderLeft: "2px solid rgba(255,255,255,0.1)",
                              marginLeft: "1rem",
                              marginTop: "0.5rem",
                            }}
                          >
                            {[
                              { name: "Canada", slug: "canada" },
                              { name: "United States", slug: "united-states" },
                              { name: "United Kingdom", slug: "united-kingdom" },
                              { name: "Australia", slug: "australia" },
                              { name: "New Zealand", slug: "new-zealand" },
                            ].map((market) => (
                              <Link
                                key={market.slug}
                                href={`/countries/${market.slug}`}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                  color: "rgba(255,255,255,0.7)",
                                  textDecoration: "none",
                                  fontSize: "1.25rem",
                                  fontWeight: 400,
                                  transition: "color 0.2s ease",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF5E00")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                              >
                                {market.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}