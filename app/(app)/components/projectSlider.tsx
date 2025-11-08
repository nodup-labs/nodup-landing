"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import CardProjects from "./cardprojects";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "1",
    image: "/screens/1.png",
    title: "طراحی لندینگ رستوران",
    description: "یک صفحه فرود حرفه‌ای...",
    date: "15 شهریور 1404",
    comments: 7,
    likes: 230,
  },
  {
    id: "2",
    image: "/screens/2.png",
    title: "داشبورد مدیریت و تحلیل داده‌ها",
    description: "پروژه‌ای برای نمایش داده‌های فروش...",
    date: "2 مهر 1404",
    comments: 15,
    likes: 310,
  },
  {
    id: "3",
    image: "/screens/2.png",
    title: "وب‌سایت نمونه‌کار شخصی",
    description: "ساخت پورتفولیوی شخصی با انیمیشن‌های نرم...",
    date: "18 مهر 1404",
    comments: 9,
    likes: 185,
  },
  {
    id: "5",
    image: "/screens/2.png",
    title: "طراحی مجدد رابط کاربری فروشگاه آنلاین",
    description: "طراحی تجربه کاربری جدید برای فروشگاه دیجیتال...",
    date: "5 آبان 1404",
    comments: 11,
    likes: 260,
  },
  {
    id: "6",
    image: "/screens/3.png",
    title: "اپلیکیشن چت هوشمند با هوش مصنوعی",
    description: "ساخت رابط گفت‌وگوی کاربرپسند با ChatGPT API...",
    date: "25 آبان 1404",
    comments: 17,
    likes: 340,
  },
];

export default function ProjectSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const canScroll = useRef(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!canScroll.current) return;

      canScroll.current = false;
      setTimeout(() => (canScroll.current = true), 300);

      if (e.deltaY > 0) {
        if (activeIndex < projects.length - 1) {
          setActiveIndex((prev) => prev + 1);
        } else {
          window.scrollTo({
            top: container.offsetTop + container.offsetHeight,
            behavior: "smooth",
          });
        }
      } else if (e.deltaY < 0) {
        if (activeIndex > 0) {
          setActiveIndex((prev) => prev - 1);
        } else {
          window.scrollTo({
            top: container.offsetTop - window.innerHeight,
            behavior: "smooth",
          });
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [activeIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!canScroll.current) return;

      canScroll.current = false;
      setTimeout(() => (canScroll.current = true), 300);

      if (e.deltaY > 0 && activeIndex < projects.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [activeIndex]);

  const handleDragEnd = (_: any, info: any) => {
    const offset = info.offset.y;
    if (!canScroll.current) return;
    if (Math.abs(offset) < 30) return;

    canScroll.current = false;
    setTimeout(() => (canScroll.current = true), 300);

    if (offset < 0 && activeIndex < projects.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (offset > 0 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const prevIndex = activeIndex > 0 ? activeIndex - 1 : -1;
  const nextIndex = activeIndex < projects.length - 1 ? activeIndex + 1 : -1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center gap-6 md:gap-2 pb-16  md:text-left">
        <Badge variant="outline" className="text-sm font-medium">
          پروژه‌های ما
        </Badge>
        <p className="text-2xl md:text-4xl font-bold max-w-4xl text-center leading-16 ">
          با طراحان آینده‌نگر و خلاقی آشنا شوید که پشت موفقیت نوداپ قرار دارند.
        </p>
        <p className="text-base md:text-xl font-normal text-neutral-300  text-center max-w-2xl leading-10">
          پایه‌های ما بر سه ستون کلیدی استوار است: افراد، آگاهی و رشد. این سه
          عنصر با هم یک سیستم ارزش متصل ایجاد می‌کنند که مسیر موفقیت ما را
          می‌سازد.
        </p>
      </div>
      <div
        ref={containerRef}
        className="container mx-auto px-4 md:px-0 relative touch-none h-[calc(100vh-4rem)] md:mb-96 md:h-auto"
      >
        <div className="relative flex items-center justify-center pt-52">
          {projects.map((project, idx) => {
            let scale = 0.7,
              opacity = 0,
              filter = "blur(4px)",
              zIndex = 5,
              yOffset = 0;

            if (idx === activeIndex) {
              yOffset = 0;
              scale = 1;
              opacity = 1;
              filter = "blur(0px)";
              zIndex = 30;
            } else if (idx === prevIndex) {
              yOffset = -140;
              scale = 0.8;
              opacity = 0.3;
              filter = "blur(3px)";
              zIndex = 20;
            } else if (idx === nextIndex) {
              yOffset = 140;
              scale = 0.8;
              opacity = 0.3;
              filter = "blur(3px)";
              zIndex = 20;
            } else {
              yOffset = 300;
              scale = 0.7;
              opacity = 0;
              filter = "blur(4px)";
              zIndex = 5;
            }

            return (
              <motion.div
                key={project.id}
                className="absolute w-full touch-none"
                style={{ top: "45%", transform: "translateY(-50%)", zIndex }}
                animate={{ y: yOffset, scale, opacity, filter }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                onDragEnd={handleDragEnd}
                dragElastic={0.3}
              >
                <CardProjects {...project} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
