"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <section className="bg-[#F5F5F5] py-10 md:py-16">
      <div className="2xl:container 2xl:mx-auto px-5 md:px-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="جستجوی قطعات..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pr-12 pl-4 py-6 text-lg border-2 border-gray-200 focus:border-primary rounded-xl"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                برند بلدوزر
              </label>
              <Select onValueChange={onBrandChange}>
                <SelectTrigger className="w-full py-6 text-base border-2 border-gray-200 rounded-xl">
                  <SelectValue placeholder="همه برندها" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">همه برندها</SelectItem>
                  <SelectItem value="caterpillar">کاترپیلار</SelectItem>
                  <SelectItem value="komatsu">کوماتسو</SelectItem>
                  <SelectItem value="liebherr">لیبهر</SelectItem>
                  <SelectItem value="volvo">ولوو</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                دسته‌بندی قطعه
              </label>
              <Select onValueChange={onCategoryChange}>
                <SelectTrigger className="w-full py-6 text-base border-2 border-gray-200 rounded-xl">
                  <SelectValue placeholder="همه دسته‌ها" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">همه دسته‌ها</SelectItem>
                  <SelectItem value="engine">موتور</SelectItem>
                  <SelectItem value="hydraulic">هیدرولیک</SelectItem>
                  <SelectItem value="transmission">گیربکس</SelectItem>
                  <SelectItem value="undercarriage">زیربند</SelectItem>
                  <SelectItem value="electrical">برقی</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                مرتب‌سازی
              </label>
              <Select defaultValue="newest">
                <SelectTrigger className="w-full py-6 text-base border-2 border-gray-200 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">جدیدترین</SelectItem>
                  <SelectItem value="price-low">قیمت: کم به زیاد</SelectItem>
                  <SelectItem value="price-high">قیمت: زیاد به کم</SelectItem>
                  <SelectItem value="popular">محبوب‌ترین</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
