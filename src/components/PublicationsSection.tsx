"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import RobopelBanner from "./RobopelBanner"
import PublicationCard from "./PublicationCard"

export default function PublicationsSection() {
  const PublicationsData = [
    {
      cardName: "Aprendizado significativo: projetando memórias duradouras",
      publication: "Medium",
      imageUrl: "/images/publication-card-01.jpg",
      link: "https://medium.com/@dirceumaraschin/aprendizado-significativo-projetando-mem%C3%B3rias-duradouras-3d7423fd3f8a"
    },
    {
      cardName:
        "Celulares nas Escolas: Desafios, Impactos e a Computação Criativa como alternativa",
      publication: "Medium",
      imageUrl: "/images/publication-card-02.png",
      link: "https://medium.com/@tiagoprimo/celulares-nas-escolas-desafios-impactos-e-a-computa%C3%A7%C3%A3o-criativa-como-alternativa-c1c74149d92f"
    },
    {
      cardName: "Prática com Computação: Scratch",
      publication: "Medium",
      imageUrl: "/images/publication-card-03.png",
      link: "https://medium.com/@tiagoprimo/pr%C3%A1tica-com-computa%C3%A7%C3%A3o-criativa-scratch-9c5810ca133c"
    },
    {
      cardName:
        "Inteligência Artificial: Breve jornada do Neurônio Artificial à IA Generativa",
      publication: "Medium",
      imageUrl: "/images/publication-card-04.png",
      link: "https://medium.com/@tiagoprimo/intelig%C3%AAncia-artificial-breve-jornada-do-neur%C3%B4nio-artificial-a-ia-generativa-75b90e1ad875"
    },
    {
      cardName:
        "Computação Criativa na Educação: Repensando Práticas para Engajar Alunos no Século XXI",
      publication: "Medium",
      imageUrl: "/images/publication-card-05.png",
      link: "https://medium.com/@tiagoprimo/computa%C3%A7%C3%A3o-criativa-na-educa%C3%A7%C3%A3o-repensando-pr%C3%A1ticas-para-engajar-alunos-no-s%C3%A9culo-xxi-32f3e16cf3e1"
    },
    {
      cardName:
        "How can we evaluate? A Systematic Mapping of Maker Activities and their Intersections with the Formal Education System",
      publication:
        "2022 IEEE Global Engineering Education Conference (EDUCON)",
      imageUrl: "/images/publication-card-06.png",
      link: "https://ieeexplore.ieee.org/document/9766456"
    },
    {
      cardName:
        "A Framework for Collecting and Analyzing Interactions in Scratch Projects",
      publication:
        "Latin American Conference on Learning Technologies (LACLO)",
      imageUrl: "/images/publication-card-07.png",
      link: "https://ieeexplore.ieee.org/document/8994998"
    },
    {
      cardName:
        "Implementação de Programas de Formação Continuada para o Domínio de Tecnologias Educacionais: Análise de Percepções de Educadores sobre o Programa Letramento Digital e Criativo",
      publication: "Tese Doutorado",
      imageUrl: "/images/publication-card-08.png",
      link: "https://www.researchgate.net/publication/387895320_Implementacao_de_Programas_de_Formacao_Continuada_para_o_Dominio_de_Tecnologias_Educacionais_Analise_de_Percepcoes_de_Educadores_sobre_o_Programa_Letramento_Digital_e_Criativo"
    },
    {
      cardName:
        "Near Feasibility, Distant Practicality: Empirical Analysis of Deploying and Using LLMs on Resource-Constrained Smartphones",
      publication:
        "ACM - ICTD: Information and Communication Technologies and Development",
      imageUrl: "/images/publication-card-09.png",
      link: "https://dl.acm.org/doi/10.1145/3700794.3700817"
    },
    {
      cardName:
        "Potencialidades e Desafios na Formação Continuada de Educadores em Metodologias Ativas",
      publication: "RBIE (Revista Brasileira de Informática na Educação)log",
      imageUrl: "/images/publication-card-10.png",
      link: "https://journals-sol.sbc.org.br/index.php/rbie/article/view/4093/3145"
    },
    {
      cardName:
        "ReaCloud: A proposal for the dissemination of open educational resources supported by Semantic Web technologies",
      publication:
        "Latin American Conference on Learning Technologies (LACLO)",
      imageUrl: "/images/publication-card-11.png",
      link: "https://ieeexplore.ieee.org/document/9725133"
    },
  ]

  const [page, setPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(6)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(6) // 3x2
      else if (window.innerWidth >= 640) setItemsPerPage(4) // 2x2
      else setItemsPerPage(2) // 1x2
    }
    updateItems()
    window.addEventListener("resize", updateItems)
    return () => window.removeEventListener("resize", updateItems)
  }, [])

  // Filtra os dados de acordo com a pesquisa
  const filteredData = PublicationsData.filter((item) =>
    item.cardName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.publication.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const handleNext = () => {
    if (page < totalPages - 1) setPage((prev) => prev + 1)
  }

  const handlePrev = () => {
    if (page > 0) setPage((prev) => prev - 1)
  }

  // Resetar para a primeira página ao mudar a pesquisa
  useEffect(() => {
    setPage(0)
  }, [searchQuery])

  return (
    <div id="publicacoes" className="font-lato flex xl:flex-row flex-col gap-[25px] justify-center px-8">
      {/* Lateral esquerda */}
      <div className="max-w-[260px] w-full mx-auto xl:mx-0">
        <div className="flex items-center gap-5">
          <h1 className="text-[2.5rem] font-bold pb-5">Publicações</h1>
          <div className="bg-secondary h-1 w-[73px] mb-4" />
        </div>

        <input
          type="text"
          placeholder="Pesquisar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full mb-[34px] xl:mb-16 border border-gray-300 rounded-md px-4 py-2"
        />

        <div className="hidden xl:block">
          <RobopelBanner />
        </div>
      </div>

      {/* Carrossel */}
      <div className="flex flex-col items-center w-full max-w-[940px] overflow-hidden mx-auto xl:mx-0">
        <motion.div
          animate={{ x: `-${page * 100}%` }}
          transition={{ type: "tween", duration: 0.5 }}
          className="flex w-full"
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-[25px] w-full flex-shrink-0 justify-items-center xl:justify-items-start"
            >
              {filteredData
                .slice(i * itemsPerPage, (i + 1) * itemsPerPage)
                .map((publication, index) => (
                  <PublicationCard key={index} {...publication} />
                ))}
            </div>
          ))}
        </motion.div>

        {/* Controles */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between w-full mt-8">
            <button
              onClick={handlePrev}
              disabled={page === 0}
              className="cursor-pointer px-6 py-3 max-w-[160px] lg:max-w-[295px] w-full text-lg bg-secondary text-[#045071] font-semibold hover:bg-yellow-500 transition disabled:opacity-50"
            >
              ← Voltar
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === page ? "bg-secondary scale-110" : "bg-[#045071]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={page === totalPages - 1}
              className="cursor-pointer px-6 py-3 max-w-[160px] lg:max-w-[295px] w-full text-lg bg-secondary text-[#045071] font-semibold hover:bg-yellow-500 transition disabled:opacity-50"
            >
              Avançar →
            </button>
          </div>
        )}
        <div className="flex items-center justify-center mx-auto xl:hidden w-full mt-[33px]">
          <RobopelBanner isFullWidth />
        </div>
      </div>
    </div>
  )
}
