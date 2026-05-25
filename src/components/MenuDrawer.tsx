import { X, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const SECTIONS: { heading?: string; items: string[] }[] = [
  { items: ["Gifts", "What's New"] },
  {
    heading: "The Maison",
    items: [
      "Women's Fashion",
      "Men's Fashion",
      "Bags",
      "Jewelry & Timepieces",
      "Kids & Baby",
      "Home",
      "Haute Couture",
    ],
  },
  { heading: "Discover", items: ["BASRA World & Fashion Shows", "Contact", "Find your closest boutique"] },
  { heading: "Categories", items: ["Fashion & Accessories", "Fragrance & Beauty"] },
];

export function MenuDrawer({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="glass grain w-full sm:max-w-md border-l border-white/10 p-0 overflow-y-auto"
      >
        <div className="flex items-center justify-between px-8 pt-8 pb-6">
          <SheetTitle className="font-serif text-2xl tracking-wide">
            B<span className="text-gold">asra</span>
          </SheetTitle>
          <button
            aria-label="Close menu"
            onClick={() => onOpenChange(false)}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition"
          >
            Close <X className="size-4" />
          </button>
        </div>
        <SheetDescription className="sr-only">Navigation menu</SheetDescription>

        <nav className="px-8 pb-12">
          {SECTIONS.map((section, i) => (
            <div key={i} className="py-4 border-t border-white/10 first:border-t-0">
              {section.heading && (
                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gold/80">
                  {section.heading}
                </p>
              )}
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center justify-between py-3 font-serif text-xl text-foreground/90 hover:text-gold transition-colors"
                    >
                      <span>{item}</span>
                      <ChevronRight className="size-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-8 pt-6 border-t border-white/10 space-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <p className="flex items-center justify-between">
              <span>Country / Region</span>
              <span className="text-foreground/80">International (EN)</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Accessibility</span>
              <span className="text-foreground/80">Better Contrast</span>
            </p>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}