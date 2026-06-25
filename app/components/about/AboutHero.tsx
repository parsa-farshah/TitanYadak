// components/about/AboutHero.tsx
import Image from "next/image";

export default function AboutHero() {
  return (
    <section
      className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/bgMain.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#03071E]/70 z-10" />

      {/* Content */}
      <div className="relative z-20 2xl:container 2xl:mx-auto px-5 text-center">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black mb-6">
          درباره ما
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          با بیش از ۲۰ سال تجربه در زمینه واردات و توزیع ماشین‌آلات سنگین، ما
          همواره در کنار شما هستیم
        </p>
      </div>

      {/* SVG Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          className="w-full h-[60px] md:h-[100px]"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#F5F5F5"
            d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1"
          />
        </svg>
      </div>
    </section>
  );
}
