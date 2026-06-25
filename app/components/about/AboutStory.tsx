// components/about/AboutStory.tsx
import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="2xl:container 2xl:mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* تصویر */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/bgMain.jpg"
              alt="داستان ما"
              fill
              className="object-cover"
            />
          </div>

          {/* متن */}
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-[#03071E] mb-6 relative inline-block">
              داستان ما
              <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-primary"></span>
            </h2>
            <p className="text-[#03071E] text-base md:text-lg leading-relaxed mb-4">
              از سال 2004، ما با تمرکز بر کیفیت و اعتماد، در زمینه تامین و نمایش
              ماشین‌آلات سنگین فعالیت می‌کنیم. آنچه ما را متمایز می‌کند، تعهد به
              ارائه بهترین محصولات و خدمات به مشتریان است.
            </p>
            <p className="text-[#03071E] text-base md:text-lg leading-relaxed mb-4">
              تیم ما متشکل از متخصصان با تجربه‌ای است که درک عمیقی از نیازهای
              صنعت دارند. ما نه تنها محصول ارائه می‌دهیم، بلکه راهکار ارائه
              می‌کنیم.
            </p>
            <p className="text-[#03071E] text-base md:text-lg leading-relaxed">
              رضایت شما، موفقیت ماست. به خانواده بزرگ مشتریان راضی ما بپیوندید.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
