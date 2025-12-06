"use client";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const ProjectGrid = () => {
  const columns = [
    [
      {
        id: "1",
        src: "/screens/pixel.jpg",
        title: "عنوان اول ۱",
        subtitle: "زیرعنوان ۱",
      },
    ],
    [
      {
        id: "4",
        src: "/screens/karkhone.png",
        title: "عنوان اول ۴",
        subtitle: "زیرعنوان ۴",
      },
    ],
    [
      {
        id: "7",
        src: "/screens/negarin.jpg",
        title: "عنوان اول ۷",
        subtitle: "زیرعنوان ۷",
      },
    ],
    [
      {
        id: "10",
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
        title: "عنوان اول ۱۰",
        subtitle: "زیرعنوان ۱۰",
      },
    ],
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
            <p className="text-2xl md:text-4xl font-bold max-w-4xl text-center leading-16 ">
              با طراحان آینده‌نگر و خلاقی آشنا شوید که پشت موفقیت نوداپ قرار
              دارند.
            </p>
            <p className="text-base md:text-xl font-normal text-neutral-300 text-center max-w-2xl leading-10">
              پایه‌های ما بر سه ستون کلیدی استوار است: افراد، آگاهی و رشد. این
              سه عنصر با هم یک سیستم ارزش متصل ایجاد می‌کنند که مسیر موفقیت ما
              را می‌سازد.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 relative z-0">
              {columns.map((col, i) => (
                <div key={i} className="grid gap-2">
                  {col.map((item, j) => {
                    const key = `${i}-${j}`;
                    const isActive = activeKey === key;

                    return (
                      <div
                        key={j}
                        onMouseMove={(e) => handleMouseMove(e, key)}
                        onMouseLeave={() => handleMouseLeave(key)}
                        onClick={() => setSelectedImage(item.src)} // اضافه شده
                        className="relative rounded-lg transition-all duration-300 cursor-pointer"
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
                            transform:
                              hoverStyle[key] || "rotateX(0) rotateY(0)",
                          }}
                        >
                          <Image
                            className="h-auto w-full rounded-lg transition-transform duration-300"
                            src={item.src}
                            alt={`gallery-image-${i}-${j}`}
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
                              <p className="text-white text-sm">
                                {item.subtitle}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectGrid;
