"use client";

import Image from "next/image";

export default function CallSection() {
  return (
    <div
      className="relative background-call-section w-full py-[56px] lg:py-0 lg:h-[300px] text-white text-center lg:text-start bg-cover bg-center mt-[95px]"
      style={{ backgroundImage: "url('/images/background-call-section.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#045071] opacity-90" />

      <div className="max-w-7xl w-full h-full flex flex-col lg:flex-row items-center justify-between mx-auto px-8">
        <div className="relative w-full max-w-[840px] z-10">
          <h1 className="text-[2.5rem] font-extrabold">
            Pronto para transformar sua instituição?
          </h1>
          <p className="font-medium text-[1.125rem] py-[28px] lg:py-0 lg:pt-[28px]">
            Com a Elimu, a implementação da BNCC Computação acontece de forma
            <br /> segura, personalizada e envolvente para a sua instituição de ensino.
            <br /> <strong>Hakuna Matata</strong>, vai dar tudo certo.
          </p>
        </div>

        <button onClick={() => window.open("https://wa.me/5553991299693", "_blank")} className="relative flex items-center justify-center gap-2 mt-6 lg:mt-0 z-10 p-2 w-[200px] ml-8 bg-secondary text-white hover:opacity-90 transition-opacity duration-100 cursor-pointer">
          <Image src="/images/whatsapp-icon.svg" alt="Whatsapp" width={20} height={20} />  Chamar a Elimu
        </button>
      </div>
    </div>
  );
}
