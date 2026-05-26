import { useEffect, useState } from "react";
import { Heart, ArrowRight } from "lucide-react";
import { FRAGRANCES } from "@/data/fragrances";
import { useFavorites } from "@/hooks/useFavorites";
import { Particles } from "./Particles";
import { cn } from "@/lib/utils";

export function Hero() {
  const [index, setIndex] = useState(0);
  const { has, toggle } = useFavorites();

  // Bottle spin = 16s for full rotation, swap fragrance at every half-rotation (8s)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % FRAGRANCES.length), 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden grain pt-16 md:pt-20">
      {/* Backgrounds (crossfade) */}
      {FRAGRANCES.map((f, i) => (
        <div
          key={f.id}
          aria-hidden
          className="absolute inset-0 transition-opacity duration-[1600ms] ease-out"
          style={{ background: f.background, opacity: i === index ? 1 : 0 }}
        />
      ))}

      {/* Particles layer (re-renders per fragrance for color) */}
      <Particles key={FRAGRANCES[index].id} color={FRAGRANCES[index].accent} count={28} />

      <div className="relative z-10 mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 px-6 md:px-10 py-12 lg:py-20 min-h-[calc(100svh-5rem)] items-center">
        {/* Left content */}
        <div className="order-2 lg:order-1 max-w-xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold/90 fade-up">
            Crafted from global artistry
          </p>

          {FRAGRANCES.map((f, i) => (
            <div
              key={f.id}
              className={cn(
                "transition-opacity duration-[1200ms]",
                i === index ? "opacity-100 relative" : "opacity-0 absolute pointer-events-none",
              )}
            >
              <h1 className="mt-6 font-serif text-5xl md:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
                {f.name}
              </h1>
              <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed max-w-md">
                {f.description}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {f.notes.join(" · ")}
              </p>
            </div>
          ))}

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#collection"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-gold text-black text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#e6c389] transition"
            >
              Discover Fragrance
              <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#collection"
              className="inline-flex items-center px-7 py-4 border border-white/25 text-xs uppercase tracking-[0.25em] hover:border-gold hover:text-gold transition"
            >
              Shop Collection
            </a>
            <button
              aria-label="Save to favorites"
              onClick={() => toggle(FRAGRANCES[index].id)}
              className="inline-flex items-center justify-center size-12 rounded-full border border-white/20 hover:border-gold hover:text-gold transition"
            >
              <Heart
                className={cn(
                  "size-5 transition-transform",
                  has(FRAGRANCES[index].id) && "fill-gold text-gold scale-110",
                )}
              />
            </button>
          </div>
        </div>

        {/* Right bottle */}
        <div className="order-1 lg:order-2 relative h-[420px] sm:h-[520px] lg:h-[78vh] flex items-center justify-center">
          {/* Halo */}
          <div
            className="absolute inset-0 m-auto rounded-full blur-3xl glow-pulse"
            aria-hidden
            style={{
              width: "min(70%, 520px)",
              height: "min(70%, 520px)",
              background: `radial-gradient(circle, ${FRAGRANCES[index].ambient} 0%, transparent 65%)`,
            }}
          />
          {/* Ring of light */}
          <div
            aria-hidden
            className="absolute inset-0 m-auto rounded-full"
            style={{
              width: "min(75%, 560px)",
              height: "min(75%, 560px)",
              border: `1px solid ${FRAGRANCES[index].accent}55`,
              boxShadow: `0 0 80px ${FRAGRANCES[index].accent}33 inset, 0 0 60px ${FRAGRANCES[index].accent}22`,
            }}
          />

          <div className="relative w-[300px] sm:w-[380px] lg:w-[440px] float-y">
            <div className="bottle-spin">
              {FRAGRANCES.map((f, i) => (
                <img
                  key={f.id}
                  src={f.image}
                  alt={`${f.name} perfume bottle`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={cn(
                    "absolute inset-0 w-full h-auto object-contain transition-opacity duration-[1600ms] ease-out drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]",
                    i === index ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
              {/* placeholder for sizing */}
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
              className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-[80%] h-6 rounded-[50%] blur-md"
              style={{ background: `${FRAGRANCES[index].accent}44` }}
            />
          </div>
        </div>
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