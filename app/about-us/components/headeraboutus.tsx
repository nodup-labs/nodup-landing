"use client";
import TrustedBrands1 from "@/app/(app)/components/TrustedBrands1";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const HeaderAboutUs = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 md:gap-2 pb-16  md:text-left">
        <Badge variant="outline" className="text-sm font-medium">
          درباره شرکت
        </Badge>
        <p className="text-2xl md:text-4xl font-bold  text-center leading-16 ">
          تیم ما با ترکیب{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            نوآوری در طراحی و تخصصی بی‌نظیر
          </span>
          ، راه‌حل‌هایی متمایز ارائه می‌دهد.
        </p>
        <p className="text-base md:text-xl font-normal text-neutral-300  text-center  leading-10">
          ما کارمون رو به‌عنوان یه تیم پنج‌نفره شروع کردیم که باور داشتیم طراحی
          و کدنویسی باید کاری فراتر از زیبا بودن انجام بدن — باید زندگی رو
          راحت‌تر، هوشمندتر و انسانی‌تر کنن. امروز ما یه تیم جهانی هستیم که
          محصولات دیجیتالی می‌سازیم تا این باور رو در هر تجربه‌ای زنده کنیم
        </p>
      </div>
      <div className="w-full">
        <div className="relative w-full h-[280px] md:h-[380px] lg:h-[520px]">
          <Image
            src="/screens/team.png"
            alt="team"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
      <TrustedBrands1 />
    </div>
  );
};

export default HeaderAboutUs;
