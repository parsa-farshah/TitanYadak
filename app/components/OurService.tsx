import {
  ArrowLeftCircleIcon,
  BatteryChargingIcon,
  CogIcon,
  ScanSearchIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  ToggleLeftIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const services = [
  {
    title: "تأمین استارت و دینام",
    description:
      "ارائه انواع استارت و دینام اصلی برای ماشین‌آلات راهسازی با تضمین کیفیت و سازگاری فنی.",
    icon: BatteryChargingIcon,
  },
  {
    title: "تأمین سنسور و سوئیچ",
    description:
      "عرضه انواع سنسور، فشنگی و سوئیچ‌های برقی مورد استفاده در سیستم‌های کنترلی ماشین‌آلات سنگین.",
    icon: ToggleLeftIcon,
  },
  {
    title: "شیربرقی و سلونوئید",
    description:
      "تأمین انواع شیربرقی خاموش‌کن و سلونوئیدهای باکیفیت برای عملکرد دقیق سیستم سوخت و برق.",
    icon: CogIcon,
  },
  {
    title: "عیب‌یابی و مشاوره فنی",
    description:
      "راهنمایی تخصصی برای انتخاب صحیح قطعات برقی متناسب با مدل و نیاز ماشین‌آلات شما.",
    icon: ScanSearchIcon,
  },
  {
    title: "تأمین برندهای معتبر",
    description:
      "ارائه قطعات برقی از برندهای شناخته‌شده و باکیفیت برای افزایش دوام و اطمینان در عملکرد دستگاه.",
    icon: ShieldCheckIcon,
  },
  {
    title: "پشتیبانی برای خرید مطمئن",
    description:
      "همراهی کامل از زمان انتخاب تا خرید قطعه، برای تجربه‌ای مطمئن، سریع و تخصصی در تأمین نیاز شما.",
    icon: ShoppingCartIcon,
  },
];

function OurService() {
  return (
    <div className="w-full h-fit flex flex-col gap-y-10 items-center bg-[#F5F5F5] relative pb-20 mt-20 md:mt-36">
      <div className="absolute top-0 right-0 z-10 w-full scale-y-[-1]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-full bg-white"
        >
          <path fill="#F5F5F5" d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      <div className="2xl:container 2xl:mx-auto">
        <section className="px-5 flex flex-col gap-y-10 lg:gap-y-14">
          <div className="flex flex-col gap-y-7 lg:flex-row lg:justify-between relative z-20">
            <h2 className="text-[#252525] text-[28px] font-black md:text-4xl lg:text-6xl lg:leading-20 lg:w-[49%]">
              خدمات <span className="text-primary">تخصصی</span> ما در حوزه{" "}
              <span className="text-primary">قطعات برقی</span> ماشین‌آلات
            </h2>

            <div className="flex flex-col gap-y-7 lg:w-[49%]">
              <p className="text-[#252525] text-sm leading-7 md:text-[16px] md:leading-8 lg:pt-2">
                در تیتان یدک، خدمات ما تنها به فروش قطعه محدود نمی‌شود. ما با
                تکیه بر تجربه چند دهه فعالیت، در زمینه تأمین قطعات برقی اصلی،
                مشاوره فنی، شناسایی دقیق قطعات مورد نیاز و پشتیبانی برای
                ماشین‌آلات راهسازی و معدنی در کنار مشتریان خود هستیم.
              </p>

              <section className="flex items-center gap-2 group">
                <Link href="/aboutus" className="text-black text-sm font-bold cursor-pointer group-hover:text-secondary duration-500">
                  بیشتر بدانید
                </Link>
                <ArrowLeftCircleIcon
                  className="text-black group-hover:text-secondary duration-500"
                  width={18}
                  height={18}
                />
              </section>
            </div>
          </div>

          <section className="w-full flex flex-wrap justify-between gap-y-10">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="p-[30px] bg-[#ebebeb] relative w-full h-fit overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-bottom-10 md:before:-left-10 before:bg-[#F5F5F5] before:absolute before:-left-5 before:-bottom-5 before:-rotate-45 flex flex-col gap-y-5 md:w-[48%] lg:w-[31%] duration-500"
                >
                  <div className="flex flex-col gap-y-9">
                    <div className="flex gap-5 items-center">
                      <div className="relative w-[74px] h-fit bg-primary p-5 overflow-hidden flex justify-center items-center duration-500 before:content-[''] before:w-10 before:h-10 md:before:w-10 md:before:h-10 before:bg-[#EBEBEB] before:absolute before:-left-6 before:-bottom-6 before:-rotate-45 after:content-[''] after:w-10 after:h-10 md:after:w-10 md:after:h-10 after:bg-[#EBEBEB] after:absolute after:-right-6 after:-top-6 after:-rotate-45">
                        <Icon className="text-white" size={28} strokeWidth={2.2} />
                      </div>

                      <h3 className="text-[#252525] text-xl font-black">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-[#5a5a5a]">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </section>
        </section>
      </div>
    </div>
  );
}

export default OurService;
