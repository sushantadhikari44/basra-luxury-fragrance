import { useEffect, useState } from "react";
import { Heart, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/hooks/useFavorites";

export function Header({
  onOpenMenu,
  onOpenFavorites,
}: {
  onOpenMenu: () => void;
  onOpenFavorites: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const { count } = useFavorites();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-500",
        scrolled ? "glass border-b border-white/10" : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-[1600px] grid grid-cols-3 items-center px-6 md:px-10 h-16 md:h-20">
        <div className="justify-self-start">
          <button
            onClick={onOpenMenu}
            aria-label="Open menu"
            className="inline-flex items-center justify-center size-10 rounded-full hover:bg-white/5 transition"
          >
            <MoreVertical className="size-5" />
          </button>
        </div>

        <a
          href="#"
          className="justify-self-center text-2xl md:text-3xl tracking-wide select-none leading-none"
        >
          <span className="font-radley text-gold">B</span>
          <span className="font-cmu">asra</span>
        </a>

        <div className="justify-self-end">
          <button
            onClick={onOpenFavorites}
            aria-label={`Open favorites (${count})`}
            className="relative inline-flex items-center justify-center size-10 rounded-full hover:bg-white/5 transition"
          >
            <Heart className="size-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 grid place-items-center min-w-[18px] h-[18px] px-1 rounded-full bg-gold text-[10px] font-semibold text-black">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}