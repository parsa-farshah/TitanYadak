import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/bgMain.jpg')" }}
    >
      <div className="relative z-10 px-6 md:px-12 py-16 md:py-20">
        <section className="w-full flex flex-col gap-y-10 md:flex-row md:gap-8 2xl:container 2xl:mx-auto">
          <div className="flex flex-col gap-y-5 md:w-[35%]">
            <figure className="bg-white p-1 w-fit rounded-xl">
              <Image
                src="/images/logoMain.png"
                alt="تیتان یدک - قطعات برقی ماشین‌آلات راهسازی"
                width={80}
                height={80}
                loading="lazy"
              />
            </figure>

            <h3 className="text-white text-xl md:text-2xl font-black">
              تیتان یدک
            </h3>

            <p className="text-[#d3d3d3] text-sm md:text-base leading-7">
              تیتان یدک با تکیه بر سال‌ها تجربه، به‌صورت تخصصی در زمینه تأمین،
              واردات و فروش قطعات برقی ماشین‌آلات راهسازی فعالیت می‌کند و
              همواره تلاش دارد محصولات اصلی و باکیفیت را با پشتیبانی مطمئن در
              اختیار مشتریان قرار دهد.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <a
                href="tel:09126157584"
                className="flex items-center gap-3 text-[#d3d3d3] hover:text-primary duration-300 text-sm md:text-base"
              >
                <FaPhone className="w-4 h-4" />
                <span>۰۹۱۲۶۱۵۷۵۸۴ - ۰۹۱۲۱۳۹۸۳۸۵ - ۰۹۳۶۵۸۶۳۹۹۸</span>
              </a>

              <a
                href="tel:02166606444"
                className="flex items-center gap-3 text-[#d3d3d3] hover:text-primary duration-300 text-sm md:text-base"
              >
                <FaPhone className="w-4 h-4" />
                <span>۰۲۱۶۶۶۰۶۴۴۴ - ۰۲۱۶۶۶۰۶۴۴۳ - ۰۲۱۶۶۶۹۳۷۳۵</span>
              </a>

              <div className="flex items-start gap-3 text-[#d3d3d3] text-sm md:text-base">
                <FaMapMarkerAlt className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>تهران، سه راه آذری، ۴۵ متری زرند، پاساژ راهسازان</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <span className="text-white text-base md:text-lg font-bold">
                ما را دنبال کنید
              </span>

              <ul className="flex gap-4">
                <li>
                  <a
                    href="https://instagram.com/titan_yadak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-primary duration-300 group"
                  >
                    <FaInstagram className="fill-secondary group-hover:fill-white duration-300 w-5 h-5" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/989126157584"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-primary duration-300 group"
                  >
                    <FaWhatsapp className="fill-secondary group-hover:fill-white duration-300 w-5 h-5" />
                  </a>
                </li>

                <li>
                  <a
                    href="tel:02166606444"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-primary duration-300 group"
                  >
                    <FaPhone className="fill-secondary group-hover:fill-white duration-300 w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-y-5 md:w-[20%]">
            <span className="text-xl text-white md:text-2xl font-black">
              دسترسی سریع
            </span>

            <ul className="flex flex-col gap-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutUs"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  href="/bulldozer-parts"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  محصولات
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-5 md:w-[20%]">
            <span className="text-xl text-white md:text-2xl font-black">
              دسته‌بندی محصولات
            </span>

            <ul className="flex flex-col gap-y-3">
              <li>
                <Link
                  href="/bulldozer-parts?category=starter"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  استارت
                </Link>
              </li>
              <li>
                <Link
                  href="/bulldozer-parts?category=alternator"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  دینام
                </Link>
              </li>
              <li>
                <Link
                  href="/bulldozer-parts?category=sensor"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  سنسور
                </Link>
              </li>
              <li>
                <Link
                  href="/bulldozer-parts?category=wiring"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  سیم‌کشی و اتصالات
                </Link>
              </li>
              <li>
                <Link
                  href="/bulldozer-parts?category=switch"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  کلید و کنترلر
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-5 md:w-[25%]">
            <span className="text-xl text-white md:text-2xl font-black">
              برندهای تحت پوشش
            </span>

            <ul className="flex flex-col gap-y-3">
              <li>
                <Link
                  href="/bulldozer-parts?brand=komatsu"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  Komatsu
                </Link>
              </li>
              <li>
                <Link
                  href="/bulldozer-parts?brand=caterpillar"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  Caterpillar
                </Link>
              </li>
              <li>
                <Link
                  href="/bulldozer-parts?brand=hitachi"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  Hitachi
                </Link>
              </li>
              <li>
                <Link
                  href="/bulldozer-parts?brand=volvo"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  Volvo
                </Link>
              </li>
              <li>
                <Link
                  href="/bulldozer-parts"
                  className="text-primary text-sm md:text-base hover:text-secondary duration-300 font-bold"
                >
                  مشاهده همه محصولات
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="2xl:container 2xl:mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#d3d3d3] text-sm md:text-base text-center md:text-right">
              © ۱۴۰۵ تیتان یدک. تمامی حقوق محفوظ است.
            </p>

            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
              >
                حریم خصوصی
              </Link>
              <Link
                href="/terms"
                className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
              >
                قوانین و مقررات
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
