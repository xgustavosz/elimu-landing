import Image from "next/image";

interface PublicationCardProps {
    cardName: string;
    publication: string;
    imageUrl: string;
}

export default function PublicationCard({ cardName, publication, imageUrl }: PublicationCardProps) {
    return (
        <div className="w-full max-w-[300px] h-[260px] bg-[#045071] border-2">
            <div className="relative w-full h-[140px]">
                <Image src={imageUrl} alt="Imagem da publicação" fill />
                <div className="absolute right-0 bottom-0 w-[64px] h-[48px] bg-secondary text-white"></div>
            </div>
            <div className="text-white px-3 pt-[30px] pb-3">
                <p className="pb-3 font-work-sans font-bold text-[0.9375rem] leading-[15px]">{cardName}</p>
                <p className="text-[0.625rem] leading-[10px]"><strong>Publicação:</strong> {publication}</p>
            </div>
        </div>
    )
}