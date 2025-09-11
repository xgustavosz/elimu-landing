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
        <section className="max-w-7xl mx-auto w-full px-8 lg:px-20 py-16">
            <div className="w-full">
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
                    {/* Linha 1 - duas imagens (primeira menor, segunda maior) */}
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

                    {/* Linha 2 - imagem sozinha */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                        <Image
                            src="/images/gallery-image-04.png"
                            alt="Galeria 3"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Linha 3 - duas imagens lado a lado */}
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

                    {/* Linha 4 - imagem sozinha */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                        <Image
                            src="/images/gallery-image-05.png"
                            alt="Galeria 6"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="hidden lg:block max-w-[1013px] w-full mx-auto">
                    <div className="flex gap-3 lg:gap-6 justify-center">
                        {/* Imagem maior à esquerda */}
                        <div className="relative flex min-w-[322px] max-w-[322px] w-full h-[400px] lg:w-[410px] lg:h-[576px] overflow-hidden">
                            <div className="absolute top-0 left-0 w-0 h-0 border-t-[34px] border-r-[34px] border-t-secondary border-r-transparent z-10" />
                            <Image
                                src="/images/gallery-image-01.jpg"
                                alt="Galeria 1"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Título, texto e duas imagens abaixo */}
                        <div className="flex flex-col items-center gap-6">
                            <div className="hidden lg:block max-w-[500px]">
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
                            <div className="flex gap-3 lg:gap-6">
                                {["gallery-image-02.png", "gallery-image-03.jpg"].map(
                                    (img, index) => (
                                        <div
                                            key={index}
                                            className="relative overflow-hidden w-[322px] h-[400px]"
                                        >
                                            <div className="absolute top-0 left-0 w-0 h-0 border-t-[34px] border-r-[34px] border-t-secondary border-r-transparent z-10" />
                                            <Image
                                                src={`/images/${img}`}
                                                alt={`Galeria ${index + 2}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Linha de baixo com 3 imagens */}
                <div className="hidden lg:flex justify-center gap-3 lg:gap-6 mt-3 lg:mt-6">
                    <div className="flex flex-col gap-3 lg:gap-6">
                        {["gallery-image-04.png", "gallery-image-05.png"].map(
                            (img, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-hidden w-[530px] h-[310px]"
                                >
                                    <div className="absolute top-0 left-0 w-0 h-0 border-t-[34px] border-r-[34px] border-t-secondary border-r-transparent z-10" />
                                    <Image
                                        src={`/images/${img}`}
                                        alt={`Galeria ${index + 4}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )
                        )}
                    </div>
                    {/* Imagem maior à direita */}
                    <div className="relative overflow-hidden min-w-[460px] w-full max-w-[460px] h-[641px]">
                        <div className="absolute top-0 left-0 w-0 h-0 border-t-[34px] border-r-[34px] border-t-secondary border-r-transparent z-10" />
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
