'use client';

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="font-lato relative md:h-[366px] text-white md:py-4 pt-4 pb-30 md:pb-0 z-20">
            {/* Background + Overlay */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/background-footer.jpg')",
                        backgroundPosition: "center 20%",
                    }}
                ></div>
                <div className="absolute inset-0 bg-[#045071] opacity-85"></div>
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col gap-4 md:gap-10">
                <div className="flex w-full px-[60px] md:px-0 flex-col md:flex-row md:mx-0 items-start md:items-center justify-between h-full py-6 md:py-12 text-start">
                    <div>
                        <h2 className="font-extrabold pb-2 md:pb-6">Onde Estamos</h2>
                        <p className="font-medium text-sm">Pelotas Parque Tecnológico</p>
                        <p className="font-medium text-sm">Av. Domingos de Almeida, 1782 Areal</p>
                        <p className="font-medium text-sm">Pelotas RS - 96085-470</p>
                    </div>
                    <div className="my-10 md:my-0">
                        <h2 className="font-extrabold pb-2 md:pb-6">Contato</h2>
                        <p className="font-medium text-sm">
                            Telefone: <a href="tel:+5553991299693" className="hover:underline">(53) 9 9129-9693</a>
                        </p>
                        <p className="font-medium text-sm">
                            E-mail: <a href="mailto:elimu@elimusocial.com.br" className="hover:underline">elimu@elimusocial.com.br</a>
                        </p>
                    </div>
                    <div>
                        <h2 className="font-extrabold pb-2 md:pb-6 md:text-end">Social</h2>
                        <div className="flex flex-col lg:flex-row justify-end gap-4 text-sm">
                            <a href="https://instagram.com/elimusocial" className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/instagram-icon.svg" alt="Instagram" width={24} height={24} />
                                @elimusocial
                            </a>
                            <a href="https://facebook.com/elimusocial" className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/facebook-icon.svg" alt="Facebook" width={24} height={24} />
                                elimusocial
                            </a>
                            <a href="https://linkedin.com/company/elimusocial" className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/linkedin-icon.svg" alt="Linkedin" width={24} height={24} />
                                elimu-social
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center flex-col md:flex-row">
                    <div className="relative w-[167px] h-[54px] mb-4 md:mb-0">
                        <Image src="/images/logo-secondary.svg" alt="Logo do Elimu" fill />
                    </div>
                    <p className="text-sm">© 2025 Elimu. Todos os direitos reservados.</p>
                </div>
            </div>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer absolute bottom-[18px] left-1/2 -translate-x-1/2 w-10 h-10">
                <Image src="/images/top-btn.svg" alt="Voltar para o topo" fill />
            </button>
        </footer>
    );
}
