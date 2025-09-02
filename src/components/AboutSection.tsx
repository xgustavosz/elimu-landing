import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="relative max-w-7xl mx-auto pt-[500px] lg:pt-20">
            <Image
                src="/images/elimu-office.png"
                alt="Escritório Elimu"
                width={955}
                height={517}
                className="hidden lg:block rounded-bl-[180px]"
            />

            <Image
                src="/images/elimu-office.png"
                alt="Escritório Elimu"
                fill
                className="block lg:hidden object-cover"
            />

            <div className="h-[475px] hidden lg:block" />

            <div className="relative lg:absolute lg:top-[550px] lg:right-0 lg:max-w-[855px] w-full lg:max-h-[475px] h-full px-[60px] py-[30px] text-white bg-[#045071]">
                <div className="flex items-center gap-5">
                    <h1 className="text-[2.5rem] font-bold pb-5">Sobre</h1>
                    <div className="bg-secondary h-1 w-[73px] mb-4" />
                </div>
                <p className="pb-5 font-medium text-[1.25rem]">
                    A <strong>Elimu Social</strong> é uma empresa social que promove educação tecnológica por meio de oficinas práticas de computação para estudantes do Ensino Fundamental II e Ensino Médio, <strong>além de formar professores da Educação Básica na BNCC Computação</strong>. Nossa metodologia é baseada na aprendizagem por projetos, estimulando criatividade, protagonismo e pensamento computacional de forma prática e colaborativa.
                </p>
                <p className="font-medium text-[1.25rem]">
                    <strong>Todas nossas oficinas são gratuitas para as redes públicas</strong>, garantindo acesso inclusivo e equitativo à formação em tecnologia. Nossa atuação é viabilizada por meio de parcerias com secretarias de educação e empresas que investem em fundos sociais dedicados à transformação da educação.
                </p>
            </div>
        </section>
    )
}