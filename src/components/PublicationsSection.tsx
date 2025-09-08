"use client";
import { useState } from "react";
import RobopelBanner from "./RobopelBanner";
import PublicationCard from "./PublicationCard";

export default function PublicationsSection() {
  const PublicationsData = [
    {
      cardName: "Aprendizado significativo: projetando memórias duradouras",
      publication: "Medium",
      imageUrl: "/images/publication-card-01.jpg",
    },
    {
      cardName:
        "Celulares nas Escolas: Desafios, Impactos e a Computação Criativa como alternativa",
      publication: "Medium",
      imageUrl: "/images/publication-card-01.jpg",
    },
    {
      cardName: "Prática com Computação: Scratch",
      publication: "Medium",
      imageUrl: "/images/publication-card-01.jpg",
    },
    {
      cardName:
        "Inteligência Artificial: Breve jornada do Neurônio Artificial à IA Generativa",
      publication: "Medium",
      imageUrl: "/images/publication-card-01.jpg",
    },
    {
      cardName: "Computação Criativa na Educação",
      publication: "Medium",
      imageUrl: "/images/publication-card-01.jpg",
    },
    {
      cardName: "How can we evaluate?",
      publication: "EDUCON",
      imageUrl: "/images/publication-card-01.jpg",
    },
    {
      cardName: "Novo artigo teste 1",
      publication: "Blog",
      imageUrl: "/images/publication-card-01.jpg",
    },
    {
      cardName: "Novo artigo teste 2",
      publication: "Blog",
      imageUrl: "/images/publication-card-01.jpg",
    },
  ];

  // Configuração
  const itemsPerPage = 6; // agora 6 cards por página
  const totalPages = Math.ceil(PublicationsData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Cards da página atual
  const startIndex = currentPage * itemsPerPage;
  const currentCards = PublicationsData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="flex md:flex-row flex-col gap-[25px] justify-center px-8">
      {/* Lateral esquerda */}
      <div className="max-w-[260px] w-full">
        <div className="flex items-center gap-5">
          <h1 className="text-[2.5rem] font-bold pb-5">Publicações</h1>
          <div className="bg-secondary h-1 w-[73px] mb-4" />
        </div>
        <input
          type="text"
          placeholder="Pesquisar"
          className="w-full mb-16 border border-gray-300 rounded-md px-4 py-2"
        />

        <RobopelBanner />
      </div>

      {/* Carrossel */}
      <div className="flex flex-col items-center w-full max-w-[940px]">
        <div
          key={currentPage} // força re-render para animar
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] justify-center animate-fadeIn"
        >
          {currentCards.map((publication, index) => (
            <PublicationCard key={index} {...publication} />
          ))}
        </div>

        {/* Controles */}
        <div className="flex items-center justify-between w-full mt-8">
          <button
            onClick={handlePrev}
            className="cursor-pointer px-6 py-3 max-w-[160px] lg:max-w-[295px] w-full text-lg bg-secondary text-[#045071] font-semibold hover:bg-yellow-500 transition"
          >
            ← Voltar
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentPage ? "bg-secondary scale-110" : "bg-[#045071]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="cursor-pointer px-6 py-3 max-w-[160px] lg:max-w-[295px] w-full text-lg bg-secondary text-[#045071] font-semibold hover:bg-yellow-500 transition"
          >
            Avançar →
          </button>
        </div>
      </div>
    </div>
  );
}
