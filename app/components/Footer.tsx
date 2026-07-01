import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center bg-fixed mt-20"
      style={{ backgroundImage: "url('/images/bgMain.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#03071E]/90 z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 py-16 md:py-20">
        <section className="w-full flex flex-col gap-y-10 md:flex-row md:gap-8 2xl:container 2xl:mx-auto">
          {/* Logo and About */}
          <div className="flex flex-col gap-y-5 md:w-[35%]">
            <figure>
              <Image
                src="/images/logo.png"
                alt="کاربن - قطعات بلدوزر"
                width={80}
                height={80}
                loading="lazy"
              />
            </figure>
            <h3 className="text-white text-xl md:text-2xl font-black">کاربن</h3>
            <p className="text-[#d3d3d3] text-sm md:text-base leading-7">
              تأمین‌کننده معتبر قطعات یدکی ماشین‌آلات سنگین با بیش از ۲۰ سال
              تجربه. ما با ارائه محصولات اصل و باکیفیت، شریک قابل اعتماد
              پروژه‌های شما هستیم.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 mt-2">
              <a
                href="tel:+989123456789"
                className="flex items-center gap-3 text-[#d3d3d3] hover:text-primary duration-300 text-sm md:text-base"
              >
                <FaPhone className="w-4 h-4" />
                <span>۰۹۱۲-۳۴۵-۶۷۸۹</span>
              </a>
              <a
                href="mailto:info@carbon.com"
                className="flex items-center gap-3 text-[#d3d3d3] hover:text-primary duration-300 text-sm md:text-base"
              >
                <FaEnvelope className="w-4 h-4" />
                <span>info@carbon.com</span>
              </a>
              <div className="flex items-start gap-3 text-[#d3d3d3] text-sm md:text-base">
                <FaMapMarkerAlt className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>تهران، خیابان آزادی، پلاک ۱۲۳</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-3 mt-4">
              <span className="text-white text-base md:text-lg font-bold">
                ما را دنبال کنید
              </span>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="https://t.me/carbon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-primary duration-300 group"
                  >
                    <FaTelegram className="fill-secondary group-hover:fill-white duration-300 w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/carbon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-primary duration-300 group"
                  >
                    <FaInstagram className="fill-secondary group-hover:fill-white duration-300 w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/989123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-primary duration-300 group"
                  >
                    <FaWhatsapp className="fill-secondary group-hover:fill-white duration-300 w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
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
                  href="/about"
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
                  قطعات بلدوزر
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  خدمات ما
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="flex flex-col gap-y-5 md:w-[20%]">
            <span className="text-xl text-white md:text-2xl font-black">
              دسته‌بندی محصولات
            </span>
            <ul className="flex flex-col gap-y-3">
              <li>
                <Link
                  href="/bulldozer-parts?category=engine"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  قطعات موتور
                </Link>
              </li>
              <li>
                <Link
                  href="/bulldozer-parts?category=hydraulic"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  سیستم هیدرولیک
                </Link>
              </li>
              <li>
                <Link
                  href="/bulldozer-parts?category=transmission"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  گیربکس و ترانسمیشن
                </Link>
              </li>
              <li>
                <Link
                  href="/bulldozer-parts?category=undercarriage"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  زیربنای خودرو
                </Link>
              </li>
              <li>
                <Link
                  href="/bulldozer-parts?category=electrical"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  سیستم الکتریکی
                </Link>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div className="flex flex-col gap-y-5 md:w-[25%]">
            <span className="text-xl text-white md:text-2xl font-black">
              برندهای همکار
            </span>
            <ul className="flex flex-col gap-y-3">
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
                  href="/bulldozer-parts?brand=komatsu"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  Komatsu
                </Link>
              </li>
              <li>
                <Link
                  href="/bulldozer-parts?brand=liebherr"
                  className="text-[#d3d3d3] text-sm md:text-base hover:text-primary duration-300"
                >
                  Liebherr
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
                  مشاهده همه برندها ←
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="2xl:container 2xl:mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#d3d3d3] text-sm md:text-base text-center md:text-right">
              © ۱۴۰۵ کاربن. تمامی حقوق محفوظ است.
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
