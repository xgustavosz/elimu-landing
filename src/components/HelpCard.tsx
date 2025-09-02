import Image from "next/image";

interface HelpCardProps {
  title: string;
  image: string;
}

export default function HelpCard({ title, image }: HelpCardProps) {
  return (
    <div className="w-[350px]">
      <div className="relative w-[350px] h-[480px] overflow-hidden">
        <Image
          src={`/images/${image}`}
          alt={title}
          fill
          className="object-cover"
        />
        <button className="absolute bottom-0 left-0 right-0 p-2 bg-secondary text-white w-[255px] cursor-pointer hover:opacity-95 transition-opacity duration-100">Saiba mais</button>
      </div>
      <h2 className="font-bold text-xl pt-2 text-center">{title}</h2>
    </div>
  );
}
