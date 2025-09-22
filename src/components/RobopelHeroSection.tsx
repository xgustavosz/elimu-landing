import { strong } from "framer-motion/client"
import Image from "next/image"
import Link from "next/link"

export default function RobopelHeroSection() {
    return (
        <div
            id="evento"
            className="pt-[100px] px-8 mx-auto pb-[50px] drop-shadow-lg shadow-[#00000096]"
            style={{ background: 'url(/images/background-contact-section.jpg) no-repeat center', backgroundSize: 'cover' }}
        >
            <div className="max-w-7xl px-6 mx-auto">
                <div className="max-w-[700px] flex flex-col items-center md:items-start">
                    <div className="relative w-[360px] h-[80px]">
                        <Image src="/images/robopel-title.png" alt="Robopel" fill />
                    </div>

                    <h2 className="font-extrabold text-[2.5rem]">Ciência, Arte, Tecnologia e Inclusão</h2>
                    <p className="font-medium text-lg my-[50px] leading-[24px] relative z-20">
                        O <strong>ROBOPEL</strong> é um evento anual realizado em julho, em comemoração ao aniversário da cidade de Pelotas. Desde 2018, reúne escolas da região sul do Rio Grande do Sul em uma grande feira de inovação pedagógica, onde são apresentadas e premiadas mostras de <strong>Ciência, Arte e Tecnologia</strong> desenvolvidas pelos alunos. Todas as escolas são convidadas a participar, valorizando a criatividade e o protagonismo estudantil. A cada edição, o evento recebe no nome a idade que a cidade completa — em 2025, por exemplo, aconteceu o <strong>ROBOPEL – 213</strong>. O encontro é sediado no <strong>Pelotas Parque Tecnológico</strong>, fortalecendo a integração entre educação, pesquisa e inovação.
                    </p>
                    {/* <button className="cursor-pointer hover:opacity-90 transition-opacity duration-100 bg-secondary max-w-[266px] w-full h-[45px] text-lg font-medium">Seja parceiro <strong>ROBOPEL</strong></button> */}
                    <Link href="#seja-parceiro" className="cursor-pointer gap-1 text-center flex items-center justify-center hover:opacity-90 transition-opacity duration-100 bg-secondary max-w-[266px] w-full h-[45px] text-lg font-medium">
                        Seja parceiro <strong>ROBOPEL</strong>
                    </Link>
                </div>
            </div>
        </div>
    )
}