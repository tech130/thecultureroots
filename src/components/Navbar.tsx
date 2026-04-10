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
        className={scrolled ? "main-navbar scrolled" : "main-navbar"}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          transition: "padding 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
          background: "transparent",
          pointerEvents: "none",
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
                    className="nav-logo"
                    src="/images/logos/logo.png"
                    alt="CultureRoots Logo"
                    width={220}
                    height={60}
                    style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
                    priority
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          onClick={() => setMenuOpen(true)}
          initial={{ backgroundColor: "transparent" }}
          animate={{
            backgroundColor: scrolled ? "#111111" : "transparent",
            padding: scrolled ? "0.6rem" : "0.5rem",
            boxShadow: scrolled ? "0 4px 12px rgba(0,0,0,0.15)" : "none",
          }}
          transition={{ duration: 0.3 }}
          style={{
            border: "1px solid",
            borderColor: scrolled ? "rgba(255, 255, 255, 0.2)" : "transparent",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "auto",
            borderRadius: "50%",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open Menu"
        >
          <Menu size={scrolled ? 28 : 36} strokeWidth={scrolled ? 1.5 : 1} />
        </motion.button>
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
              className="nav-drawer"
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
                className="nav-drawer-links"
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "2.5rem",
                  marginTop: "-2rem",
                }}
              >
                {["Services", "Countries", "Case Studies", "Contact Us"].map((item, i) => {
                  const isMainActive = 
                    (item === "Services" && pathname.startsWith("/services")) || 
                    (item === "Countries" && pathname.startsWith("/countries")) ||
                    (item === "Case Studies" && pathname.startsWith("/case-studies")) ||
                    (item === "Contact Us" && pathname === "/contact");

                  return (
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
                        animate={isMainActive ? "hover" : "rest"}
                        style={{ position: "relative", cursor: "pointer", display: "inline-block" }}
                      >
                        <Link
                          className="nav-menu-item"
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
                        target={item === "Contact Us" ? "_blank" : undefined}
                        rel={item === "Contact Us" ? "noopener noreferrer" : undefined}
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
                            ].map((market) => {
                              const isCountryActive = pathname === `/countries/${market.slug}`;
                              return (
                                <Link
                                  className="nav-country-item"
                                  key={market.slug}
                                  href={`/countries/${market.slug}`}
                                  onClick={() => setMenuOpen(false)}
                                  style={{
                                    color: isCountryActive ? "#FF5E00" : "rgba(255,255,255,0.7)",
                                    textDecoration: "none",
                                    fontSize: "1.25rem",
                                    fontWeight: 400,
                                    transition: "color 0.2s ease",
                                  }}
                                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FF5E00")}
                                  onMouseLeave={(e) => (e.currentTarget.style.color = isCountryActive ? "#FF5E00" : "rgba(255,255,255,0.7)")}
                                >
                                  {market.name}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>
                );
                })}
              </div>
            </motion.div>
          </div>

        )}
      </AnimatePresence>

      <style jsx global>{`
        /* ══════════════════════════════════════
           NAVBAR RESPONSIVENESS
        ══════════════════════════════════════ */
        
        /* Base Default Padding */
        .main-navbar {
          padding: 1.5rem 3rem !important;
        }
        .main-navbar.scrolled {
          padding: 1rem 2rem !important;
        }

        @media (max-width: 1024px) {
          .main-navbar {
            padding: 1.25rem 2rem !important;
          }
          .main-navbar.scrolled {
            padding: 0.75rem 1.5rem !important;
          }
        }

        @media (max-width: 768px) {
          .main-navbar {
            padding: 1rem 1.5rem !important;
          }
          .main-navbar.scrolled {
            padding: 0.5rem 1rem !important;
          }
          .nav-logo {
            width: 100px !important;
            height: auto !important;
          }
          .nav-drawer {
            width: 85vw !important;
            padding: 1.25rem 1.5rem !important;
          }
          .nav-menu-item {
            font-size: 1.8rem !important;
          }
          .nav-country-item {
            font-size: 1.15rem !important;
          }
          .nav-drawer-links {
            gap: 1.8rem !important;
          }
        }

        @media (max-width: 480px) {
          .main-navbar {
            padding: 1rem 1rem !important;
          }
          .main-navbar.scrolled {
            padding: 0.5rem 1rem !important;
          }
          .nav-logo {
            width: 80px !important;
          }
          .nav-drawer {
            width: 100vw !important;
            padding: 1.25rem 1rem !important;
          }
          .nav-menu-item {
            font-size: 1.5rem !important;
          }
          .nav-country-item {
            font-size: 1.05rem !important;
          }
          .nav-drawer-links {
            gap: 1.25rem !important;
            margin-top: -1rem !important;
          }
        }
      `}</style>
    </>
  );
}