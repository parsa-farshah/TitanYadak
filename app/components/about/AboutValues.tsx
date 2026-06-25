// components/about/AboutValues.tsx
export default function AboutValues() {
  const values = [
    {
      title: "کیفیت",
      description:
        "ما تنها با برندهای معتبر جهانی همکاری می‌کنیم و کیفیت را در اولویت قرار می‌دهیم",
      icon: "⭐",
    },
    {
      title: "اعتماد",
      description:
        "اعتماد شما سرمایه ماست و تمام تلاش خود را برای حفظ آن به کار می‌بریم",
      icon: "🤝",
    },
    {
      title: "نوآوری",
      description:
        "همواره در جستجوی راهکارهای نوین و بهبود مستمر خدمات خود هستیم",
      icon: "💡",
    },
    {
      title: "پشتیبانی",
      description: "تیم پشتیبانی ما 24 ساعته آماده پاسخگویی و کمک به شماست",
      icon: "🛠️",
    },
  ];

  return (
    <section className="bg-[#03071E] py-20 px-6">
      <div className="2xl:container 2xl:mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-12">
          ارزش‌های ما
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative bg-white p-8  text-center overflow-hidden group cursor-pointer
                before:content-[''] before:w-10 before:h-10 md:before:w-16 md:before:h-16
                before:bg-[#03071E] before:absolute before:-bottom-5 before:-left-5
                md:before:-bottom-8 md:before:-left-8 before:rotate-45 before:duration-500
                after:content-[''] after:w-10 after:h-10 md:after:w-16 md:after:h-16
                after:bg-[#03071E] after:absolute after:-top-5 after:-right-5
                md:after:-top-8 md:after:-right-8 after:rotate-45 after:duration-500
                hover:bg-secondary hover:text-white duration-500"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 duration-500 relative z-10">
                {value.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-[#03071E] group-hover:text-white duration-500 mb-3 relative z-10">
                {value.title}
              </h3>
              <p className="text-base md:text-lg text-[#03071E] group-hover:text-[#d3d3d3] duration-500 relative z-10">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
