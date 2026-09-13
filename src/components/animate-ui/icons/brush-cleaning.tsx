import { Brush } from "lucide-react";
import { cn } from "@/lib/utils";

export function BrushCleaning({
  size = 20,
  animateOnHover = false,
  className,
}: {
  size?: number;
  animateOnHover?: boolean;
  className?: string;
}) {
  return (
    <Brush
      size={size}
      className={cn(
        animateOnHover && "transition-transform duration-200 hover:rotate-12",
        className
      )}
    />
  );
}
