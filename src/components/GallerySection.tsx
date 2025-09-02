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
        <section className="max-w-7xl mx-auto w-full px-6 xl:px-20 py-16">
            <div className="max-w-[500px] block xl:hidden pb-10 px-6">
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
            <div className="max-w-[1013px] mx-auto">
                <div className="hidden lg:flex gap-3 xl:gap-6 justify-center">
                    {/* Imagem maior à esquerda */}
                    <div className="relative flex min-w-[322px] max-w-[322px] w-full h-[400px] xl:w-[410px] xl:h-[576px] overflow-hidden">
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
                        <div className="max-w-[500px] hidden xl:block">
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
                        <div className="flex gap-3 xl:gap-6">
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

                {/* Linha de baixo com 3 imagens */}
                <div className="hidden lg:flex justify-center gap-3 xl:gap-6 mt-3 xl:mt-6">
                    <div className="flex flex-col gap-3 xl:gap-6">
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
                    <div className="relative overflow-hidden min-w-[460px] w-full max-w-[460px] h-[644px]">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6">
                {images.map((img, index) => (
                    <div key={index} className="relative w-full h-[350px] overflow-hidden rounded-lg">
                        <Image
                            src={`/images/${img}`}
                            alt={`Galeria ${index + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
