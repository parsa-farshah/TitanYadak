// components/MobileMenu.tsx
"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaTelegram, FaWhatsapp, FaPhone } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

const pages: NavItem[] = [
  { label: "خانه", href: "/" },

  { label: "محصولات", href: "/productsPage" },
  { label: "درباره ما", href: "/aboutus" },
];

interface MobileMenuProps {
  currentPage: string;
}

export function MobileMenu({ currentPage }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="p-3 bg-secondary lg:hidden group hover:bg-primary duration-500 cursor-pointer relative overflow-hidden"
        onClick={() => setIsOpen(true)}
      >
        <Bars3Icon
          width={25}
          height={25}
          className="text-white group-hover:text-black duration-500 relative z-10"
        />
      </div>

      <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
        <DrawerTrigger asChild style={{ display: "none" }}>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent className="h-full w-80 p-0 bg-white !rounded-none !border-0 flex flex-col">
          {/* Header with Logo */}
          <DrawerHeader className="border-b border-gray-100 p-6 bg-[#F5F5F5]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logoMain.png"
                  alt="تیتان یدک"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <DrawerTitle className="text-xl font-black text-[#03071E]">
                  تیتان یدک
                </DrawerTitle>
              </div>
              <DrawerClose asChild>
                <button className="p-2 hover:bg-white rounded-lg duration-300 cursor-pointer">
                  <XMarkIcon className="w-6 h-6 text-[#03071E]" />
                </button>
              </DrawerClose>
            </div>
          </DrawerHeader>

          {/* Navigation */}
          <nav className="flex-grow overflow-y-auto px-4 py-6">
            <ul className="flex flex-col gap-2">
              {pages.map((page) => (
                <li key={page.href} className="w-full">
                  <Link
                    href={page.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-bold text-base duration-300 relative overflow-hidden group
                      ${
                        currentPage === page.href
                          ? "bg-primary text-white"
                          : "text-[#03071E] hover:bg-[#F5F5F5]"
                      }`}
                  >
                    <span className="relative z-10">{page.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer with Contact & Social */}
          <DrawerFooter className="border-t border-gray-100 p-6 mt-auto bg-[#F5F5F5]">
            {/* Contact */}
            <div className="mb-4 flex justify-between">
              <a
                href="tel:+989126157584"
                className="flex items-center gap-3 text-[#03071E] hover:text-primary duration-300 mb-3"
              >
                <div className="p-1 sm:p-2 bg-white rounded-lg border border-gray-200">
                  <FaPhone className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs text-gray-500">تماس با ما</span>
                  <span className="text-[10px] sm:text-sm font-bold">۰۹۱۲۶۱۵۷۵۸۴</span>
                </div>
              </a>
              <a
                href="tel:+982166693735"
                className="flex items-center gap-3 text-[#03071E] hover:text-primary duration-300 mb-3"
              >
                <div className="p-1 sm:p-2 bg-white rounded-lg border border-gray-200">
                  <FaPhone className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs text-gray-500">تماس با ما</span>
                  <span className="text-[10px] sm:text-sm font-bold">۰۲۱۶۶۶۹۳۷۳۵</span>
                </div>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-[#03071E] text-center">
                ما را دنبال کنید
              </span>
              <div className="flex gap-3 justify-center flex-wrap">
                {[
                  { icon: FaTelegram, href: "https://t.me/Amirhha70" },
                  {
                    icon: FaInstagram,
                    href: "https://www.instagram.com/titan_yadak?utm_source=qr&igsh=MTZidmM0ajdmb3Rldg==",
                  },
                  { icon: FaWhatsapp, href: "https://wa.me/989126157584" },
                  { icon: FaPhone, href: "tel:+989126157584" },
                  {
                    icon: "/images/socials/bale.png",
                    href: "https://ble.ir/amirhashemi1370",
                  },
                  {
                    icon: "/images/socials/rubika.png",
                    href: "https://rubika.ir/amirhashemi70",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gray-200 hover:bg-primary duration-300 group"
                  >
                    {typeof social.icon === "string" ? (
                      <Image
                        src={social.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="opacity-70 group-hover:opacity-100 duration-300"
                      />
                    ) : (
                      <social.icon className="fill-secondary group-hover:fill-white duration-300 w-5 h-5" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
