import Image from "next/image";

interface ImageDecorationProps {
    src: "string";
    alt: "string";
}

export default function ImageDecoration({src, alt}: ImageDecorationProps) {
    return (
        <div className="relative flex min-w-[322px] max-w-[322px] w-full h-[400px] lg:w-[410px] lg:h-[576px] overflow-hidden">
            <div className="absolute top-0 left-0 w-0 h-0 border-t-[34px] border-r-[34px] border-t-secondary border-r-transparent z-10" />
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
            />
        </div>
    )
}