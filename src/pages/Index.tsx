import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BTechCard from "@/components/BTechCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import TopicsSection from "@/components/TopicsSection";
import HeroSections from "@/components/HeroSections";
import PresentationTips from "@/components/PresentationTips";
const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      {/* <HeroSections /> */}
      <TopicsSection />
      <PresentationTips />
      {/* <BTechCard /> */}
      {/* <WhyChooseUs /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
