import { ArrowLeftCircleIcon, Phone } from "lucide-react";

// components/about/AboutCTA.tsx
export default function AboutCTA() {
  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/bgMain.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#03071E]/80 z-0"></div>

      <div className="relative z-10 2xl:container 2xl:mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
          آماده همکاری با ما هستید؟
        </h2>
        <p className="text-lg md:text-xl text-[#d3d3d3] mb-8 max-w-2xl mx-auto">
          برای دریافت مشاوره رایگان و بررسی نیازهای خود با ما تماس بگیرید
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {/* left button */}
          <button className="px-9 py-4 relative bg-primary overflow-hidden before:content-[] before:w-10 before:h-10 before:bg-[#03071E] before:absolute before:-left-5 before:-bottom-5 before:rotate-45 group hover:bg-primary duration-500 cursor-pointer hidden lg:flex">
            <section className="flex items-center gap-2">
              <span className="text-white text-lg font-bold group-hover:text-black duration-500">
                تماس
              </span>
              <Phone className="text-white" width={18} height={18} />
            </section>
          </button>
          <button className="px-9 py-4 relative bg-white text-black overflow-hidden before:content-[] before:w-10 before:h-10 before:bg-[#03071E] before:absolute before:-left-5 before:-bottom-5 before:rotate-45 group hover:bg-primary duration-500 cursor-pointer hidden lg:flex">
            <section className="flex items-center gap-2">
              <span className=" text-lg font-bold group-hover:text-black duration-500">
                درخواست مشاوره
              </span>
            </section>
          </button>
        </div>
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
