import type { Metadata } from "next";
import { Geist, Geist_Mono, Yellowtail, Nunito, Inconsolata, Metal_Mania } from "next/font/google";
import "./globals.css";
import Header from "@/components/shadcn-studio/blocks/hero-section-01/header";
import { navigationData } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import EcommerceFooterWithSocials from "@/components/blocks/ecommerce/ecommerce-footers/with-socials";
import MagicRings from "@/components/MagicRings";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const inconsolataInconsolata = Inconsolata({subsets:['latin','latin-ext','vietnamese'],weight:['200','300','400','500','600','700','800','900'],variable:'--font-inconsolata'});

const nunitoNunito = Nunito({subsets:['cyrillic','cyrillic-ext','latin','latin-ext','vietnamese'],weight:['1000','200','300','400','500','600','700','800','900'],variable:'--font-nunito'});

const yellowtailYellowtail = Yellowtail({subsets:['latin','latin-ext'],weight:['400'],variable:'--font-yellowtail'});

const metalManiaMetalMania = Metal_Mania({subsets:['latin'],weight:['400'],variable:'--font-metal-mania'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Tales of Osea",
  description: "A machinima series utilizing Final Fantasy XIV. Mirroring the concept of multiversal selves, fictionalizing the world and feelings of those that may have once lived before. Much like the sundered worlds of Ancient Etheryis, the visions of other worlds start to show - and the differences start flooding in. These visions however, are not just an Ascian playing head games. These events and visions are caused by an Ancient book from the Osenayans themselves. A book filled with incantations, memories and spells. Future, past and present from every universe start to converge - causing chaos beyond. Disclaimer: The story within is a ficitonalized version of aspects of being a dissociative identity disorder system. There is no intention of romanticizing or diminishing the medical aspects of mental health, or things around the subject. More information on this is covered under the disclaimers, in the nagivation menu. Feel free to connect if you have any questions or concerns.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
	  suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, yellowtailYellowtail.variable, nunitoNunito.variable, inconsolataInconsolata.variable, metalManiaMetalMania.variable)}
    >
      <body className="min-h-full flex flex-col">
	  <Providers>
	     <div className="fixed inset-0 z-0" aria-hidden="true">
          <MagicRings
            color="#602f69"
            colorTwo="#A855F7"
            ringCount={9}
            speed={1}
            attenuation={10}
            lineThickness={1.5}
            baseRadius={0.35}
            radiusStep={0.1}
            scaleRate={0.1}
            opacity={1}
            blur={0}
            noiseAmount={0.1}
            rotation={5}
            ringGap={1.5}
            fadeIn={0.7}
            fadeOut={0.5}
            followMouse={false}
            mouseInfluence={0.2}
            hoverScale={1.2}
            parallax={0.05}
            clickBurst
          />
        </div>

		  <div className="relative z-10 flex flex-1 flex-col">

	  
 <Header navigationData={navigationData} />

	  {children} <EcommerceFooterWithSocials />         </div>

</Providers>
<Analytics />
 <SpeedInsights />
</body>
    </html>
  );
}
