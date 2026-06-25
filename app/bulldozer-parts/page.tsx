"use client";

import { useState } from "react";
import PartsHero from "../components/bulldozer-parts/PartsHero";
import PartsFilter from "../components/bulldozer-parts/PartsFilter";
import PartsGrid from "../components/bulldozer-parts/PartsGrid";
import PartsCTA from "../components/bulldozer-parts/PartsCTA";
import Footer from "../components/Footer";
import NavigationAndLogo from "../components/NavigationAndLogo";

export default function BulldozerPartsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  return (
    <main className="min-h-screen">
      <NavigationAndLogo currentPage="/products" />
      <PartsHero />
      <PartsFilter
        onSearch={setSearchQuery}
        onBrandChange={setBrandFilter}
        onCategoryChange={setCategoryFilter}
      />
      <PartsGrid
        searchQuery={searchQuery}
        brandFilter={brandFilter}
        categoryFilter={categoryFilter}
      />
      <PartsCTA />
      <Footer />
    </main>
  );
}
