import { X, Trash2, Heart } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useFavorites } from "@/hooks/useFavorites";
import { FRAGRANCES } from "@/data/fragrances";

export function FavoritesPanel({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { ids, remove, clear } = useFavorites();
  const items = FRAGRANCES.filter((f) => ids.includes(f.id));

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="glass grain w-full sm:max-w-md border-l border-white/10 p-0"
      >
        <div className="flex items-center justify-between px-8 pt-8 pb-6">
          <SheetTitle className="font-serif text-2xl">Your Favorites</SheetTitle>
          <button
            aria-label="Close favorites"
            onClick={() => onOpenChange(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>
        <SheetDescription className="sr-only">Saved fragrances</SheetDescription>

        <div className="px-8 pb-8">
          {items.length === 0 ? (
            <div className="py-20 text-center">
              <Heart className="mx-auto size-10 text-gold/60" />
              <p className="mt-4 text-sm text-muted-foreground">
                No favorites yet. Tap the heart on a fragrance to save it here.
              </p>
            </div>
          ) : (
            <>
              <ul className="space-y-4">
                {items.map((f) => (
                  <li
                    key={f.id}
                    className="flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-white/[0.02]"
                  >
                    <div
                      className="size-16 rounded-md flex items-center justify-center"
                      style={{ background: f.background }}
                    >
                      <img src={f.image} alt={f.name} className="h-14 w-auto object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-base">{f.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{f.tagline}</p>
                    </div>
                    <button
                      aria-label={`Remove ${f.name}`}
                      onClick={() => remove(f.id)}
                      className="text-muted-foreground hover:text-destructive transition"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={clear}
                className="mt-6 w-full py-3 text-xs uppercase tracking-[0.25em] border border-white/15 hover:border-gold hover:text-gold transition"
              >
                Clear all favorites
              </button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}