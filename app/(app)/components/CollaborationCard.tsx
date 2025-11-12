interface CollaborationCardProps {
  number: number;
  title: string;
  description: string;
  active?: boolean;
}

const CollaborationCard = ({
  number,
  title,
  description,
  active = false,
}: CollaborationCardProps) => {
  return (
    <div
      className="relative p-0.5 rounded-lg w-full"
      style={{
        background: "linear-gradient(90deg, #093188 0%, #0d2740 100%)",
      }}
    >
      <div className="bg-gray-700/30  flex flex-col gap-1 rounded-lg p-2 md:p-3 shadow-sm relative overflow-hidden group h-full min-h-[220px]">
        <p
          className={`text-[48px] md:text-[100px] font-black -mt-2 md:-mt-6 transition-colors duration-700 ${
            active
              ? "bg-gradient-to-b from-[#295ECD] to-[#BCD3E8] text-transparent bg-clip-text"
              : "text-gray-300"
          }`}
        >
          {number}
        </p>
        <div className="-mt-4 md:-mt-10">
          <p className="text-base md:text-lg font-bold">{title}</p>
          <p className="text-sm md:text-lg font-normal">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CollaborationCard;
