import HelpCard from "./HelpCard";

export default function HelpSection() {
    const helpCards = [
        {
            title: "Consultoria e Formação de Professores",
            image: "elimu-school-01.jpg",
        },
        {
            title: "Oficinas para Alunos",
            image: "elimu-school-03.png",
        },
        {
            title: "Pesquisa & Publicações",
            image: "elimu-school-02.png",
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center px-6 pt-6 lg:pt-0">
            <div className="text-center">
                <h1 className="font-extrabold text-[2.5rem]">Como ajudamos a sua escola?</h1>
                <p className="font-medium text-[1.125rem] pt-[30px]">Oferecemos programas combinados de formação docente e oficinas práticas para estudantes,<br /> sempre alinhados à BNCC Computação e personalizados para cada escola ou rede.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-[30px] pt-12">
                {helpCards.map((card, index) => (
                    <HelpCard key={index} title={card.title} image={card.image} />
                ))}
            </div>
        </div>
    )
}