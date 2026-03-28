import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import HeroGrid from "@/components/HeroGrid";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Audiences from "@/components/Audiences";
import Markets from "@/components/Markets";
import Channels from "@/components/Channels";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <Navbar />
      <HeroBanner />
      <HeroGrid />
      <Intro />
      <Services />
      <Audiences />
      <Markets />
      <Channels />
      <CaseStudies />
      <Footer />
    </main>
  );
}
