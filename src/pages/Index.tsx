import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ImpactSection from "@/components/home/ImpactSection";
import DonationSection from "@/components/payment/DonationSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ImpactSection />
      <DonationSection />
    </Layout>
  );
};

export default Index;
