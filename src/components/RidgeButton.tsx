import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * RidgeButton — a "ridge border" button with an inset glow on hover.
 *
 * Original: Uiverse.io by Navarog21 (the retracting "cap" bars removed so it
 * is truly transparent on any background, not just the demo's black).
 * Pure CSS (no JS) — converted from styled-components to a scoped <style> tag.
 * Colors are CSS variables (--ridge-accent / --ridge-glow) for easy re-theming.
 */

const css = `
.ridge-btn {
  /* Tuned to the Tales of Osea dark-violet theme. */
  --ridge-accent: #a855f7;
  --ridge-glow: #7c3aed;

  padding: 0 1.25em;
  position: relative;
  height: 2.5em;
  border: 2px ridge var(--ridge-accent);
  outline: none;
  background-color: transparent;
  color: white;
  transition: 0.3s;
  border-radius: 0.3em;
  font-size: 14px;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;

  /* anchor-friendly: center the label and drop the underline */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.ridge-btn:hover {
  box-shadow: inset 0px 0px 16px var(--ridge-glow);
}
`;

type RidgeButtonProps = Omit<HTMLAttributes<HTMLElement>, "children" | "type"> & {
  /** When set, renders an <a> instead of a <button> so it can navigate. */
  href?: string;
  target?: string;
  rel?: string;
  children?: ReactNode;
};

export default function RidgeButton({
  href,
  target,
  rel,
  children,
  className,
  ...rest
}: RidgeButtonProps) {
  return (
    <>
      <style href="ridge-btn" precedence="default">{css}</style>
      {href ? (
        <a href={href} target={target} rel={rel} className={cn("ridge-btn", className)} {...rest}>
          {children}
        </a>
      ) : (
        <button type="button" className={cn("ridge-btn", className)} {...rest}>
          {children}
        </button>
      )}
    </>
  );
}
