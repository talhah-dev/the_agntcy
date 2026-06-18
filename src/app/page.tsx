import Counter from "@/components/Counter";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/footer";
import TeamFocusSection from "@/components/TeamFocusSection";
import WorkforcePackages from "@/components/WorkforcePackages";
import TimelineDemo from "@/components/timeline-demo";
import TwoProductsSection from "@/components/TwoProductsSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import NextStep from "@/components/NextStep";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <Counter />
      <TeamFocusSection />
      <TwoProductsSection />
      <DepartmentsSection />
      <WorkforcePackages />
      <TimelineDemo />
      <NextStep />
      <Footer />
    </div>
  );
}
