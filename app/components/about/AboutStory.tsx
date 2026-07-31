
import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="2xl:container 2xl:mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* تصویر */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden shadow-2xl">
            <Image
              src="/images/logoMain.png"
              alt="داستان تیتان یدک"
              fill
              className="object-contain"
            />
          </div>

          {/* متن */}
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-[#03071E] mb-6 relative inline-block">
              داستان تیتان یدک
              <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-primary"></span>
            </h2>
            <p className="text-[#03071E] text-base md:text-lg leading-relaxed mb-4">
              تیتان یدک با پشتوانه سال‌ها تجربه در حوزه تأمین قطعات برقی
              ماشین‌آلات راهسازی و معدنی، فعالیت خود را بر پایه کیفیت، اصالت کالا
              و اعتماد مشتریان بنا کرده است. هدف ما از ابتدا، ارائه قطعاتی مطمئن
              برای حفظ عملکرد پیوسته و دقیق ماشین‌آلات سنگین بوده است.
            </p>
            <p className="text-[#03071E] text-base md:text-lg leading-relaxed mb-4">
              ما با شناخت دقیق نیاز فعالان این صنعت، مجموعه‌ای تخصصی از استارت،
              دینام، شیربرقی، سنسور و سایر قطعات برقی را فراهم کرده‌ایم تا
              مشتریان بتوانند با اطمینان بیشتری انتخاب و خرید کنند.
            </p>
            <p className="text-[#03071E] text-base md:text-lg leading-relaxed">
              اعتماد و رضایت مشتریان، سرمایه اصلی تیتان یدک است و ما همواره
              تلاش می‌کنیم با مشاوره تخصصی و تأمین قطعات باکیفیت، همراهی مطمئن
              برای کسب‌وکار شما باشیم.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
