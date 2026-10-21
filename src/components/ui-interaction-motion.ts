'use client';

import * as React from 'react';

export const EASE_OUT = 'cubic-bezier(0.16, 1, 0.3, 1)';
export const EASE_SETTLE = 'cubic-bezier(0.22, 1.18, 0.36, 1)';
/** Thrown things (indicators, thumbs): a slight overshoot on transform only. */
export const EASE_THROW = 'cubic-bezier(0.34, 1.36, 0.64, 1)';
/**
 * The press every button primitive shares: a 3% give that eases in and settles back.
 * Tailwind v4's scale-* writes the `scale` property, so `scale` has to be in the list
 * or the press snaps.
 */
export const INTERACTION_PRESS =
  'transition-[background-color,color,box-shadow,opacity,scale] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100';
export const INTERACTION_FOCUS ='focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background';

/* ─────────────────────────────────────────────────────────
 * MOTION: one setting every Hairline component moves by
 *
 *   default  exactly the motion each component was designed with
 *   calm     movement takes 1.25× as long and nothing overshoots
 *   reduced  nothing moves; changes crossfade instead of snapping
 *
 * Set it on the page: <html data-motion="calm">, or tune it with
 * :root { --hl-motion: 1.15; --hl-overshoot: 0 }. The system's
 * "reduce motion" setting always wins.
 *
 * What scales: movement and morphs, and the exit timers tied to
 * them. What never does: feedback (hover, press, focus), time that
 * means something (countdowns, lifetimes, debounces), and physics
 * that follows a finger.
 * ───────────────────────────────────────────────────────── */

export type MotionMode = 'default' | 'calm' | 'reduced';
export interface Motion {
  mode: MotionMode;
  /** Multiplier for movement durations (1 = as designed). */
  scale: number;
  /** 1 lets thrown things overshoot; 0 makes everything settle. */
  overshoot: number;
  reduced: boolean;
}

const CALM_SCALE = 1.25;
const DEFAULT_MOTION: Motion = { mode: 'default', scale: 1, overshoot: 1, reduced: false };
const query = '(prefers-reduced-motion: reduce)';
let snapshot: Motion = DEFAULT_MOTION;

function compute(): Motion {
  if (typeof window === 'undefined') return DEFAULT_MOTION;
  const root = document.documentElement;
  const attr = root.dataset.motion;
  const style = getComputedStyle(root);
  const varScale = parseFloat(style.getPropertyValue('--hl-motion'));
  const varOvershoot = parseFloat(style.getPropertyValue('--hl-overshoot'));
  const reduced = window.matchMedia(query).matches || attr === 'reduced';
  const calm = attr === 'calm';
  const scale = Number.isFinite(varScale) && varScale > 0 ? varScale : calm ? CALM_SCALE : 1;
  const overshoot = Number.isFinite(varOvershoot) ? Math.max(0, Math.min(1, varOvershoot)) : calm ? 0 : 1;
  const mode: MotionMode = reduced ? 'reduced' : calm || scale !== 1 || overshoot !== 1 ? 'calm' : 'default';
  return { mode, scale, overshoot, reduced };
}

function refresh() {
  const next = compute();
  if (next.mode !== snapshot.mode || next.scale !== snapshot.scale || next.overshoot !== snapshot.overshoot || next.reduced !== snapshot.reduced) snapshot = next;
  return snapshot;
}

const listeners = new Set<() => void>();
let detach: (() => void) | null = null;
function subscribeMotion(notify: () => void) {
  listeners.add(notify);
  if (!detach) {
    const media = window.matchMedia(query);
    const fire = () => {
      const before = snapshot;
      if (refresh() !== before) listeners.forEach((l) => l());
    };
    const observer = new MutationObserver(fire);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-motion', 'style', 'class'] });
    media.addEventListener('change', fire);
    refresh();
    detach = () => {
      observer.disconnect();
      media.removeEventListener('change', fire);
    };
  }
  return () => {
    listeners.delete(notify);
    if (!listeners.size && detach) {
      detach();
      detach = null;
    }
  };
}

// Read once, then only when the page's setting changes (never a style read per render).
let primed = false;
/** The current motion setting, for code outside React's render (effects, handlers, gesture loops). */
export function readMotion(): Motion {
  if (typeof window === 'undefined') return DEFAULT_MOTION;
  if (!primed) {
    primed = true;
    refresh();
  }
  return snapshot;
}

