import Counter from "@/components/Counter";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/footer";
import TeamFocusSection from "@/components/TeamFocusSection";
import WorkforcePackages from "@/components/WorkforcePackages";
import TimelineDemo from "@/components/timeline-demo";
import TwoProductsSection from "@/components/TwoProductsSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <Counter />
      <TwoProductsSection />
      <TeamFocusSection />
      <WorkforcePackages />
      <TimelineDemo />
      <Footer />
    </div>
  );
}
