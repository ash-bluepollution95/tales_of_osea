"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────
 * PLUCK STRING STORYBOARD
 *
 *  rest    a straight line through the middle of the box
 *  catch   the pointer crosses the line, either way; the
 *          string catches on it and bends toward it, the bend
 *          riding along under the pointer
 *  slip    the moment the pointer passes `pull` px (less
 *          near the pinned ends) or leaves the box, the
 *          string slips free with the bend it has, flung at
 *          the pointer's speed but never past the limit
 *  twang   a bouncy spring swings it back through the line,
 *          the bend drifting to the middle; the highlight
 *          brightens with the swing and fades as it settles
 *  tap     pressing the line strikes it from rest
 * ───────────────────────────────────────────────────────── */

const STRING = {
  span: 1000, // viewBox width: x runs 0 → span, y is in px
  hold: { stiffness: 8000, damping: 179 }, // while caught: tracks the pointer, no overshoot
  drift: { stiffness: 60, damping: 15.5 }, // after the slip, the bend eases to the middle
  strike: 0.7, // a tap kicks the string at this fraction of limit × ω (first swing ≈ 0.55 × limit)
  step: 1 / 480, // physics substep, s
  rest: 0.05, // px of swing below which the string is still
};

const FLAT = `M0 0H${STRING.span}`;

export interface PluckStringProps extends React.HTMLAttributes<HTMLDivElement> {
  /** How far the string stretches with the pointer before it slips free, in px. */
  pull?: number;
  /** Spring stiffness of the twang. Higher is a faster, higher-pitched wobble. */
  stiffness?: number;
  /** Spring damping of the twang. Lower rings for longer. */
  damping?: number;
  /** Stroke width of the string, in px. */
  strokeWidth?: number;
  /** Fade the string out toward both ends. */
  fade?: boolean;
  /** Classes for the highlight that lights up the string as it swings. Set its color with `text-*`. */
  highlightClassName?: string;
}

