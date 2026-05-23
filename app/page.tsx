import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ToursSection from "@/components/tours-section";
import WhySection from "@/components/why-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ToursSection />
      <WhySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
