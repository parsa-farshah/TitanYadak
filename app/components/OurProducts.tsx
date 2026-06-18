import { ArrowLeftCircleIcon, Star, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function OurProducts() {
  return (
    <div className="w-full h-fit flex flex-col gap-y-10 items-center  bg-[#F5F5F5] relative pb-20">
      {/* bg */}
      <div className="absolute top-0 right-0 z-10 w-full  scale-y-[-1]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-full bg-white"
        >
          <path fill="#F5F5F5" d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>
      {/* text */}
      <div className="w-full flex flex-col items-center gap-y-3 relative px-5">
        {/* end bg */}
        <h2 className="text-[#252525] text-[28px] text-center font-black md:text-4xl lg:text-6xl lg:leading-20 w-[80%] lg:w-[700px] relative z-10 md:leading-14 relative z-20">
          لورم <span className="text-primary">ایپسوم</span> متن ساختگی با{" "}
          <span className="text-primary">تولید</span> سادگی سادگی سادگی
        </h2>
        <p className="text-[#5a5a5a] text-sm  leading-7 md:text-[16px] lg:text-lg md:leading-8 lg:pt-2 w-[90%] text-center  lg:w-[60%]">
          لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با تولید
          سادگی لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با
          سادگی لورم ایپسوم متن ساختگی
        </p>
      </div>
      {/* cards */}
      <section className="w-full flex flex-wrap justify-between gap-y-10 px-5">
        {/* card 1 */}
        <div className="p-[30px] bg-[#ebebeb]  relative w-full h-fit overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-bottom-10 md:before:-left-10 before:bg-[#F5F5F5] before:absolute before:-left-5 before:-bottom-5 before:-rotate-45  flex flex-col gap-y-5 md:w-[48%] lg:w-[31%] hover:-translate-y-4 duration-500">
          {/* text */}
          <div className="flex flex-col gap-y-5">
            {/* star and price */}
            <div className="flex justify-between items-center pb-5 border-b border-b-gray-400">
              {/* price */}
              <h3 className="text-[#252525] text-4xl font-black">$350</h3>
              {/* stars */}
              <div className="flex items-center gap-1">
                <Star className="fill-primary stroke-primary w-4 h-4" />
                <Star className="fill-primary stroke-primary w-4 h-4" />
                <Star className="fill-primary stroke-primary w-4 h-4" />
                <Star className="fill-primary stroke-primary w-4 h-4" />
                <Star className="fill-primary stroke-primary w-4 h-4" />
              </div>
            </div>
            <h4 className="text-[28px] text-[#252525] font-bold">
              لورم ایپسوم متن ساختگی با تولید
            </h4>
            <p className="text-[#5a5a5a]">
              {" "}
              لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با
              تولید سادگی لورم ایپسوم
            </p>
          </div>
          {/* button */}
          <div className="mt-6 w-full">
            <button className="px-9 w-full py-4 relative bg-primary overflow-hidden before:content-[] before:w-10 before:h-10 before:bg-[#ebebeb] before:absolute before:-left-5 before:-bottom-5 before:rotate-45 group hover:bg-secondary duration-500 cursor-pointer flex">
              <section className="flex items-center gap-2">
                <span className="text-[#252525] text-sm md:text-lg font-bold group-hover:text-white duration-500">
                  بیشتر بدانیم
                </span>
                <ArrowLeftCircleIcon
                  className="text-[#252525] group-hover:text-white duration-500"
                  width={18}
                  height={18}
                />
              </section>
            </button>
          </div>
          {/* image */}
          <div>
            <figure className="relative w-full h-[400px] lg:h-[420px] hover:scale-110 duration-500">
              <Image
                src="/images/HeaderExcavator.png"
                alt="Excavator"
                fill
                objectFit="contain"
              />
            </figure>
          </div>
        </div>
        {/* card 2 */}
        <div className="p-[30px] bg-[#ebebeb]  relative w-full h-fit overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-bottom-10 md:before:-left-10 before:bg-[#F5F5F5] before:absolute before:-left-5 before:-bottom-5 before:-rotate-45 duration-500 flex flex-col gap-y-5 md:w-[48%] lg:w-[31%] hover:-translate-y-4">
          {/* text */}
          <div className="flex flex-col gap-y-5">
            {/* star and price */}
            <div className="flex justify-between items-center pb-5 border-b border-b-gray-400">
              {/* price */}
              <h3 className="text-[#252525] text-4xl font-black">$350</h3>
              {/* stars */}
              <div className="flex items-center gap-1">
                <Star className="fill-primary stroke-primary w-4 h-4" />
                <Star className="fill-primary stroke-primary w-4 h-4" />
                <Star className="fill-primary stroke-primary w-4 h-4" />
                <Star className="fill-primary stroke-primary w-4 h-4" />
                <Star className="fill-primary stroke-primary w-4 h-4" />
              </div>
            </div>
            <h4 className="text-[28px] text-[#252525] font-bold">
              لورم ایپسوم متن ساختگی با تولید
            </h4>
            <p className="text-[#5a5a5a]">
              {" "}
              لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با
              تولید سادگی لورم ایپسوم
            </p>
          </div>
          {/* button */}
          <div className="mt-6 w-full">
            <button className="px-9 w-full py-4 relative bg-primary overflow-hidden before:content-[] before:w-10 before:h-10 before:bg-[#ebebeb] before:absolute before:-left-5 before:-bottom-5 before:rotate-45 group hover:bg-secondary duration-500 cursor-pointer flex">
              <section className="flex items-center gap-2">
                <span className="text-[#252525] text-sm md:text-lg font-bold group-hover:text-white duration-500">
                  بیشتر بدانیم
                </span>
                <ArrowLeftCircleIcon
                  className="text-[#252525] group-hover:text-white duration-500"
                  width={18}
                  height={18}
                />
              </section>
            </button>
          </div>
          {/* image */}
          <div>
            <figure className="relative w-full h-[400px] lg:h-[420px] hover:scale-110 duration-500">
              <Image
                src="/images/HeaderExcavator.png"
                alt="Excavator"
                fill
                objectFit="contain"
              />
            </figure>
          </div>
        </div>
        {/* card 3 */}
        <div className="p-[30px] bg-[#ebebeb]  relative w-full h-fit overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-bottom-10 md:before:-left-10 before:bg-[#F5F5F5] before:absolute before:-left-5 before:-bottom-5 before:-rotate-45 duration-500 flex flex-col gap-y-5 md:w-[48%] lg:w-[31%] hover:-translate-y-4">
          {/* text */}
          <div className="flex flex-col gap-y-5">
            {/* star and price */}
            <div className="flex justify-between items-center pb-5 border-b border-b-gray-400">
              {/* price */}
              <h3 className="text-[#252525] text-4xl font-black">$350</h3>
              {/* stars */}
              <div className="flex items-center gap-1">
                <Star className="fill-primary stroke-primary w-4 h-4" />
                <Star className="fill-primary stroke-primary w-4 h-4" />
                <Star className="fill-primary stroke-primary w-4 h-4" />
                <Star className="fill-primary stroke-primary w-4 h-4" />
                <Star className="fill-primary stroke-primary w-4 h-4" />
              </div>
            </div>
            <h4 className="text-[28px] text-[#252525] font-bold">
              لورم ایپسوم متن ساختگی با تولید
            </h4>
            <p className="text-[#5a5a5a]">
              {" "}
              لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با
              تولید سادگی لورم ایپسوم
            </p>
          </div>
          {/* button */}
          <div className="mt-6 w-full">
            <button className="px-9 w-full py-4 relative bg-primary overflow-hidden before:content-[] before:w-10 before:h-10 before:bg-[#ebebeb] before:absolute before:-left-5 before:-bottom-5 before:rotate-45 group hover:bg-secondary duration-500 cursor-pointer flex">
              <section className="flex items-center gap-2">
                <span className="text-[#252525] text-sm md:text-lg font-bold group-hover:text-white duration-500">
                  بیشتر بدانیم
                </span>
                <ArrowLeftCircleIcon
                  className="text-[#252525] group-hover:text-white duration-500"
                  width={18}
                  height={18}
                />
              </section>
            </button>
          </div>
          {/* image */}
          <div>
            <figure className="relative w-full h-[400px] lg:h-[420px] hover:scale-110 duration-500">
              <Image
                src="/images/HeaderExcavator.png"
                alt="Excavator"
                fill
                objectFit="contain"
              />
            </figure>
          </div>
        </div>
        {/* card 4 */}
        <div className="p-[30px] bg-[#ebebeb]  relative w-full h-fit overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-bottom-10 md:before:-left-10 before:bg-[#F5F5F5] before:absolute before:-left-5 before:-bottom-5 before:-rotate-45 duration-500 flex flex-col gap-y-5 md:w-[48%] lg:w-[31%] lg:hidden hover:-translate-y-4">
          {/* text */}
          <div className="flex flex-col gap-y-5">
            {/* star and price */}
            <div className="flex justify-between items-center pb-5 border-b border-b-gray-400">
              {/* price */}
              <h3 className="text-[#252525] text-4xl font-black">$350</h3>
              {/* stars */}
              <div className="flex items-center gap-1">
                <Star className="fill-primary stroke-primary w-4 h-4" />
                <Star className="fill-primary stroke-primary w-4 h-4" />
                <Star className="fill-primary stroke-primary w-4 h-4" />
                <Star className="fill-primary stroke-primary w-4 h-4" />
                <Star className="fill-primary stroke-primary w-4 h-4" />
              </div>
            </div>
            <h4 className="text-[28px] text-[#252525] font-bold">
              لورم ایپسوم متن ساختگی با تولید
            </h4>
            <p className="text-[#5a5a5a]">
              {" "}
              لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با
              تولید سادگی لورم ایپسوم
            </p>
          </div>
          {/* button */}
          <div className="mt-6 w-full">
            <button className="px-9 w-full py-4 relative bg-primary overflow-hidden before:content-[] before:w-10 before:h-10 before:bg-[#ebebeb] before:absolute before:-left-5 before:-bottom-5 before:rotate-45 group hover:bg-secondary duration-500 cursor-pointer flex">
              <section className="flex items-center gap-2">
                <span className="text-[#252525] text-sm md:text-lg font-bold group-hover:text-white duration-500">
                  بیشتر بدانیم
                </span>
                <ArrowLeftCircleIcon
                  className="text-[#252525] group-hover:text-white duration-500"
                  width={18}
                  height={18}
                />
              </section>
            </button>
          </div>
          {/* image */}
          <div>
            <figure className="relative w-full h-[400px] lg:h-[420px] hover:scale-110 duration-500">
              <Image
                src="/images/HeaderExcavator.png"
                alt="Excavator"
                fill
                objectFit="contain"
              />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurProducts;
