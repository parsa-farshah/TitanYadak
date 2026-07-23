"use client";

import Image from "next/image";
import { ArrowLeftCircle } from "lucide-react";

interface PartCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

export default function PartCard({
  name,
  price,
  image,
  category,
}: PartCardProps) {
  return (
    <div className="group relative bg-white  overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-[100px] -z-0"></div>

      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="mb-2">
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 ">
            {category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-[#03071E] mb-2 line-clamp-2 min-h-[3.5rem]">
          {name}
        </h3>

        {/* CTA Button */}
        <button className="relative w-full bg-[#03071E] text-white py-3 font-medium overflow-hidden group/btn transition-all duration-300 hover:bg-primary hover:text-[#03071E]">
          <span className="relative z-10 flex items-center justify-center gap-2">
            موجود
          </span>
        </button>
      </div>
    </div>
  );
}
