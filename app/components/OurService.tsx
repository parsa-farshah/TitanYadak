import { ArrowLeftCircleIcon, CarFrontIcon, CarTaxiFront } from "lucide-react";
import Image from "next/image";
import React from "react";

function OurService() {
  return (
    <div className="w-full h-fit flex flex-col gap-y-10 items-center  bg-[#F5F5F5] relative pb-20 mt-20 md:mt-36">
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
      <section className="px-5 flex flex-col gap-y-10 lg:gap-y-14">
        {/* text and paragraph */}
        <div className="flex flex-col gap-y-7 lg:flex-row lg:justify-between  relative z-20 ">
          <h2 className="text-[#252525] text-[28px] font-black md:text-4xl lg:text-6xl lg:leading-20 lg:w-[49%]">
            لورم <span className="text-primary">ایپسوم</span> متن ساختگی با{" "}
            <span className="text-primary">تولید</span> سادگی
          </h2>
          <div className="flex flex-col gap-y-7 lg:w-[49%]">
            <p className="text-[#252525] text-sm  leading-7 md:text-[16px] md:leading-8 lg:pt-2">
              لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با
              تولید سادگی لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن
              ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با تولید سادگی لورم
              ایپسوم متن ساختگی با تولید سادگی ساختگی با تولید سادگی لورم ایپسوم
              متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با تولید سادگی
            </p>
            {/* button */}
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
        {/* cards */}
        <section className="w-full flex flex-wrap justify-between gap-y-10 px-5">
          {/* card 1 */}
          <div className="p-[30px] bg-[#ebebeb]  relative w-full h-fit overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-bottom-10 md:before:-left-10 before:bg-[#F5F5F5] before:absolute before:-left-5 before:-bottom-5 before:-rotate-45  flex flex-col gap-y-5 md:w-[48%] lg:w-[31%] duration-500">
            {/* text */}
            <div className="flex flex-col gap-y-9">
              {/* star and price */}
              <div className="flex gap-5 items-center">
                {/* icons */}
                <div
                  className="
                      relative w-[74px] h-fit bg-primary p-5 overflow-hidden 
                      flex justify-center items-center 
                      hover:-translate-y-4 duration-500
                      before:content-[''] 
                      before:w-10 before:h-10 
                      md:before:w-10 md:before:h-10
                      before:bg-[#EBEBEB] 
                      before:absolute 
                      before:-left-6 before:-bottom-6 
                      before:-rotate-45

                      after:content-['']
                      after:w-10 after:h-10
                      md:after:w-10 md:after:h-10
                      after:bg-[#EBEBEB]
                      after:absolute
                      after:-right-6 after:-top-6
                      after:-rotate-45
                    "
                >
                  <CarFrontIcon />
                </div>
                {/* price */}
                <h3 className="text-[#252525] text-xl font-black">
                  لورم ایپسوم متن
                </h3>
              </div>
              {/* text */}
              <p className="text-[#5a5a5a]">
                لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با
                تولید سادگی لورم ایپسوم
              </p>
              {/* button */}
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
          </div>{" "}
          {/* card 2 */}
          <div className="p-[30px] bg-[#ebebeb]  relative w-full h-fit overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-bottom-10 md:before:-left-10 before:bg-[#F5F5F5] before:absolute before:-left-5 before:-bottom-5 before:-rotate-45  flex flex-col gap-y-5 md:w-[48%] lg:w-[31%] duration-500">
            {/* text */}
            <div className="flex flex-col gap-y-9">
              {/* star and price */}
              <div className="flex gap-5 items-center">
                {/* icons */}
                <div
                  className="
                      relative w-[74px] h-fit bg-primary p-5 overflow-hidden 
                      flex justify-center items-center 
                      hover:-translate-y-4 duration-500
                      before:content-[''] 
                      before:w-10 before:h-10 
                      md:before:w-10 md:before:h-10
                      before:bg-[#EBEBEB] 
                      before:absolute 
                      before:-left-6 before:-bottom-6 
                      before:-rotate-45

                      after:content-['']
                      after:w-10 after:h-10
                      md:after:w-10 md:after:h-10
                      after:bg-[#EBEBEB]
                      after:absolute
                      after:-right-6 after:-top-6
                      after:-rotate-45
                    "
                >
                  <CarFrontIcon />
                </div>
                {/* price */}
                <h3 className="text-[#252525] text-xl font-black">
                  لورم ایپسوم متن
                </h3>
              </div>
              {/* text */}
              <p className="text-[#5a5a5a]">
                لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با
                تولید سادگی لورم ایپسوم
              </p>
              {/* button */}
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
          </div>{" "}
          {/* card 3 */}
          <div className="p-[30px] bg-[#ebebeb]  relative w-full h-fit overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-bottom-10 md:before:-left-10 before:bg-[#F5F5F5] before:absolute before:-left-5 before:-bottom-5 before:-rotate-45  flex flex-col gap-y-5 md:w-[48%] lg:w-[31%] duration-500">
            {/* text */}
            <div className="flex flex-col gap-y-9">
              {/* star and price */}
              <div className="flex gap-5 items-center">
                {/* icons */}
                <div
                  className="
                      relative w-[74px] h-fit bg-primary p-5 overflow-hidden 
                      flex justify-center items-center 
                      hover:-translate-y-4 duration-500
                      before:content-[''] 
                      before:w-10 before:h-10 
                      md:before:w-10 md:before:h-10
                      before:bg-[#EBEBEB] 
                      before:absolute 
                      before:-left-6 before:-bottom-6 
                      before:-rotate-45

                      after:content-['']
                      after:w-10 after:h-10
                      md:after:w-10 md:after:h-10
                      after:bg-[#EBEBEB]
                      after:absolute
                      after:-right-6 after:-top-6
                      after:-rotate-45
                    "
                >
                  <CarFrontIcon />
                </div>
                {/* price */}
                <h3 className="text-[#252525] text-xl font-black">
                  لورم ایپسوم متن
                </h3>
              </div>
              {/* text */}
              <p className="text-[#5a5a5a]">
                لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با
                تولید سادگی لورم ایپسوم
              </p>
              {/* button */}
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
          {/* card 4 */}
          <div className="p-[30px] bg-[#ebebeb]  relative w-full h-fit overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-bottom-10 md:before:-left-10 before:bg-[#F5F5F5] before:absolute before:-left-5 before:-bottom-5 before:-rotate-45  flex flex-col gap-y-5 md:w-[48%] lg:w-[31%] duration-500">
            {/* text */}
            <div className="flex flex-col gap-y-9">
              {/* star and price */}
              <div className="flex gap-5 items-center">
                {/* icons */}
                <div
                  className="
                      relative w-[74px] h-fit bg-primary p-5 overflow-hidden 
                      flex justify-center items-center 
                      hover:-translate-y-4 duration-500
                      before:content-[''] 
                      before:w-10 before:h-10 
                      md:before:w-10 md:before:h-10
                      before:bg-[#EBEBEB] 
                      before:absolute 
                      before:-left-6 before:-bottom-6 
                      before:-rotate-45

                      after:content-['']
                      after:w-10 after:h-10
                      md:after:w-10 md:after:h-10
                      after:bg-[#EBEBEB]
                      after:absolute
                      after:-right-6 after:-top-6
                      after:-rotate-45
                    "
                >
                  <CarFrontIcon />
                </div>
                {/* price */}
                <h3 className="text-[#252525] text-xl font-black">
                  لورم ایپسوم متن
                </h3>
              </div>
              {/* text */}
              <p className="text-[#5a5a5a]">
                لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با
                تولید سادگی لورم ایپسوم
              </p>
              {/* button */}
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
          {/* card 5 */}
          <div className="p-[30px] bg-[#ebebeb]  relative w-full h-fit overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-bottom-10 md:before:-left-10 before:bg-[#F5F5F5] before:absolute before:-left-5 before:-bottom-5 before:-rotate-45  flex flex-col gap-y-5 md:w-[48%] lg:w-[31%] duration-500">
            {/* text */}
            <div className="flex flex-col gap-y-9">
              {/* star and price */}
              <div className="flex gap-5 items-center">
                {/* icons */}
                <div
                  className="
                      relative w-[74px] h-fit bg-primary p-5 overflow-hidden 
                      flex justify-center items-center 
                      hover:-translate-y-4 duration-500
                      before:content-[''] 
                      before:w-10 before:h-10 
                      md:before:w-10 md:before:h-10
                      before:bg-[#EBEBEB] 
                      before:absolute 
                      before:-left-6 before:-bottom-6 
                      before:-rotate-45

                      after:content-['']
                      after:w-10 after:h-10
                      md:after:w-10 md:after:h-10
                      after:bg-[#EBEBEB]
                      after:absolute
                      after:-right-6 after:-top-6
                      after:-rotate-45
                    "
                >
                  <CarFrontIcon />
                </div>
                {/* price */}
                <h3 className="text-[#252525] text-xl font-black">
                  لورم ایپسوم متن
                </h3>
              </div>
              {/* text */}
              <p className="text-[#5a5a5a]">
                لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با
                تولید سادگی لورم ایپسوم
              </p>
              {/* button */}
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
          {/* card 6 */}
          <div className="p-[30px] bg-[#ebebeb]  relative w-full h-fit overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-bottom-10 md:before:-left-10 before:bg-[#F5F5F5] before:absolute before:-left-5 before:-bottom-5 before:-rotate-45  flex flex-col gap-y-5 md:w-[48%] lg:w-[31%] duration-500">
            {/* text */}
            <div className="flex flex-col gap-y-9">
              {/* star and price */}
              <div className="flex gap-5 items-center">
                {/* icons */}
                <div
                  className="
                      relative w-[74px] h-fit bg-primary p-5 overflow-hidden 
                      flex justify-center items-center 
                      hover:-translate-y-4 duration-500
                      before:content-[''] 
                      before:w-10 before:h-10 
                      md:before:w-10 md:before:h-10
                      before:bg-[#EBEBEB] 
                      before:absolute 
                      before:-left-6 before:-bottom-6 
                      before:-rotate-45

                      after:content-['']
                      after:w-10 after:h-10
                      md:after:w-10 md:after:h-10
                      after:bg-[#EBEBEB]
                      after:absolute
                      after:-right-6 after:-top-6
                      after:-rotate-45
                    "
                >
                  <CarFrontIcon />
                </div>
                {/* price */}
                <h3 className="text-[#252525] text-xl font-black">
                  لورم ایپسوم متن
                </h3>
              </div>
              {/* text */}
              <p className="text-[#5a5a5a]">
                لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با
                تولید سادگی لورم ایپسوم
              </p>
              {/* button */}
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
        </section>
      </section>
    </div>
  );
}

export default OurService;
