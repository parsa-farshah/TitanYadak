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
  { label: "درباره ما", href: "/about" },
  { label: "قطعات بلدوزر", href: "/bulldozer-parts" },
  { label: "خدمات ما", href: "/services" },
  { label: "تماس با ما", href: "/contact" },
];

interface MobileMenuProps {
  currentPage: string;
}

export function MobileMenu({ currentPage }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="p-3 bg-secondary lg:hidden group hover:bg-primary duration-500 cursor-pointer relative overflow-hidden
         "
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
          <DrawerHeader className="border-b border-gray-200 p-6 bg-[#F5F5F5]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="کاربن"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <DrawerTitle className="text-2xl font-black text-[#03071E]">
                  کاربن
                </DrawerTitle>
              </div>
              <DrawerClose asChild>
                <button className="p-2 hover:bg-white rounded-lg duration-300">
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
                    {currentPage === page.href && (
                      <div className="absolute inset-0 bg-primary">
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary rotate-45" />
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick Actions */}
            <div className="mt-8 space-y-3">
              <Link
                href="/bulldozer-parts"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 px-4 text-center bg-secondary text-white font-bold rounded-lg
                  hover:bg-primary duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">مشاهده محصولات</span>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#080F2F] rotate-45 group-hover:bg-[#03071E] duration-300" />
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 px-4 text-center border-2 border-[#03071E] text-[#03071E] font-bold rounded-lg
                  hover:bg-[#03071E] hover:text-white duration-300"
              >
                درخواست مشاوره
              </Link>
            </div>
          </nav>

          {/* Footer with Contact & Social */}
          <DrawerFooter className="border-t border-gray-200 p-6 mt-auto bg-[#F5F5F5]">
            {/* Contact */}
            <div className="mb-4">
              <a
                href="tel:+989123456789"
                className="flex items-center gap-3 text-[#03071E] hover:text-primary duration-300 mb-3"
              >
                <div className="p-2 bg-white rounded-lg">
                  <FaPhone className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs text-gray-600">تماس با ما</span>
                  <span className="text-sm font-bold">۰۹۱۲-۳۴۵-۶۷۸۹</span>
                </div>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-[#03071E]">
                ما را دنبال کنید
              </span>
              <div className="flex gap-3 justify-center">
                <a
                  href="https://t.me/carbon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white hover:bg-primary duration-300 group"
                >
                  <FaTelegram className="fill-secondary group-hover:fill-white duration-300 w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/carbon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white hover:bg-primary duration-300 group"
                >
                  <FaInstagram className="fill-secondary group-hover:fill-white duration-300 w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/989123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white hover:bg-primary duration-300 group"
                >
                  <FaWhatsapp className="fill-secondary group-hover:fill-white duration-300 w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Close Button */}
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="w-full mt-4 border-2 border-gray-300 hover:border-[#03071E] hover:bg-[#03071E] hover:text-white duration-300"
              >
                بستن منو
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
