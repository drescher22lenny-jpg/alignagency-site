import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ImprintPage from "./pages/ImprintPage";
import PortfolioPage from "./pages/PortfolioPage";
import PrivacyPage from "./pages/PrivacyPage";

function App() {
  return (
    <div className="relative min-h-screen bg-canvas text-primary-light">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(240,139,73,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(246,196,83,0.08),transparent_25%),linear-gradient(180deg,#0A0A0A_0%,#090909_100%)]" />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/impressum" element={<ImprintPage />} />
          <Route path="/datenschutz" element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
