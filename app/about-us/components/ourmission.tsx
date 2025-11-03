"use client";
import { Badge } from "@/components/ui/badge";
import CardItem from "./CardItem";
import { motion } from "framer-motion";

const OurMission = () => {
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
  ];
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-25"
      >
        <div className="flex justify-between">
          <div className="w-4/12 flex flex-col gap-4">
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
          <div className="w-1/2">
            <div className="flex flex-col gap-6 md:gap-2 pb-16 ">
              <Badge variant="outline" className="text-sm font-medium">
                ماموریت ما
              </Badge>
              <p className="text-2xl md:text-4xl font-bold max-w-4xl  leading-16 ">
                ماموریتی که در قلب ما جریان دارد و مسیر هدفمان را هدایت می‌کند.
              </p>
              <p className="text-base md:text-xl font-normal text-neutral-300   max-w-2xl leading-10">
                ماموریت ما خلق راه‌حل‌های نوآورانه‌ای است که با همکاری و
                هم‌افزایی، به توانمندسازی انسان‌ها و ساختن آینده‌ای بهتر کمک
                می‌کنند.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurMission;
