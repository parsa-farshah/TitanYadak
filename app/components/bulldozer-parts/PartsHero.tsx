"use client";

import Image from "next/image";

export default function PartsHero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
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
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto"
        >
          <path
            fill="#F5F5F5"
            fillOpacity="1"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
