import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const OurValue = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 md:gap-2 pb-16  md:text-left">
        <Badge variant="outline" className="text-sm font-medium">
          ارزش‌های ما
        </Badge>
        <p className="text-2xl md:text-4xl font-bold max-w-4xl text-center leading-16 ">
          ارزش‌های بنیادین ما: توانمندسازی افراد و هدایت مسیر رشد
        </p>
        <p className="text-base md:text-xl font-normal text-neutral-300  text-center max-w-2xl leading-10">
          پایه‌های ما بر سه ستون کلیدی استوار است: افراد، آگاهی و رشد. این سه
          عنصر با هم یک سیستم ارزش متصل ایجاد می‌کنند که مسیر موفقیت ما را
          می‌سازد.
        </p>
      </div>
      <div className="pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Card */}
          <div className="flex flex-col bg-gray-700/30 border rounded-lg p-2 gap-5">
            <div className="bg-gray-400/30 rounded-lg p-3 w-16 h-16 flex items-center justify-center">
              <Image
                src={"/icon/Design.svg"}
                alt="icon"
                width={50}
                height={50}
              />
            </div>
            <p className="text-2xl font-bold">طراحی با رویکرد راهبردی</p>
            <p className="text-base font-normal">
              ما همواره مهارت‌ها و دانش خود را ارتقا می‌دهیم تا خدماتی باکیفیت و
              نتایجی برجسته به مشتریان ارائه کنیم.
            </p>
          </div>

          {/* Full image card */}
          <div className="relative w-full aspect-square overflow-hidden rounded-lg border">
            <Image
              src={"/screens/ourvalue.png"}
              alt="screen value"
              fill
              className="object-cover"
            />
          </div>

          {/* Card */}
          <div className="flex flex-col bg-gray-700/30 border rounded-lg p-2 gap-5">
            <div className="bg-gray-400/30 rounded-lg p-3 w-16 h-16 flex items-center justify-center">
              <Image
                src={"/icon/Design.svg"}
                alt="icon"
                width={50}
                height={50}
              />
            </div>
            <p className="text-2xl font-bold">طراحی با رویکرد راهبردی</p>
            <p className="text-base font-normal">
              ما همواره مهارت‌ها و دانش خود را ارتقا می‌دهیم تا خدماتی باکیفیت و
              نتایجی برجسته به مشتریان ارائه کنیم.
            </p>
          </div>

          {/* Card */}
          <div className="flex flex-col bg-gray-700/30 border rounded-lg p-2 gap-5">
            <div className="bg-gray-400/30 rounded-lg p-3 w-16 h-16 flex items-center justify-center">
              <Image
                src={"/icon/Design.svg"}
                alt="icon"
                width={50}
                height={50}
              />
            </div>
            <p className="text-2xl font-bold">طراحی با رویکرد راهبردی</p>
            <p className="text-base font-normal">
              ما همواره مهارت‌ها و دانش خود را ارتقا می‌دهیم تا خدماتی باکیفیت و
              نتایجی برجسته به مشتریان ارائه کنیم.
            </p>
          </div>

          {/* Full image card */}
          <div className="relative w-full aspect-square overflow-hidden rounded-lg border">
            <Image
              src={"/screens/ourvalue1.png"}
              alt="screen value"
              fill
              className="object-cover"
            />
          </div>

          {/* Card */}
          <div className="flex flex-col bg-gray-700/30 border rounded-lg p-2 gap-5">
            <div className="bg-gray-400/30 rounded-lg p-3 w-16 h-16 flex items-center justify-center">
              <Image
                src={"/icon/Design.svg"}
                alt="icon"
                width={50}
                height={50}
              />
            </div>
            <p className="text-2xl font-bold">طراحی با رویکرد راهبردی</p>
            <p className="text-base font-normal">
              ما همواره مهارت‌ها و دانش خود را ارتقا می‌دهیم تا خدماتی باکیفیت و
              نتایجی برجسته به مشتریان ارائه کنیم.
            </p>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default OurValue;
