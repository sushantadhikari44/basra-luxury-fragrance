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
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
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
    topNotes: ["Calabrian Bergamot", "Juniper", "Pink Pepper"],
    heartNotes: ["Black Tea", "Iris", "Jasmine Petals"],
    baseNotes: ["Cedarwood", "White Musk", "Amber"],
    image: imagination,
    accent: "#9ec9d6",
    background:
      "radial-gradient(80% 60% at 50% 35%, #3a6a82 0%, #1a3142 35%, #0a151c 70%, #04080b 100%)",
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
    topNotes: ["Raspberry", "Bergamot", "Saffron"],
    heartNotes: ["Rose Absolute", "Oud", "Geranium"],
    baseNotes: ["Smoked Benzoin", "Dark Amber", "Patchouli"],
    image: ombre,
    accent: "#c9923a",
    background:
      "radial-gradient(80% 60% at 50% 35%, #7a3a18 0%, #3e1b0a 35%, #170a05 70%, #070302 100%)",
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
    topNotes: ["Sicilian Lemon", "Mint", "Eucalyptus"],
    heartNotes: ["Marine Accord", "Sea Salt", "Violet Leaf"],
    baseNotes: ["Cedarwood", "White Musk", "Driftwood"],
    image: pacific,
    accent: "#5fd2c7",
    background:
      "radial-gradient(80% 60% at 50% 35%, #186666 0%, #0a3034 35%, #061518 70%, #03090b 100%)",
    ambient: "rgba(95, 210, 199, 0.55)",
  },
];