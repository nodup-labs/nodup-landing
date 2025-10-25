import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 md:gap-2 pb-16  md:text-left">
        <Badge variant="outline" className="text-sm font-medium">
          بیشتر با ما آشنا شوید
        </Badge>
        <p className="text-2xl md:text-4xl font-bold max-w-3xl text-center leading-16 ">
          سفر نوداپ داستان خلاقیتی که به نوآوری انجامید
        </p>
        <p className="text-base md:text-xl font-normal text-neutral-300  text-center max-w-2xl leading-10">
          در نوداپ ایده‌های شما را به تجربه‌های دیجیتال زیبا، هوشمند و کاربرمحور
          تبدیل می‌کنیم.
        </p>
      </div>
      <div>
        {/* Mobile-first: stacked column on small screens. Keep original grid on lg+ (desktop) screens */}
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-7 lg:grid-rows-4">
          {/* کارت‌ها با blur و شفافیت */}
          <div className="w-full lg:col-span-2 lg:row-span-2 lg:col-start-4 lg:row-start-3 bg-gray-700/30 backdrop-blur-md border border-gray-700/40 p-5 rounded-lg">
            <div className="flex flex-col gap-5">
              <p className="text-4xl font-semibold">۱۲ هزار</p>
              <p className="text-lg font-medium">رضایت مشتریان ما</p>
            </div>
          </div>

          <div className="w-full lg:col-span-2 lg:row-span-2 lg:col-start-6 lg:row-start-3 bg-gray-700/30 backdrop-blur-md border border-gray-700/40 p-5 rounded-lg">
            <div className="flex flex-col gap-5">
              <p className="text-4xl font-semibold">2 سال</p>
              <p className="text-lg font-medium">سال تجربه</p>
            </div>
          </div>

          <div className="w-full lg:col-span-2 lg:row-span-2 lg:col-start-6 lg:row-start-1 bg-gray-700/30 backdrop-blur-md border border-gray-700/40 p-5 rounded-lg">
            <div className="flex flex-col gap-5">
              <p className="text-4xl font-semibold">+ 20</p>
              <p className="text-lg font-medium">طراحی برندهٔ جایزه</p>
            </div>
          </div>

          <div className="w-full lg:col-span-2 lg:row-span-2 lg:col-start-4 lg:row-start-1 bg-gray-700/30 backdrop-blur-md border border-gray-700/40 p-5 rounded-lg">
            <div className="flex flex-col gap-5">
              <p className="text-4xl font-semibold">+ 32</p>
              <p className="text-lg font-medium">مجموعه‌های منتخب</p>
            </div>
          </div>

          <div className="w-full lg:col-span-3 lg:row-span-4 lg:col-start-1 lg:row-start-1 bg-gray-700/30 backdrop-blur-md border border-gray-700/40 flex flex-col lg:flex-row p-5 rounded-lg">
            <div className="w-full lg:w-1/2 px-2 py-5 flex flex-col justify-evenly">
              <p className="text-xl font-bold">نوداپ چگونه کار می‌کند</p>
              <p className="text-base font-medium text-foreground">
                پیکسن ساخت ارائه را ساده و سریع می‌کند. با هوش مصنوعی و قالب‌های
                برند خود، ارائه‌ای حرفه‌ای بسازید.
              </p>
              <Button variant="outline" size="lg" className="self-start">
                آغاز همکاری با ما
                <ArrowRight className="h-5 w-5 transition-transform" />
              </Button>
            </div>
            <div className="w-full lg:w-1/2 bg-gray-500/30 backdrop-blur-md border border-gray-500/40 p-2 flex flex-col gap-5 rounded-lg">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="p-2 bg-gray-400/30 backdrop-blur-md border border-gray-400/40 rounded-lg flex gap-2 items-center justify-between"
                >
                  <p className="text-lg font-medium">شروع کار پروژه</p>
                  <div className="p-2 bg-gradient-to-r from-purple-900 to-gray-700 rounded-lg">
                    <Image
                      src={"/icon/Filed.svg"}
                      alt="icon"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
