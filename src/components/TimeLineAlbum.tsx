import Image from "next/image"

interface TimeLineAlbumProps {
    year: number;
}

export default function TimeLineAlbum({ year }: TimeLineAlbumProps) {
    return (
        <>
            {year === 213 && (
                <div>
                    <div className="flex gap-1">
                        <div className="relative w-[182px] h-[322px] bg-primary">
                            <Image src="/images/timeline/213/timeline-image-01.png" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[554px] h-[322px] bg-primary">
                            <video
                                src="/images/timeline/213/timeline-video.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex gap-1 mt-1">
                        <div className="relative w-[182px] h-[322px] bg-primary">
                            <Image src="/images/timeline/213/timeline-image-02.png" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[182px] h-[322px] bg-primary">
                            <Image src="/images/timeline/213/timeline-image-03.png" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="relative w-[367px] h-[158px] bg-primary">
                                <Image src="/images/timeline/213/timeline-image-04.png" alt="Robopel 213" fill className="object-cover" />
                            </div>
                            <div className="relative w-[367px] h-[158px] bg-primary">
                                <Image src="/images/timeline/213/timeline-image-05.png" alt="Robopel 213" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {year === 212 && (
                <div className="flex gap-1">
                    <div className="relative w-[360px] h-[649px] bg-primary">
                        <video
                            src="/images/timeline/212/timeline-video.mov"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                        <div className="relative w-[185px] h-[322px] bg-primary">
                            <Image src="/images/timeline/212/timeline-image-01.png" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[185px] h-[322px] bg-primary">
                            <Image src="/images/timeline/212/timeline-image-02.png" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[185px] h-[322px] bg-primary">
                            <Image src="/images/timeline/212/timeline-image-03.png" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[185px] h-[322px] bg-primary">
                            <Image src="/images/timeline/212/timeline-image-04.png" alt="Robopel 213" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            )}
            {year === 211 && (
                <div className="flex flex-col">
                    <div className="flex gap-1">
                        <div className="relative w-[551px] h-[322px] bg-primary">
                            <Image src="/images/timeline/211/timeline-image-01.png" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[185px] h-[322px] bg-primary">
                            <Image src="/images/timeline/211/timeline-image-02.png" alt="Robopel 213" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="flex gap-1 mt-1">
                        <div className="flex flex-col gap-1">
                            <div className="relative w-[182px] h-[158px] bg-primary">
                                <Image src="/images/timeline/211/timeline-image-03.png" alt="Robopel 213" fill className="object-cover" />
                            </div>
                            <div className="relative w-[182px] h-[158px] bg-primary">
                                <Image src="/images/timeline/211/timeline-image-04.png" alt="Robopel 213" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="relative w-[182px] h-[322px] bg-primary">
                            <Image src="/images/timeline/211/timeline-image-05.png" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[182px] h-[322px] bg-primary">
                            <Image src="/images/timeline/211/timeline-image-06.png" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[182px] h-[322px] bg-primary">
                            <Image src="/images/timeline/211/timeline-image-07.png" alt="Robopel 213" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            )}
            {year === 210 && (
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                        <div className="relative w-[182px] h-[305px] bg-primary">
                            <Image src="/images/timeline/210/timeline-image-01.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[182px] h-[305px] bg-primary">
                            <Image src="/images/timeline/210/timeline-image-02.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[182px] h-[305px] bg-primary">
                            <Image src="/images/timeline/210/timeline-image-03.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[182px] h-[305px] bg-primary">
                            <Image src="/images/timeline/210/timeline-image-04.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div className="relative w-[368px] h-[340px] bg-primary">
                            <Image src="/images/timeline/210/timeline-image-05.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[368px] h-[340px] bg-primary">
                            <Image src="/images/timeline/210/timeline-image-06.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            )}
            {year === 209 && (
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                        <div className="relative w-[507px] h-[267px] bg-primary">
                            <Image src="/images/timeline/209/timeline-image-01.png" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[224px] h-[267px] bg-primary">
                            <Image src="/images/timeline/209/timeline-image-02.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div className="relative w-[366px] h-[379px] bg-primary">
                            <Image src="/images/timeline/209/timeline-image-03.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[366px] h-[379px] bg-primary">
                            <Image src="/images/timeline/209/timeline-image-04.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            )}
            {year === 208 && (
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                        <div className="relative w-[496px] h-[236px] bg-primary">
                            <Image src="/images/timeline/208/timeline-image-01.png" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[239px] h-[236px] bg-primary">
                            <Image src="/images/timeline/208/timeline-image-02.png" alt="Robopel 213" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div className="relative w-[254px] h-[408px] bg-primary">
                            <Image src="/images/timeline/208/timeline-image-03.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                            <div className="relative w-[238px] h-[200px] bg-primary">
                                <Image src="/images/timeline/208/timeline-image-04.jpg" alt="Robopel 213" fill className="object-cover" />
                            </div>
                            <div className="relative w-[238px] h-[200px] bg-primary">
                                <Image src="/images/timeline/208/timeline-image-05.jpg" alt="Robopel 213" fill className="object-cover" />
                            </div>
                            <div className="relative w-[238px] h-[200px] bg-primary">
                                <Image src="/images/timeline/208/timeline-image-06.jpg" alt="Robopel 213" fill className="object-cover" />
                            </div>
                            <div className="relative w-[238px] h-[200px] bg-primary">
                                <Image src="/images/timeline/208/timeline-image-07.jpg" alt="Robopel 213" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {year === 207 && (
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                        <div className="relative w-[524px] h-[288px] bg-primary">
                            <video
                                src="/images/timeline/207/timeline-video.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative w-[211px] h-[288px] bg-primary">
                            <Image src="/images/timeline/207/timeline-image-01.png" alt="Robopel 213" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div className="relative w-[280px] h-[357px] bg-primary">
                            <Image src="/images/timeline/207/timeline-image-02.png" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[455px] h-[357px] bg-primary">
                            <Image src="/images/timeline/207/timeline-image-03.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            )}
            {year === 206 && (
                <div className="flex flex-col gap-1">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative w-[243px] h-[163px] bg-primary">
                            <Image src="/images/timeline/206/timeline-image-01.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[243px] h-[163px] bg-primary">
                            <Image src="/images/timeline/206/timeline-image-02.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[243px] h-[163px] bg-primary">
                            <Image src="/images/timeline/206/timeline-image-03.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[243px] h-[163px] bg-primary">
                            <Image src="/images/timeline/206/timeline-image-04.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[243px] h-[163px] bg-primary">
                            <Image src="/images/timeline/206/timeline-image-05.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[243px] h-[163px] bg-primary">
                            <Image src="/images/timeline/206/timeline-image-06.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div className="relative w-[183px] h-[312px] bg-primary">
                            <Image src="/images/timeline/206/timeline-image-07.jpg" alt="Robopel 213" fill className="object-cover" />
                        </div>
                        <div className="relative w-[554px] h-[312px] bg-primary">
                            <video
                                src="/images/timeline/206/timeline-video.MOV"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}