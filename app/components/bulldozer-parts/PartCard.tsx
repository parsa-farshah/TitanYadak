"use client";

import Image from "next/image";
import { ArrowLeftCircle } from "lucide-react";

interface PartCardProps {
  id: number;
  name: string;
  code: string;
  price: string;
  image: string;
  category: string;
  brand: string;
}

export default function PartCard({
  name,
  code,
  price,
  image,
  category,
  brand,
}: PartCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-[100px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-[100px] -z-0"></div>

      {/* Image Container */}
      <div className="relative h-56 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-primary text-[#03071E] px-3 py-1 rounded-full text-xs font-bold">
          {brand}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="mb-2">
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#03071E] mb-2 line-clamp-2 min-h-[3.5rem]">
          {name}
        </h3>

        <p className="text-sm text-gray-500 mb-4">کد قطعه: {code}</p>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">قیمت:</p>
            <p className="text-2xl font-bold text-secondary">{price}</p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="relative w-full bg-[#03071E] text-white py-3 rounded-xl font-medium overflow-hidden group/btn transition-all duration-300 hover:bg-primary hover:text-[#03071E]">
          <span className="relative z-10 flex items-center justify-center gap-2">
            مشاهده جزئیات
            <ArrowLeftCircle className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
}
