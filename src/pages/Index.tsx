import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ImpactSection from "@/components/home/ImpactSection";
import DonationSection from "@/components/payment/DonationSection";
import { useSEO } from "@/lib/seo";

const Index = () => {
  useSEO({
    title: 'Arul Education',
    description: 'Arul Education Trust - unlocking knowledge and building futures.',
    image: '/assets/hero-education.jpg',
    canonical: 'https://example.com/',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Arul Education",
      "url": "https://example.com/",
      "logo": "https://example.com/assets/hero-education.jpg"
    }
  });
  return (
    <Layout>
      <HeroSection />
      <ImpactSection />
      <DonationSection />
    </Layout>
  );
};

export default Index;
