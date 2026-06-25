// components/about/AboutStats.tsx
export default function AboutStats() {
  const stats = [
    { number: "+20", label: "سال تجربه" },
    { number: "+5000", label: "مشتری راضی" },
    { number: "+500", label: "نوع محصول" },
    { number: "24/7", label: "پشتیبانی" },
  ];

  return (
    <section className="bg-[#F5F5F5] py-16">
      <div className="2xl:container 2xl:mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-8 bg-white overflow-hidden group cursor-pointer
                before:content-[''] before:w-10 before:h-10 md:before:w-20 md:before:h-20
                before:bg-[#F5F5F5] before:absolute before:-bottom-5 before:-left-5
                md:before:-bottom-10 md:before:-left-10 before:rotate-45 before:duration-500
                "
            >
              <h3 className="text-4xl md:text-5xl font-black text-primary mb-3 group-hover:text-secondary duration-500">
                {stat.number}
              </h3>
              <p className="text-[#252525] text-base md:text-lg font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
