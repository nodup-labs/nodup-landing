import { Badge } from "@/components/ui/badge";

const AboutUsSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 md:gap-13 pb-16  md:text-left">
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
    </div>
  );
};

export default AboutUsSection;
