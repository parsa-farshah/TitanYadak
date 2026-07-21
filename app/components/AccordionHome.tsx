"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    question: "چه نوع قطعاتی در تیتان یدک عرضه می‌شود؟",
    answer:
      "در تیتان یدک انواع قطعات برقی ماشین‌آلات راهسازی و معدنی مانند استارت، دینام، شیربرقی، سنسور، سوئیچ و قطعات مرتبط عرضه می‌شود.",
  },
  {
    value: "item-2",
    question: "چگونه قطعه مناسب دستگاه خود را انتخاب کنم؟",
    answer:
      "شما می‌توانید با ارائه مدل دستگاه، شماره فنی یا تصویر قطعه، از مشاوره تخصصی ما برای انتخاب دقیق و صحیح قطعه مورد نیاز استفاده کنید.",
  },
  {
    value: "item-3",
    question: "آیا قطعات ارائه‌شده از کیفیت مناسبی برخوردار هستند؟",
    answer:
      "بله، ما تلاش می‌کنیم قطعاتی باکیفیت و از برندهای معتبر ارائه دهیم تا مشتریان با اطمینان بیشتری خرید خود را انجام دهند.",
  },
];

export function AccordionHome() {
  return (
    <Accordion
      type="single"
      defaultValue="item-1"
      collapsible={false}
      dir="rtl"
      className="w-full"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="w-full border-b border-[#d9d9d9]"
        >
          <AccordionTrigger
            className="
              w-full
              flex-row-reverse
              py-6
              hover:no-underline
              [&>svg]:hidden
              group
            "
          >
            <span
              className="
                w-8 h-8
                shrink-0
                flex items-center justify-center
                text-3xl
                leading-none
                text-[#252525]
                transition-colors
                group-data-[state=open]:text-[#e85d04]
              "
            >
              <span className="group-data-[state=open]:hidden">+</span>

              <span className="hidden group-data-[state=open]:block">−</span>
            </span>

            <span
              className="
                flex-1
                text-right
                text-lg
                font-bold
                text-[#252525]
                transition-colors
                group-data-[state=open]:text-[#e85d04]
              "
            >
              {item.question}
            </span>
          </AccordionTrigger>

          <AccordionContent
            className="
              pb-6
              text-right
              leading-8
              text-[#5a5a5a]
            "
          >
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
