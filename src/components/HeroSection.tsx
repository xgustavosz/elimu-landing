"use client"

import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      className="relative w-full mb-[300px] lg:mb-0 lg:mt-0 shadow-lg pt-[180px] lg:pt-[100px] pb-[160px] lg:pb-[200px] min-h-[734px] flex items-center justify-center py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background-hero-section.jpg')" }}
    >
      <div className="relative max-w-7xl px-6 mx-auto h-full flex flex-col md:flex-row items-center lg:justify-between w-full">
        {/* Texto à esquerda */}
        <div className="lg:flex-1 pb-4 mx-auto flex flex-col items-center lg:items-start justify-center space-y-6 text-left">
          <h1 className="text-primary md:w-full w-[380px] text-5xl font-audiowide">
            Educação Criativa e <br /> Tecnológica, <span className="text-secondary">sem complicação</span>.
          </h1>
          <p className="text-xl py-[50px] md:py-0 text-primary max-w-[400px] md:max-w-[650px]">
            Formação de professores e oficinas para alunos, alinhadas à BNCC Computação, perfeitamente adaptadas à realidade da sua escola ou rede.
          </p>
          <Link
            href="#contato"
            className="inline-block w-full max-w-[266px] text-center bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:brightness-90 transition"
          >
            Quero entrar em contato!
          </Link>
        </div>

        <div className="absolute w-[121px] lg:w-[197px] h-[172px] lg:h-[278px] right-[-40px] lg:left-40 bottom-[-160px] lg:bottom-[-292px] pointer-events-none -scale-x-100">
          <Image src="/images/robot-hero-section.png" alt="Robô" fill priority />
        </div>

        <div className="absolute right-[-50px] lg:right-[-40px] w-[487px] xl:w-[752px] xl:h-[713px] h-[462px] bottom-[-476px] lg:bottom-[-380px] flex-1 justify-center md:justify-end mt-10 md:mt-0 pointer-events-none">
          <Image
            src="/images/person-laptop.png"
            alt="Educação Criativa"
            fill
            priority
          />
        </div>
      </div>
    </section>
  )
}
