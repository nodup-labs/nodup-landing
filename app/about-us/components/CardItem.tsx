"use client";
import Image from "next/image";

interface CardItemProps {
  title: string;
  icon: string;
  description: string;
  colClass: string;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  icon,
  description,
  colClass,
}) => {
  return (
    <div
      className={`bg-gray-700/30 border rounded-lg p-3 relative flex flex-col gap-7 ${colClass}`}
    >
      <div className="bg-gray-400/30 rounded-lg p-3 w-11 h-11 flex items-center justify-center">
        <Image src={icon} alt="icon" width={24} height={24} />
      </div>
      <Image
        src="/screens/Graphics.svg"
        alt="server background"
        width={330}
        height={330}
        className="transform scale-x-[-1] absolute left-0 top-0"
      />
      <p className="font-medium text-xl relative z-10">{title}</p>
      <p className="text-sm font-normal relative z-10">{description}</p>
    </div>
  );
};

export default CardItem;
