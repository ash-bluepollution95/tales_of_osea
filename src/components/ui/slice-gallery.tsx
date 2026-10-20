"use client";

import * as React from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
  type MotionStyle,
  type MotionValue,
} from "motion/react";

import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────
 * SLICE GALLERY STORYBOARD
 *
 *  rest     tall slices share the width. One is open; the rest
 *           are thin windows onto their photos, shaded, with
 *           their titles running up the left edge
 *  hover    a slice brightens as soon as the pointer is on it,
 *           and opens when the pointer slows or settles, so a
 *           quick sweep across the row doesn't set it rippling
 *  open     it widens on a spring while the others squeeze to
 *           make room. Photos never stretch: each is cut to the
 *           open size, so the window just widens, and the photo
 *           eases back from a slight zoom. The title swings
 *           upright on its first letter, then rises as the
 *           details slide up from under it, and the strip on
 *           top warms to the slice's accent
 *  close    the details go first, then the title swings back
 *           down as the slice narrows
 *  touch    tap a slice, or drag a finger across the row to
 *           scrub through them
 *  keys     ←/→ (↑/↓ when stacked), Home and End
 *  play     with autoPlay, the open slice's strip fills like a
 *           story timer, then the next one opens. It pauses
 *           while the pointer or keyboard focus is inside, or
 *           the gallery is off screen
 *  narrow   under 36rem the slices stack and open downward
 *  reduced  no springs, zoom or autoplay: slices switch at once
 * ───────────────────────────────────────────────────────── */

const SLICE = {
  open: { type: "spring", visualDuration: 0.5, bounce: 0 },
  dwell: 90, // ms the pointer rests on a slice before it opens
  slow: 0.35, // px/ms; a pointer moving slower than this opens a slice at once
  zoom: 0.08, // closed photos sit this much closer in
  shade: 0.4, // darkness over closed slices
  pad: 20, // px around a slice's text when the slices sit side by side (p-5)
  headroom: 104, // px a sideways title leaves at the top for the strip and label
  stack: 36, // rem; narrower galleries stack their slices (Tailwind's @xl)
  scrub: 10, // px a finger travels before a tap counts as a scrub
} as const;

export type SliceGalleryOrientation = "auto" | "horizontal" | "vertical";

// Literal class names so Tailwind generates them. "auto" switches at the gallery's own @xl width.
const DIRECTION: Record<SliceGalleryOrientation, string> = {
  auto: "flex-col @xl:flex-row",
  horizontal: "flex-row",
  vertical: "flex-col",
};
// Side by side, a closed title lies along the slice's left edge, turning on its first letter.
const TURN: Record<SliceGalleryOrientation, string> = {
  auto: "@xl:rotate-[calc(var(--slice-turn)*-90deg)]",
  horizontal: "rotate-[calc(var(--slice-turn)*-90deg)]",
  vertical: "",
};
const PAD: Record<SliceGalleryOrientation, string> = {
  auto: "p-4 @xl:p-5",
  horizontal: "p-5",
  vertical: "p-4",
};
// The label sits in the top corner side by side, and at the end of the title row when stacked.
const LABEL_TOP: Record<SliceGalleryOrientation, string> = {
  auto: "hidden @xl:block",
  horizontal: "block",
  vertical: "hidden",
};
const LABEL_ROW: Record<SliceGalleryOrientation, string> = {
  auto: "@xl:hidden",
  horizontal: "hidden",
  vertical: "",
};

type Layout = {
  horizontal: boolean;
  /** Length of the open slice along the row, in px. Null until measured. */
  open: number | null;
  /** Depth of the row across the slices (its height side by side), in px. */
  cross: number | null;
};

type Gallery = {
  active: number;
  grow: number;
  orientation: SliceGalleryOrientation;
  layout: Layout;
  reduced: boolean;
  playing: boolean;
  progress: MotionValue<number>;
  select: (index: number) => void;
  onKeyDown: (event: React.KeyboardEvent, from: number) => void;
};

const GalleryContext = React.createContext<Gallery | null>(null);
const IndexContext = React.createContext(-1);

function useGallery() {
  const gallery = React.useContext(GalleryContext);
  if (!gallery) throw new Error("<SliceGalleryItem> must be rendered inside <SliceGallery>.");
  return gallery;
}

/* ── SliceGallery ───────────────────────────────────────── */

export interface SliceGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The open slice. Leave unset to let the gallery manage it. */
  index?: number;
  /** The slice that starts open. */
  defaultIndex?: number;
  /** Called when a slice opens: hover, tap, scrub, keys or autoplay. */
  onIndexChange?: (index: number) => void;
  /** How many times longer the open slice is than a closed one. */
  grow?: number;
  /** Space between slices, in px. */
  gap?: number;
  /** "hover" opens slices under the pointer (and under a dragging finger); "click" waits for a click or tap. */
  openOn?: "hover" | "click";
  /** Opens the next slice every this many ms, with the strip as its timer. Off for reduced motion. */
  autoPlay?: number;
  /** "auto" sits the slices side by side, and stacks them when the gallery is narrower than 36rem. */
  orientation?: SliceGalleryOrientation;
}

