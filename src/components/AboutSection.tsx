"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutSection() {
    const imagesUrls = [
        "/images/elimu-office.png",
        "/images/elimu-office-02.png",
        "/images/elimu-office-03.jpg",
        "/images/elimu-office-04.png",
        "/images/elimu-office-05.png",
        "/images/elimu-office-06.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Troca de imagem a cada 4 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % imagesUrls.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [imagesUrls.length]);

    return (
        <section id="sobre" className="relative max-w-7xl mx-auto lg:pt-20">
            <div className="relative w-full h-[517px]">
                {imagesUrls.map((src, index) => (
                    <div
                        key={index}
                        className="absolute top-0 left-0 w-[955px] h-[517px]"
                    >
                        {/* Indicadores */}
                        <div className="flex gap-2 absolute top-2 right-[-22px] z-20">
                            {imagesUrls.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-[32px] h-1 transition-colors duration-300 ${i === currentIndex ? "bg-[#FCC203]" : "bg-[#045071]"
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Imagem */}
                        <Image
                            src={src}
                            alt="Escritório Elimu"
                            fill
                            className={`rounded-bl-[180px] z-10 lg:z-0 lg:ml-8 object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                                }`}
                        />
                    </div>
                ))}
            </div>

            <div className="h-[475px] hidden lg:block" />

            <div className="relative pt-[200px] lg:pt-10 lg:absolute top-[-180px] lg:top-[550px] lg:right-8 lg:max-w-[855px] w-full lg:max-h-[520px] h-full px-[30px] lg:px-[60px] py-[30px] text-white bg-[#045071]">
                <div className="absolute top-[180px] lg:top-0 right-0 w-0 h-0 border-t-[34px] border-l-[34px] border-t-secondary border-l-transparent z-10" />

                <div className="flex items-center gap-5">
                    <h1 className="text-[2.5rem] font-bold pb-5">Sobre</h1>
                    <div className="bg-secondary h-1 w-[73px] mb-4" />
                </div>
                <p className="pb-5 font-medium text-[1.25rem]">
                    A <strong>Elimu Social</strong> é uma empresa social que promove
                    educação tecnológica por meio de oficinas práticas de computação para
                    estudantes do Ensino Fundamental II e Ensino Médio,{" "}
                    <strong>
                        além de formar professores da Educação Básica na BNCC Computação
                    </strong>
                    . Nossa metodologia é baseada na aprendizagem por projetos,
                    estimulando criatividade, protagonismo e pensamento computacional de
                    forma prática e colaborativa.
                </p>
                <p className="font-medium text-[1.25rem]">
                    <strong>
                        Todas nossas oficinas são gratuitas para alunos e professores das redes públicas
                    </strong>
                    , garantindo acesso inclusivo e equitativo à formação em tecnologia.
                    Nossa atuação é viabilizada por meio de parcerias com secretarias de
                    educação e empresas que investem em fundos sociais dedicados à
                    transformação da educação.
                </p>
            </div>
        </section>
    );
}
