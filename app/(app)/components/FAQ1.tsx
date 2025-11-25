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
        "تیم طراحی ما در تجربه کاربری و رابط، روی چه چیزهایی تمرکز دارد تا بهترین تجربه را بسازد؟",
      answer:
        "در نوداپ، طراحی‌های جسورانه و کاربرمحور ما برند شما را تقویت می‌کنند. ما ترندها را نمی‌سازیم، آن‌ها را خلق می‌کنیم و تجربه‌هایی ماندگار برای کاربران ایجاد می‌کنیم.",
    },
    {
      question:
        "چه چیزی باعث می‌شود نوداپ در طراحی رابط و تجربه کاربری متفاوت و منحصربه‌فرد باشد؟",
      answer:
        "نوداپ با تمرکز بر طراحی کاربرمحور، نوآوری استراتژیک و تیمی متخصص، فراتر از ترندها عمل می‌کند و تجربه‌هایی متمایز و ماندگار خلق می‌کند.",
    },
    {
      question:
        "چه خدماتی برای استارتاپ‌ها ارائه می‌کنید و چگونه می‌توانند به کسب‌وکار من ارزش اضافه کنند؟",
      answer:
        "ما برای استارتاپ‌ها خدمات جامعی ارائه می‌کنیم؛ از طراحی رابط و تجربه کاربری و توسعه وب‌سایت تا ساخت پروتوتایپ و مشاوره استراتژیک. این خدمات رشد سریع‌تر، تجربه کاربری بهتر و تقویت جایگاه برند شما را ممکن می‌سازند.",
    },
    {
      question:
        "آیا می‌خواهید اپلیکیشن، وب‌سایت یا نرم‌افزار سازمانی خود را بازطراحی کنید؟ تیم متخصص ما با رویکردی مدرن و کاربرمحور، تجربه‌ای حرفه‌ای و اثربخش برای کاربران شما خلق می‌کند.",
      answer:
        "بله! تیم متخصص ما می‌تواند اپلیکیشن، وب‌سایت یا نرم‌افزار سازمانی شما را بازطراحی کند. هدف ما ارائه تجربه‌ای مدرن، کاربرمحور و اثربخش است که هم نیازهای کسب‌وکار و هم رضایت کاربران را تأمین کند.",
    },
    {
      question:
        "چگونه زمان‌بندی پروژه‌های طراحی رابط و تجربه کاربری را برآورد می‌کنید؟",
      answer:
        "زمان پروژه‌های طراحی UI/UX را بر اساس نیازها، پیچیدگی طراحی و ویژگی‌های موردنظر شما برآورد می‌کنیم. تیم ما با برنامه‌ریزی دقیق، اطمینان می‌دهد که هر پروژه به موقع و با کیفیت بالا تحویل شود.",
    },
    {
      question: "هزینه یک پروژه طراحی رابط و تجربه کاربری چقدر است",
      answer:
        "هزینه پروژه‌های طراحی UI/UX بسته به پیچیدگی، تعداد صفحات و ویژگی‌های موردنیاز متفاوت است. ما پس از بررسی دقیق نیازهای شما، یک برآورد شفاف و منصفانه ارائه می‌کنیم تا بهترین ارزش را دریافت کنید.",
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

          <CustomTitle>سوالات متداول</CustomTitle>

          <CustomSubtitle>
            "سؤالی دارید؟ ما اینجاییم تا پاسخ بدهیم. در ادامه با رایج‌ترین
            پرسش‌های مربوط به قیمت و خدمات آشنا شوید."
          </CustomSubtitle>
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
