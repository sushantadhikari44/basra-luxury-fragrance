import { useEffect, useRef, useState } from "react";
import { Heart, ArrowRight, Leaf, Flower2, Sparkles } from "lucide-react";
import { FRAGRANCES } from "@/data/fragrances";
import { useFavorites } from "@/hooks/useFavorites";
import { Particles } from "./Particles";
import { cn } from "@/lib/utils";

export function Hero() {
  const [index, setIndex] = useState(0);
  const { has, toggle } = useFavorites();
  const stageRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Bottle spins continuously (12s/turn). Swap fragrance every 6s on half-rotation.
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % FRAGRANCES.length), 6000);
    return () => clearInterval(id);
  }, []);

  // Cursor parallax for bottle stage
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = stageRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      setParallax({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const current = FRAGRANCES[index];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden grain pt-16 md:pt-20">
      {/* Cinematic backgrounds (crossfade) */}
      {FRAGRANCES.map((f, i) => (
        <div
          key={f.id}
          aria-hidden
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-out"
          style={{ background: f.background, opacity: i === index ? 1 : 0 }}
        />
      ))}

      {/* Atmospheric mist */}
      <div
        aria-hidden
        className="absolute inset-0 mist-layer pointer-events-none"
        style={{
          background: `radial-gradient(60% 50% at 50% 60%, ${current.ambient} 0%, transparent 65%)`,
          mixBlendMode: "screen",
          opacity: 0.55,
        }}
      />
      {/* Stone-like vignette */}
      <div aria-hidden className="absolute inset-0 pointer-events-none mist-overlay" />

      {/* Particles layer (re-renders per fragrance for color) */}
      <Particles key={current.id} color={current.accent} count={28} />

      <div className="relative z-10 mx-auto max-w-[1700px] grid grid-cols-12 gap-6 lg:gap-10 px-6 md:px-10 py-10 lg:py-16 min-h-[calc(100svh-5rem)] items-center">
        {/* LEFT — Name, description, CTA */}
        <div className="col-span-12 lg:col-span-4 order-2 lg:order-1">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold/90 fade-up">
            Maison BASRA · Signature
          </p>

          <div className="relative mt-5 min-h-[260px]">
            {FRAGRANCES.map((f, i) => (
              <div
                key={f.id}
                className={cn(
                  "transition-opacity duration-[1400ms] ease-out",
                  i === index
                    ? "opacity-100 relative"
                    : "opacity-0 absolute inset-0 pointer-events-none",
                )}
              >
                <h1 className="font-serif text-4xl md:text-6xl xl:text-7xl leading-[0.95] tracking-tight">
                  {f.name}
                </h1>
                <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-gold/80">
                  {f.tagline}
                </p>
                <p className="mt-6 text-sm md:text-base text-foreground/80 leading-relaxed max-w-md">
                  {f.description}
                </p>
                <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {f.notes.join(" · ")}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#collection"
              className="btn-gold group inline-flex items-center gap-2 px-7 py-4 text-[11px] uppercase tracking-[0.3em] font-medium"
            >
              Discover Fragrance
              <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#collection"
              className="btn-ghost-luxury inline-flex items-center px-7 py-4 text-[11px] uppercase tracking-[0.3em]"
            >
              Shop Collection
            </a>
            <button
              aria-label="Save to favorites"
              onClick={() => toggle(current.id)}
              className="inline-flex items-center justify-center size-12 rounded-full border border-white/20 hover:border-gold hover:text-gold transition"
            >
              <Heart
                className={cn(
                  "size-5 transition-transform",
                  has(current.id) && "fill-gold text-gold scale-110",
                )}
              />
            </button>
          </div>
        </div>

        {/* CENTER — Bottle */}
        <div
          ref={stageRef}
          className="col-span-12 lg:col-span-4 order-1 lg:order-2 relative h-[420px] sm:h-[520px] lg:h-[80vh] flex items-center justify-center"
        >
          {/* Soft halo */}
          <div
            aria-hidden
            className="absolute inset-0 m-auto rounded-full blur-3xl glow-pulse"
            style={{
              width: "min(80%, 560px)",
              height: "min(80%, 560px)",
              background: `radial-gradient(circle, ${current.ambient} 0%, transparent 65%)`,
              transform: `translate3d(${parallax.x * -14}px, ${parallax.y * -10}px, 0)`,
              transition: "transform .8s ease-out",
            }}
          />
          {/* Thin light ring */}
          <div
            aria-hidden
            className="absolute inset-0 m-auto rounded-full"
            style={{
              width: "min(78%, 580px)",
              height: "min(78%, 580px)",
              border: `1px solid ${current.accent}40`,
              boxShadow: `0 0 100px ${current.accent}33 inset, 0 0 80px ${current.accent}22`,
              transform: `translate3d(${parallax.x * -8}px, ${parallax.y * -6}px, 0)`,
              transition: "transform .8s ease-out",
            }}
          />

          <div
            className="relative w-[260px] sm:w-[340px] lg:w-[400px] float-y"
            style={{
              transform: `translate3d(${parallax.x * 18}px, ${parallax.y * 14}px, 0)`,
              transition: "transform .6s ease-out",
            }}
          >
            <div className="bottle-spin">
              {FRAGRANCES.map((f, i) => (
                <img
                  key={f.id}
                  src={f.image}
                  alt={`${f.name} perfume bottle`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={cn(
                    "absolute inset-0 w-full h-auto object-contain transition-opacity duration-[1800ms] ease-out drop-shadow-[0_40px_70px_rgba(0,0,0,0.6)]",
                    i === index ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
              <img
                src={FRAGRANCES[0].image}
                alt=""
                aria-hidden
                className="invisible w-full h-auto"
              />
            </div>
            {/* Floor reflection */}
            <div
              aria-hidden
              className="absolute left-1/2 -bottom-8 -translate-x-1/2 w-[85%] h-8 rounded-[50%] blur-lg"
              style={{ background: `${current.accent}55` }}
            />
            {/* Specular light spec */}
            <div
              aria-hidden
              className="absolute top-[18%] left-[22%] w-10 h-10 rounded-full blur-md opacity-60"
              style={{ background: "rgba(255,255,255,0.55)" }}
            />
          </div>
        </div>

        {/* RIGHT — Note pyramid */}
        <aside className="col-span-12 lg:col-span-4 order-3 lg:justify-self-end w-full max-w-sm">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold/90">
            Olfactive Pyramid
          </p>
          <div className="mt-6 space-y-7">
            {(
              [
                { label: "Top Notes", icon: Sparkles, items: current.topNotes },
                { label: "Heart Notes", icon: Flower2, items: current.heartNotes },
                { label: "Base Notes", icon: Leaf, items: current.baseNotes },
              ] as const
            ).map(({ label, icon: Icon, items }) => (
              <div
                key={label}
                className="group relative pl-5 border-l border-white/10 hover:border-gold/60 transition-colors"
              >
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-gold/80">
                  <Icon className="size-3.5" />
                  {label}
                </div>
                <ul className="mt-3 space-y-1.5">
                  {items.map((n) => (
                    <li
                      key={n}
                      className="font-serif text-lg md:text-xl text-foreground/90 leading-snug"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <div>
              <div className="text-gold/80">Concentration</div>
              <div className="mt-1 text-foreground/85 normal-case tracking-normal text-sm font-serif">
                Eau de Parfum
              </div>
            </div>
            <div>
              <div className="text-gold/80">Format</div>
              <div className="mt-1 text-foreground/85 normal-case tracking-normal text-sm font-serif">
                100 ml
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Indicator */}
      <div className="absolute z-10 bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {FRAGRANCES.map((f, i) => (
          <button
            key={f.id}
            aria-label={`Show ${f.name}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-[2px] transition-all",
              i === index ? "w-10 bg-gold" : "w-6 bg-white/30 hover:bg-white/60",
            )}
          />
        ))}
      </div>
    </section>
  );
}