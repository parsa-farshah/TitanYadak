import { ArrowLeftCircleIcon, Phone } from "lucide-react";

export default function AboutCTA() {
  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center bg-fixed "
    >
      <div className="absolute inset-0 z-0"></div>

      <div className="relative z-10 2xl:container 2xl:mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-black mb-6">
          برای تأمین قطعات برقی با ما در ارتباط باشید
        </h2>
        <p className="text-lg md:text-xl text-black mb-8 max-w-2xl mx-auto">
          برای دریافت مشاوره تخصصی و استعلام قطعات برقی ماشین‌آلات راهسازی و
          معدنی، با تیتان یدک تماس بگیرید
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {/* left button */}
          <button className="px-9 py-4 relative bg-secondary overflow-hidden before:content-[] before:w-10 before:h-10 before:bg-white before:absolute before:-left-5 before:-bottom-5 before:rotate-45 group hover:bg-primary duration-500 cursor-pointer hidden lg:flex">
            <section className="flex items-center gap-2">
              <span className="text-black text-lg font-bold group-hover:text-black duration-500">
                تماس با ما
              </span>
              <Phone className="text-black" width={18} height={18} />
            </section>
          </button>
          <button className="px-9 py-4 relative bg-primary text-black overflow-hidden before:content-[] before:w-10 before:h-10 before:bg-white before:absolute before:-left-5 before:-bottom-5 before:rotate-45 group hover:bg-secondary duration-500 cursor-pointer hidden lg:flex">
            <section className="flex items-center gap-2">
              <span className=" text-lg font-bold group-hover:text-black duration-500">
                دریافت مشاوره تخصصی
              </span>
            </section>
          </button>
        </div>
      </div>
    </section>
  );
}
