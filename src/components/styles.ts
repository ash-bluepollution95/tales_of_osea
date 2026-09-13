const STYLE_ID = "hand-toggle-styles";

const CSS = `
:root {
  --hvt-ease-expo-out: linear(
    0 0%, 0.1684 2.66%, 0.3165 5.49%,
    0.446 8.52%, 0.5581 11.78%,
    0.6535 15.29%, 0.7341 19.11%,
    0.8011 23.3%, 0.8557 27.93%,
    0.8962 32.68%, 0.9283 38.01%,
    0.9529 44.08%, 0.9711 51.14%,
    0.9833 59.06%, 0.9915 68.74%, 1 100%
  );
}

@keyframes hvt-circle-reveal {
  from { clip-path: circle(0% at 50% 50%); }
  to { clip-path: circle(100% at 50% 50%); }
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-new(root) {
  animation: hvt-circle-reveal var(--hvt-duration, 1.25s) var(--hvt-easing, var(--hvt-ease-expo-out));
  animation-fill-mode: both;
}

::view-transition-old(root),
.dark::view-transition-old(root) {
  z-index: -1;
}

@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(root),
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none !important;
    transition: none !important;
  }
  .hvt-trigger {
    transition: none !important;
  }
}

.hvt-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  border: none;
  background: transparent;
  color: inherit;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  outline: none;
  transition: background-color 0.15s ease;
}

.hvt-trigger:hover {
  background-color: color-mix(in srgb, currentColor 8%, transparent);
}

.hvt-trigger:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

.hvt-trigger[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.hvt-trigger[aria-busy="true"] {
  pointer-events: none;
}

.hvt-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  visibility: hidden;
}

.hvt-overlay[data-running="true"] {
  visibility: visible;
}

.hvt-canvas {
  will-change: transform;
  image-rendering: pixelated;
}
`;

export function ensureHandStyles(): void {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = CSS;
  document.head.appendChild(style);
}
