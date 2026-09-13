"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({
  size = 20,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className={cn("flex items-center justify-center", className)}
    >
      <Sun className="hidden dark:block" size={size} />
      <Moon className="dark:hidden" size={size} />
    </button>
  );
}
