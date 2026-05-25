import imagination from "@/assets/imagination.png";
import ombre from "@/assets/ombre-nomade.png";
import pacific from "@/assets/pacific-chill.png";

export type Fragrance = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  story: string;
  notes: string[];
  image: string;
  accent: string; // hex
  background: string; // css gradient
  ambient: string; // glow color
};

export const FRAGRANCES: Fragrance[] = [
  {
    id: "imagination",
    name: "IMAGINATION",
    tagline: "Creative freedom · Modern luxury",
    description:
      "A luminous composition that drifts between citrus and warm spice, evoking boundless creative skies and the quiet poetry of light.",
    story:
      "Crafted around radiant bergamot, black tea and cedarwood — a fragrance of weightless sophistication.",
    notes: ["Calabrian Bergamot", "Black Tea", "Cedarwood"],
    image: imagination,
    accent: "#9ec9d6",
    background:
      "radial-gradient(120% 80% at 70% 30%, #2a4a5e 0%, #16242f 40%, #0a1218 75%, #06090d 100%)",
    ambient: "rgba(158, 201, 214, 0.55)",
  },
  {
    id: "ombre-nomade",
    name: "OMBRE NOMADE",
    tagline: "Exotic mystery · Arabian luxury",
    description:
      "An opulent oud composition wrapped in rose and raspberry — the warmth of desert dusk and gilded silk.",
    story:
      "Built on rare oud, smoked benzoin and dark amber for a deeply sensual signature.",
    notes: ["Oud", "Raspberry", "Amber"],
    image: ombre,
    accent: "#c9923a",
    background:
      "radial-gradient(120% 80% at 70% 30%, #6a3416 0%, #3a1a0a 40%, #1a0c06 75%, #0a0503 100%)",
    ambient: "rgba(201, 146, 58, 0.55)",
  },
  {
    id: "pacific-chill",
    name: "PACIFIC CHILL",
    tagline: "Ocean freshness · Coastal luxury",
    description:
      "A crystalline breeze of mint, eucalyptus and lemon over salt-touched cedar. The cool clarity of the open sea at dawn.",
    story:
      "An invigorating, minimalist composition with cool aromatic notes and a silken musk base.",
    notes: ["Mint", "Eucalyptus", "Lemon"],
    image: pacific,
    accent: "#5fd2c7",
    background:
      "radial-gradient(120% 80% at 70% 30%, #134a4a 0%, #0a2b2f 40%, #061518 75%, #03090b 100%)",
    ambient: "rgba(95, 210, 199, 0.55)",
  },
];