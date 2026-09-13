"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();
  return (
    <nav>
      <Link className={pathname === "/" ? "font-bold" : ""} href="/">Home</Link>
	  <Link className={pathname === "/about" ? "font-bold" : ""} href="/about">About</Link>
	  <Link className={pathname === "/characters" ? "font-bold" : ""} href="/characters">Characters</Link>
	  <Link className={pathname === "/world" ? "font-bold" : ""} href="/world">World</Link>
	  <Link className={pathname === "/episodes" ? "font-bold" : ""} href="/episodes">Episodes</Link>
	  <Link className={pathname === "/credits" ? "font-bold" : ""} href="/credits">Credits</Link>
	  <Link className={pathname === "/disclaimer" ? "font-bold" : ""} href="/disclaimer">Disclaimer</Link>
    </nav>
  );
}