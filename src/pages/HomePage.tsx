import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import PortfolioPreviewSection from "../components/sections/PortfolioPreviewSection";
import ServicesSection from "../components/sections/ServicesSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioPreviewSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
