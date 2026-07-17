"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORIES } from "../products/data/categories";

interface PartsFilterProps {
  onSearch: (query: string) => void;
  onBrandChange: (brand: string) => void;
  onCategoryChange: (category: string) => void;
}

export default function PartsFilter({
  onSearch,
  onBrandChange,
  onCategoryChange,
}: PartsFilterProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [category, setCategory] = React.useState<string | undefined>("all");

  const categoryItems = [
    { label: "همه دسته‌ها", value: "all" },
    ...CATEGORIES.map((item) => ({
      label: item.label,
      value: item.slug,
    })),
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleCategoryChange = (value: string) => {
    const nextValue = value ?? "all";
    setCategory(nextValue);
    onCategoryChange(nextValue);
  };

  return (
    <section className="bg-[#F5F5F5] py-10 md:py-16" dir="rtl">
      <div className="2xl:container 2xl:mx-auto px-5 md:px-10">
        <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="جستجوی قطعات..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="h-14 rounded-xl border-2 border-gray-200 pl-4 pr-12 text-base focus-visible:ring-0"
              />
            </div>
          </div>

          <div className="w-40">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                دسته‌بندی قطعه
              </label>

              <Select value={category} onValueChange={handleCategoryChange}>
                <SelectTrigger
                  dir="rtl"
                  className="h-12 w-full rounded-xl border-2 border-gray-200 text-base"
                >
                  <SelectValue placeholder="همه دسته‌ها" />
                </SelectTrigger>

                <SelectContent dir="rtl" className="bg-white w-full max-h-20">
                  <SelectGroup>
                    {categoryItems.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