/** The motion setting, re-rendering when the page's setting changes. */
export function useMotion(): Motion {
  return React.useSyncExternalStore(subscribeMotion, readMotion, () => DEFAULT_MOTION);
}

/** A movement duration under the current setting (unchanged at default). */
export const motionMs = (ms: number, motion: Motion = readMotion()) => (motion.scale === 1 ? ms : Math.round(ms * motion.scale));

/** An overshooting curve (EASE_THROW by default, or the gentler EASE_SETTLE), or the plain settle when overshoot is off. */
export const throwEase = (curve: string = EASE_THROW) => (readMotion().overshoot > 0 ? curve : EASE_OUT);

/** What reduced motion does instead of snapping: nothing moves, but what appears or changes colour crossfades. */
export const REDUCED_FADE = 'opacity 160ms ease-out, color 160ms ease-out, background-color 160ms ease-out, border-color 160ms ease-out, filter 160ms ease-out';

export const useInteractionReducedMotion = () => useMotion().reduced;

export function useInteractionActivity<T extends Element>() {
  const ref = React.useRef<T>(null);
  const [visible, setVisible] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(el);
    const visibility = () => setHidden(document.hidden);
    visibility(); document.addEventListener('visibilitychange', visibility);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', visibility); };
  }, []);
  return { ref, active: visible && !hidden };
}

export function interactionIcon(on: boolean, reduced: boolean): React.CSSProperties {
  return {
    opacity: on ? 1 : 0,
    transform: on ? 'none' : 'scale(0.6)',
    filter: on ? 'blur(0px)' : 'blur(3px)',
    transition: reduced ? REDUCED_FADE : `opacity ${motionMs(220)}ms ${EASE_OUT}, transform ${motionMs(380)}ms ${EASE_OUT}, filter ${motionMs(220)}ms ${EASE_OUT}`,
  };
}

/** Sample recent movement rather than averaging a long drag and losing its release velocity. */
export type PointerSample = { x: number; time: number };
export function samplePointer(samples: PointerSample[], x: number, time: number) {
  samples.push({ x, time });
  while (samples.length > 2 && time - samples[0].time > 100) samples.shift();
}
export function releaseVelocity(samples: PointerSample[], now: number) {
  if (samples.length < 2 || now - samples[samples.length - 1].time > 100) return 0;
  const first = samples[0], last = samples[samples.length - 1];
  return (last.x - first.x) / Math.max(1, last.time - first.time);
}

/** Smooth Apple/rational rubber-band curve: continuous exponential-like resistance without linear kinks. */
export function rubberBand(overshoot: number, dimension = 320, constant = 0.55): number {
  const d = dimension || 320;
  const abs = Math.abs(overshoot);
  return Math.sign(overshoot) * (1 - 1 / ((abs * constant) / d + 1)) * d;
}

/** Projects resting travel from release velocity (velocity in px/ms; time in seconds). */
export function projectInertia(distance: number, velocity: number, time = 0.12): number {
  return distance + velocity * 1000 * time;
}

/** Smooths incoming release velocity toward a boundary so springs don't slam or clip into walls. */
export function softenVelocity(velocity: number, distanceToTarget: number, factor = 10): number {
  const maxAllowed = Math.abs(distanceToTarget) * factor;
  return Math.sign(velocity) * Math.min(Math.abs(velocity), maxAllowed);
}

/** A damped spring sampled by WAAPI: tuned for organic lightness with a hint of life (3% breath). */
export function springFrames(
  from: number,
  to: number,
  velocity = 0,
  duration = 480,
  config: { omega?: number; damping?: number; steps?: number } = {},
) {
  // With overshoot off (calm), the spring settles without its 3% breath.
  const { omega = 16, damping = readMotion().overshoot > 0 ? 0.74 : 1, steps = 36 } = config;
  const damped = omega * Math.sqrt(Math.max(0.001, 1 - damping * damping));
  const displacement = from - to;
  const coefficient = (velocity * 1000 + damping * omega * displacement) / damped;
  return Array.from({ length: steps + 1 }, (_, i) => {
    const t = (i / steps) * (duration / 1000);
    const value = to + Math.exp(-damping * omega * t) * (displacement * Math.cos(damped * t) + coefficient * Math.sin(damped * t));
    return { value: i === steps ? to : value, offset: i / steps };
  });
}

