"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const brands = [
  {
    id: 1,
    name: "Komatsu",
    image: "/images/brands/komatsu.png",
  },
  {
    id: 2,
    name: "Caterpillar",
    image: "/images/brands/caterpillar.png",
  },
  {
    id: 3,
    name: "Volvo",
    image: "/images/brands/Volvo.png",
  },
  {
    id: 4,
    name: "kawasaki",
    image: "/images/brands/kawasaki.png",
  },
  {
    id: 5,
    name: "hyundai",
    image: "/images/brands/hyundai.png",
  },
  {
    id: 6,
    name: "Cummins.png",
    image: "/images/brands/Cummins.png",
  },
];

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
        {brands.map((brand) => (
          <CarouselItem
            key={brand.id}
            className="basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <figure className="flex items-center justify-center bg-white h-20 p-2">
              <Image
                src={brand.image}
                alt={brand.name}
                width={202}
                height={170}
                className="w-[154px] h-[53px] lg:w-[202px] lg:h-[170px] object-contain "
              />
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
