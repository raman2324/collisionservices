import { AnnouncementBar } from "@/components/shop/AnnouncementBar";
import { Header } from "@/components/shop/Header";
import { Hero } from "@/components/shop/Hero";
import { TrustStrip } from "@/components/shop/TrustStrip";
import { Verticals } from "@/components/shop/Verticals";
import { ChampBand } from "@/components/shop/ChampBand";
import { PaintBoothBand } from "@/components/shop/PaintBoothBand";
import { FeaturedProducts } from "@/components/shop/FeaturedProducts";
import { WorkflowBand } from "@/components/shop/WorkflowBand";
import { TaskFlows } from "@/components/shop/TaskFlows";
import { BrandGrid } from "@/components/shop/BrandGrid";
import { ShopAccountsBand } from "@/components/shop/ShopAccountsBand";
import { ShopTalk } from "@/components/shop/ShopTalk";
import { Testimonials } from "@/components/shop/Testimonials";
import { NewsletterBand } from "@/components/shop/NewsletterBand";
import { Footer } from "@/components/shop/Footer";

const Index = () => (
  <div className="min-h-screen bg-bone-50">
    <AnnouncementBar />
    <Header />
    <main>
      <Hero />
      <TrustStrip />
      <Verticals />
      <ChampBand />
      <PaintBoothBand />
      <FeaturedProducts />
      <WorkflowBand />
      <TaskFlows />
      <BrandGrid />
      <ShopAccountsBand />
      <ShopTalk />
      <Testimonials />
      <NewsletterBand />
    </main>
    <Footer />
  </div>
);

export default Index;
