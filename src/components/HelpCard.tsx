"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface HelpCardProps {
  title: string;
  image: string;
  description: string;
}

export default function HelpCard({ title, image, description }: HelpCardProps) {
  const [isOpenInfo, setIsOpenInfo] = useState(false);

  return (
    <div className="max-w-[350px] w-full">
      <div className="relative w-full max-w-[350px] aspect-[7/10] overflow-hidden">
        {/* Card de informações com transição */}
        <div
          className={`absolute flex flex-col items-center justify-center px-[35px] left-0 top-0 w-full h-full bg-[#045071]/90 z-10 py-[62px] 
        transition-all duration-500 ease-in-out
        ${isOpenInfo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"}`}
        >
          <h1 className="text-white font-bold text-[32px] text-center leading-[35px]">
            {title}
          </h1>
          <p className="text-sm text-white text-justify mt-[30px] leading-[17px]">
            {description}
          </p>
        </div>

        <Image
          src={`/images/${image}`}
          alt={title}
          fill
          className="object-cover"
        />

        <button
          onClick={() => setIsOpenInfo(!isOpenInfo)}
          className={`absolute flex items-center justify-center z-20 bottom-0 left-0 h-[50px] right-0 p-2 bg-secondary text-white ${isOpenInfo ? "w-[70px]" : "w-[255px]"
            } cursor-pointer hover:opacity-95 transition-all duration-300`}
        >
          {isOpenInfo ? <Image src="/images/x.svg" alt="Fechar" width={16} height={16} /> : "Saiba mais"}
        </button>
      </div>

      <h2 className="font-bold text-xl pt-2 text-center">{title}</h2>
    </div>
  );

}
