import { Badge } from "@/components/ui/badge";
import Features1 from "./Features1";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 md:gap-2 pb-16  md:text-left">
        <Badge variant="outline" className="text-sm font-medium">
          چرا نوداپ
        </Badge>
       <p className="text-2xl md:text-4xl font-bold max-w-3xl text-center leading-16">
  چرا تیم‌ها نودآپ را انتخاب می‌کنند؟
</p>

<p className="text-base md:text-xl font-normal text-neutral-300 text-center  leading-10">
  چون برای ما، طراحی فقط ظاهر نیست؛ تصمیمی است که روی محصول، کاربر و رشد تأثیر می‌گذارد.
</p>
      </div>
      <div>
        <Features1 />
      </div>
    </div>
  );
};

export default WhyChooseUs;
