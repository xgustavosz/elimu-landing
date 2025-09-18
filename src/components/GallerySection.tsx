import Image from "next/image"

export default function GallerySection() {
    const images = [
        "gallery-image-01.jpg",
        "gallery-image-02.png",
        "gallery-image-03.jpg",
        "gallery-image-04.png",
        "gallery-image-05.png",
        "gallery-image-06.png",
    ]

    return (
        <section className="max-w-7xl mx-auto w-full px-6 py-16">
            <div className="w-full">
                {/* Mobile */}
                <div className="block lg:hidden max-w-[500px] pb-10 px-6">
                    <div className="flex items-center gap-5">
                        <h1 className="text-[2.5rem] font-bold pb-5">Galeria</h1>
                        <div className="bg-secondary h-1 w-[73px] mb-4" />
                    </div>
                    <p>
                        A Elimu adota a abordagem da aprendizagem baseada em projetos,{" "}
                        <strong>promovendo o protagonismo e a criatividade</strong> por
                        meio do desenvolvimento de projetos reais em todas as oficinas.
                    </p>
                </div>

                <div className="lg:hidden w-full mx-auto flex flex-col gap-4">
                    {/* Linha 1 - duas imagens */}
                    <div className="flex gap-4">
                        <div className="relative w-[45%] aspect-[3/4] overflow-hidden">
                            <Image
                                src="/images/gallery-image-01.jpg"
                                alt="Galeria 1"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-[55%] aspect-[3/4] overflow-hidden">
                            <Image
                                src="/images/gallery-image-03.jpg"
                                alt="Galeria 2"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Linha 2 */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                        <Image
                            src="/images/gallery-image-04.png"
                            alt="Galeria 3"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Linha 3 */}
                    <div className="flex gap-4">
                        <div className="relative w-1/2 aspect-[3/4] overflow-hidden">
                            <Image
                                src="/images/gallery-image-02.png"
                                alt="Galeria 4"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-1/2 aspect-[3/4] overflow-hidden">
                            <Image
                                src="/images/gallery-image-06.png"
                                alt="Galeria 5"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Linha 4 */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                        <Image
                            src="/images/gallery-image-05.png"
                            alt="Galeria 6"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Desktop */}
                <div className="hidden lg:flex gap-6 w-full">
                    {/* Imagem maior à esquerda */}
                    <div className="relative flex-1 w-full max-w-[410px] h-[620px] overflow-hidden">
                        <Image
                            src="/images/gallery-image-01.jpg"
                            alt="Galeria 1"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Coluna com texto + imagens */}
                    <div className="flex flex-col justify-between flex-1 gap-6">
                        <div>
                            <div className="flex items-center gap-5">
                                <h1 className="text-[2.5rem] font-bold pb-5">Galeria</h1>
                                <div className="bg-secondary h-1 w-[73px] mb-4" />
                            </div>
                            <p>
                                A Elimu adota a abordagem da aprendizagem baseada em projetos,{" "}
                                <strong>promovendo o protagonismo e a criatividade</strong> por
                                meio do desenvolvimento de projetos reais em todas as oficinas.
                            </p>
                        </div>

                        {/* Duas imagens menores */}
                        <div className="flex gap-6 flex-1 w-full items-end">
                            {["gallery-image-02.png", "gallery-image-03.jpg"].map((img, index) => (
                                <div
                                    key={index}
                                    className="relative flex-1 w-[322px] h-[424px] overflow-hidden"
                                >
                                    <Image
                                        src={`/images/${img}`}
                                        alt={`Galeria ${index + 2}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Linha de baixo */}
                <div className="hidden lg:flex gap-6 mt-6 w-full">
                    <div className="flex flex-col gap-6 flex-1">
                        {["gallery-image-04.png", "gallery-image-05.png"].map((img, index) => (
                            <div
                                key={index}
                                className="relative flex-1 aspect-[16/9] overflow-hidden"
                            >
                                <Image
                                    src={`/images/${img}`}
                                    alt={`Galeria ${index + 4}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Imagem maior à direita */}
                    <div className="relative flex-1 aspect-[9/13] overflow-hidden">
                        <Image
                            src="/images/gallery-image-06.png"
                            alt="Galeria 6"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
