"use client";

import { useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";
import FragmentCanvas from "fragment-canvas";
import { cn } from "@/lib/utils";

/**
 * FluidSmokeButton — a WebGL "fluid smoke" button.
 *
 * Original: "WebGL Fluid Smoke Button" by Tim Wilson
 *   CodePen: https://codepen.io/TWilson/pen/PoVjzgY
 *   Web:     https://twilson.net · X: @actualTimWilson
 * Rendered with Tim's `fragment-canvas` package:
 *   https://github.com/TWilson023/fragment-canvas (ISC license)
 * Ported to React / Next.js (App Router, Tailwind v4) for Tales of Osea.
 */

const FRAGMENT_SHADER = `
precision mediump float;

uniform vec2 iResolution;
uniform float iTime;

float random(vec2 pos) {
    return fract(sin(dot(pos, vec2(12.9898, 78.233))) * 43758.5453);
}

float noise(vec2 pos) {
    vec2 i = floor(pos);
    vec2 f = fract(pos);
    float a = random(i + vec2(0.0, 0.0));
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 pos) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(20.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 8; i++) {
        v += a * noise(pos);
        pos = rot * pos * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

void main(void) {
    vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
    uv *= 0.5;

    vec2 q = vec2(
        fbm(uv + 0.20 * iTime),
        fbm(uv + vec2(5.0, 1.0))
    );
    vec2 r = vec2(
        fbm(uv + 3.0 * q + vec2(1.2, 3.2) + 0.2 * iTime),
        fbm(uv + 3.0 * q + vec2(8.8, 2.8) + 0.2 * iTime)
    );

    float f = fbm(uv + r);

    // Palette tuned to the Tales of Osea dark-violet theme (was blue/magenta/yellow).
    vec3 color = mix(
        vec3(0.0, 0.0, 0.0),
        vec3(0.35, 0.12, 0.85), // violet
        clamp((f * f) * 6.0, 0.0, 5.0)
    );

    color = mix(
        color,
        vec3(0.62, 0.25, 0.92), // purple
        clamp(length(q) * length(q), 0.0, 1.0)
    );

    color = mix(
        color,
        vec3(0.85, 0.75, 0.98), // pale lavender
        clamp(length(r.x), 0.0, 0.1)
    );

    color = vec3(0.12, 0.04, 0.24) + (f * f * f + 0.6 * f * f + 0.6 * f) * color; // dark violet base

    gl_FragColor = vec4(color, 1.0);
}
`;

type FluidSmokeButtonProps = Omit<
  HTMLAttributes<HTMLElement>,
  "children" | "type"
> & {
  /** When set, renders an <a> instead of a <button> so it can navigate. */
  href?: string;
  target?: string;
  rel?: string;
  children?: ReactNode;
};

export default function FluidSmokeButton({
  href,
  target,
  rel,
  children = "Smoky Button",
  className,
  ...rest
}: FluidSmokeButtonProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    // autoRender is off so WE own the animation loop and can cancel it on
    // unmount. The library's default loop never stops (no dispose method),
    // which would leak a requestAnimationFrame for every mounted button.
    let fc: FragmentCanvas;
    try {
      fc = new FragmentCanvas(canvas, {
        fragmentShader: FRAGMENT_SHADER,
        autoRender: false,
      });
    } catch (err) {
      // WebGL unavailable or shader failed to compile: render the button
      // without the smoke instead of crashing the whole page.
      console.warn("FluidSmokeButton: WebGL init failed — no smoke", err);
      return;
    }

    // Size the drawing buffer to the wrapper (× devicePixelRatio for retina).
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.round(wrap.clientWidth * dpr));
      canvas.height = Math.max(1, Math.round(wrap.clientHeight * dpr));
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    let raf = 0;
    const tick = (time: number) => {
      fc.render(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  const inner = (
    <>
      <div ref={wrapRef} className="absolute -inset-4 -z-[1]">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 h-full w-full transition-all duration-300 group-hover:rotate-[10deg] group-hover:scale-[1.2]"
        />
      </div>
      <div className="m-[2px] rounded-[12px] bg-black/50 px-6 py-2.5 transition-colors duration-300 group-hover:bg-black/25">
        <div className="text-white/80 transition-all duration-300 group-hover:scale-[1.05] group-hover:text-white">
          {children}
        </div>
      </div>
    </>
  );

  const classes = cn(
    "group relative isolate inline-block overflow-hidden rounded-[14px] text-base font-medium",
    className
  );

  return href ? (
    <a href={href} target={target} rel={rel} className={classes} {...rest}>
      {inner}
    </a>
  ) : (
    <button type="button" className={classes} {...rest}>
      {inner}
    </button>
  );
}
