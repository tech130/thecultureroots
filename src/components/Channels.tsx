"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const channels = [
  { id: 1, title: "Digital Out Of Home", img: "/images/channels/Digital-Out-Of-Home.jpg", colSpan: 2, rowSpan: 2 },
  { id: 2, title: "Display Ads", img: "/images/channels/Display-Ads.webp", colSpan: 2, rowSpan: 1 },
  { id: 3, title: "Interstitial Ads", img: "/images/channels/interstitial-ads.webp", colSpan: 2, rowSpan: 1 },
  { id: 4, title: "Audio & Podcast Ads", img: "/images/channels/audio-podcast.png", colSpan: 2, rowSpan: 1 },
  { id: 5, title: "Native Ads", img: "/images/channels/native-ads.png", colSpan: 3, rowSpan: 1 },
  { id: 6, title: "Connected Tv  & OTT", img: "/images/channels/Connected-TV.jpg", colSpan: 3, rowSpan: 1 },
];

export default function Channels() {
  return (
    <section id="channels" style={{
      paddingTop: "4rem",
      paddingBottom: "8rem",
      backgroundColor: "#18191D",
      backgroundImage: "url('/images/channels/bg.png')", // Requested background override
      backgroundSize: "cover",
      backgroundPosition: "bottom center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div className="container" style={{ maxWidth: "1300px", width: "100%" }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: 700,
          marginBottom: "3rem",
          color: "white"
        }}>Channels</h2>

        <div className="channels-grid">
          {channels.map((ch, i) => (
            <motion.div
              key={ch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="channel-card"
              style={{
                gridColumn: `span ${ch.colSpan}`,
                gridRow: `span ${ch.rowSpan}`,
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div style={{
                flex: 1,
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "#f8f9fa" // placeholder color so transparent PNGs look nice
              }}>
                <Image
                  src={ch.img}
                  alt={ch.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 style={{
                textAlign: "center",
                color: "black",
                fontWeight: 700,
                marginTop: "16px",
                fontSize: "1.1rem",
                letterSpacing: "-0.01em"
              }}>
                {ch.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .channels-grid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-template-rows: 300px 240px;
          gap: 1.25rem;
          width: 100%;
        }
        
        @media (max-width: 1024px) {
          .channels-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: auto;
          }
          .channel-card {
            grid-column: span 2 !important;
            grid-row: span 1 !important;
            height: 280px;
          }
          .channel-card:nth-child(1) {
             grid-column: span 4 !important;
             height: 400px;
          }
        }

        @media (max-width: 640px) {
          .channels-grid {
            grid-template-columns: 1fr;
            display: flex;
            flex-direction: column;
          }
          .channel-card {
            height: 300px !important;
          }
        }
      `}} />
    </section>
  );
}
