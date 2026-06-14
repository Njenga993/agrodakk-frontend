import { getSiteSettings } from "@/lib/api";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import AboutSnippet from "@/components/home/AboutSnippet";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import DidYouKnow from "@/components/home/DidYouKnow";
import CTASection from "@/components/home/CTASection";
import FeaturedBlogs from "@/components/home/FeaturedBlogs";

export default async function Home() {
  let siteName = "AgroDakk Foods";
  
  try {
    const settings = await getSiteSettings();
    siteName = settings?.data?.siteName || "AgroDakk Foods";
  } catch (e) {
    console.log("Settings loading...");
  }

  return (
    <main>
      <HeroSection />
      <StatsBar />
      <AboutSnippet siteName={siteName} />
      <FeaturedProducts />
      <DidYouKnow />
      <FeaturedBlogs />
      <CTASection />
    </main>
  );
}