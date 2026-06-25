// components/MobileMenu.tsx
"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

const pages: NavItem[] = [
  { label: "خانه", href: "/" },
  { label: "درباره ما", href: "/about" },
  { label: "سرویس های ما", href: "/services" },
  { label: "محصولات ما", href: "/products" },
  { label: "صفحات ما", href: "/pages" },
];

interface MobileMenuProps {
  currentPage: string;
}

export function MobileMenu({ currentPage }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="p-3 bg-secondary lg:hidden group hover:bg-primary duration-500 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Bars3Icon
          width={25}
          height={25}
          className="text-white group-hover:text-black duration-500"
        />
      </div>

      <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
        <DrawerTrigger asChild style={{ display: "none" }}>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent className="h-full w-64 p-4 bg-white !rounded-none !border-0">
          <DrawerHeader>
            <DrawerTitle>منوی ناوبری</DrawerTitle>
            <DrawerDescription>
              دسترسی سریع به بخش‌های مختلف سایت.
            </DrawerDescription>
          </DrawerHeader>
          <nav className="flex-grow overflow-y-auto">
            <ul className="flex flex-col items-start *:text-lg *:font-bold *:py-3 *:duration-500">
              {pages.map((page) => (
                <li key={page.href} className="w-full">
                  <a
                    href={page.href}
                    className={`block px-[15px] w-full ${
                      currentPage === page.href
                        ? "text-primary"
                        : "text-black hover:text-primary"
                    }`}
                  >
                    {page.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <DrawerFooter className="mt-auto">
            <DrawerClose asChild>
              <Button variant="outline" className="cursor-pointer">
                بستن
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
