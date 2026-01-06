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
    <div className="relative p-0.5 rounded-lg w-full">
      <div className="bg-white/10 backdrop-blur-sm flex flex-col gap-1 rounded-lg p-2 md:p-3 shadow-sm relative overflow-hidden group h-full min-h-[220px]">
        {/* Number */}
        <p
          className={`text-[48px] md:text-[100px] font-black -mt-2 md:-mt-6 transition-all duration-700 ${
            active
              ? "bg-gradient-to-b from-[#ff914d] to-[#fff2e0] text-transparent bg-clip-text"
              : "text-white/50"
          }`}
        >
          {number}
        </p>

        {/* Text content */}
        <div className="-mt-4 md:-mt-10">
          <p className="text-base md:text-lg font-bold text-white">{title}</p>
          <p className="text-sm md:text-sm font-normal text-white/70">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollaborationCard;
