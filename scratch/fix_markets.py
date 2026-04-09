import os

pages = [
    "src/app/countries/canada/page.tsx",
    "src/app/countries/united-states/page.tsx",
    "src/app/countries/united-kingdom/page.tsx",
    "src/app/countries/australia/page.tsx",
    "src/app/countries/new-zealand/page.tsx"
]

for file in pages:
    path = os.path.join(os.getcwd(), file)
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # CultureSection Grid
    content = content.replace(
        """    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",""",
        """    <section
      className="market-culture-section"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr","""
    )
    
    # Carousel Container
    content = content.replace(
        """      <div
        style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "9rem 0 1rem 0",
        }}""",
        """      <div
        className="market-carousel-container"
        style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "9rem 0 1rem 0",
        }}"""
    )
    
    # UnderstandSection Grid
    content = content.replace(
        """      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",""",
        """      <div
        className="market-understand-grid"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr","""
    )
    
    # Audiences Grid
    content = content.replace(
        """        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",""",
        """        <motion.div
          className="market-audience-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)","""
    )
    
    # Style Block Check
    if ".market-culture-section" not in content:
        style_block = """
      <style jsx global>{`
        @media (max-width: 1024px) {
          .market-culture-section {
            grid-template-columns: 1fr !important;
          }
          .market-carousel-container {
             padding-top: 2rem !important;
          }
          .market-understand-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .market-audience-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .market-audience-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .market-culture-section > div {
            padding: 1rem 5% 2rem 5% !important;
          }
        }
      `}</style>
    </main>"""
        content = content.replace("    </main>", style_block)
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
        
print("Execution Complete")
