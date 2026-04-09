import os

pages = [
    "src/app/services/branding-strategy/page.tsx",
    "src/app/services/creative-development/page.tsx",
    "src/app/services/digital-advertising/page.tsx",
    "src/app/services/influencer-collaboration/page.tsx",
    "src/app/services/multicultural-pr/page.tsx",
    "src/app/services/translation-localization/page.tsx"
]

target_1 = """      {/* 🚀 Hero Section */}
      <section style={{"""
replacement_1 = """      {/* 🚀 Hero Section */}
      <section className="inner-hero-section" style={{"""

target_2 = """<div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "4rem", position: "relative", zIndex: 10, alignItems: "flex-start" }}>"""
replacement_2 = """<div className="contact-grid-layout" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "4rem", position: "relative", zIndex: 10, alignItems: "flex-start" }}>"""

target_3 = """        <div style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem"
        }}>"""
replacement_3 = """        <div className="other-services-carousel" style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem"
        }}>"""

target_4 = """              style={{
                width: "320px",
                height: "560px",
                position: "relative",
                borderRadius: "40px",
                overflow: "hidden",
                cursor: "pointer",
                marginLeft: idx === 0 ? 0 : "-4rem", // Overlap effect
                boxShadow: "-15px 0 45px rgba(0,0,0,0.12)", // Depth between layers
                backgroundColor: "#000",
                flexShrink: 0,
                transition: "margin-left 0.4s ease-out",
              }}"""
replacement_4 = """              className="other-services-card"
              style={{
                width: "320px",
                height: "560px",
                position: "relative",
                borderRadius: "40px",
                overflow: "hidden",
                cursor: "pointer",
                marginLeft: idx === 0 ? 0 : "-4rem", // Overlap effect
                boxShadow: "-15px 0 45px rgba(0,0,0,0.12)", // Depth between layers
                backgroundColor: "#000",
                flexShrink: 0,
                transition: "margin-left 0.4s ease-out",
              }}"""

target_5 = """        @font-face {
          font-family: 'Brittney Signature';
          src: url('/fonts/brittney-signature/Brittney Signature.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        body {"""
replacement_5 = """        @font-face {
          font-family: 'Brittney Signature';
          src: url('/fonts/brittney-signature/Brittney Signature.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @media (max-width: 1024px) {
          .inner-hero-section {
            flex-direction: column !important;
            justify-content: center !important;
            text-align: center;
            padding-top: 5rem !important;
          }
          .inner-hero-section > div {
            align-items: center;
          }
          .inner-hero-section h1 {
            align-items: center !important;
          }
          .other-services-carousel {
            justify-content: flex-start !important;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 2rem !important;
          }
          .other-services-card {
            margin-left: 1rem !important;
            scroll-snap-align: start;
          }
        }

        @media (max-width: 900px) {
          .contact-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .contact-grid-layout > div {
            padding-top: 2rem !important;
          }
        }

        @media (max-width: 768px) {
          #magnifier-frame, #revealed-layer {
            display: none !important;
          }
        }

        body {"""


for file in pages:
    path = os.path.join(os.getcwd(), file)
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Replacements
    new_content = content.replace(target_1, replacement_1)
    new_content = new_content.replace(target_2, replacement_2)
    new_content = new_content.replace(target_3, replacement_3)
    new_content = new_content.replace(target_4, replacement_4)
    new_content = new_content.replace(target_5, replacement_5)
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Updated {file}")

print("Done")
