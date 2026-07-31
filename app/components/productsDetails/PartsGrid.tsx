"use client";

import { useEffect, useMemo, useState } from "react";
import PartCard from "./PartCard";
import { products } from "../products/data/products";
import { CATEGORIES } from "../products/data/categories";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PartsGridProps {
  searchQuery: string;
  categoryFilter: string;
}

const ITEMS_PER_PAGE = 9;

export default function PartsGrid({
  searchQuery,
  categoryFilter,
}: PartsGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = Math.max(
    1,
    Math.ceil(filteredParts.length / ITEMS_PER_PAGE),
  );

  // هر وقت جستجو یا فیلتر تغییر کرد، برگرد به صفحه اول
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, categoryFilter]);

  // اگه صفحه فعلی از تعداد کل صفحات بیشتر شد (مثلا بعد فیلتر شدن) اصلاحش کن
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedParts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredParts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredParts, currentPage]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // اسکرول نرم به بالای بخش نتایج
    document
      .getElementById("parts-results")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const pageNumbers = useMemo(() => {
    const pages: (number | "dots")[] = [];
    const delta = 1;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "dots") {
        pages.push("dots");
      }
    }

    return pages;
  }, [totalPages, currentPage]);

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

      <section
        id="parts-results"
        className="bg-[#F5F5F5] py-16 md:py-24"
        dir="rtl"
      >
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
            <>
              <div className="grid  grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                {paginatedParts.map((part) => (
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

              {totalPages > 1 && (
                <nav
                  aria-label="pagination"
                  className="mt-12 flex items-center justify-center gap-2"
                >
                  <button
                    type="button"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-600"
                    aria-label="صفحه قبل"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {pageNumbers.map((page, idx) =>
                    page === "dots" ? (
                      <span
                        key={`dots-${idx}`}
                        className="px-2 text-gray-400 select-none"
                      >
                        ...
                      </span>
                    ) : (
                      <button
                        key={page}
                        type="button"
                        onClick={() => goToPage(page)}
                        className={`flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-medium transition ${
                          page === currentPage
                            ? "border-primary bg-primary text-white shadow-md shadow-primary/30"
                            : "border-gray-200 bg-white text-gray-600 hover:border-primary hover:text-primary"
                        }`}
                      >
                        {page}
                      </button>
                    ),
                  )}

                  <button
                    type="button"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-600"
                    aria-label="صفحه بعد"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                </nav>
              )}
            </>
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