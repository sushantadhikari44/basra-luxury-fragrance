import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { MenuDrawer } from "@/components/MenuDrawer";
import { FavoritesPanel } from "@/components/FavoritesPanel";
import { Hero } from "@/components/Hero";
import { Collection, About, WhyBasra, Testimonials, Newsletter, Footer } from "@/components/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [favOpen, setFavOpen] = useState(false);
  return (
    <main className="relative bg-background text-foreground">
      <Header onOpenMenu={() => setMenuOpen(true)} onOpenFavorites={() => setFavOpen(true)} />
      <MenuDrawer open={menuOpen} onOpenChange={setMenuOpen} />
      <FavoritesPanel open={favOpen} onOpenChange={setFavOpen} />
      <Hero />
      <Collection />
      <About />
      <WhyBasra />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
