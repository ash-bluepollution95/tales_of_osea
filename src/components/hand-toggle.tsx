"use client";

import type * as React from "react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import { renderHandBitmap, type BitmapSource } from "./dither";
import { ensureHandStyles } from "./styles";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import type { ThemeController } from "./theme";

export interface HandThemeToggleProps {
  leftImage?: string;
  rightImage?: string;
  columns?: number;
  cellSize?: number;
  lightColor?: string;
  darkColor?: string;
  travelDistance?: number;
  gap?: number;
  className?: string;
  triggerClassName?: string;
  children?: React.ReactNode;
  onToggle?: (isDark: boolean) => void;
  isDark?: boolean;
}

const SLIDE_IN_SECONDS = 0.35;
const HOLD_SECONDS = 1.25;
const SLIDE_OUT_SECONDS = 0.4;
const TOTAL_SECONDS = SLIDE_IN_SECONDS + HOLD_SECONDS + SLIDE_OUT_SECONDS;
const KEYFRAME_TIMES = [
  0,
  SLIDE_IN_SECONDS / TOTAL_SECONDS,
  (SLIDE_IN_SECONDS + HOLD_SECONDS) / TOTAL_SECONDS,
  1,
] as const;
const EASE_ENTRY = "cubic-bezier(0.65, 0, 0.35, 1)";
const EASE_EXIT = "cubic-bezier(0.55, 0, 0.85, 0.35)";
const MIN_SCALE = 0.16;

