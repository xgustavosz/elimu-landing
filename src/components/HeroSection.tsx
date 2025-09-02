"use client"

import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      className="relative pt-[100px] min-h-[734px] flex items-center justify-center px-6 md:px-20 py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background-hero-section.jpg')" }}
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center lg:justify-between w-full">
        {/* Texto à esquerda */}
        <div className="flex-1 justify-center space-y-6 text-left">
          <h1 className="text-primary lg:w-full w-[400px] text-4xl md:text-5xl font-bold font-audiowide">
            Educação Criativa e <br /> Tecnológica, <span className="text-secondary">sem complicação</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-md">
            Formação de professores e oficinas para alunos, alinhadas à BNCC Computação, perfeitamente adaptadas à realidade da sua escola ou rede.
          </p>
          <Link
            href="#contato"
            className="inline-block bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:brightness-90 transition"
          >
            Quero entrar em contato!
          </Link>
        </div>

        {/* Imagem à direita */}
        <div className="absolute hidden md:flex right-0 xl:w-full w-[470px] xl:h-full h-[450] bottom-[-45px] xl:bottom-[-90px] flex-1 justify-center md:justify-end mt-10 md:mt-0 pointer-events-none">
          <Image
            src="/images/person-laptop.png"
            alt="Educação Criativa"
            width={751}
            height={713}
            priority
          />
        </div>
      </div>
    </section>
  )
}
