"use client";

import { useState } from "react";
import PartsHero from "../components/productsDetails/PartsHero";
import PartsFilter from "../components/productsDetails/PartsFilter";
import PartsGrid from "../components/productsDetails/PartsGrid";
import PartsCTA from "../components/productsDetails/PartsCTA";
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
        categoryFilter={categoryFilter}
      />
      <div className="mb-20">
        <PartsCTA />
      </div>
      <Footer />
    </main>
  );
}
