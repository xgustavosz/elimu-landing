"use client";

import { useState } from "react";
import TimeLineAlbum from "./TimeLineAlbum";
import Image from "next/image";

export default function RobopelTimeLineSection() {
    const [isSelected, setIsSelected] = useState(213);
    const timelineYears = [
        { year: 214, label: 'Em breve' },
        { year: 213, label: '2025' },
        { year: 212, label: '2024' },
        { year: 211, label: '2023' },
        { year: 210, label: '2022' },
        { year: 209, label: '2021' },
        { year: 208, label: '2020' },
        { year: 207, label: '2019' },
        { year: 206, label: '2018' },
    ]

    return (
        <div className="relative px-8 py-[100px] w-full mx-auto">
            <div className="relative max-w-6xl mx-auto">
                <div className="absolute hidden lg:block w-[518px] h-[818px] top-[-510px] right-[-100px]">
                    <Image src="/images/robopel-timeline-section.png" alt="Robopel" fill className="-scale-x-100 top-0 left-0 w-full h-auto z-10" />
                </div>

                <div className="relative font-extrabold text-[2.5rem] max-w-[670px] w-full leading-[100%] z-20">
                    <p>Em Julho de 2026: <span className="text-secondary">ROBOPEL 214</span></p>
                    <p>Preparem seus projetos e tragam suas mostras interativas.</p>
                </div>
                <div>
                    <div className="flex gap-4">
                        <h2 className="font-medium text-[1.25rem]">Linha do tempo</h2>
                        <div className="w-full max-w-[73px] h-[4px] bg-secondary mt-3" />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between gap-10">
                            <div>
                                {timelineYears.map((year: any) => (
                                    <div key={year.year} className={`border-l-4 ${isSelected === year.year ? 'border-secondary' : 'border-primary'}`}>
                                        <button onClick={() => setIsSelected(year.year)} disabled={year.year === 214} className={`hover:bg-secondary hover:opacity-70 transition-all cursor-pointer w-[220px] h-[72px] ml-10 ${isSelected === year.year ? 'bg-secondary' : 'transparent'} font-extrabold text-[1.25rem]`}>{year.year} - <span className={`${isSelected === year.year ? 'text-white' : 'text-primary font-medium'}`}>{year.label}</span></button>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <TimeLineAlbum year={isSelected} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}