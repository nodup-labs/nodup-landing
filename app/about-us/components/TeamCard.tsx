"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

function TeamCard({ name, role, image, linkedin, placeholder }: any) {
  const [hovered, setHovered] = useState(false);

  if (placeholder) {
    // کارت خالی ساده بدون hover
    return (
      <div className="relative rounded-lg overflow-hidden aspect-[3/4] bg-gray-700/30 flex items-center justify-center text-gray-500">
        به‌زودی...
      </div>
    );
  }

  return (
    <div
      className="relative rounded-lg overflow-hidden cursor-pointer aspect-[3/4] md:aspect-[3/4] max-h-[300px] md:max-h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 90vw, 33vw"
        className="object-cover object-center"
        priority
      />

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: hovered ? "0%" : "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4 flex items-center justify-between"
      >
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm font-light">{role}</p>
        </div>
        <div className="bg-white/20 hover:bg-white/30 transition-all rounded-full p-2 w-10 h-10 flex items-center justify-center">
          <Image src={linkedin} alt="LinkedIn" width={20} height={20} />
        </div>
      </motion.div>
    </div>
  );
}

export default TeamCard;
