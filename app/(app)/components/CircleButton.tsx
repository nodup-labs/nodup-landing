// components/CircleButton.tsx
import React from "react";
import { IconArrowNarrowLeft } from "@tabler/icons-react";

interface CircleButtonProps {
  text: string;
  size?: number; // اندازه سفارشی
  sizeVariant?: "sm" | "md" | "lg" | "xl"; // اندازه‌های آماده
  radius?: number;
  fontSize?: number;
  color?: string;
  onClick?: () => void;
}

const sizeMap: Record<NonNullable<CircleButtonProps["sizeVariant"]>, number> = {
  sm: 100,
  md: 150,
  lg: 200,
  xl: 250,
};

const useResponsiveCircleButton = (
  sizeVariant: CircleButtonProps["sizeVariant"],
  radius: number,
  fontSize: number
) => {
  // This hook returns responsive values for sizeVariant, radius, and fontSize
  // based on window width (mobile vs desktop)
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return isMobile
    ? { sizeVariant: "sm" as const, radius: 40, fontSize: 12 }
    : { sizeVariant, radius, fontSize };
};

const CircleButton: React.FC<CircleButtonProps> = ({
  text,
  size,
  sizeVariant = "lg",
  radius = 20,
  fontSize = 14,
  color = "#444",
  onClick,
}) => {
  const id = React.useId();
  const responsive = useResponsiveCircleButton(sizeVariant, radius, fontSize);
  const finalSize =
    size ?? sizeMap[responsive.sizeVariant as keyof typeof sizeMap];

  return (
    <button
      onClick={onClick}
      className="group relative flex items-center justify-center rounded-full focus:outline-none"
      style={{ width: finalSize, height: finalSize }}
    >
      {/* مسیر دایره با متن */}
      <svg
        className="block w-full h-full transition-transform duration-500 ease-in-out group-hover:rotate-360"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${finalSize} ${finalSize}`}
      >
        <defs>
          <path
            id={id}
            d={`M${finalSize / 2},${finalSize / 2} m-${responsive.radius},0 
                a${responsive.radius},${responsive.radius} 0 1,0 ${
              responsive.radius * 2
            },0 
                a${responsive.radius},${responsive.radius} 0 1,0 -${
              responsive.radius * 2
            },0`}
          />
        </defs>

        <text
          fontSize={responsive.fontSize}
          textAnchor="start"
          fill={color}
          className="select-none"
        >
          <textPath href={`#${id}`} startOffset="50%">
            {text}
          </textPath>
        </text>

        {/* دایره پس‌زمینه */}
        <circle
          cx={finalSize / 2}
          cy={finalSize / 2}
          r={responsive.radius}
          fill="none"
          stroke=""
        />
      </svg>

      {/* فلش دقیقاً در مرکز دایره */}
      <span className="absolute  inset-0 flex items-center justify-center pointer-events-none">
        <IconArrowNarrowLeft
          className="w-10 h-10 rounded-full  bg-gray-600 p-2"
          color="white"
        />
      </span>

      {/* دایره کلیک */}
      <span className="absolute inset-0 rounded-full bg-transparent"></span>
    </button>
  );
};

export default CircleButton;
