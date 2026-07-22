import { ArrowLeftCircleIcon, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function OurProducts() {
  const products = [
    {
      title: "استارت و تجهیزات",
      description:
        "تأمین انواع استارت‌های اصلی و باکیفیت برای راه‌اندازی مطمئن ماشین‌آلات راهسازی و معدنی در شرایط کاری سنگین.",
      href: "/productsPage",
      image: "/images/products/starter/starter-komatsu-pc220-7.jpg",
      alt: "استارت ماشین‌آلات راهسازی",
    },
    {
      title: "دینام",
      description:
        "ارائه دینام و آلترناتورهای اصلی برای حفظ پایداری سیستم شارژ و تأمین برق مورد نیاز تجهیزات الکتریکی ماشین‌آلات سنگین.",
      href: "/productsPage",
      image: "/images/products/alternator/alternator-komatsu-pc220-7.jpg",
      alt: "دینام ماشین‌آلات راهسازی",
    },
    {
      title: "شیربرقی (خاموش‌کن)",
      description:
        "تأمین انواع شیربرقی و سلونویید با عملکرد دقیق برای کنترل مطمئن جریان سوخت و خاموش شدن ایمن موتور دستگاه.",
      href: "/productsPage",
      image: "/images/products/solenoid/solenoid-gearbox-komatsu-wa470-3.jpg",
      alt: "شیربرقی ماشین‌آلات راهسازی",
    },
  ];

  return (
    <div className="w-full h-fit relative bg-[#F5F5F5]">
      {/* bg */}
      <div className="absolute top-0 right-0 z-10 w-full scale-y-[-1]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-full bg-white"
        >
          <path fill="#F5F5F5" d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      <div className="flex flex-col gap-y-10 items-center bg-[#F5F5F5] relative pb-20 2xl:container 2xl:mx-auto">
        {/* text */}
        <div className="w-full flex flex-col items-center gap-y-3 relative z-20 px-5">
          <h2 className="text-[#252525] text-[28px] text-center font-black md:text-4xl lg:text-6xl lg:leading-20 w-[80%] lg:w-[700px] relative z-10 md:leading-14 relative z-20">
            تأمین تخصصی <span className="text-primary">قطعات برقی</span> اصلی{" "}
            <span className="text-primary">ماشین‌آلات</span> راهسازی
          </h2>
          <p className="text-[#5a5a5a] text-sm leading-7 md:text-[16px] lg:text-lg md:leading-8 lg:pt-2 w-[90%] text-center lg:w-[60%]">
            تیتان یدک با بیش از نیم قرن تجربه، قطعات برقی ماشین‌آلات سنگین از
            جمله استارت، دینام، سنسور و تجهیزات کنترلی را با تضمین اصالت کالا
            تأمین می‌کند.
          </p>
        </div>

        {/* cards */}
        <section className="w-full flex flex-wrap justify-between items-stretch gap-y-10 px-5">
          {products.map((product, index) => (
            <div key={index} className="w-full md:w-[48%] lg:w-[31%] flex">
              <div className="p-[30px] bg-[#ebebeb] relative w-full h-full overflow-hidden before:content-[] before:w-10 before:h-10 md:before:w-20 md:before:h-20 md:before:-bottom-10 md:before:-left-10 before:bg-[#F5F5F5] before:absolute before:-left-5 before:-bottom-5 before:-rotate-45 flex flex-col hover:-translate-y-4 duration-500">
                {/* text */}
                <div className="flex flex-col gap-y-5 flex-1">
                  {/* star and price */}
                  <div className="flex justify-between items-center pb-5 border-b border-b-gray-400">
                    <h3 className="text-[#252525] text-4xl font-black">اصلی</h3>
                    <div className="flex items-center gap-1">
                      <Star className="fill-primary stroke-primary w-4 h-4" />
                      <Star className="fill-primary stroke-primary w-4 h-4" />
                      <Star className="fill-primary stroke-primary w-4 h-4" />
                      <Star className="fill-primary stroke-primary w-4 h-4" />
                      <Star className="fill-primary stroke-primary w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="text-[28px] text-[#252525] font-bold">
                    {product.title}
                  </h4>

                  <p className="text-[#5a5a5a] min-h-[96px]">
                    {product.description}
                  </p>
                </div>

                {/* button */}
                <div className="mt-6 w-full">
                  <Link
                    href={product.href}
                    className="px-9 w-full py-4 relative bg-primary overflow-hidden before:content-[] before:w-10 before:h-10 before:bg-[#ebebeb] before:absolute before:-left-5 before:-bottom-5 before:rotate-45 group hover:bg-secondary duration-500 cursor-pointer flex justify-center"
                  >
                    <section className="flex items-center gap-2">
                      <span className="text-[#252525] text-sm md:text-lg font-bold group-hover:text-white duration-500">
                        بیشتر بدانیم
                      </span>
                      <ArrowLeftCircleIcon
                        className="text-[#252525] group-hover:text-white duration-500"
                        width={18}
                        height={18}
                      />
                    </section>
                  </Link>
                </div>

                {/* image */}
                <div>
                  <figure className="relative w-full h-[400px] lg:h-[420px] hover:scale-110 duration-500">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      objectFit="contain"
                    />
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default OurProducts;