/**
 * Tall slices that share a fixed width. The open one widens into a full card
 * and the rest squeeze thinner to make room.
 */
export function SliceGallery({
  index,
  defaultIndex = 0,
  onIndexChange,
  grow = 5,
  gap = 8,
  openOn = "hover",
  autoPlay,
  orientation = "auto",
  className,
  style,
  children,
  ...props
}: SliceGalleryProps) {
  const items = React.Children.toArray(children).filter(React.isValidElement);
  const count = items.length;
  const [own, setOwn] = React.useState(defaultIndex);
  const active = count ? Math.min(Math.max(index ?? own, 0), count - 1) : -1;
  const reduced = useReducedMotion() ?? false;
  const playing = !!autoPlay && autoPlay > 0 && !reduced && count > 1;

  const listRef = React.useRef<HTMLDivElement>(null);
  const activeRef = React.useRef(active);
  const latest = React.useRef({ index, onIndexChange, count });
  React.useLayoutEffect(() => {
    activeRef.current = active;
    latest.current = { index, onIndexChange, count };
  });

  const select = React.useCallback((next: number) => {
    const { index, onIndexChange, count } = latest.current;
    if (next === activeRef.current || next < 0 || next >= count) return;
    activeRef.current = next;
    if (index === undefined) setOwn(next);
    onIndexChange?.(next);
  }, []);

  /* Measure: which way the slices run, and how long the open one is. */
  const [layout, setLayout] = React.useState<Layout>(() => ({
    horizontal: orientation !== "vertical",
    open: null,
    cross: null,
  }));
  React.useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const observer = new ResizeObserver(() => {
      const width = list.offsetWidth;
      const height = list.offsetHeight;
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const horizontal =
        orientation === "horizontal" || (orientation === "auto" && width >= SLICE.stack * rem);
      const others = Math.max(0, count - 1);
      const main = horizontal ? width : height;
      const open = Math.round(((main - gap * others) * grow) / (grow + others));
      const cross = horizontal ? height : width;
      setLayout((prev) =>
        prev.horizontal === horizontal && prev.open === open && prev.cross === cross
          ? prev
          : { horizontal, open, cross },
      );
    });
    observer.observe(list);
    return () => observer.disconnect();
  }, [orientation, gap, grow, count]);

  /* Autoplay: the progress runs while nothing holds it, then opens the next slice. */
  const progress = useMotionValue(0);
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const [seen, setSeen] = React.useState(true);
  const paused = hovered || focused || !seen;

  React.useLayoutEffect(() => {
    progress.jump(0);
  }, [active, progress]);

  React.useEffect(() => {
    if (!playing || paused) return;
    const controls = animate(progress, 1, {
      duration: ((autoPlay ?? 0) / 1000) * (1 - progress.get()),
      ease: "linear",
      onComplete: () => select((activeRef.current + 1) % latest.current.count),
    });
    return () => controls.stop();
  }, [playing, paused, active, autoPlay, progress, select]);

  React.useEffect(() => {
    const list = listRef.current;
    if (!playing || !list) return;
    let inView = true;
    const update = () => setSeen(inView && document.visibilityState === "visible");
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        update();
      },
      { threshold: 0.2 },
    );
    observer.observe(list);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, [playing]);

  /* Pointer: hover intent for mice, scrubbing for fingers. */
  const pointer = React.useRef({
    x: NaN,
    y: NaN,
    t: 0,
    speed: Infinity,
    timer: 0,
    scrub: false,
    startX: 0,
    swallowClick: false,
  });
  React.useEffect(() => () => window.clearTimeout(pointer.current.timer), []);

  const sliceAt = (x: number, y: number) => {
    const hit = document.elementFromPoint(x, y)?.closest<HTMLElement>("[data-slice-index]");
    return hit && listRef.current?.contains(hit) ? Number(hit.dataset.sliceIndex) : -1;
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (openOn !== "hover") return;
    const p = pointer.current;
    if (event.pointerType !== "mouse") {
      if (p.scrub) select(sliceAt(event.clientX, event.clientY));
      return;
    }
    const dx = event.clientX - p.x;
    const dy = event.clientY - p.y;
    if (dx === 0 && dy === 0) return; // the slices moved under a still pointer
    const dt = event.timeStamp - p.t;
    const speed = Number.isNaN(dx) ? Infinity : dt > 0 ? Math.hypot(dx, dy) / dt : p.speed;
    p.speed = Number.isFinite(p.speed) && Number.isFinite(speed) ? (p.speed + speed) / 2 : speed;
    p.x = event.clientX;
    p.y = event.clientY;
    p.t = event.timeStamp;

    window.clearTimeout(p.timer);
    const next = sliceAt(p.x, p.y);
    if (next < 0 || next === activeRef.current) return;
    if (p.speed < SLICE.slow) select(next);
    else p.timer = window.setTimeout(() => select(next), SLICE.dwell);
  };

  const onPointerDown = (event: React.PointerEvent) => {
    const p = pointer.current;
    p.swallowClick = false;
    if (event.pointerType === "mouse" || !layout.horizontal || openOn !== "hover") return;
    p.scrub = true;
    p.startX = event.clientX;
  };

  const endScrub = (event: React.PointerEvent) => {
    const p = pointer.current;
    if (!p.scrub) return;
    p.scrub = false;
    // A finger that slid across the row shouldn't also tap the slice it started on.
    p.swallowClick = Math.abs(event.clientX - p.startX) > SLICE.scrub;
  };

  const onKeyDown = (event: React.KeyboardEvent, from: number) => {
    const back = layout.horizontal ? "ArrowLeft" : "ArrowUp";
    const forward = layout.horizontal ? "ArrowRight" : "ArrowDown";
    let to = -1;
    if (event.key === forward) to = (from + 1) % count;
    else if (event.key === back) to = (from - 1 + count) % count;
    else if (event.key === "Home") to = 0;
    else if (event.key === "End") to = count - 1;
    if (to < 0) return;
    event.preventDefault();
    select(to);
    listRef.current
      ?.querySelector<HTMLElement>(`[data-slice-index="${to}"] [data-slice-trigger]`)
      ?.focus();
  };

  const titleMax =
    layout.horizontal && layout.open && layout.cross
      ? `${Math.max(0, Math.min(layout.open - 2 * SLICE.pad, layout.cross - SLICE.headroom))}px`
      : undefined;

  return (
    <GalleryContext.Provider
      value={{ active, grow, orientation, layout, reduced, playing, progress, select, onKeyDown }}
    >
      <div
        {...props}
        className={cn("@container relative h-[30rem] w-full", className)}
        style={{ ...style, "--slice-title-max": titleMax } as React.CSSProperties}
      >
        <div
          ref={listRef}
          className={cn("flex size-full", DIRECTION[orientation])}
          style={{ gap, touchAction: layout.horizontal && openOn === "hover" ? "pan-y" : undefined }}
          onPointerMove={onPointerMove}
          onPointerDown={onPointerDown}
          onPointerUp={endScrub}
          onPointerCancel={endScrub}
          onPointerEnter={(event) => event.pointerType === "mouse" && setHovered(true)}
          onPointerLeave={() => {
            const p = pointer.current;
            window.clearTimeout(p.timer);
            p.x = NaN;
            p.speed = Infinity;
            setHovered(false);
          }}
          onClickCapture={(event) => {
            if (!pointer.current.swallowClick) return;
            pointer.current.swallowClick = false;
            event.preventDefault();
            event.stopPropagation();
          }}
          onFocus={(event) => {
            if (event.target.matches(":focus-visible")) setFocused(true);
          }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
          }}
        >
          {items.map((item, i) => (
            <IndexContext.Provider key={item.key ?? i} value={i}>
              {item}
            </IndexContext.Provider>
          ))}
        </div>
      </div>
    </GalleryContext.Provider>
  );
}

