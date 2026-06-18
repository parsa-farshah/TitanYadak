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
    question: "چگونه رمز عبور خود را بازیابی کنم؟",
    answer:
      "روی گزینه «فراموشی رمز عبور» در صفحه ورود کلیک کنید، ایمیل خود را وارد کنید تا لینک بازیابی برای شما ارسال شود.",
  },
  {
    value: "item-2",
    question: "آیا می‌توانم پلن اشتراک خود را تغییر دهم؟",
    answer:
      "بله، در هر زمان می‌توانید از بخش تنظیمات حساب کاربری، پلن خود را ارتقا یا کاهش دهید.",
  },
  {
    value: "item-3",
    question: "چه روش‌های پرداختی را پشتیبانی می‌کنید؟",
    answer:
      "ما از کارت‌های بانکی، پرداخت آنلاین و سایر روش‌های پرداخت امن پشتیبانی می‌کنیم.",
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
