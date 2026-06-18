import React from "react";
import { AccordionHome } from "./AccordionHome";
import Image from "next/image";

function AccordionAndImg() {
  return (
    <div className="w-full h-fit flex flex-col gap-y-10 items-center  bg-[#F5F5F5] relative pb-20 mt-20 md:mt-36 px-5 lg:flex-row lg:justify-between">
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
      {/* ------------------ image -------------------------- */}
      <div className="relative bg-primary p-5 h-screen overflow-hidden w-full  mt-20 lg:w-[47%]">
        {/* decorative shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-top-10 md:before:-left-10 before:bg-[#f5f5f5] before:absolute before:z-30 before:-left-5 before:-top-5 before:rotate-45 duration-500 cursor-pointer flex flex-col after:content-[] after:w-10 after:h-10 md:after:w-20 md:after:h-20 md:after:-bottom-10 md:after:-right-10 after:bg-[#f5f5f5] after:absolute after:-right-5 after:-bottom-5 after:rotate-45">
            {/* image */}
            <div className="absolute inset-0 h-screen w-full">
              <Image
                src="/images/about.jpg"
                alt="about"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* accordion */}
      <div className="h-fit lg:w-[47%]">
        <AccordionHome />
      </div>
    </div>
  );
}

export default AccordionAndImg;
