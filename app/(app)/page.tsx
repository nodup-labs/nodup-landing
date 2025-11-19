"use client";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Badge } from "@/components/ui/badge";
import BackgroundImage from "./components/backgroundImage";
import Collaboration from "./components/collaboration";
import Contact1 from "./components/Contact1";
import FAQ1 from "./components/FAQ1";
import MemberInfo from "./components/memberinfo";
import Parallax from "./components/Parallax";
import ProjectGrid from "./components/projectGrid";
import WhyChooseUs from "./components/whychoseus";

export default function Home() {
  const rotatingWords = ["اپلیکیشن ها ", "طراحی وب سایت ها", "برنامه نویسی ها"];

  return (
    <div>
      <Parallax />

      <BackgroundImage />

      <div className="container mx-auto px-4 flex flex-col gap-32">
        <div className="flex flex-wrap justify-center items-center gap-3">
          <p className="text-sm md:text-base font-medium">
            آژانس طراحی رابط و تجربه کاربری و وب برای
          </p>
          <Badge
            variant={"outline"}
            className="text-sm font-medium text-primary"
          >
            برنامه نویسی
          </Badge>
          <Badge variant={"outline"} className="text-sm font-medium">
            رابط کاربری
          </Badge>
        </div>

        <div className="text-center mt-12 md:mt-20 mx-auto relative z-30 px-4">
          <p className="flex flex-col md:flex-row items-center gap-1 justify-center text-xl md:text-2xl lg:text-5xl font-bold mb-8 leading-[1.2]">
            {/* جمله ثابت */}
            <span className="">
              شریک طراحی قابل‌اعتماد شما، با تیمی حرفه‌ای در زمینهٔ
            </span>

            {/* کلمات چرخان */}
            <WordRotate
              words={rotatingWords}
              className="r text-[#ff914d] ] bg-clip-text  w-full md:w-[365px] max-w-[365px]"
            />
          </p>

          <p className="text-base md:text-xl font-normal text-center mt-4 ]">
            ما معتقدیم ارائه‌ها باید فراتر از یک پرزنتیشن ساده باشند؛ تجربه‌هایی
            تأثیرگذار و به‌یادماندنی خلق می‌کنیم.
          </p>
        </div>

        {/* <TrustedBrands1 /> */}
        {/* <TrustedBrands1 /> */}

        {/* Our Services */}
        {/* <Services /> */}

        {/* about us */}
        {/* <AboutUsSection /> */}

        {/* Collaboration */}
        <Collaboration />

        {/* whay choose us */}
        <WhyChooseUs />

        {/* Project Grid */}
        <ProjectGrid />

        {/* pricing */}
        {/* <Pricing1 /> */}

        {/* member info */}
        <MemberInfo />

        {/* faq */}
        <FAQ1 />

        {/* contact */}
        <Contact1 />
      </div>
    </div>
  );
}
