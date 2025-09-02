import AboutSection from "@/components/AboutSection";
import CallSection from "@/components/CallSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HelpSection from "@/components/HelpSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <HelpSection />
      <CallSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
