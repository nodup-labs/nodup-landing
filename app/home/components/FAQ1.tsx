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
        "به‌عنوان یک آژانس طراحی رابط و تجربه کاربری، روی چه مواردی تمرکز می‌کنید؟",
      answer:
        "در نوداپ ما طراحی‌هایی جسورانه و کاربرمحور خلق می‌کنیم که برند و حضور دیجیتال شما را ارتقا می‌دهند. ما فقط از ترندها پیروی نمی‌کنیم؛ آن‌ها را شکل می‌دهیم. طراحی‌های ما با تکیه بر بینش و درک عمیق، تجربه‌هایی می‌سازند که تأثیری ماندگار بر جای می‌گذارند",
    },
    {
      question:
        "چه چیزی نوداپ را از سایر آژانس‌های برتر طراحی UI/UX متمایز می‌کند؟",
      answer:
        "نوداپ با تمرکز بر طراحی کاربرمحور، نوآوری استراتژیک و تیمی متخصص، فراتر از ترندها عمل می‌کند تا تجربه‌هایی خلق کند که متمایز و ماندگار باشند.",
    },
    {
      question:
        "چه خدماتی برای استارتاپ‌ها ارائه می‌دهید و این خدمات چگونه می‌توانند به کسب‌وکار من ارزش اضافه کنند؟",
      answer:
        "ما برای استارتاپ‌ها خدمات جامعی ارائه می‌کنیم، از طراحی رابط و تجربه کاربری و توسعه وب‌سایت تا ساخت پروتوتایپ‌های دقیق و مشاوره استراتژیک. این خدمات باعث می‌شوند استارتاپ شما سریع‌تر رشد کند، تجربه کاربری بهتری ارائه دهد و جایگاه برند شما در بازار تقویت شود.",
    },
    {
      question:
        "آیا می‌خواهید اپلیکیشن، وب‌سایت یا نرم‌افزار سازمانی خود را که برای استفاده سایر شرکت‌ها طراحی شده، بازطراحی کنید؟ تیم متخصص ما آماده است تا با رویکردی مدرن و کاربرمحور، تجربه‌ای حرفه‌ای و اثربخش برای کاربران شما خلق کند.؟",
      answer:
        "بله! تیم متخصص ما می‌تواند اپلیکیشن، وب‌سایت یا نرم‌افزار سازمانی شما، که برای استفاده سایر شرکت‌ها طراحی شده، را بازطراحی کند. هدف ما ارائه تجربه‌ای مدرن، کاربرمحور و اثربخش است که هم نیازهای کسب‌وکار شما را پوشش دهد و هم رضایت کاربران را افزایش دهد.",
    },
    {
      question:
        "چگونه زمان‌بندی پروژه طراحی رابط و تجربه کاربری را برآورد می‌کنید؟",
      answer:
        "زمان پروژه‌های طراحی رابط و تجربه کاربری را بر اساس نیازها، پیچیدگی طراحی، تعداد صفحات و ویژگی‌های موردنظر شما برآورد می‌کنیم. تیم ما با تحلیل دقیق و برنامه‌ریزی مرحله‌ای، اطمینان حاصل می‌کند که هر پروژه به موقع و با کیفیت بالا تحویل داده شود.",
    },
    {
      question: "هزینه یک پروژه طراحی رابط و تجربه کاربری چقدر است؟",
      answer:
        "هزینه پروژه‌های طراحی رابط و تجربه کاربری بسته به پیچیدگی، تعداد صفحات، ویژگی‌های موردنیاز و نوع پلتفرم متفاوت است. تیم ما پس از بررسی دقیق نیازها، یک برآورد شفاف و منصفانه ارائه می‌دهد تا بهترین ارزش را برای سرمایه‌گذاری شما فراهم کند.",
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
            FAQ
          </Badge>

          <CustomTitle>سوالات متداول</CustomTitle>

          <CustomSubtitle>
            سوالی دارید؟ ما جوابش را داریم! در ادامه با متداول‌ترین پرسش‌ها
            درباره قیمت‌ها و خدمات ما آشنا شوید.
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
                  className="bg-gray-700/30 rounded-lg border! border-border px-6 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-start font-semibold text-foreground hover:text-indigo-600 data-[state=open]:text-indigo-600 transition-colors cursor-pointer">
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
            className="text-indigo-600 hover:text-indigo-700 transition-colors hover:underline"
          >
            با تیم پشتیبانی ما تماس بگیرید
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ1;
