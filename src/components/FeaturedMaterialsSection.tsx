import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";

export default function FeaturedMaterialsSection() {
    return (
        <div
            id="materias"
            className="relative w-full py-[43px] pb-20"
            style={{ backgroundImage: 'url("/images/background-featured-section.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[#E3E3E3] opacity-80 z-10" />

            <div className="max-w-7xl px-6 w-full mx-auto relative flex flex-col items-center justify-center gap-10 z-20">
                <h1 className="text-primary font-extrabold text-[2.5rem]">Matérias em destaque</h1>

                <div className="flex flex-col md:flex-row justify-center w-full items-center gap-10">
                    <div className="relative w-full h-[171px] bg-white flex items-center flex-col gap-4 pt-[23px]">
                        <p className="text-[1.25rem] max-w-[270px] w-full text-center leading-[100%]">Robopel 213 destaca protagonismo dos jovens que fazem ciencia e tecnologia.</p>
                        <div className="relative w-[150px] h-[19px]">
                            <Image src="/images/featured-image-01.svg" alt="A hora do sul" fill />
                        </div>
                        <Link href={"https://ahoradosul.com.br/conteudos/2025/07/04/robopel-213-destaca-protagonismo-dos-jovens-que-fazem-ciencia-e-tecnologia/"} target="_blank" className="absolute bottom-[-25px] w-[64px] h-[48px] bg-secondary flex items-center justify-center">
                            <AiOutlineLink className="text-[40px] rotate-[26deg] text-white" />
                        </Link>
                    </div>

                    <div className="relative w-full h-[171px] bg-secondary flex items-center flex-col gap-4 pt-[23px]">
                        <p className="text-white text-[1.25rem] max-w-[270px] w-full text-center leading-[100%]">Robopel reúne mais de 1500 estudantes em Pelotas.</p>
                        <div className="relative w-[150px] h-[33px]">
                            <Image src="/images/featured-image-02.svg" alt="Globoplay" fill />
                        </div>
                        <Link href={"https://globoplay.globo.com/v/13729865/"} target="_blank" className="absolute bottom-[-25px] w-[64px] h-[48px] bg-white flex items-center justify-center">
                            <AiOutlineLink className="text-[40px] rotate-[26deg] text-secondary" />
                        </Link>
                    </div>

                    <div className="relative w-full h-[171px] bg-white flex items-center flex-col gap-4 py-[23px]">
                        <p className="text-[1.25rem] max-w-[270px] w-full text-center leading-[100%]">Oficinas de ciência, arte e tecnologia e a inclusão.</p>
                        <div className="relative w-[150px] h-[39px]">
                            <Image src="/images/featured-image-03.svg" alt="Jornal Tradição" fill />
                        </div>
                        <Link href={"https://www.jornaltradicao.com.br/regiao/colunistas/oficinas-de-ciencia-arte-e-tecnologia-e-a-inclusao/"} target="_blank" className="absolute bottom-[-25px] w-[64px] h-[48px] bg-secondary flex items-center justify-center">
                            <AiOutlineLink className="text-[40px] rotate-[26deg] text-white" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}