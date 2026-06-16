import { ArrowLeftCircleIcon } from "lucide-react";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="py-30 px-5">
      {/* text and paragraph */}
      <div className="flex flex-col gap-y-7 lg:flex-row lg:justify-between ">
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
    </div>
  );
};

export default WhyChooseUs;
