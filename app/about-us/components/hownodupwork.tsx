"use client";
import { Badge } from "@/components/ui/badge";
import CardItem from "./CardItem";
import { motion } from "framer-motion";

const HowNodupWork = () => {
  const cards = [
    {
      title: "پیاده‌سازی",
      icon: "/icon/Implementationicon.svg",
      description:
        "پیاده‌سازی جایی‌ست که چشم‌انداز به واقعیت تبدیل می‌شود جایی که ایده‌ها و استراتژی‌ها از طریق هماهنگی دقیق و اجرای هدفمند به نتایج قابل اندازه‌گیری بدل می‌شوند.",
      colClass: "col-span-2 row-span-3 md:col-span-2 md:row-span-3",
    },
    {
      title: "طراحی",
      icon: "/icon/Design.svg",
      description:
        "طراحی یعنی تبدیل ایده‌ها به تجربه‌هایی جذاب و کاربردی، جایی که خلاقیت و دقت با هم تلفیق شده و هم زیبایی و هم عملکرد را به کاربران ارائه می‌کند.",
      colClass:
        "col-span-2 row-span-3 md:col-start-3 md:col-span-2 md:row-span-3",
    },
    {
      title: "کشف کنید",
      icon: "/icon/Discover.svg",
      description:
        "مرحله‌ی کشف جایی است که ایده‌ها، فرصت‌ها و بینش‌های تازه نمایان می‌شوند؛ جایی برای کاوش امکانات و جمع‌آوری دانش برای خلق راه‌حل‌های نوآورانه",
      colClass:
        "col-span-2 row-span-3 md:col-start-5 md:col-span-2 md:row-span-3",
    },
    {
      title: "شروع پروژه",
      icon: "/icon/Project Kickoff.svg",
      description:
        "شروع پروژه، جایی است که اهداف روشن می‌شوند، محدوده کار تعیین می‌گردد، زمان‌بندی‌ها تنظیم می‌شوند و تیم با هماهنگی کامل آماده اجرای بی‌نقص پروژه می‌شود.",
      colClass:
        "col-span-2 row-span-3 md:col-start-7 md:col-span-2 md:row-span-3",
    },
  ];
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center justify-center flex-col text-center gap-5 mb-25"
      >
        <div className="flex flex-col items-center gap-6 md:gap-2 pb-16  md:text-left">
          <Badge variant="outline" className="text-sm font-medium">
            نوداپ چجوری کار می‌کنه؟
          </Badge>
          <p className="text-2xl md:text-4xl font-bold  text-center leading-16 ">
            فرآیند
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              نوداپ
            </span>
            تبدیل ایده‌های جسورانه به واقعیت‌های تأثیرگذار
          </p>
          <p className="text-base md:text-xl font-normal text-neutral-300  text-center  leading-10">
            نوداپ با قدرت هوش مصنوعی، روند ساخت پرزنتیشن را متحول می‌کند —
            سریع‌تر بساز، هوشمندتر کار کن، و در زمان کمتر نتیجه‌ی بیشتر بگیر.
          </p>
        </div>
        <div className="pb-14">
          <div className="grid grid-cols-1 md:grid-cols-8 gap-5">
            {cards.map((card, index) => (
              <CardItem
                key={index}
                title={card.title}
                icon={card.icon}
                description={card.description}
                colClass={card.colClass}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HowNodupWork;
