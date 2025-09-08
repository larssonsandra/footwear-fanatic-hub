import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PerformanceMonitor from "@/components/PerformanceMonitor";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO />
      <PerformanceMonitor />
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