export function PluckString({
  pull = 24,
  stiffness = 900,
  damping = 9,
  strokeWidth = 1,
  fade = false,
  highlightClassName,
  className,
  ...props
}: PluckStringProps) {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const stringRef = React.useRef<SVGPathElement>(null);
  const glowRef = React.useRef<SVGGElement>(null);
  const glowPathRef = React.useRef<SVGPathElement>(null);
  const id = React.useId();

  React.useEffect(() => {
    const root = rootRef.current;
    const string = stringRef.current;
    const glow = glowRef.current;
    const glowPath = glowPathRef.current;
    if (!root || !string || !glow || !glowPath) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const omega = Math.sqrt(stiffness);
    const { span, hold, drift } = STRING;

    // x is where the bend sits along the string (viewBox units), y how far it
    // is pulled off the line (px). `held` is the side the pointer holds it on
    // (±1, 0 when free) and `side` the side the pointer was last seen on.
    // py, pt and pv are the pointer's last offset, time and vertical speed.
    const s = {
      x: span / 2,
      vx: 0,
      y: 0,
      vy: 0,
      tx: span / 2,
      ty: 0,
      held: 0,
      side: 0,
      py: 0,
      pt: 0,
      pv: 0,
    };
    let frame = 0;
    let last = 0;

    const draw = () => {
      // Reduced motion keeps the line straight; only the highlight responds.
      const y = reducedMotion.matches ? 0 : s.y;
      const x = Math.min(Math.max(s.x, 0), span);
      const d =
        Math.abs(y) < 0.01
          ? FLAT
          : `M0 0Q${(x / 2).toFixed(1)} ${y.toFixed(2)} ${x.toFixed(1)} ${y.toFixed(2)}` +
            `Q${((x + span) / 2).toFixed(1)} ${y.toFixed(2)} ${span} 0`;
      string.setAttribute("d", d);
      glowPath.setAttribute("d", d);

      const swing = s.held ? Math.abs(s.y) : Math.hypot(s.y, s.vy / omega);
      glow.style.opacity = String(Math.min(swing / pull, 1));
    };

    const integrate = (h: number) => {
      const ky = s.held ? hold : { stiffness, damping };
      const kx = s.held ? hold : drift;
      const tx = s.held ? s.tx : span / 2;
      const ty = s.held ? s.ty : 0;

      // Semi-implicit Euler: stable for these springs at this step size.
      s.vy += (ky.stiffness * (ty - s.y) - ky.damping * s.vy) * h;
      s.y += s.vy * h;
      s.vx += (kx.stiffness * (tx - s.x) - kx.damping * s.vx) * h;
      s.x += s.vx * h;
    };

    const tick = (now: number) => {
      let dt = Math.min(Math.max((now - last) / 1000, 0), 1 / 20);
      last = now;
      while (dt > 0) {
        const h = Math.min(STRING.step, dt);
        integrate(h);
        dt -= h;
      }

      const settled = s.held
        ? Math.hypot(s.y - s.ty, s.vy / omega) < STRING.rest &&
          Math.abs(s.x - s.tx) < 0.5 &&
          Math.abs(s.vx) < 5
        : Math.hypot(s.y, s.vy / omega) < STRING.rest;

      if (settled && !s.held) {
        s.y = s.vy = s.vx = 0;
        s.x = span / 2;
      }
      draw();
      frame = settled ? 0 : requestAnimationFrame(tick);
    };

    const wake = () => {
      if (frame) return;
      last = performance.now();
      frame = requestAnimationFrame(tick);
    };

    const locate = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      const u = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
      return {
        x: u * span,
        dy: event.clientY - rect.top - rect.height / 2,
        // Pinned at both ends, the string gives less the closer you get to one.
        limit: pull * 4 * u * (1 - u),
      };
    };

    const track = (dy: number, time: number) => {
      const dt = (time - s.pt) / 1000;
      if (dt > 0) s.pv = (dy - s.py) / dt;
      s.py = dy;
      s.pt = time;
    };

    // Lets go of the string where it is, flung at `speed` (px/s). A fast pass
    // can outrun the bend, so the speed carries the pluck; it's capped so the
    // swing never goes past `limit`.
    const release = (limit: number, speed: number) => {
      const room = omega * Math.sqrt(Math.max(limit * limit - s.y * s.y, 0));
      s.vy = Math.min(Math.max(speed, -room), room);
      s.held = 0;
      wake();
    };

    // Tracks the pointer and catches the string whenever it crosses the line,
    // a crossing back included.
    const follow = (event: PointerEvent) => {
      const p = locate(event);
      // First event in the box: start from where the pointer was a frame ago,
      // so a fast entry that lands past the line still counts as a crossing and
      // brings its speed. (pointerenter reports no movement, so it's read here.)
      if (!s.side) {
        s.py = p.dy - event.movementY;
        s.pt = event.timeStamp - 1000 / 60;
        s.side = Math.sign(s.py);
      }
      track(p.dy, event.timeStamp);

      const side = Math.sign(p.dy) || s.side;
      if (s.side && side !== s.side) {
        // From rest the bend starts right under the pointer; mid-swing it
        // slides there instead, so the shape never jumps.
        if (Math.abs(s.y) < 1) {
          s.x = p.x;
          s.vx = 0;
        }
        s.held = side;
      }
      s.side = side;
      return p;
    };

    const onMove = (event: PointerEvent) => {
      const { x, dy, limit } = follow(event);
      if (!s.held) return;
      // Past the limit the pointer loses its grip right away.
      if (Math.abs(dy) > limit) return release(limit, s.pv);
      s.tx = x;
      s.ty = dy;
      wake();
    };

    const onLeave = (event: PointerEvent) => {
      // A fast pass can cross the line between its last move in the box and
      // the exit, so the exit counts too. Then the pointer lets go for good: it
      // catches the string again only by coming back across the line.
      const { limit } = follow(event);
      s.side = 0;
      if (s.held) release(limit, s.pv);
    };

    // A cancelled touch may report no position, so just let go where it is.
    const onCancel = () => {
      s.side = 0;
      if (s.held) release(pull, 0);
    };

    const onDown = (event: PointerEvent) => {
      const { x, dy, limit } = locate(event);
      if (s.held) return release(limit, 0);
      if (Math.abs(s.y) < 1) s.x = x;
      // A strike: kick the velocity toward the side that was pressed.
      s.vy += (Math.sign(dy) || 1) * limit * omega * STRING.strike;
      wake();
    };

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    root.addEventListener("pointercancel", onCancel);
    root.addEventListener("pointerdown", onDown);
    return () => {
      cancelAnimationFrame(frame);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      root.removeEventListener("pointercancel", onCancel);
      root.removeEventListener("pointerdown", onDown);
      string.setAttribute("d", FLAT);
      glowPath.setAttribute("d", FLAT);
      glow.style.opacity = "0";
    };
  }, [pull, stiffness, damping]);

  const stroke = (gradient: string) => (fade ? `url(#${gradient})` : "currentColor");

  return (
    <div
      ref={rootRef}
      role="separator"
      className={cn("relative h-14 w-full text-border", className)}
      {...props}
    >
      {/* A 1px-tall viewBox centered on the line: x stretches to the width,
          y stays in px, and the stroke never scales. The bend overflows it. */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px w-full overflow-visible"
        viewBox={`0 -0.5 ${STRING.span} 1`}
        preserveAspectRatio="none"
        fill="none"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      >
        {fade ? <FadeGradient id={`${id}-string`} /> : null}
        <path ref={stringRef} d={FLAT} stroke={stroke(`${id}-string`)} vectorEffect="non-scaling-stroke" />
        <g ref={glowRef} className={cn("text-foreground", highlightClassName)} style={{ opacity: 0 }}>
          {fade ? <FadeGradient id={`${id}-glow`} /> : null}
          <path
            ref={glowPathRef}
            d={FLAT}
            stroke={stroke(`${id}-glow`)}
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>
    </div>
  );
}

/**
 * Transparent → currentColor → transparent across the string. In user space,
 * because an objectBoundingBox gradient disappears on a perfectly flat line.
 */
function FadeGradient({ id }: { id: string }) {
  return (
    <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={STRING.span} y2="0">
      <stop offset="0" stopColor="currentColor" stopOpacity="0" />
      <stop offset="0.2" stopColor="currentColor" />
      <stop offset="0.8" stopColor="currentColor" />
      <stop offset="1" stopColor="currentColor" stopOpacity="0" />
    </linearGradient>
  );
}