/* ── SliceGalleryItem ───────────────────────────────────── */

export interface SliceGalleryItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** One short line. Runs up the edge of a closed slice and turns upright when it opens. */
  title: React.ReactNode;
  /** Photo URL. It's cut to the open slice's size, so closed slices show a strip of its middle. */
  image: string;
  /** Alt text for the photo. Leave empty when the title says it all. */
  alt?: string;
  /** Small text in the top corner, like a year or a number. Moves to the end of the title row when stacked. */
  label?: React.ReactNode;
  /** Color the strip on top warms to when the slice opens. */
  accent?: string;
  /** Classes for the photo. The slice is a `group/slice` with `data-state="open"` or `"closed"`. */
  imageClassName?: string;
  /** Details that slide up under the title when the slice opens. */
  children?: React.ReactNode;
}

/** One slice. Render inside `SliceGallery`. */
export function SliceGalleryItem({
  title,
  image,
  alt = "",
  label,
  accent = "#ffffff",
  imageClassName,
  className,
  children,
  ...props
}: SliceGalleryItemProps) {
  const { active, grow, orientation, layout, reduced, playing, progress, select, onKeyDown } =
    useGallery();
  const index = React.useContext(IndexContext);
  const isOpen = active === index;
  const id = React.useId();
  const titleId = `${id}-title`;
  const detailsId = `${id}-details`;

  const open = useMotionValue(isOpen ? 1 : 0);
  React.useEffect(() => {
    const target = isOpen ? 1 : 0;
    if (reduced) {
      open.jump(target);
      return;
    }
    const controls = animate(open, target, SLICE.open);
    return () => controls.stop();
  }, [isOpen, reduced, open]);

  const flexGrow = useTransform(open, [0, 1], [1, grow]);
  const turn = useTransform(open, [0.15, 0.85], [1, 0]);
  const reveal = useTransform(open, [0.4, 1], [0, 1]);
  const shade = useTransform(open, [0, 1], [SLICE.shade, 0]);
  const zoom = useTransform(open, [0, 1], [1 + SLICE.zoom, 1]);
  const glow = useTransform(open, [0.2, 0.8], [0, 1]);

  // The strip fills with the autoplay timer while open, and holds its fill as it fades out.
  const fill = useMotionValue(playing && isOpen ? 0 : 1);
  useMotionValueEvent(progress, "change", (value) => {
    if (playing && isOpen) fill.set(value);
  });
  React.useEffect(() => {
    if (!playing) fill.set(1);
    else if (isOpen) fill.set(progress.get());
  }, [playing, isOpen, fill, progress]);

  const length = layout.open ?? undefined;
  const horizontal = layout.horizontal;

  return (
    <motion.div
      data-slice-index={index}
      className="min-h-0 min-w-0 basis-0"
      style={{ flexGrow }}
    >
      <div
        {...props}
        data-state={isOpen ? "open" : "closed"}
        className={cn(
          "group/slice relative isolate size-full overflow-hidden rounded-2xl bg-zinc-800 outline-zinc-900 select-none dark:outline-zinc-100",
          "has-[[data-slice-trigger]:focus-visible]:outline-2 has-[[data-slice-trigger]:focus-visible]:outline-offset-2",
          className,
        )}
      >
        <motion.img
          src={image}
          alt={alt}
          draggable={false}
          decoding="async"
          className={cn(
            "pointer-events-none absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 object-cover",
            imageClassName,
          )}
          style={{
            width: horizontal && length ? length : "100%",
            height: !horizontal && length ? length : "100%",
            scale: reduced ? 1 : zoom,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.78),rgb(0_0_0/0.42)_28%,rgb(0_0_0/0)_62%,rgb(0_0_0/0.22))]"
        />
        <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ opacity: shade }}>
          <div className="size-full bg-black transition-opacity duration-300 group-hover/slice:opacity-50" />
        </motion.div>

        <button
          type="button"
          data-slice-trigger
          tabIndex={isOpen ? 0 : -1}
          aria-expanded={isOpen}
          aria-controls={detailsId}
          aria-labelledby={titleId}
          onClick={() => select(index)}
          onKeyDown={(event) => onKeyDown(event, index)}
          className={cn("absolute inset-0 z-10 outline-none", isOpen ? "cursor-default" : "cursor-pointer")}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-3 top-3 z-20 h-[3px] overflow-hidden rounded-full bg-white/25"
        >
          <motion.div
            className="h-full origin-left rounded-full"
            style={{ scaleX: fill, opacity: glow, backgroundColor: accent }}
          />
        </div>

        {label != null && (
          <span
            className={cn(
              "pointer-events-none absolute top-7 left-5 z-20 max-w-[calc(100%-2.5rem)] truncate font-mono text-xs tracking-wide text-white/75",
              LABEL_TOP[orientation],
            )}
          >
            {label}
          </span>
        )}

        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 z-20 text-white [text-shadow:0_1px_14px_rgb(0_0_0/0.3)]",
            PAD[orientation],
          )}
        >
          <motion.div
            className="translate-y-[calc((100%-2rem)*(1-var(--slice-reveal)))]"
            style={
              {
                "--slice-reveal": reveal,
                width: horizontal && length ? length - 2 * SLICE.pad : undefined,
              } as MotionStyle
            }
          >
            <div className="flex h-8 items-center gap-3">
              <motion.span
                id={titleId}
                className={cn(
                  "max-w-[var(--slice-title-max,100%)] min-w-0 origin-[1rem_1rem] truncate text-xl leading-8 font-medium tracking-tight",
                  TURN[orientation],
                )}
                style={{ "--slice-turn": turn } as MotionStyle}
              >
                {title}
              </motion.span>
              {label != null && (
                <span
                  className={cn(
                    "ml-auto shrink-0 font-mono text-xs tracking-wide text-white/75",
                    LABEL_ROW[orientation],
                  )}
                >
                  {label}
                </span>
              )}
            </div>
            <motion.div
              id={detailsId}
              inert={!isOpen}
              className="pointer-events-auto pt-2 select-text"
              style={{ opacity: reveal }}
            >
              {children}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