function runHandTimeline(el: HTMLCanvasElement, fromX: number): Animation {
  return el.animate(
    [
      { transform: `translateX(${fromX}px)`, easing: EASE_ENTRY },
      { transform: "translateX(0px)", offset: KEYFRAME_TIMES[1], easing: "linear" },
      { transform: "translateX(0px)", offset: KEYFRAME_TIMES[2], easing: EASE_EXIT },
      { transform: `translateX(${fromX}px)` },
    ],
    { duration: TOTAL_SECONDS * 1000, fill: "both" },
  );
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function computeScale(columns = 100, cellSize = 10, gap = 10, innerWidth?: number): number {
  if (typeof window === "undefined" && innerWidth == null) return 1;
  const w = innerWidth ?? window.innerWidth;
  const unscaledPairWidth = columns * cellSize * 2 + gap;
  return Math.min(1, Math.max(MIN_SCALE, w / unscaledPairWidth));
}

function computePairWidth(columns: number, cellSize: number, gap: number, scale: number): number {
  return (columns * cellSize * 2 + gap) * scale;
}

function computeTravel(
  travelDistance: number | undefined,
  pairWidth: number,
  innerWidth?: number,
): number {
  if (travelDistance != null) return travelDistance;
  if (typeof window === "undefined" && innerWidth == null) return 300;
  const w = innerWidth ?? window.innerWidth;
  return w / 2 + pairWidth;
}

function createFallbackHand(mirror: boolean): BitmapSource {
  const width = 200;
  const height = 280;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;
  if (mirror) {
    ctx.translate(width, 0);
    ctx.scale(-1, 1);
  }

  ctx.fillStyle = "#000000";
  ctx.strokeStyle = "#000000";

  ctx.beginPath();
  ctx.roundRect(58, 150, 88, 112, 32);
  ctx.fill();

  ctx.lineCap = "round";
  const fingers = [
    { x: 74, tip: 88 },
    { x: 97, tip: 66 },
    { x: 120, tip: 76 },
    { x: 141, tip: 100 },
  ];
  for (const finger of fingers) {
    ctx.lineWidth = 21;
    ctx.beginPath();
    ctx.moveTo(finger.x, 168);
    ctx.lineTo(finger.x, finger.tip);
    ctx.stroke();
  }

  ctx.lineWidth = 24;
  ctx.beginPath();
  ctx.moveTo(72, 196);
  ctx.lineTo(34, 164);
  ctx.stroke();

  return { source: canvas, width, height };
}

interface HandAsset {
  variants: { dark: HTMLCanvasElement; light: HTMLCanvasElement };
}

function blitHand(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  asset: HandAsset,
  isDark: boolean,
) {
  const variant = isDark ? asset.variants.dark : asset.variants.light;
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(variant, 0, 0);
  ctx.restore();
}

function parkHand(left: HTMLElement, right: HTMLElement, travel: number) {
  left.style.transform = `translateX(${-travel}px)`;
  right.style.transform = `translateX(${travel}px)`;
}

let clientMounted = false;
const mountListeners = new Set<() => void>();

function subscribeToMount(callback: () => void) {
  mountListeners.add(callback);
  if (!clientMounted) {
    clientMounted = true;
    queueMicrotask(() => {
      for (const listener of mountListeners) listener();
    });
  }
  return () => {
    mountListeners.delete(callback);
  };
}

function getClientMountSnapshot() {
  return clientMounted;
}
function getServerMountSnapshot() {
  return false;
}
function useHasMounted() {
  return useSyncExternalStore(subscribeToMount, getClientMountSnapshot, getServerMountSnapshot);
}

export function HandThemeToggle({
  leftImage = "/left.png",
  rightImage = "/right.png",
  columns = 100,
  cellSize = 10,
  lightColor = "#111111",
  darkColor = "#eaeaea",
  travelDistance,
  gap = 10,
  className,
  triggerClassName,
  children,
  onToggle,
  isDark: isDarkProp,
}: HandThemeToggleProps) {
  const hasMounted = useHasMounted();
  const { resolvedTheme, setTheme } = useTheme();
  const internalController = useMemo<ThemeController>(
    () => ({
      isDark: resolvedTheme === "dark",
      setDark: (next: boolean) => setTheme(next ? "dark" : "light"),
    }),
    [resolvedTheme, setTheme],
  );
  const prefersReducedMotion = usePrefersReducedMotion();

  const isDark = isDarkProp ?? internalController.isDark;

  const setNextTheme = useCallback(
    (nextIsDark: boolean) => {
      if (isDarkProp == null) internalController.setDark(nextIsDark);
      onToggle?.(nextIsDark);
    },
    [isDarkProp, internalController, onToggle],
  );

  const leftRef = useRef<HTMLCanvasElement>(null);
  const rightRef = useRef<HTMLCanvasElement>(null);
  const leftCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const rightCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const leftSrcRef = useRef<BitmapSource | null>(null);
  const rightSrcRef = useRef<BitmapSource | null>(null);
  const leftAssetRef = useRef<HandAsset | null>(null);
  const rightAssetRef = useRef<HandAsset | null>(null);

  const [phase, setPhase] = useState<"idle" | "running">("idle");
  const phaseRef = useRef<"idle" | "running">("idle");
  const needsSyncRef = useRef(false);
  const activeAnimationsRef = useRef<Animation[]>([]);
  const rebuildGenerationRef = useRef(0);
  const builtSignatureRef = useRef<{ left: string | null; right: string | null }>({
    left: null,
    right: null,
  });
  const swapTimerRef = useRef<number | null>(null);
  const travelRef = useRef(300);

  const buttonIsDark = hasMounted && isDark;
  const isDarkRef = useRef(isDark);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  const [innerWidth, setInnerWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0,
  );
  const [scale, setScale] = useState(() =>
    computeScale(columns, cellSize, gap, typeof window !== "undefined" ? window.innerWidth : undefined),
  );

  const scaleRef = useRef(scale);
  const innerWidthRef = useRef(innerWidth);

  useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);
  useEffect(() => {
    innerWidthRef.current = innerWidth;
  }, [innerWidth]);

  const stopActiveAnimations = useCallback(() => {
    for (const a of activeAnimationsRef.current) a.cancel();
    activeAnimationsRef.current = [];
  }, []);

  const invalidateRebuilds = useCallback(() => {
    rebuildGenerationRef.current++;
    builtSignatureRef.current = { left: null, right: null };
  }, []);

  const rebuild = useCallback(async () => {
    const generation = ++rebuildGenerationRef.current;
    const s = scaleRef.current;
    const sides = [
      { key: "left" as const, src: leftSrcRef.current, canvas: leftRef.current, ctxOut: leftCtxRef, assetOut: leftAssetRef },
      { key: "right" as const, src: rightSrcRef.current, canvas: rightRef.current, ctxOut: rightCtxRef, assetOut: rightAssetRef },
    ];
    for (const side of sides) {
      if (!side.src || !side.canvas) continue;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(columns * cellSize * s);
      const h = Math.round((side.src.height / side.src.width) * w);
      const dw = Math.round(w * dpr);
      const dh = Math.round(h * dpr);
      const signature = `${dw}x${dh}|${darkColor}|${lightColor}`;
      if (builtSignatureRef.current[side.key] === signature) continue;
      if (side.canvas.width !== dw) side.canvas.width = dw;
      if (side.canvas.height !== dh) side.canvas.height = dh;
      side.canvas.style.width = `${w}px`;
      side.canvas.style.height = `${h}px`;
      const ctx = side.canvas.getContext("2d")!;
      side.ctxOut.current = ctx;
      const dark = renderHandBitmap(side.src, darkColor, true, dw, dh);
      if (generation !== rebuildGenerationRef.current) return;
      const light = renderHandBitmap(side.src, lightColor, false, dw, dh);
      if (generation !== rebuildGenerationRef.current) return;
      side.assetOut.current = { variants: { dark, light } };
      blitHand(side.canvas, ctx, side.assetOut.current, isDarkRef.current);
      builtSignatureRef.current[side.key] = signature;
      await new Promise<void>((resolve) => {
        if ("requestIdleCallback" in window) {
          requestIdleCallback(() => resolve(), { timeout: 200 });
        } else {
          requestAnimationFrame(() => resolve());
        }
      });
      if (generation !== rebuildGenerationRef.current) return;
    }
  }, [columns, cellSize, darkColor, lightColor]);

  const repark = useCallback(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;
    const pw = computePairWidth(columns, cellSize, gap, scaleRef.current);
    const travel = computeTravel(travelDistance, pw, innerWidthRef.current);
    travelRef.current = travel;
    parkHand(left, right, travel);
  }, [columns, cellSize, gap, travelDistance]);

  useEffect(() => {
    if (!hasMounted) return;
    let cancelled = false;

    const loadImage = (src: string, mirror: boolean, onReady: (src: BitmapSource) => void) => {
      if (!src) {
        onReady(createFallbackHand(mirror));
        return;
      }
      const img = new Image();
      img.crossOrigin = "anonymous";
      const handleLoad = () => {
        if (cancelled) return;
        onReady({ source: img, width: img.naturalWidth, height: img.naturalHeight });
      };
      const handleError = () => {
        if (cancelled) return;
        onReady(createFallbackHand(mirror));
      };
      img.onload = handleLoad;
      img.onerror = handleError;
      img.src = src;
      if (img.complete && img.naturalWidth) handleLoad();
      if (img.complete && !img.naturalWidth) handleError();
    };

    loadImage(leftImage, false, (src) => {
      leftSrcRef.current = src;
      void rebuild();
    });
    loadImage(rightImage, true, (src) => {
      rightSrcRef.current = src;
      void rebuild();
    });

    return () => {
      cancelled = true;
    };
  }, [hasMounted, leftImage, rightImage, rebuild]);

  useEffect(() => {
    if (!hasMounted) return;
    ensureHandStyles();
    document.documentElement.style.setProperty("--hvt-duration", `${HOLD_SECONDS}s`);
    document.documentElement.style.setProperty("--hvt-easing", "var(--hvt-ease-expo-out)");
    return () => {
      invalidateRebuilds();
      stopActiveAnimations();
      if (swapTimerRef.current != null) {
        window.clearTimeout(swapTimerRef.current);
        swapTimerRef.current = null;
      }
    };
  }, [hasMounted, stopActiveAnimations, invalidateRebuilds]);

  useLayoutEffect(() => {
    if (!hasMounted) return;
    repark();
  }, [hasMounted, repark]);

  useEffect(() => {
    if (!hasMounted) return;
    let frame: number | null = null;
    const onResize = () => {
      if (frame != null) return;
      frame = requestAnimationFrame(() => {
        setInnerWidth(window.innerWidth);
        setScale(computeScale(columns, cellSize, gap, window.innerWidth));
        frame = null;
      });
    };
    onResize();
    window.addEventListener("resize", onResize);
    window.visualViewport?.addEventListener("resize", onResize);
    return () => {
      if (frame != null) cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);
    };
  }, [hasMounted, columns, cellSize, gap]);

  useEffect(() => {
    if (!hasMounted) return;
    if (phaseRef.current === "running") {
      needsSyncRef.current = true;
      return;
    }
    void rebuild();
    repark();
  }, [hasMounted, scale, innerWidth, rebuild, repark]);

  useEffect(() => {
    if (!hasMounted) return;
    if (phaseRef.current === "running") {
      needsSyncRef.current = true;
      return;
    }
    const left = leftRef.current;
    const right = rightRef.current;
    if (left && leftCtxRef.current && leftAssetRef.current) {
      blitHand(left, leftCtxRef.current, leftAssetRef.current, isDark);
    }
    if (right && rightCtxRef.current && rightAssetRef.current) {
      blitHand(right, rightCtxRef.current, rightAssetRef.current, isDark);
    }
  }, [hasMounted, isDark]);

  const handleToggle = useCallback(async () => {
    if (phaseRef.current !== "idle") return;
    const left = leftRef.current;
    const right = rightRef.current;
    const leftAsset = leftAssetRef.current;
    const rightAsset = rightAssetRef.current;
    const leftCtx = leftCtxRef.current;
    const rightCtx = rightCtxRef.current;
    if (!left || !right || !leftAsset || !rightAsset || !leftCtx || !rightCtx) return;

    const nextIsDark = !isDark;

    const applySwap = () => {
      setNextTheme(nextIsDark);
      blitHand(left, leftCtx, leftAsset, nextIsDark);
      blitHand(right, rightCtx, rightAsset, nextIsDark);
    };

    if (prefersReducedMotion) {
      if (document.startViewTransition) {
        document.startViewTransition(applySwap);
      } else {
        applySwap();
      }
      return;
    }

    phaseRef.current = "running";
    setPhase("running");

    for (const a of activeAnimationsRef.current) a.cancel();
    activeAnimationsRef.current = [];

    const travel = travelRef.current;

    swapTimerRef.current = window.setTimeout(() => {
      swapTimerRef.current = null;
      if (document.startViewTransition) {
        const transition = document.startViewTransition(applySwap);
        transition.finished.catch(() => {});
      } else {
        applySwap();
      }
    }, SLIDE_IN_SECONDS * 1000);

    try {
      const animations = [
        runHandTimeline(left, -travel),
        runHandTimeline(right, travel),
      ];
      activeAnimationsRef.current = animations;
      await Promise.all(animations.map((a) => a.finished.catch(() => {})));
    } finally {
      for (const a of activeAnimationsRef.current) a.cancel();
      activeAnimationsRef.current = [];
      if (swapTimerRef.current != null) {
        window.clearTimeout(swapTimerRef.current);
        swapTimerRef.current = null;
      }
      if (needsSyncRef.current) {
        needsSyncRef.current = false;
        void rebuild();
      }
      repark();
      phaseRef.current = "idle";
      setPhase("idle");
    }
  }, [isDark, prefersReducedMotion, setNextTheme, rebuild, repark]);

  const overlay = hasMounted
    ? createPortal(
        <div
          aria-hidden
          data-running={phase === "running" ? "true" : undefined}
          className={"hvt-overlay" + (className ? ` ${className}` : "")}
          style={{ gap: gap * scale }}
        >
          <canvas ref={leftRef} className="hvt-canvas" />
          <canvas ref={rightRef} className="hvt-canvas" />
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <button
        type="button"
        role="switch"
        aria-checked={buttonIsDark}
        aria-busy={phase === "running"}
        aria-label="Toggle dark mode"
        disabled={!hasMounted}
        onPointerDown={(e) => {
          if (e.button !== 0) return;
          e.preventDefault();
          void handleToggle();
        }}
        onKeyDown={(e) => {
          if (e.key !== "Enter" && e.key !== " ") return;
          e.preventDefault();
          void handleToggle();
        }}
        className={"hvt-trigger" + (triggerClassName ? ` ${triggerClassName}` : "")}
      >
        {children ?? (buttonIsDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
      </button>
      {overlay}
    </>
  );
}
