import { Bluesky } from "@/components/ui/svgs/bluesky";

export default function EcommerceFooterWithSocials() {
  return (
    <footer className="bg-background/80 border-t backdrop-blur-md px-4 py-8 md:py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2">
            <h3 className="mb-4 text-lg">Tales of Osea</h3>
            <p className="text-muted-foreground mb-4 max-w-xs text-sm">
              A Final Fantasy XIV Machinima Project head up by
              Under Rug Swept Misfits.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://bsky.app/profile/duskfallcrew.bsky.social"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Follow us on Bluesky"
              >
                <Bluesky className="h-5 w-5" />
              </a>
              <a
                href="https://discord.gg/gxD8XcNzAg"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Join us on Discord"
              >
                <img src="/Discord-Symbol-Blurple.svg" alt="Discord" className="h-5 w-5" />
              </a>
              <a
                href="https://www.threads.com/@duskfallcrew"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Connect with us on Threads"
              >
                <img src="/threads-logo-white.svg" alt="Threads" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-border mt-8 border-t pt-8">
          <div className="flex flex-col gap-2 text-left">
            <p className="text-muted-foreground text-sm">
              © 2026 Under Rug Swept Misfits — Tales of Osea
            </p>
            <p className="text-muted-foreground text-xs">
              FINAL FANTASY XIV © SQUARE ENIX CO., LTD. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
