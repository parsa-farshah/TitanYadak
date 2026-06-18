"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function BrandCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
    }),
  );
  return (
    <Carousel
      dir="ltr"
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <figure className="flex items-center justify-center">
              <Image
                src="/images/Brandlogo.png"
                alt="لوگوی برند"
                width={202}
                height={170}
                className="w-[154px] h-[53px] lg:w-[202px] lg:h-[170px] object-contain"
              />
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
