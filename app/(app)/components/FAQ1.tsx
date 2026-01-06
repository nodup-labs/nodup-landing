import { CustomSubtitle } from "@/components/custom/subtitle";
import { CustomTitle } from "@/components/custom/title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const FAQ1 = () => {
  const faqs = [
    {
      question:
        "تیم طراحی ما روی چه چیزهایی تمرکز دارد تا بهترین تجربه را بسازد؟",
      answer:
        "ما روی تجربه کاربری واقعی تمرکز می‌کنیم، طراحی‌ها را کاربرمحور و هدفمند می‌سازیم و تجربه‌هایی ایجاد می‌کنیم که اثرگذاری و کاربرد واقعی داشته باشند.",
    },
    {
      question: "چه چیزی نوداپ را در طراحی متفاوت می‌کند؟",
      answer:
        "تمرکز ما روی نوآوری استراتژیک و تیم متخصص است؛ نه ترندهای کوتاه‌مدت، بلکه خلق تجربه‌ای متمایز و ارزشمند برای کاربران.",
    },
    {
      question:
        "چه خدماتی برای استارتاپ‌ها ارائه می‌دهید و چگونه ارزش می‌سازند؟",
      answer:
        "ما خدمات جامع طراحی UI/UX، توسعه وب و پروتوتایپ ارائه می‌کنیم. این خدمات رشد سریع‌تر، تجربه بهتر و تقویت برند شما را ممکن می‌کنند.",
    },
    {
      question: "آیا می‌توانید اپلیکیشن یا وب‌سایت ما را بازطراحی کنید؟",
      answer:
        "بله! تیم ما با رویکرد مدرن و کاربرمحور، تجربه‌ای اثربخش و حرفه‌ای ایجاد می‌کند که هم نیازهای کسب‌وکار و هم رضایت کاربران را تأمین می‌کند.",
    },
    {
      question: "چگونه زمان‌بندی پروژه‌ها را برآورد می‌کنید؟",
      answer:
        "بر اساس نیازها و پیچیدگی پروژه، زمان دقیق برآورد می‌شود. تیم ما برنامه‌ریزی دقیقی انجام می‌دهد تا پروژه به موقع و با کیفیت تحویل شود.",
    },
    {
      question: "هزینه یک پروژه طراحی چقدر است؟",
      answer:
        "هزینه بر اساس پیچیدگی، تعداد صفحات و ویژگی‌ها متغیر است. پس از بررسی دقیق، برآوردی شفاف و منصفانه ارائه می‌کنیم.",
    },
  ];

  return (
    <section className="py-24 " id="faq">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-col text-center gap-5 mb-25"
        >
          <Badge variant="outline" className="text-sm font-medium">
            سؤالات متداول
          </Badge>
          <p className="text-2xl md:text-4xl font-bold  text-center leading-16 ">
            سؤالات متداول
          </p>

          <p className="ttext-base md:text-xl font-normal text-neutral-300 text-center  leading-10">
            هر سوالی دارید، اینجاییم پاسخ بدهیم. در ادامه رایج‌ترین پرسش‌ها
            درباره خدمات و قیمت را می‌بینید.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white/10 rounded-lg border! border-border px-6 hover:shadow-md transition-shadow backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-start font-semibold text-foreground hover:text-[#ff914d] data-[state=open]:text-[#ff914d] transition-colors cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-1.5 text-center mt-12"
        >
          <span className="text-muted-foreground">هنوز سوالی دارید؟</span>

          <Link
            href="#contact"
            className="text-[#ff914d] hover:text-[#ff914d]transition-colors hover:underline"
          >
            با تیم پشتیبانی ما تماس بگیرید
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ1;
