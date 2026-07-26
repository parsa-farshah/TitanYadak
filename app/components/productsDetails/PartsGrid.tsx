"use client";

import { useMemo } from "react";
import PartCard from "./PartCard";
import { products } from "../products/data/products";
import { CATEGORIES } from "../products/data/categories";
import Image from "next/image";
import Link from "next/link";

interface PartsGridProps {
  searchQuery: string;
  categoryFilter: string;
}

export default function PartsGrid({
  searchQuery,
  categoryFilter,
}: PartsGridProps) {
  const filteredParts = useMemo(() => {
    return products.filter((part) => {
      const categoryLabel =
        CATEGORIES.find((category) => category.slug === part.category)?.label ??
        "";

      const matchesSearch =
        searchQuery.trim() === "" ||
        part.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        part.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
        categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        !categoryFilter ||
        categoryFilter === "all" ||
        part.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, categoryFilter]);

  return (
    <>
      <section className="bg-white py-10" dir="rtl">
        <div className="2xl:container 2xl:mx-auto px-5 md:px-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            دسته‌بندی قطعات
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            {CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/productsPage/${category.slug}`}
                className={`overflow-hidden  border bg-white shadow-sm transition hover:shadow-md ${
                  categoryFilter === category.slug
                    ? "border-primary ring-2 ring-primary/20 shadow-xl shadow-primary/30"
                    : "border-gray-200"
                }`}
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={category.image}
                    alt={category.label}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                <div className="p-4 text-center">
                  <p className="text-sm font-bold text-gray-800 md:text-base">
                    {category.label}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 md:py-24" dir="rtl">
        <div className="2xl:container 2xl:mx-auto px-5 md:px-10">
          <div className="mb-8">
            <p className="text-lg text-gray-700">
              <span className="font-bold text-primary">
                {filteredParts.length}
              </span>{" "}
              قطعه یافت شد
            </p>
          </div>

          {filteredParts.length > 0 ? (
            <div className="grid  grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {filteredParts.map((part) => (
                <PartCard
                  id={part.id}
                  key={part.id}
                  name={part.title}
                  image={part.image}
                  category={
                    CATEGORIES.find(
                      (category) => category.slug === part.category,
                    )?.label ?? part.category
                  }
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-2xl font-medium text-gray-500">
                قطعه‌ای با این مشخصات یافت نشد
              </p>
              <p className="mt-4 text-gray-400">لطفا فیلترها را تغییر دهید</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
