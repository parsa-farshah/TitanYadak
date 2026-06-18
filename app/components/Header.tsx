import { ArrowLeftCircleIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { AvatarComponent } from "./AvatarComponent";
import { Plus, PlusCircle } from "lucide-react";

const Header = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/bgMain.jpg')" }}
    >
      {/* navigation and logo and button */}
      <div className="py-5 flex justify-between items-center relative z-10 2xl:container 2xl:mx-auto border-b-2 border-b-[#121741] px-6">
        {/* logo */}
        <figure>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={64}
            height={64}
            loading="lazy"
          />
        </figure>
        {/* menu mobile */}
        <div className="p-3 bg-secondary lg:hidden group hover:bg-primary duration-500 cursor-pointer">
          <Bars3Icon
            width={25}
            height={25}
            className="text-white group-hover:text-black duration-500"
          />
        </div>
        {/* Navigation in desktop */}
        <section className="hidden lg:flex">
          <ul className="flex items-center *:text-white *:text-lg *:font-bold *:px-[15px] *:hover:text-primary *:hover:duration-500">
            <li>
              <a href="">خانه</a>
            </li>
            <li>
              <a href="">درباره ما</a>
            </li>
            <li>
              <a href="">سرویس های ما</a>
            </li>
            <li>
              <a href="">محصولات ما</a>
            </li>
            <li>
              <a href="">صفحات ما</a>
            </li>
          </ul>
        </section>
        {/* left button */}
        <button className="px-9 py-4 relative bg-secondary overflow-hidden before:content-[] before:w-10 before:h-10 before:bg-[#03071E] before:absolute before:-left-5 before:-bottom-5 before:rotate-45 group hover:bg-primary duration-500 cursor-pointer hidden lg:flex">
          <section className="flex items-center gap-2">
            <span className="text-white text-lg font-bold group-hover:text-black duration-500">
              درباره ما
            </span>
            <ArrowLeftCircleIcon
              className="text-white"
              width={18}
              height={18}
            />
          </section>
        </button>
      </div>
      {/* ------------------------- image and text --------------------------- */}
      <section className="relative z-10 mt-25 flex flex-col gap-y-10 px-6 2xl:container 2xl:mx-auto">
        {/* text header and card */}
        <section className="flex flex-col gap-y-5 md:flex-row md:justify-between md:items-center ">
          {/* text */}
          <p className="text-white text-4xl border-r-4 border-r-secondary pr-5 font-black leading-14 md:text-5xl md:leading-20 lg:text-8xl lg:leading-32 md:w-[65%]">
            لورم <span className="text-primary">ایپسوم</span> متن ساختگی با{" "}
            <span className="text-primary">تولید</span> سادگی
          </p>
          {/* card */}
          <div className="p-5 relative bg-primary overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-top-10 md:before:-left-10 before:bg-[#080F2F] before:absolute before:-left-5 before:-top-5 before:rotate-45 duration-500 flex flex-col gap-y-5 md:w-[30%]">
            <AvatarComponent />
            <span className="text-lg font-bold">لورم ایپسوم متن</span>
            <p className="text-[#252525] text-sm ">
              لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با
              تولید سادگی لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن
              ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با تولید سادگی لورم
              ایپسوم متن ساختگی با تولید سادگی
            </p>
            <section className="flex items-center gap-2 group">
              <span className="text-black text-sm font-bold group-hover:text-secondary duration-500">
                بیشتر بدانید
              </span>
              <ArrowLeftCircleIcon
                className="text-black group-hover:text-secondary duration-500"
                width={18}
                height={18}
              />
            </section>
          </div>
        </section>
        {/* 3 row */}
        <section className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-12 lg:justify-center">
          {/* text */}
          <div className="flex flex-col">
            <p className="text-[#d3d3d3] pb-3.5 ">
              لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با
              تولید سادگی لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن
              ساختگی با تولید سادگی
            </p>

            {/* button */}
            <div className="mt-6">
              <button className="px-9 py-4 relative bg-secondary overflow-hidden before:content-[] before:w-10 before:h-10 before:bg-[#03071E] before:absolute before:-left-5 before:-bottom-5 before:rotate-45 group hover:bg-primary duration-500 cursor-pointer flex">
                <section className="flex items-center gap-2">
                  <span className="text-white text-sm md:text-lg font-bold group-hover:text-black duration-500">
                    بیشتر بدانیم
                  </span>
                  <ArrowLeftCircleIcon
                    className="text-white"
                    width={18}
                    height={18}
                  />
                </section>
              </button>
            </div>

            {/* analysis */}
            <section className="flex justify-between mt-14">
              {/* card 1 */}
              <div className="border-l border-l-secondary flex flex-col items-center gap-2 w-[22%]">
                {/* top */}
                <div className="flex">
                  <span className="text-white text-[28px]">500</span>
                  <Plus className="text-sm text-secondary text-[28px]" />
                </div>
                {/* bottom */}
                <span className="text-center text-white">پروژه های موفق</span>
              </div>
              {/* card 2 */}
              <div className="border-l border-l-secondary flex flex-col items-center gap-2 w-[22%]">
                {/* top */}
                <div className="flex">
                  <span className="text-white text-[28px]">500</span>
                  <Plus className="text-sm text-secondary text-[28px]" />
                </div>
                {/* bottom */}
                <span className="text-center text-white">پروژه های موفق</span>
              </div>{" "}
              {/* card 3 */}
              <div className="flex flex-col items-center gap-2 w-[22%]">
                {/* top */}
                <div className="flex">
                  <span className="text-white text-[28px]">500</span>
                  <Plus className="text-sm text-secondary text-[28px]" />
                </div>
                {/* bottom */}
                <span className="text-center text-white">پروژه های موفق</span>
              </div>
            </section>
          </div>
          {/* image */}
          <div className="relative bg-primary p-5 lg:w-[48%] h-[305px] md:h-[400px] overflow-visible mt-20 lg:mt-0">
            {/* decorative shapes */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-top-10 md:before:-left-10 before:bg-[#080F2F] before:absolute before:-left-5 before:-top-5 before:rotate-45 duration-500 cursor-pointer flex flex-col gap-y-5 md:w-[30%] after:content-[] after:w-10 after:h-10 md:after:w-20 md:after:h-20 md:after:-bottom-10 md:after:-right-10 after:bg-[#080F2F] after:absolute after:-right-5 after:-bottom-5 after:rotate-45"></div>
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
        </section>
      </section>

      {/* under svg  */}
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
    </div>
  );
};

export default Header;
