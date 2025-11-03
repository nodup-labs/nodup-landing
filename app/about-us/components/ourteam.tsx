"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
const teamMembers = [
  {
    name: "عرفان کاشف",
    role: "کارشناس برنامه‌نویس",
    image: "/screens/erfankashef.png",
    linkedin: "/icon/linkden.svg",
  },
  {
    name: "آقا بدری",
    role: "طراح UI/UX",
    image: "/screens/agha badry.jpg",
    linkedin: "/icon/linkden.svg",
  },
  {
    name: "علی کاشف",
    role: "تحلیل‌گر داده",
    image: "/screens/alikashef.jpg",
    linkedin: "/icon/linkden.svg",
  },
  {
    name: "خطابخش",
    role: "مدیر پروژه",
    image: "/screens/khatabakhsh.jpg",
    linkedin: "/icon/linkden.svg",
  },
  { name: "", role: "", image: "", linkedin: "", placeholder: true },
  { name: "", role: "", image: "", linkedin: "", placeholder: true },
];
const OurTeam = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <div>
          <div className="flex flex-col items-center gap-6 md:gap-2 pb-16  md:text-left">
            <Badge variant="outline" className="text-sm font-medium">
              تیم ما
            </Badge>
            <p className="text-2xl md:text-4xl font-bold max-w-4xl text-center leading-16 ">
              با طراحان آینده‌نگر و خلاقی آشنا شوید که پشت موفقیت نوداپ قرار
              دارند.
            </p>
            <p className="text-base md:text-xl font-normal text-neutral-300  text-center max-w-2xl leading-10">
              پایه‌های ما بر سه ستون کلیدی استوار است: افراد، آگاهی و رشد. این
              سه عنصر با هم یک سیستم ارزش متصل ایجاد می‌کنند که مسیر موفقیت ما
              را می‌سازد.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-3">
              {teamMembers.map((member, index) => (
                <TeamCard key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurTeam;
