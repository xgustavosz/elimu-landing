"use client";

import { useState } from "react";
import TimeLineAlbum from "./TimeLineAlbum";
import Image from "next/image";

export default function RobopelTimeLineSection() {
    const [isSelected, setIsSelected] = useState(213);
    const timelineYears = [
        { year: 214, label: 'Em breve', src: '' },
        { year: 213, label: '2025', src: '/images/timeline-01.png' },
        { year: 212, label: '2024', src: '/images/timeline-02.png' },
        { year: 211, label: '2023', src: '/images/timeline-03.png' },
        { year: 210, label: '2022', src: '/images/timeline-04.png' },
        { year: 209, label: '2021', src: '/images/timeline-05.png' },
        { year: 208, label: '2020', src: '/images/timeline-06.png' },
        { year: 207, label: '2019', src: '/images/timeline-07.png' },
        { year: 206, label: '2018', src: '/images/timeline-08.png' },
    ]

    return (
        <div id="linha-do-tempo" className="font-lato relative py-[100px] mt-[320px] lg:mt-0 w-full mx-auto">
            <div className="relative max-w-7xl xl:px-6 mx-auto">
                <div className="hidden lg:block absolute w-[518px] h-[818px] top-[-510px] right-[-100px] xl:w-[620px] xl:h-[938px] xl:top-[-606px] xl:right-[-100px]">
                    <Image src="/images/robopel-timeline-section.png" alt="Robopel" fill className="-scale-x-100 top-0 left-0 w-full h-auto z-10" />
                </div>
                <div className="block lg:hidden left-1/2 -translate-x-1/2 absolute w-[352px] h-[557px] top-[-500px]">
                    <Image src="/images/robopel-timeline-section.png" alt="Robopel" fill className="-scale-x-100 top-0 left-0 w-full h-auto z-10" />
                </div>

                <div className=" px-8 xl:px-0 relative text-center mx-auto lg:mx-0 mb-8 lg:mb-0 lg:text-start font-extrabold text-[2.5rem] max-w-[700px] w-full leading-[100%] z-20">
                    <p>Em Julho de 2026: <span className="font-statewide text-secondary">ROBOPEL 214</span></p>
                    <p>Preparem seus projetos e tragam suas mostras interativas.</p>
                    <div className="xl:hidden flex gap-4 my-8 xl:my-0 px-8 xl:px-0">
                        <h2 className="font-medium text-[1.25rem]">Linha do tempo</h2>
                        <div className="w-full max-w-[73px] h-[4px] bg-secondary mt-3" />
                    </div>
                </div>
                <div>
                    <div className="xl:flex hidden gap-4 my-8 xl:my-0 px-8 xl:px-0">
                        <h2 className="font-medium text-[1.25rem]">Linha do tempo</h2>
                        <div className="w-full max-w-[73px] h-[4px] bg-secondary mt-3" />
                    </div>

                    <div className="mt-4 flex flex-col xl:flex-row justify-between gap-6 xl:gap-10">
                        <div className="xl:flex xl:flex-col grid grid-cols-3 ">
                            {timelineYears.map((year) => (
                                <div
                                    key={year.year}
                                    className={`flex justify-center xl:justify-start xl:border-l-4 my-1 xl:my-0 ${isSelected === year.year ? "border-secondary" : "border-primary"
                                        }`}
                                >
                                    <button
                                        onClick={() => setIsSelected(year.year)}
                                        disabled={year.year === 214}
                                        className={`hover:bg-secondary hover:opacity-70 transition-all cursor-pointer w-full xl:w-[220px] max-w-[220px] h-[72px] xl:ml-10 ${isSelected === year.year ? "bg-secondary" : "transparent"
                                            } font-extrabold text-[1.25rem]`}
                                    >
                                        {year.year} -{" "}
                                        <span
                                            className={`${isSelected === year.year
                                                ? "text-white"
                                                : "text-primary font-medium"
                                                }`}
                                        >
                                            {year.label}
                                        </span>
                                    </button>
                                </div>
                            ))}
                        </div>


                        <div className="w-full max-w-[740px] mx-auto xl:mx-0">
                            {timelineYears.find((y) => y.year === isSelected)?.src && (
                                <div className="relative w-full max-w-[2226px] aspect-[2226/1972]">
                                    <Image
                                        src={timelineYears.find((y) => y.year === isSelected)!.src}
                                        alt={`Timeline ${isSelected}`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}