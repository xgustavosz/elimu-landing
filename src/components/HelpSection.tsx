import HelpCard from "./HelpCard";

export default function HelpSection() {
    const helpCards = [
        {
            title: "Consultoria e Formação de Professores",
            image: "elimu-school-01.jpg",
            description: "Na Elimu Social, desenvolvemos formações em BNCC Computação voltadas para professores da Educação Básica, sempre de forma personalizada. Cada percurso formativo é construído em parceria com a rede de ensino, considerando os recursos tecnológicos já disponíveis, os aspectos culturais da região e os interesses de alunos e professores. Assim, garantimos que a prática pedagógica com tecnologias faça sentido no cotidiano escolar, fortalecendo o aprendizado e valorizando a realidade da comunidade educativa.",
        },
        {
            title: "Oficinas para Alunos",
            image: "elimu-school-03.png",
            description: "As oficinas de Computação Criativa e Robótica da Elimu são voltadas para alunos do 6º ano do Ensino Fundamental ao 3º ano do Ensino Médio. Nessas experiências, os estudantes desenvolvem habilidades previstas na BNCC Computação, como o pensamento computacional, a criação de soluções tecnológicas, o uso crítico e ético das tecnologias digitais e a compreensão da inteligência artificial e suas implicações. Por isso, nossas oficinas aproximam os estudantes da computação de maneira criativa, prática e significativa, preparando- os para usar a tecnologia não apenas como consumidores, mas como criadores e protagonistas no mundo digital.",
        },
        {
            title: "Pesquisa & Publicações",
            image: "elimu-school-02.png",
            description: "Artigos acadêmicos e colunas que conectam teoria e prática.",
        }
    ];

    return (
        <div id="oque-fazemos" className="flex flex-col items-center justify-center px-8 pt-0 max-w-7xl w-full mx-auto mt-[-140px] lg:mt-20">
            <div className="text-center">
                <h1 className="font-extrabold text-[2.5rem]">Como ajudamos a sua escola?</h1>
                <p className="font-medium text-start md:text-center text-[1.125rem] pt-[30px]">Oferecemos programas combinados de formação docente e oficinas práticas para estudantes,<br /> sempre alinhados à BNCC Computação e personalizados para cada escola ou rede.</p>
            </div>

            <div className="flex flex-col md:flex-row w-full items-center md:items-start justify-center md:justify-between gap-[30px] pt-12">
                {helpCards.map((card, index) => (
                    <HelpCard key={index} title={card.title} image={card.image} description={card.description} />
                ))}
            </div>
        </div>
    )
}