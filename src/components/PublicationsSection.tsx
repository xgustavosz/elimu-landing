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

  const itemsPerPage = 6; // cards por página
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtra as publicações pelo nome
  const filteredPublications = PublicationsData.filter((publication) =>
    publication.cardName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginação para os resultados filtrados
  const totalPages = Math.ceil(filteredPublications.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentCards = filteredPublications.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div id="publicacoes" className="flex md:flex-row flex-col gap-[25px] justify-center px-8">
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
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(0); // volta à primeira página ao pesquisar
          }}
        />

        <RobopelBanner />
      </div>

      {/* Carrossel */}
      <div className="flex flex-col items-center w-full max-w-[940px]">
        <div
          key={currentPage} // força re-render para animação
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] justify-center animate-fadeIn"
        >
          {currentCards.map((publication, index) => (
            <PublicationCard key={index} {...publication} />
          ))}

          {currentCards.length === 0 && (
            <p className="col-span-full text-center text-gray-500 mt-10">
              Nenhuma publicação encontrada.
            </p>
          )}
        </div>

        {/* Controles */}
        {totalPages > 1 && (
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
        )}
      </div>
    </div>
  );
}
