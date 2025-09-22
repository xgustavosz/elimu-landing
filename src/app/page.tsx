import AboutSection from "@/components/AboutSection";
import CallSection from "@/components/CallSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import HelpSection from "@/components/HelpSection";
import HeroSection from "@/components/HeroSection";
import PublicationsSection from "@/components/PublicationsSection";

export default function Home() {
  return (
    <div className="font-lato" >
      <HeroSection />
      <AboutSection />
      <HelpSection />
      <CallSection />
      <GallerySection />
      <PublicationsSection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
}
