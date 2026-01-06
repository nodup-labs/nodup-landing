"use client";
import { Button } from "@/components/ui/button";
import BackgroundImage from "./components/backgroundImage";
import Collaboration from "./components/collaboration";
import Contact1 from "./components/Contact1";
import FAQ1 from "./components/FAQ1";
import MemberInfo from "./components/memberinfo";
import Parallax from "./components/Parallax";
import ProjectGrid from "./components/projectGrid";
import WhyChooseUs from "./components/whychoseus";

export default function Home() {
  return (
    <div>
      <Parallax />

      <BackgroundImage />

      <div className="container mx-auto px-4 flex flex-col gap-32">
        <div className="text-center mt-4 mx-auto relative z-30 px-4 pb-44 pt-44 h-full">
          <h1 className="text-6xl font-bold ">
            جایی که خلاقیت، تبدیل به نرم‌افزار می‌شود
          </h1>
          <p className="text-1xl pt-8">
            طراحی و توسعه وب‌سایت، اپلیکیشن و محصولات دیجیتال با تمرکز بر تجربه
            کاربری، کیفیت و خلاقیت.
          </p>
          <div className=" flex flex-col md:flex-row justify-center items-center gap-4 mt-10 max-w-md mx-auto">
            <Button className="" size="lg">
              درخواست مشاوره
            </Button>
            <Button className="" variant="outline" size="lg">
              {" "}
              مشاهده نمونه‌کارها{" "}
            </Button>
            {/* Scroll down animation */}
          </div>
          <div className="w-full flex justify-center mt-6">
            <button
              onClick={() =>
                window.scrollBy({
                  top: window.innerHeight - 120,
                  behavior: "smooth",
                })
              }
              aria-label="Scroll down"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-7 h-7 animate-bounce"
                aria-hidden="true"
              >
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className="text-sm">اسکرول کنید</span>
            </button>
          </div>
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
