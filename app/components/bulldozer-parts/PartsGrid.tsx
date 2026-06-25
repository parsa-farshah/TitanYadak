"use client";

import { useMemo } from "react";
import PartCard from "./PartCard";

// Mock Data - 15 محصول
const PARTS_DATA = [
  {
    id: 1,
    name: "فیلتر روغن موتور دیزل",
    code: "CAT-1R-0750",
    price: "2,500,000 تومان",
    image: "/images/HeaderExcavator.png",
    category: "موتور",
    brand: "کاترپیلار",
  },
  {
    id: 2,
    name: "پمپ هیدرولیک فشار قوی",
    code: "KOM-708-2L-06170",
    price: "45,000,000 تومان",
    image: "/images/HeaderExcavator.png",
    category: "هیدرولیک",
    brand: "کوماتسو",
  },
  {
    id: 3,
    name: "زنجیر کامل زیربند",
    code: "LIE-9274260",
    price: "120,000,000 تومان",
    image: "/images/HeaderExcavator.png",
    category: "زیربند",
    brand: "لیبهر",
  },
  {
    id: 4,
    name: "سیستم خنک‌کننده موتور",
    code: "VOL-21404502",
    price: "18,500,000 تومان",
    image: "/images/HeaderExcavator.png",
    category: "موتور",
    brand: "ولوو",
  },
  {
    id: 5,
    name: "گیربکس اتوماتیک",
    code: "CAT-2384433",
    price: "95,000,000 تومان",
    image: "/images/HeaderExcavator.png",
    category: "گیربکس",
    brand: "کاترپیلار",
  },
  {
    id: 6,
    name: "سیستم روشنایی LED",
    code: "KOM-421-06-31230",
    price: "8,200,000 تومان",
    image: "/images/HeaderExcavator.png",
    category: "برقی",
    brand: "کوماتسو",
  },
  {
    id: 7,
    name: "شیر کنترل هیدرولیک",
    code: "LIE-5802370",
    price: "32,000,000 تومان",
    image: "/images/HeaderExcavator.png",
    category: "هیدرولیک",
    brand: "لیبهر",
  },
  {
    id: 8,
    name: "فیلتر هوای کابین",
    code: "VOL-14556011",
    price: "1,800,000 تومان",
    image: "/images/HeaderExcavator.png",
    category: "موتور",
    brand: "ولوو",
  },
  {
    id: 9,
    name: "رولیک زیربند تقویتی",
    code: "CAT-9W-2382",
    price: "28,000,000 تومان",
    image: "/images/HeaderExcavator.png",
    category: "زیربند",
    brand: "کاترپیلار",
  },
  {
    id: 10,
    name: "سیستم کنترل الکترونیکی",
    code: "KOM-7835-26-1003",
    price: "62,000,000 تومان",
    image: "/images/HeaderExcavator.png",
    category: "برقی",
    brand: "کوماتسو",
  },
  {
    id: 11,
    name: "پمپ سوخت تزریق مستقیم",
    code: "LIE-10291673",
    price: "38,500,000 تومان",
    image: "/images/HeaderExcavator.png",
    category: "موتور",
    brand: "لیبهر",
  },
  {
    id: 12,
    name: "سیلندر هیدرولیک دوبل",
    code: "VOL-14589132",
    price: "52,000,000 تومان",
    image: "/images/HeaderExcavator.png",
    category: "هیدرولیک",
    brand: "ولوو",
  },
  {
    id: 13,
    name: "دیسک کلاچ سنگین",
    code: "CAT-3T-3824",
    price: "24,500,000 تومان",
    image: "/images/HeaderExcavator.png",
    category: "گیربکس",
    brand: "کاترپیلار",
  },
  {
    id: 14,
    name: "تیغه بلدوزر فولادی",
    code: "KOM-195-71-21340",
    price: "85,000,000 تومان",
    image: "/images/HeaderExcavator.png",
    category: "زیربند",
    brand: "کوماتسو",
  },
  {
    id: 15,
    name: "باتری صنعتی 24 ولت",
    code: "VOL-3981134",
    price: "6,800,000 تومان",
    image: "/images/HeaderExcavator.png",
    category: "برقی",
    brand: "ولوو",
  },
];

interface PartsGridProps {
  searchQuery: string;
  brandFilter: string;
  categoryFilter: string;
}

export default function PartsGrid({
  searchQuery,
  brandFilter,
  categoryFilter,
}: PartsGridProps) {
  const filteredParts = useMemo(() => {
    return PARTS_DATA.filter((part) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        part.code.toLowerCase().includes(searchQuery.toLowerCase());

      // Brand filter
      const matchesBrand =
        !brandFilter ||
        brandFilter === "all" ||
        part.brand === brandFilter ||
        (brandFilter === "caterpillar" && part.brand === "کاترپیلار") ||
        (brandFilter === "komatsu" && part.brand === "کوماتسو") ||
        (brandFilter === "liebherr" && part.brand === "لیبهر") ||
        (brandFilter === "volvo" && part.brand === "ولوو");

      // Category filter
      const matchesCategory =
        !categoryFilter ||
        categoryFilter === "all" ||
        part.category === categoryFilter ||
        (categoryFilter === "engine" && part.category === "موتور") ||
        (categoryFilter === "hydraulic" && part.category === "هیدرولیک") ||
        (categoryFilter === "transmission" && part.category === "گیربکس") ||
        (categoryFilter === "undercarriage" && part.category === "زیربند") ||
        (categoryFilter === "electrical" && part.category === "برقی");

      return matchesSearch && matchesBrand && matchesCategory;
    });
  }, [searchQuery, brandFilter, categoryFilter]);

  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24">
      <div className="2xl:container 2xl:mx-auto px-5 md:px-10">
        {/* Results Count */}
        <div className="mb-8">
          <p className="text-lg text-gray-700">
            <span className="font-bold text-primary">
              {filteredParts.length}
            </span>{" "}
            قطعه یافت شد
          </p>
        </div>

        {/* Grid */}
        {filteredParts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredParts.map((part) => (
              <PartCard key={part.id} {...part} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 font-medium">
              قطعه‌ای با این مشخصات یافت نشد
            </p>
            <p className="text-gray-400 mt-4">لطفاً فیلترها را تغییر دهید</p>
          </div>
        )}
      </div>
    </section>
  );
}
