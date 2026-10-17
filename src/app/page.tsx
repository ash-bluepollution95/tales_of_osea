import HeroSection from "@/components/shadcn-studio/blocks/hero-section-01/hero-section-01";
import HomeBento from "@/components/home-bento";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 space-y-16 px-4 py-12 sm:px-6 sm:py-16">
      <HeroSection />
	   <HomeBento />
    </main>
  );
}