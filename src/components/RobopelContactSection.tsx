"use client";

import Image from "next/image";
import { useState } from "react";

export default function RobopelContactSection() {
    const [formData, setFormData] = useState({
        instituicao: "",
        responsavel: "",
        email: "",
        telefone: "",
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

        if (!formData.instituicao.trim()) newErrors.instituicao = "Campo obrigatório";
        if (!formData.responsavel.trim()) newErrors.responsavel = "Campo obrigatório";

        if (!formData.email.trim()) {
            newErrors.email = "Campo obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }

        if (!formData.telefone.trim()) {
            newErrors.telefone = "Campo obrigatório";
        } else if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(formData.telefone)) {
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
            id="seja-parceiro"
            className="relative w-full bg-cover bg-center py-[60px] px-8 md:px-0 overflow-hidden"
        >
            {/* Overlay com imagem invertida e opacidade */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40 scale-x-[-1]"
                style={{ backgroundImage: "url('/images/background-contact-section.jpg')" }}
            ></div>

            {/* Conteúdo */}
            <div className="relative mx-auto text-center z-20 2xl:z-10">
                <h1 className="text-[2.5rem] font-bold">
                    Seja parceiro <span className="font-statewide text-secondary">ROBOPEL 214</span>
                </h1>
                <p>Envie seus dados que entraremos em contato.</p>
            </div>

            <div className="relative max-w-[600px] w-full mx-auto pt-10 z-20 2xl:z-10">
                <div className="absolute hidden lg:block right-[-320px] bottom-[-190px] overflow-hidden pointer-events-none w-[380px] h-[424px] z-10 2xl:z-20">
                    <Image
                        src="/images/robopel-contact-section.png"
                        alt="Contato"
                        fill
                        className="object-contain"
                    />
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 md:gap-2 md:justify-between">
                        <input
                            type="text"
                            name="instituicao"
                            placeholder="Nome da Instituição*"
                            value={formData.instituicao}
                            onChange={handleChange}
                            className={`bg-white border p-2 rounded ${errors.instituicao ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.instituicao && <span className="text-red-500 text-sm">{errors.instituicao}</span>}

                        <input
                            type="text"
                            name="responsavel"
                            placeholder="Nome do responsável completo*"
                            value={formData.responsavel}
                            onChange={handleChange}
                            className={`bg-white border p-2 rounded ${errors.responsavel ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.responsavel && <span className="text-red-500 text-sm">{errors.responsavel}</span>}

                        <div className="flex flex-col md:flex-row gap-4 md:gap-2 md:justify-between">
                            <div className="flex-1">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email*"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`bg-white w-full border p-2 rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
                                />
                                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                            </div>
                            <div className="flex-1">
                                <input
                                    type="text"
                                    name="telefone"
                                    placeholder="WhatsApp*"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                    className={`bg-white w-full border p-2 rounded ${errors.telefone ? "border-red-500" : "border-gray-300"}`}
                                />
                                {errors.telefone && <span className="text-red-500 text-sm">{errors.telefone}</span>}
                            </div>
                        </div>
                    </div>

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
        </section>
    );
}
