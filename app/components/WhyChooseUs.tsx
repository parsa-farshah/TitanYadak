import {
  ArrowLeftCircleIcon,
  CheckCircle,
  CheckCircle2Icon,
} from "lucide-react";
import Image from "next/image";
import { BrandCarousel } from "./BrandsCarousel";

const WhyChooseUs = () => {
  return (
    <div className="py-30 px-5 flex flex-col gap-y-12 2xl:container 2xl:mx-auto">
      {/* text and paragraph */}
      <div className="flex flex-col gap-y-7 lg:flex-row lg:justify-between ">
        <h2 className="text-[#252525] text-[28px] font-black md:text-4xl lg:text-6xl lg:leading-20 lg:w-[49%]">
          چرا <span className="text-primary">تیتان یدک</span> انتخاب مطمئن{" "}
          <span className="text-primary">پروژه‌های</span> راهسازی است
        </h2>
        <div className="flex flex-col gap-y-7 lg:w-[49%]">
          <p className="text-[#252525] text-sm  leading-7 md:text-[16px] md:leading-8 lg:pt-2">
            تیتان یدک با تکیه بر تجربه، شناخت تخصصی بازار و تامین قطعات برقی
            ماشین‌آلات راهسازی، تلاش می‌کند نیاز فعالان این حوزه را با کیفیتی
            قابل اعتماد پاسخ دهد. ما با تمرکز بر اصالت کالا، مشاوره دقیق و
            پشتیبانی مناسب، همراهی مطمئن برای تامین قطعات مورد نیاز ماشین‌آلات
            سنگین شما هستیم.
          </p>
          <section className="flex items-center gap-2 group">
            <span className="text-black text-sm font-bold cursor-pointer group-hover:text-secondary duration-500">
              بیشتر بدانید
            </span>
            <ArrowLeftCircleIcon
              className="text-black group-hover:text-secondary duration-500"
              width={18}
              height={18}
            />
          </section>
        </div>
      </div>
      {/* card and image */}
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-10 w-full h-fit">
        {/* card */}
        <div className="!p-5 relative bg-primary overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-bottom-10 md:before:-left-10 before:bg-[#ffffff] before:absolute before:-left-5 before:-bottom-5 before:-rotate-45 duration-500 flex flex-col gap-y-5 md:flex-row md:gap-10 lg:flex-col lg:w-[35%] lg:h-[420px]">
          <p className="text-[#252525] text-lg md:w-[45%] lg:w-full">
            ما در تیتان یدک با تمرکز بر تامین قطعات برقی ماشین‌آلات راهسازی،
            سعی می‌کنیم محصولاتی قابل اعتماد، کاربردی و متناسب با نیاز واقعی
            مشتریان ارائه دهیم تا فرآیند نگهداری و بهره‌برداری دستگاه‌ها با
            اطمینان بیشتری انجام شود.
          </p>
          <ul className="flex flex-col gap-y-5">
            <li className="flex items-center gap-3 group">
              <CheckCircle2Icon
                className="text-[#252525] "
                width={30}
                height={30}
              />
              <span className="text-[#252525] text-lg">
                تامین تخصصی قطعات برقی ماشین‌آلات راهسازی
              </span>
            </li>
            <li className="flex items-center gap-3 group">
              <CheckCircle2Icon
                className="text-[#252525] "
                width={30}
                height={30}
              />
              <span className="text-[#252525] text-lg">
                ارائه محصولات با اصالت و کیفیت قابل اعتماد
              </span>
            </li>{" "}
            <li className="flex items-center gap-3 group">
              <CheckCircle2Icon
                className="text-[#252525] "
                width={30}
                height={30}
              />
              <span className="text-[#252525] text-lg">
                مشاوره برای انتخاب دقیق قطعه مورد نیاز
              </span>
            </li>{" "}
            <li className="flex items-center gap-3 group">
              <CheckCircle2Icon
                className="text-[#252525] "
                width={30}
                height={30}
              />
              <span className="text-[#252525] text-lg">
                همراهی مطمئن برای تامین نیاز پروژه‌های شما
              </span>
            </li>
          </ul>
        </div>
        {/* image */}
        <div className="relative w-full lg:w-[64%] h-fit bg-primary overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-bottom-10 md:before:-left-10 before:bg-[#ffffff] before:absolute before:-left-5 before:-bottom-5 before:-rotate-45 duration-500 flex flex-col gap-y-5">
          <figure className="relative w-full h-[400px] lg:h-[420px]">
            <Image
              src="/images/HeaderExcavator.png"
              alt="ماشین‌آلات راهسازی"
              fill
              objectFit="contain"
            />
          </figure>
        </div>
      </div>
      {/* brands */}
      <div
        className="relative w-full h-fit bg-primary overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-bottom-10 md:before:-left-10 before:bg-[#ffffff] before:absolute before:-left-5 before:-bottom-5 before:-rotate-45 duration-500 flex flex-col gap-y-5 p-8 lg:flex-row before:z-10 lg:items-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/bgMain.jpg')" }}
      >
        {/* text */}
        <h2 className="text-[#ffffff] text-[28px] font-black md:text-4xl relative z-10 md:leading-14">
          همکاری با <span className="text-primary">برندهای معتبر</span> برای
          تامین <span className="text-primary">قطعات</span> قابل اعتماد
        </h2>
        {/* logos Carousel */}
        <div className="w-full border-r-4 border-r-secondary relative z-10 h-fit">
          <BrandCarousel />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
