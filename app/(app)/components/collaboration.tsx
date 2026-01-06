"use client";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import CollaborationCard from "./CollaborationCard";

const Collaboration = () => {
  const cards = [
    {
      number: 1,
      title: "مشاوره و شناخت مسئله",
      description:
        "در یک جلسه اولیه، اهداف، نیازها و چالش‌های کسب‌وکار شما را بررسی می‌کنیم تا تصویر روشنی از مسیر پروژه داشته باشیم.",
    },
    {
      number: 2,
      title: "تحلیل و طراحی راه‌حل",
      description:
        "با تحلیل بازار، رقبا و نیازهای کاربران، بهترین راه‌حل متناسب با کسب‌وکار شما طراحی می‌شود.",
    },
    {
      number: 3,
      title: "طراحی و توسعه محصول",
      description:
        "راه‌حل طراحی‌شده وارد فاز اجرا می‌شود؛ از طراحی تجربه کاربری تا توسعه فنی با تمرکز بر کیفیت و جزئیات.",
    },
    {
      number: 4,
      title: "تحویل، ارزیابی و پشتیبانی",
      description:
        "پس از تحویل پروژه، کنار شما می‌مانیم؛ با بررسی عملکرد و پشتیبانی مستمر برای رشد بهتر محصول.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 1500);

    return () => clearInterval(timer);
  }, [cards.length]);
  return (
    <div id="How do we work?">
      <div className="flex flex-col items-center gap-6 md:gap-2 pb-16  md:text-left">
        <Badge variant="outline" className="text-sm font-medium mb-4">
          ما چگونه کار می‌کنیم؟
        </Badge>
        <p className="text-xl md:text-4xl font-bold text-center leading-16">
          مسیر ما برای ساخت محصول
        </p>
        <p className="text-base md:text-xl font-normal text-neutral-300 text-center leading-10">
          از شناخت مسئله تا طراحی و توسعه، هر قدم با هدف خلق ارزش واقعی برداشته
          می‌شود.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative mb-36 px-2 md:px-0">
        {cards.map((card, idx) => (
          <CollaborationCard
            key={idx}
            number={card.number}
            title={card.title}
            description={card.description}
            active={idx === activeIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Collaboration;
