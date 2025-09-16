import Image from "next/image";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";

interface PublicationCardProps {
    cardName: string;
    publication: string;
    imageUrl: string;
    link: string;
}

export default function PublicationCard({ cardName, publication, imageUrl, link }: PublicationCardProps) {
    return (
        <div className="min-w-[260px] w-full max-w-[300px] h-[280px] bg-[#045071] border-2">
            <div className="relative w-full h-[140px]">
                <Image src={imageUrl} alt="Imagem da publicação" fill className="object-cover" />
                <Link href={link} target="_blank" className="absolute bottom-0 right-0 flex items-center justify-center w-[64px] h-[48px] bg-secondary text-white">
                        <AiOutlineLink className="text-[40px] rotate-[26deg] text-white" />
                </Link>
            </div>
            <div className="text-white px-3 flex flex-col items-start justify-center gap-2 h-[140px]">
                <p className="font-work-sans font-bold text-[0.875rem] leading-[15px]">{cardName}</p>
                <p className="text-[0.625rem] leading-[10px]"><strong>Publicação:</strong> {publication}</p>
            </div>
        </div>
    )
}