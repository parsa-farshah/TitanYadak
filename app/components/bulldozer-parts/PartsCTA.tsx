"use client";

import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function PartsCTA() {
  return (
    <section className="relative min-h-[400px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bgMain.jpg"
          alt="تماس با ما"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03071E]/95 to-[#03071E]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 2xl:container 2xl:mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            قطعه مورد نظر خود را پیدا نکردید؟
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
            تیم ما آماده است تا بهترین قطعات را برای بلدوزر شما پیدا کند. همین
            الان با ما تماس بگیرید و از مشاوره رایگان بهره‌مند شوید.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Phone Button */}
            <button className="group relative bg-primary hover:bg-secondary text-[#03071E] px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl min-w-[200px]">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                تماس تلفنی
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* WhatsApp Button */}
            <button className="group relative bg-white hover:bg-primary text-[#03071E] px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl min-w-[200px]">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                مشاوره آنلاین
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                +500
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                نوع قطعه در انبار
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                24/7
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                پشتیبانی آنلاین
              </p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                100%
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                گارانتی اصالت
              </p>
            </div>
          </div>
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
