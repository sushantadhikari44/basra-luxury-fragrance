import { Heart, ArrowRight, Sparkles, Globe, Gem, Feather, Crown } from "lucide-react";
import { FRAGRANCES } from "@/data/fragrances";
import { useFavorites } from "@/hooks/useFavorites";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Collection() {
  const { has, toggle } = useFavorites();
  return (
    <section id="collection" className="relative py-24 md:py-32 grain">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">The Collection</p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl">Signature Collection</h2>
          <p className="mt-5 text-muted-foreground max-w-lg">
            Three compositions. Three worlds. Each fragrance is a chapter in the BASRA journey —
            built from rare ingredients and patient craftsmanship.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FRAGRANCES.map((f) => (
            <article
              key={f.id}
              className="group relative overflow-hidden border border-white/10 bg-white/[0.02] hover:border-gold/40 transition"
            >
              <div
                className="relative h-[420px] flex items-end justify-center overflow-hidden"
                style={{ background: f.background }}
              >
                <div
                  className="absolute inset-0 opacity-60 group-hover:opacity-90 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle at 50% 60%, ${f.ambient} 0%, transparent 60%)`,
                  }}
                />
                <img
                  src={f.image}
                  alt={`${f.name} bottle`}
                  loading="lazy"
                  className="relative h-[360px] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-105"
                />
                <button
                  aria-label={`Save ${f.name}`}
                  onClick={() => toggle(f.id)}
                  className="absolute top-4 right-4 size-10 rounded-full glass border border-white/15 grid place-items-center hover:border-gold transition"
                >
                  <Heart className={cn("size-4", has(f.id) && "fill-gold text-gold")} />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80">
                  {f.tagline}
                </p>
                <h3 className="mt-3 font-serif text-2xl">{f.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.story}</p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold hover:gap-3 transition-all"
                >
                  Discover <ArrowRight className="size-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 grain border-t border-white/5">
      <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">About BASRA</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">
            A modern house, devoted to the slow art of perfumery.
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-left md:text-center">
            <p>
              BASRA was founded on a simple idea: the most beautiful fragrances are conversations
              between places. Between an oud harvested at dusk in the East and a Calabrian
              bergamot picked at first light.
            </p>
            <p>
              Every composition is developed in small batches with master perfumers, using
              ingredients selected for their integrity. The result is a collection that feels
              intimate, intentional, and unmistakably international.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl mx-auto">
            {[
              { k: "12", v: "Master Perfumers" },
              { k: "38", v: "Sourcing Origins" },
              { k: "2014", v: "Founded" },
            ].map((s) => (
              <div key={s.v} className="border-l border-gold/40 pl-4 text-left">
                <p className="font-serif text-3xl text-gold">{s.k}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  { icon: Globe, title: "Global inspiration", text: "Compositions drawn from cities, seasons, and stories around the world." },
  { icon: Crown, title: "Premium craftsmanship", text: "Small-batch production with master perfumers from Grasse to Dubai." },
  { icon: Gem, title: "Luxury ingredients", text: "Sustainably sourced oud, rare florals, and precious resins." },
  { icon: Sparkles, title: "Distinctive identity", text: "Each scent built to be unmistakable, never trend-driven." },
  { icon: Feather, title: "Timeless elegance", text: "Modern olfactive architecture rooted in classical perfumery." },
];

export function WhyBasra() {
  return (
    <section className="relative py-24 md:py-32 grain border-t border-white/5">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Why BASRA</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl max-w-xl">
              The principles behind every flacon.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background p-8 hover:bg-white/[0.03] transition group">
              <Icon className="size-6 text-gold" />
              <h3 className="mt-6 font-serif text-xl">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "BASRA captures something rare — fragrances that feel personal, almost like a memory you didn't know you had.",
    author: "Vogue Arabia",
  },
  {
    quote:
      "An exquisitely modern niche house. The compositions are layered, refined and utterly distinctive.",
    author: "Robb Report",
  },
  {
    quote:
      "Ombre Nomade has become my signature. The depth and warmth are unlike anything else in my collection.",
    author: "L. Marchetti, Milan",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <section className="relative py-24 md:py-32 grain border-t border-white/5">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.35em] text-gold">In Praise</p>
        <blockquote
          key={i}
          className="mt-8 font-serif italic text-2xl md:text-4xl leading-[1.25] fade-in"
        >
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">— {t.author}</p>
        <div className="mt-10 flex items-center justify-center gap-3">
          {TESTIMONIALS.map((_, j) => (
            <button
              key={j}
              aria-label={`Testimonial ${j + 1}`}
              onClick={() => setI(j)}
              className={cn(
                "h-[2px] transition-all",
                i === j ? "w-10 bg-gold" : "w-6 bg-white/20 hover:bg-white/50",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="relative py-24 md:py-32 grain border-t border-white/5 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(212,175,122,0.25), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.35em] text-gold">Newsletter</p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
          Join the BASRA Fragrance Journal
        </h2>
        <p className="mt-5 text-muted-foreground">
          Private launches, perfumer interviews and the occasional gift from our boutique.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setSent(true);
          }}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            aria-label="Email address"
            className="flex-1 px-5 py-4 bg-transparent border border-white/20 focus:border-gold outline-none text-sm placeholder:text-muted-foreground transition"
          />
          <button
            type="submit"
            className="px-6 py-4 bg-gold text-black text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#e6c389] transition"
          >
            {sent ? "Subscribed" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  const cols: { title: string; items: string[] }[] = [
    { title: "Maison", items: ["About BASRA", "Our Perfumers", "Sustainability", "Press"] },
    { title: "Client Services", items: ["Contact", "Boutique Locator", "Shipping", "Returns"] },
    { title: "Legal", items: ["Privacy Policy", "Terms & Conditions", "Cookies"] },
    { title: "Follow", items: ["Instagram", "Pinterest", "YouTube", "TikTok"] },
  ];
  return (
    <footer className="relative grain border-t border-white/10 pt-20 pb-10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <p className="text-3xl leading-none">
              <span className="font-radley text-gold">B</span>
              <span className="font-cmu">asra</span>
            </p>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              A modern luxury fragrance house. Crafted from global artistry, designed for those
              who choose to leave a memorable trail.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-[11px] uppercase tracking-[0.25em] text-gold/80">{c.title}</p>
              <ul className="mt-5 space-y-3">
                {c.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-foreground/80 hover:text-gold transition"
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} BASRA Parfums. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">International — English</p>
        </div>
      </div>
    </footer>
  );
}