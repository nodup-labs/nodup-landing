"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";
const teamMembers = [
  {
    id: 1,
    name: "عرفان کاشف",
    role: "کارشناس برنامه‌نویس",
    image: "/screens/kashef.png",
  },
  {
    id: 2,
    name: "آقا بدری",
    role: "طراح UI/UX",
    image: "/screens/badry.jpg",
  },
  {
    id: 3,
    name: "علی کاشف",
    role: "تحلیل‌گر داده",
    image: "/screens/alikashef.jpg",
  },
  {
    id: 4,
    name: "خطابخش",
    role: "مدیر پروژه",
    image: "/screens/khatabakhsh.jpg",
  },
];

const MemberInfo = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div id="team" className="pb-10">
        <div className="flex flex-col items-center gap-6 md:gap-2 pb-16  md:text-left">
          <Badge variant="outline" className="text-sm font-medium">
            تیم ما
          </Badge>
          <p className="text-2xl md:text-4xl font-bold max-w-4xl text-center leading-16 ">
            با تیمی از طراحان خلاق و آینده‌نگر آشنا شوید که پشت موفقیت نوداپ
            هستند
          </p>
          <p className="text-base md:text-xl font-normal text-neutral-300  text-center max-w-2xl leading-10">
            سه ستون موفقیت ما: افراد، آگاهی و رشد—سیستمی که ارزش خلق می‌کند و
            مسیر پیشرفت را هموار می‌سازد.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-8 py-10">
            {teamMembers.map((member) => {
              const isHovered = hoveredId === member.id;

              return (
                <motion.div
                  key={member.id}
                  onMouseEnter={() => setHoveredId(member.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="relative overflow-hidden rounded-xl cursor-pointer"
                  animate={{
                    scale: isHovered ? 1.08 : 1,
                    filter:
                      hoveredId && !isHovered
                        ? "grayscale(100%) brightness(60%)"
                        : "grayscale(0%) brightness(100%)",
                  }}
                  transition={{ type: "spring", stiffness: 250, damping: 18 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="object-cover w-[300px] h-[300px]"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : 60,
                    }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute bottom-0 left-0 w-full bg-black/70 py-3 px-4 text-right"
                  >
                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{
                        y: isHovered ? 0 : 10,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
                      className="text-white text-base font-semibold"
                    >
                      {member.name}
                    </motion.p>
                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{
                        y: isHovered ? 0 : 10,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0 }}
                      className="text-gray-300 text-sm"
                    >
                      {member.role}
                    </motion.p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MemberInfo;
