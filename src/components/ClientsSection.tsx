"use client"

import Image from "next/image"

const clients = [
  { src: "/images/client-01.jpg", alt: "Cliente 01" },
  { src: "/images/client-02.png", alt: "Cliente 02" },
  { src: "/images/client-03.jpg", alt: "Cliente 03" },
  { src: "/images/client-04.png", alt: "Cliente 04" },
  { src: "/images/client-05.jpg", alt: "Cliente 05" },
  { src: "/images/client-06.jpg", alt: "Cliente 06" },
  { src: "/images/client-07.png", alt: "Cliente 07" },
  { src: "/images/client-08.jpg", alt: "Cliente 08" },
  { src: "/images/client-09.png", alt: "Cliente 09" },
  { src: "/images/client-10.png", alt: "Cliente 10" },
  { src: "/images/client-11.png", alt: "Cliente 11" },
  { src: "/images/client-12.png", alt: "Cliente 12" },
  { src: "/images/client-13.png", alt: "Cliente 13" },
  { src: "/images/client-14.png", alt: "Cliente 14" },
  { src: "/images/client-15.png", alt: "Cliente 15" },
  { src: "/images/client-16.png", alt: "Cliente 16" },
  { src: "/images/client-17.png", alt: "Cliente 17" },
]

export default function ClientsSection() {
  return (
    <div className="font-lato relative flex flex-col justify-center align-center mx-auto text-center z-20 2xl:z-10 h-[340px]">
      <h1 className="text-[2.5rem] font-bold pb-2">Nossos clientes</h1>
      <p>A rede de colaboração é o que torna tudo isso possível!</p>

      {/* Carrossel */}
      <div className="overflow-hidden w-full mt-8">
        <div className="flex gap-2 animate-scroll">
          {/* duplicamos a lista para efeito infinito */}
          {[...clients, ...clients].map((client, idx) => (
            <div key={idx} className="flex-shrink-0 w-[160px] h-[100px] relative">
              <Image
                src={client.src}
                alt={client.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
