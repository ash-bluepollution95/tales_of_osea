import type { Metadata } from "next";
import { Geist, Geist_Mono, Yellowtail, Nunito, Inconsolata } from "next/font/google";
import "./globals.css";
import Header from "@/components/shadcn-studio/blocks/hero-section-01/header";
import type { NavigationSection } from "@/components/shadcn-studio/blocks/hero-section-01/header";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import EcommerceFooterWithSocials from "@/components/blocks/ecommerce/ecommerce-footers/with-socials";
import AnimatedGradient from "@/components/animated-gradient";

const inconsolataInconsolata = Inconsolata({subsets:['latin','latin-ext','vietnamese'],weight:['200','300','400','500','600','700','800','900'],variable:'--font-inconsolata'});

const nunitoNunito = Nunito({subsets:['cyrillic','cyrillic-ext','latin','latin-ext','vietnamese'],weight:['1000','200','300','400','500','600','700','800','900'],variable:'--font-nunito'});

const yellowtailYellowtail = Yellowtail({subsets:['latin','latin-ext'],weight:['400'],variable:'--font-yellowtail'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navigationData: NavigationSection[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Characters", href: "/characters" },
  { title: "World", href: "/world" },
  { title: "Episodes", href: "/episodes" },
  { title: "Credits", href: "/credits" },
  { title: "Disclaimer", href: "/disclaimer" },
];

export const metadata: Metadata = {
  title: "Tales of Osea",
  description: "FFXIV Project Website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
	  suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, yellowtailYellowtail.variable, nunitoNunito.variable, inconsolataInconsolata.variable)}
    >
      <body className="min-h-full flex flex-col">
	  <Providers>
	     <AnimatedGradient config={{ preset: "Plasma" }} style={{ position: "fixed", zIndex: 0 }} />

		  <div className="relative z-10 flex flex-1 flex-col">

	  
 <Header navigationData={navigationData} />

	  {children} <EcommerceFooterWithSocials />         </div>

</Providers>
</body>
    </html>
  );
}
