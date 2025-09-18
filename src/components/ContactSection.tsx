"use client";
import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        assunto: "",
        telefone: "",
        mensagem: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === "telefone") {
            let onlyNumbers = value.replace(/\D/g, "");
            if (onlyNumbers.length > 11) onlyNumbers = onlyNumbers.slice(0, 11);

            let formatted = onlyNumbers;
            if (onlyNumbers.length > 2) {
                formatted = `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2)}`;
            }
            if (onlyNumbers.length > 7) {
                formatted = `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2, 7)}-${onlyNumbers.slice(7)}`;
            }

            setFormData({ ...formData, telefone: formatted });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.nome.trim()) newErrors.nome = "Campo obrigatório";
        if (!formData.email.trim()) newErrors.email = "Campo obrigatório";
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido";
        if (!formData.assunto.trim()) newErrors.assunto = "Campo obrigatório";

        if (formData.telefone && !/^\(\d{2}\) \d{5}-\d{4}$/.test(formData.telefone)) {
            newErrors.telefone = "Formato inválido. Ex: (11) 98765-4321";
        }

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log("Enviado com sucesso:", formData);
        }
    };

    return (
        <section
            id="contato"
            className="relative w-full py-[60px] px-6 md:px-0 overflow-hidden"
        >
            {/* Fundo invertido e com opacidade */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                    backgroundImage: "url('/images/background-contact-section.jpg')",
                    transform: "scaleX(-1)",
                }}
            />

            {/* Conteúdo */}
            <div className="relative max-w-[440px] mx-auto text-center z-20 2xl:z-10">
                <h1 className="text-[2.5rem] font-bold pb-2">Vamos conversar?</h1>
                <p>
                    Se você quer saber mais sobre como levar a Elimu para sua escola ou rede, entre em contato:
                </p>
            </div>

            <div className="relative max-w-[600px] w-full mx-auto pt-10 z-20 2xl:z-10">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="nome"
                            placeholder="Seu nome completo*"
                            value={formData.nome}
                            onChange={handleChange}
                            className={`bg-white border p-2 rounded ${errors.nome ? "border-red-500" : "border-gray-300"}`}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            value={formData.email}
                            onChange={handleChange}
                            className={`bg-white border p-2 rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
                        />
                        <input
                            type="text"
                            name="assunto"
                            placeholder="Assunto*"
                            value={formData.assunto}
                            onChange={handleChange}
                            className={`bg-white border p-2 rounded ${errors.assunto ? "border-red-500" : "border-gray-300"}`}
                        />
                        <input
                            type="text"
                            name="telefone"
                            placeholder="Número para contato"
                            value={formData.telefone}
                            onChange={handleChange}
                            className={`bg-white border p-2 rounded ${errors.telefone ? "border-red-500" : "border-gray-300"}`}
                        />
                    </div>

                    <textarea
                        name="mensagem"
                        placeholder="Sua mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="border border-gray-300 bg-white p-2 rounded resize-none h-[135px]"
                    />

                    <p>
                        <span className="text-red-500">*</span> Campo obrigatório!
                    </p>

                    <button
                        type="submit"
                        className="bg-secondary font-extrabold text-[1.125rem] text-primary py-2 rounded w-[205px] cursor-pointer"
                    >
                        Enviar
                    </button>
                </form>
            </div>

            <div className="absolute hidden lg:block right-0 xl:right-16 bottom-0 overflow-hidden pointer-events-none w-[410px] h-[615px] z-10 2xl:z-20">
                <Image
                    src="/images/person-contact.png"
                    alt="Contato"
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    );
}
