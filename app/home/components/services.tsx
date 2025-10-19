import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="px-4 md:px-16 pb-10">
      <div className="flex flex-col items-center gap-6 md:gap-13 pb-16  md:text-left">
        <Badge variant="outline" className="text-sm font-medium">
          خدمات ما
        </Badge>
        <p className="text-2xl md:text-4xl font-bold max-w-3xl text-center leading-16 ">
          حرفه‌ای‌تر برای سایت آژانس: «با نوآوری‌های دیجیتال ما، کسب‌وکارتان را
          متحول کنید»
        </p>
        <p className="text-base md:text-xl font-normal text-neutral-300  text-center max-w-2xl leading-10">
          در Pixen، با تکیه بر طراحی‌های جسورانه و تمرکز بر تجربه‌ی کاربر، به
          رشد و ارتقای برند دیجیتال شما کمک می‌کنیم
        </p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-6 md:grid-rows-6 gap-4">
        <div className="bg-gray-900 rounded-lg flex flex-col md:flex-row justify-between relative md:col-span-3 md:row-span-3 w-full">
          <div className="flex flex-col gap-3 p-5">
            <div className="p-1 bg-gray-800 rounded-lg w-16 h-16">
              <Image
                src={"/icon/Path-9.svg"}
                alt="icon"
                width={60}
                height={60}
              />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-2xl md:text-3xl font-semibold">
                طراحی رابط و تجربه کاربری
              </p>
              <p className="text-sm md:text-lg font-medium text-neutral-300">
                ما به شما کمک می‌کنیم وب‌سایتی مدرن و کاربرمحور بسازید، با
                طراحی‌ای تمیز و تجربه‌ای بهینه برای موتورهای جستجو.
              </p>
              <Button variant="outline" size="lg" className="self-start">
                آغاز همکاری با ما
                <ArrowRight className="h-5 w-5 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="pt-5 md:pt-0">
            <Image
              src="/screens/bgserver2.png"
              alt="server background"
              width={330}
              height={330}
              className="rounded-lg transform scale-x-[-1] "
            />
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg flex flex-col md:flex-row justify-between md:col-span-3 md:row-span-3 w-full">
          <div className="flex flex-col gap-3 p-5">
            <div className="p-1 bg-gray-800 rounded-lg w-16 h-16">
              <Image
                src={"/icon/World.svg"}
                alt="icon"
                width={60}
                height={60}
              />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-2xl md:text-3xl font-semibold">
                توسعه وب‌سایت
              </p>
              <p className="text-sm md:text-lg font-medium text-neutral-300">
                ما به شما کمک می‌کنیم وب‌سایتی مدرن، کاربرمحور و بهینه برای سئو
                بسازید — با طراحی‌ای ساده، تمیز و تأثیرگذار
              </p>
              <Button variant="outline" size="lg" className="self-start">
                آغاز همکاری با ما
                <ArrowRight className="h-5 w-5 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="pt-5 md:pt-0">
            <Image
              src="/screens/bgserves.png"
              alt="1"
              width={780}
              height={780}
              className="rounded-lg transform scale-x-[-1]"
            />
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg flex items-center justify-center h-40 w-full md:col-span-2 md:row-span-3">
          3
        </div>
        <div className="bg-purple-800 rounded-lg flex items-center justify-center h-40 w-full md:col-span-2 md:row-span-3">
          4
        </div>
        <div className="bg-teal-500 rounded-lg flex items-center justify-center h-40 w-full md:col-span-2 md:row-span-3">
          5
        </div>
      </div>
    </div>
  );
};

export default Services;
