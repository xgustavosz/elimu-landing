"use client";

import Image from "next/image";

export default function RobopelCallSection() {
    return (
        <div
            className="relative w-full py-[128px] bg-primary"
            style={{ backgroundImage: 'url("/images/background-robopel-call-section.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[#045071] opacity-90 z-10" />

            <div className="relative flex justify-between items-center max-w-7xl px-6 w-full mx-auto z-30">
                <div className="flex flex-col gap-6 max-w-[540px]">
                    <p className="font-extrabold text-[2.5rem] text-white leading-[100%]">Uma experiência que une tecnologia, arte e inclusão.</p>
                    <p className="text-[1.125rem] text-white max-w-[430px] w-full">Venha participar de um dos eventos mais inspiradores do ano, que conecta robótica, meio ambiente e educação tecnológica.</p>
                    <button onClick={() => window.open("https://wa.me/5553991299693", "_blank")} className="flex items-center justify-center gap-2 w-[205px] h-[45px] bg-secondary text-white cursor-pointer hover:opacity-90 transition-opacity duration-100 rounded-[2px]">
                        <Image src="/images/whatsapp-icon.svg" alt="Whatsapp" width={20} height={20} />
                        Chamar a Elimu
                    </button>
                </div>
                <div className="absolute w-[846px] rotate-[-4deg] h-[570px] bottom-[-166px] hidden xl:block right-0 z-20">
                    <Image
                        src="/images/robopel-call-section.png"
                        alt="Robopel"
                        fill
                        className="object-contain scale-x-[-1]"
                    />
                </div>
            </div>
        </div>
    )
}