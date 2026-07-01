"use client";

import Image from "next/image";

export default function PartsHero() {
  return (
    <section className="relative overflow-hidden mb-7">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bgMain.jpg"
          alt="قطعات بلدوزر"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#03071E]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 2xl:container 2xl:mx-auto px-5 md:px-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            قطعات اصلی بلدوزر
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            بهترین و با کیفیت‌ترین قطعات یدکی بلدوزر را از ما بخواهید. تمامی
            قطعات با گارانتی اصالت و کیفیت عرضه می‌شوند.
          </p>
        </div>
      </div>

      {/* Separator SVG */}
      <div className="relative z-20 mt-10">
        <svg
          className="w-full h-[100px]"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1"
          />
        </svg>
      </div>
    </section>
  );
}
