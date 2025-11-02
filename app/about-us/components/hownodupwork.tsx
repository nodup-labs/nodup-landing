import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const HowNodupWork = () => {
  return (
    <div>
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
          نوداپ با قدرت هوش مصنوعی، روند ساخت پرزنتیشن را متحول می‌کند — سریع‌تر
          بساز، هوشمندتر کار کن، و در زمان کمتر نتیجه‌ی بیشتر بگیر.
        </p>
      </div>
      <div className="pb-14">
        <div className="grid grid-cols-8 grid-rows-3 gap-5">
          <div className="col-span-2 row-span-3 bg-gray-700/30 border rounded-lg p-3 relative flex flex-col gap-7">
            <div className="bg-gray-400/30 rounded-lg p-3 w-11 h-11 flex items-center justify-center">
              <Image
                src={"/icon/Implementationicon.svg"}
                alt="icon"
                width={24}
                height={24}
              />
            </div>
            <Image
              src={"/screens/Graphics.svg"}
              alt="server background"
              width={330}
              height={330}
              className="transform scale-x-[-1] absolute left-0 top-0"
            />
            <p className="font-medium text-xl">پیاده‌سازی</p>
            <p className="text-sm font-normal">
              پیاده‌سازی جایی‌ست که چشم‌انداز به واقعیت تبدیل می‌شود جایی که
              ایده‌ها و استراتژی‌ها از طریق هماهنگی دقیق و اجرای هدفمند به نتایج
              قابل اندازه‌گیری بدل می‌شوند.
            </p>
          </div>
          <div className="col-span-2 row-span-3 col-start-3 bg-gray-700/30 border rounded-lg p-3 relative flex flex-col gap-7">
            <div className="bg-gray-400/30 rounded-lg p-3 w-11 h-11 flex items-center justify-center">
              <Image
                src={"/icon/Design.svg"}
                alt="icon"
                width={24}
                height={24}
              />
            </div>
            <Image
              src={"/screens/Graphics.svg"}
              alt="server background"
              width={330}
              height={330}
              className="transform scale-x-[-1] absolute left-0 top-0"
            />
            <p className="font-medium text-xl">طراحی</p>
            <p className="text-sm font-normal">
              طراحی یعنی تبدیل ایده‌ها به تجربه‌هایی جذاب و کاربردی، جایی که
              خلاقیت و دقت با هم تلفیق شده و هم زیبایی و هم عملکرد را به کاربران
              ارائه می‌کند.
            </p>
          </div>
          <div className="col-span-2 row-span-3 col-start-5 bg-gray-700/30 border rounded-lg p-3 relative flex flex-col gap-7">
            <div className="bg-gray-400/30 rounded-lg p-3 w-11 h-11 flex items-center justify-center">
              <Image
                src={"/icon/Discover.svg"}
                alt="icon"
                width={24}
                height={24}
              />
            </div>
            <Image
              src={"/screens/Graphics.svg"}
              alt="server background"
              width={330}
              height={330}
              className="transform scale-x-[-1] absolute left-0 top-0"
            />
            <p className="font-medium text-xl">کشف کنید</p>
            <p className="text-sm font-normal">
              مرحله‌ی کشف جایی است که ایده‌ها، فرصت‌ها و بینش‌های تازه نمایان
              می‌شوند؛ جایی برای کاوش امکانات و جمع‌آوری دانش برای خلق
              راه‌حل‌های نوآورانه
            </p>
          </div>
          <div className="col-span-2 row-span-3 col-start-7 bg-gray-700/30 border rounded-lg p-3 relative flex flex-col gap-7">
            <div className="bg-gray-400/30 rounded-lg p-3 w-11 h-11 flex items-center justify-center">
              <Image
                src={"/icon/Project Kickoff.svg"}
                alt="icon"
                width={24}
                height={24}
              />
            </div>
            <Image
              src={"/screens/Graphics.svg"}
              alt="server background"
              width={330}
              height={330}
              className="transform scale-x-[-1] absolute left-0 top-0"
            />
            <p className="font-medium text-xl">شروع پروژه</p>
            <p className="text-sm font-normal">
              شروع پروژه، جایی است که اهداف روشن می‌شوند، محدوده کار تعیین
              می‌گردد، زمان‌بندی‌ها تنظیم می‌شوند و تیم با هماهنگی کامل آماده
              اجرای بی‌نقص پروژه می‌شود.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowNodupWork;
