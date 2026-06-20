import { ArrowLeftCircleIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <div className="bg-[#03071E] relative">
      {/* shape background */}
      <div className="absolute top-0 left-0 w-full h-[100px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-full fill-[#03071E] bg-[#f5f5f5]"
        >
          <path d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1" />
        </svg>
      </div>
      <div className=" w-full overflow-hidden 2xl:container 2xl:mx-auto">
        {/* content */}
        <section className="w-full h-fit bg-[#03071E] px-5 pt-30 pb-20 flex flex-col md:gap-y-16 gap-y-10 lg:flex-row lg:justify-between lg:items-center">
          {/* ------------------ image -------------------------- */}
          <div className="relative bg-primary p-5 lg:w-[48%] h-[305px] md:h-[440px] overflow-visible mt-20 lg:mt-0 lg:w-[47%]">
            {/* decorative shapes */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-top-10 md:before:-left-10 before:bg-[#03071E] before:absolute before:-left-5 before:-top-5 before:rotate-45 duration-500 cursor-pointer flex flex-col gap-y-5 md:w-[30%] after:content-[] after:w-10 after:h-10 md:after:w-20 md:after:h-20 md:after:-bottom-10 md:after:-right-10 after:bg-[#03071E] after:absolute after:-right-5 after:-bottom-5 after:rotate-45"></div>
            </div>

            {/* image */}
            <div className="absolute inset-0  scale-x-[-1]">
              <Image
                src="/images/HeaderExcavator.png"
                alt="Excavator"
                fill
                className="object-contain scale-115 sm:scale-125"
              />
            </div>
          </div>
          {/* text */}
          <div className="flex flex-col justify-between lg:w-[47%] gap-y-8">
            <p className="text-white text-4xl border-r-4 border-r-secondary pr-5 font-black leading-14 md:text-5xl md:leading-20 md:w-[65%]">
              لورم <span className="text-primary">ایپسوم</span> متن ساختگی با{" "}
              <span className="text-primary">تولید</span> سادگی
            </p>
            <p className="text-[#d3d3d3] text-sm md:text-[16px] lg:text-lg">
              لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با
              تولید سادگی لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن
              ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با تولید سادگی لورم
              ایپسوم متن ساختگی با تولید سادگی
            </p>
            {/* button */}
            <div>
              <button className="px-9 w-fit py-4 relative bg-secondary overflow-hidden before:content-[] before:w-10 before:h-10 before:bg-[#03071E] before:absolute before:-left-5 before:-bottom-5 before:rotate-45 group hover:bg-primary duration-500 cursor-pointer flex">
                <section className="flex items-center gap-2">
                  <span className="text-white text-sm md:text-lg font-bold group-hover:text-[#252525] duration-500">
                    بیشتر بدانیم
                  </span>
                  <ArrowLeftCircleIcon
                    className="text-white group-hover:text-[#252525] duration-500"
                    width={18}
                    height={18}
                  />
                </section>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
