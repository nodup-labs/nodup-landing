"use client";
import Header from "@/components/header";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Badge } from "@/components/ui/badge";
import AnimatedBackground from "./components/AnimatedBackground";
import BackgroundImage from "./components/backgroundImage";
import Parallax from "./components/Parallax";
import Services from "./components/services";
import TrustedBrands1 from "./components/TrustedBrands1";
import AboutUsSection from "./components/aboutus-section";

export default function Home() {
  const rotatingWords = ["اپلیکیشن ها ", "طراحی وب سایت ها", "برنامه نویسی ها"];

  return (
    <AnimatedBackground>
      <Header />
      <Parallax />

      <BackgroundImage />

      <div className="container mx-auto px-4 flex flex-col gap-32">
        <div className="flex flex-wrap justify-center items-center gap-3">
          <p className="text-sm md:text-base font-medium">
            آژانس طراحی رابط و تجربه کاربری و وب برای
          </p>
          <Badge variant={"outline"} className="text-sm font-medium">
            برنامه نویسی
          </Badge>
          <Badge variant={"outline"} className="text-sm font-medium">
            رابط کاربری
          </Badge>
        </div>

        <div className="text-center mt-12 md:mt-20 mx-auto relative z-30 px-4">
          <p className="flex flex-col md:flex-row items-center gap-1 justify-center text-xl md:text-2xl lg:text-5xl font-bold mb-8 leading-[1.2]">
            <span className="bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 dark:from-gray-50 dark:via-blue-300 dark:to-indigo-900 bg-clip-text text-transparent">
              شریک طراحی قابل‌اعتماد شما، با تیمی حرفه‌ای در زمینهٔ
            </span>
            <WordRotate
              words={rotatingWords}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent w-full md:w-[365px] max-w-[365px]"
            />
          </p>
          <p className="text-base md:text-xl font-normal text-center mt-4">
            ما معتقدیم ارائه‌ها باید فراتر از یک پرزنتیشن ساده باشند؛ تجربه‌هایی
            تأثیرگذار و به‌یادماندنی خلق می‌کنیم.
          </p>
        </div>

        <TrustedBrands1 />

        {/* Our Services */}
        <Services />

        {/* about us */}
        <AboutUsSection />
      </div>
    </AnimatedBackground>
  );
}
