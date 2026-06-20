import Image from "next/image";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import React from "react";

function Footer() {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center bg-fixed pl-12 pr-5 py-20"
      style={{ backgroundImage: "url('/images/bgMain.jpg')" }}
    >
      <section className="w-full flex flex-col gap-y-10 md:flex-row md:gap-[3%] 2xl:container 2xl:mx-auto">
        {/* logo and social */}
        <div className="flex flex-col gap-y-5 md:w-[40%] lg:w-[30%]">
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
          <p className="text-[#d3d3d3] text-sm md:text-lg">
            لورم ایپسوم متن ساختگی با تولید سادگی لورم ایپسوم متن ساختگی با
            تولید سادگی لورم ایپسوم متن ساختگی
          </p>
          {/* socials */}
          <ul className="flex gap-4">
            <li>
              <a href="">
                <FaTelegram className="fill-secondary hover:fill-primary duration-500 w-6 h-6" />
              </a>
            </li>{" "}
            <li>
              <a href="">
                <FaInstagram className="fill-secondary hover:fill-primary duration-500 w-6 h-6" />
              </a>
            </li>{" "}
            <li>
              <a href="">
                <FaWhatsapp className="fill-secondary hover:fill-primary duration-500 w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
        {/* links */}
        <div className="flex flex-col gap-y-5 md:w-[25%] lg:w-[15%]">
          <span className="text-xl text-white md:text-3xl font-black">
            لورم ایپسوم
          </span>
          <ul className="flex flex-col gap-y-1 **:md:text-lg">
            <li>
              <a href="" className="text-[#d3d3d3] text-sm ">
                لورم ایپسوم
              </a>
            </li>
            <li>
              <a href="" className="text-[#d3d3d3] text-sm">
                لورم ایپسوم
              </a>
            </li>
            <li>
              <a href="" className="text-[#d3d3d3] text-sm">
                لورم ایپسوم
              </a>
            </li>
            <li>
              <a href="" className="text-[#d3d3d3] text-sm">
                لورم ایپسوم
              </a>
            </li>
            <li>
              <a href="" className="text-[#d3d3d3] text-sm">
                لورم ایپسوم
              </a>
            </li>
          </ul>
        </div>
        {/* links */}
        <div className="flex flex-col gap-y-5 md:w-[25%] lg:w-[15%]">
          <span className="text-xl text-white md:text-3xl font-black">
            لورم ایپسوم
          </span>
          <ul className="flex flex-col gap-y-1 **:md:text-lg">
            <li>
              <a href="" className="text-[#d3d3d3] text-sm ">
                لورم ایپسوم
              </a>
            </li>
            <li>
              <a href="" className="text-[#d3d3d3] text-sm">
                لورم ایپسوم
              </a>
            </li>
            <li>
              <a href="" className="text-[#d3d3d3] text-sm">
                لورم ایپسوم
              </a>
            </li>
            <li>
              <a href="" className="text-[#d3d3d3] text-sm">
                لورم ایپسوم
              </a>
            </li>
            <li>
              <a href="" className="text-[#d3d3d3] text-sm">
                لورم ایپسوم
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Footer;
