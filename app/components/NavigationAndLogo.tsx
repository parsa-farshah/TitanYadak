"use client";
import { ArrowLeftCircleIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { MobileMenu } from "./MobileMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationAndLogoProps {
  currentPage: string;
}



function NavigationAndLogo({ currentPage }: NavigationAndLogoProps) {
  const scrollToFooter = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    if (currentPage === "/") {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    } else {
      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pathname = usePathname();
  return (
    <div className="relative overflow-hidden bg-cover bg-center bg-fixed bg-white">
      <div className="py-5 relative z-10 2xl:container 2xl:mx-auto border-b-2 border-b-[#121741] px-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center">
          {/* logo */}
          <Link href="./" className="justify-self-start">
            <figure>
              <Image
                src="/images/logoMain.png"
                alt="logo"
                width={64}
                height={64}
                loading="lazy"
              />
            </figure>
          </Link>

          {/* menu mobile */}
          <div className="lg:hidden justify-self-end">
            <MobileMenu currentPage={pathname} />
          </div>

          {/* Navigation in desktop */}
          <section className="hidden lg:flex justify-self-center">
            <ul className="flex items-center *:text-lg *:font-bold *:px-[15px] *:duration-500">
              <li>
                <a
                  href="/"
                  className={
                    pathname === "/"
                      ? "text-primary"
                      : "text-black hover:text-primary"
                  }
                >
                  خانه
                </a>
              </li>
              <li>
                <a
                  href="/productsPage"
                  className={
                    pathname === "/productsPage"
                      ? "text-primary"
                      : "text-black hover:text-primary"
                  }
                >
                  محصولات ما
                </a>
              </li>
              <li>
                <a
                  href="/aboutUs"
                  className={
                    pathname === "/aboutUs"
                      ? "text-primary"
                      : "text-black hover:text-primary"
                  }
                >
                  درباره ما
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToFooter();
                  }}
                  className={
                    currentPage === "/contact"
                      ? "text-primary cursor-pointer"
                      : "text-black hover:text-primary cursor-pointer"
                  }
                >
                  تماس
                </a>
              </li>
            </ul>
          </section>

          {/* left button */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToAbout();
            }}
            className="hidden lg:flex justify-self-end px-9 py-4 relative bg-secondary overflow-hidden before:content-[] before:w-10 before:h-10 before:bg-white before:absolute before:-left-5 before:-bottom-5 before:rotate-45 group hover:bg-primary duration-500 cursor-pointer"
          >
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
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavigationAndLogo;
