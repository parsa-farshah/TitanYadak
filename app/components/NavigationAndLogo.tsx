// components/NavigationAndLogo.tsx
import { ArrowLeftCircleIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { MobileMenu } from "./MobileMenu";

interface NavigationAndLogoProps {
  currentPage: string;
}

function NavigationAndLogo({ currentPage }: NavigationAndLogoProps) {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/bgMain.jpg')" }}
    >
      {/* لایه تیره روی بک گراند */}
      <div className="absolute inset-0 bg-[#03071E]/80 z-0"></div>

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
        <div className="lg:hidden">
          <MobileMenu currentPage={currentPage} />
        </div>
        {/* Navigation in desktop */}
        <section className="hidden lg:flex">
          <ul className="flex items-center *:text-lg *:font-bold *:px-[15px] *:duration-500">
            <li>
              <a
                href="/"
                className={
                  currentPage === "/"
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }
              >
                خانه
              </a>
            </li>
            <li>
              <a
                href="/aboutUs"
                className={
                  currentPage === "/aboutUs"
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }
              >
                درباره ما
              </a>
            </li>
            <li>
              <a
                href="/services"
                className={
                  currentPage === "/services"
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }
              >
                سرویس های ما
              </a>
            </li>
            <li>
              <a
                href="/products"
                className={
                  currentPage === "/products"
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }
              >
                محصولات ما
              </a>
            </li>
            <li>
              <a
                href="/pages"
                className={
                  currentPage === "/pages"
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }
              >
                صفحات ما
              </a>
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
    </div>
  );
}

export default NavigationAndLogo;
