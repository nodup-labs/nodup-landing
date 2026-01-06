"use client";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const ProjectGrid = () => {
  // Use a flat items array and let CSS Grid handle columns responsively
  const items = [
    { id: "1", src: "/project/1.jpg", title: "عنوان اول ۱", subtitle: "زیرعنوان ۱" },
    { id: "2", src: "/project/2.jpg", title: "عنوان اول ۴", subtitle: "زیرعنوان ۴" },
    { id: "3", src: "/project/3.jpg", title: "عنوان اول ۷", subtitle: "زیرعنوان ۷" },
    { id: "4", src: "/project/4.jpg", title: "عنوان اول ۱۰", subtitle: "زیرعنوان ۱۰" },
    { id: "5", src: "/project/5.jpg", title: "عنوان اول ۱۰", subtitle: "زیرعنوان ۱۰" },
    { id: "6", src: "/project/6.jpg", title: "عنوان اول ۱۰", subtitle: "زیرعنوان ۱۰" },
    { id: "7", src: "/project/7.jpg", title: "عنوان اول ۱۰", subtitle: "زیرعنوان ۱۰" },
    { id: "8", src: "/project/8.jpg", title: "عنوان اول ۱۰", subtitle: "زیرعنوان ۱۰" },
    { id: "9", src: "/project/9.jpg", title: "عنوان اول ۱۰", subtitle: "زیرعنوان ۱۰" },
    { id: "9", src: "/project/10.png", title: "عنوان اول ۱۰", subtitle: "زیرعنوان ۱۰" },
    { id: "10", src: "/project/11.png", title: "عنوان اول ۱۰", subtitle: "زیرعنوان ۱۰" },
    { id: "12", src: "/project/12.png", title: "عنوان اول ۱۰", subtitle: "زیرعنوان ۱۰" },
    { id: "13", src: "/project/13.jpeg", title: "عنوان اول ۱۰", subtitle: "زیرعنوان ۱۰" },
  ];

  const [hoverStyle, setHoverStyle] = useState<{ [key: string]: string }>({});
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    key: string
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * 15;
    const rotateY = -(x / rect.width) * 15;

    setHoverStyle((prev) => ({
      ...prev,
      [key]: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    }));
    setActiveKey(key);
  };

  const handleMouseLeave = (key: string) => {
    setHoverStyle((prev) => ({
      ...prev,
      [key]: "rotateX(0deg) rotateY(0deg)",
    }));
    setActiveKey(null);
  };

  return (
    <>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="popup-image"
            width={1200}
            height={1200}
            className="max-h-[90vh] w-auto rounded-lg"
          />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div id="projects" className="mb-20 relative container mx-auto">
          <div className="flex flex-col items-center gap-6 md:gap-2 pb-16 md:text-left">
            <Badge variant="outline" className="text-sm font-medium">
              پروژه‌های ما
            </Badge>
            <p className="text-2xl md:text-4xl font-bold max-w-4xl text-center leading-16">
              کارهایی که به آن‌ها افتخار می‌کنیم
            </p>

            <p className="text-base md:text-xl font-normal text-neutral-300 text-center max-w-2xl leading-10">
              پروژه‌هایی که برای تیم‌ها ارزش واقعی ساخته‌اند، نه فقط ظاهر زیبا.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 relative z-0">
              {items.map((item, idx) => {
                const key = `${idx}`;
                const isActive = activeKey === key;

                return (
                  <div
                    key={key}
                    onMouseMove={(e) => handleMouseMove(e, key)}
                    onMouseLeave={() => handleMouseLeave(key)}
                    onClick={() => setSelectedImage(item.src)}
                    className="inline-block w-full mb-4 break-inside-avoid rounded-lg transition-all duration-300 cursor-pointer"
                    style={{
                      perspective: "1000px",
                      zIndex: isActive ? 50 : 1,
                      filter:
                        !isActive && activeKey
                          ? "grayscale(100%) blur(2px) brightness(0.7)"
                          : "none",
                    }}
                  >
                    <div
                      className="transition-transform duration-300 ease-out rounded-lg shadow-xl relative overflow-hidden"
                      style={{
                        transformStyle: "preserve-3d",
                        transform: hoverStyle[key] || "rotateX(0) rotateY(0)",
                      }}
                    >
                      <Image
                        className="h-auto w-full rounded-lg transition-transform duration-300"
                        src={item.src}
                        alt={`gallery-image-${idx}`}
                        width={500}
                        height={500}
                        style={{
                          transform: isActive ? "scale(1.1)" : "scale(1)",
                        }}
                      />

                      {isActive && (
                        <div
                          className="absolute inset-0 flex flex-col justify-end p-4 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))",
                          }}
                        >
                          <p className="text-white font-bold text-lg">
                            {item.title}
                          </p>
                          <p className="text-white text-sm">{item.subtitle}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectGrid;
