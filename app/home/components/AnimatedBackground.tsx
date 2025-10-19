"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedBackgroundProps {
  children: React.ReactNode;
}

export default function AnimatedBackground({
  children,
}: AnimatedBackgroundProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height,
    });
  };

  const handleMouseLeave = () => setMouse({ x: 0, y: 0 });

  return (
    <section
      className="relative lg:min-h-screen bg-gradient-to-br from-gray-50 dark:from-zinc-950 via-indigo-50 dark:via-black to-indigo-50 dark:to-zinc-950 pt-25 pb-20 lg:pt-40 lg:pb-20 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative z-10">{children}</div>

      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* Orb 1 */}
        <motion.div
          className="absolute left-[10%] top-[15%] w-[320px] h-[320px] dark:w-[160px] dark:h-[160px] rounded-full bg-indigo-200 dark:bg-indigo-900 opacity-90 blur-[60px]"
          animate={{
            scale: [1, 1.13, 1],
            opacity: [0.85, 1, 0.85],
            x: mouse.x * 70,
            y: mouse.y * 40,
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orb 1 core */}
        <motion.div
          className="absolute left-[18%] top-[23%] w-[90px] h-[90px] rounded-full bg-indigo-100 dark:bg-indigo-950 opacity-95 blur-[10px]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.92, 1, 0.92],
            x: mouse.x * 90,
            y: mouse.y * 60,
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orb 2 */}
        <motion.div
          className="absolute right-[12%] top-[30%] w-[220px] h-[220px] rounded-full bg-indigo-300 dark:bg-indigo-950 opacity-80 blur-[40px]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.75, 0.95, 0.75],
            x: mouse.x * -60,
            y: mouse.y * 30,
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orb 3 */}
        <motion.div
          className="absolute left-[35%] bottom-[18%] w-[180px] h-[180px] rounded-full bg-blue-200 dark:bg-blue-600 opacity-80 blur-[30px]"
          animate={{
            scale: [1, 1.16, 1],
            opacity: [0.7, 0.9, 0.7],
            x: mouse.x * 40,
            y: mouse.y * -60,
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orb 4 */}
        <motion.div
          className="absolute right-[22%] bottom-[8%] w-[150px] h-[150px] rounded-full bg-indigo-100 opacity-90 blur-[20px]"
          animate={{
            scale: [1, 1.11, 1],
            opacity: [0.8, 1, 0.8],
            x: mouse.x * -30,
            y: mouse.y * -40,
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Gradients */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 via-indigo-500/10 to-indigo-600/10 pointer-events-none"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-tl from-indigo-400/10 via-indigo-500/10 to-indigo-600/10 pointer-events-none"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
