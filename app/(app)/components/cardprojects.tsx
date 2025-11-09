"use client";

import { useRouter } from "next/navigation";
import {
  IconArrowNarrowLeft,
  IconHeart,
  IconMessage,
} from "@tabler/icons-react";
import Image from "next/image";
import CircleButton from "./CircleButton";

interface CardProjectsProps {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
  comments: number;
  likes: number;
}

const CardProjects = ({
  id,
  image,
  title,
  description,
  date,
  comments,
  likes,
}: CardProjectsProps) => {
  const router = useRouter();

  return (
    <div className="bg-gray-800  rounded-lg shadow-2xl p-3 md:p-4 flex flex-col md:flex-row gap-4 md:gap-4">
      <div className="w-full md:w-auto flex justify-center items-center">
        <Image
          src={image}
          alt="aks"
          width={600}
          height={400}
          className="rounded-lg w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto"
        />
      </div>
      <div className="w-full pt-3 md:pt-5 flex flex-col gap-5 md:gap-7">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
          <p className="text-xl md:text-3xl font-bold">{title}</p>
          <p className="text-sm md:text-lg font-light text-gray-500">{date}</p>
        </div>
        <div>
          <p className="text-sm md:text-lg font-light text-gray-500">
            {description}
          </p>
        </div>
        <div className="flex mt-20 md:flex-row justify-between gap-3 md:gap-0 items-center">
          <div className="flex gap-2">
            <div className="flex gap-1 items-center">
              <p className="text-base md:text-lg font-bold">{comments}</p>
              <IconMessage size={18} stroke={2} />
            </div>
            <div className="flex gap-1 items-center">
              <p className="text-base md:text-lg font-bold">{likes}</p>
              <IconHeart size={18} stroke={2} />
            </div>
          </div>

          <button
            className=" md:hidden .text-sm font-bold underline mt-2 flex items-center gap-1 "
            onClick={() => router.push(`/projects/${id}`)}
          >
            مشاهده جزییات بیشتر
            <IconArrowNarrowLeft size={18} stroke={2} />
          </button>
          <div className="hidden md:block w-fit mx-auto md:mx-0 mt-2 md:mt-0">
            <CircleButton
              text="مشاهده جزییات بیشتر"
              sizeVariant="sm"
              radius={40}
              fontSize={12}
              onClick={() => router.push(`/projects/${id}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
