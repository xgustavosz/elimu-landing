interface TimeLineAlbumProps {
    year: number;
}

export default function TimeLineAlbum({ year }: TimeLineAlbumProps) {
    return (
        <>
            {year === 213 && (
                <div>
                    <div className="flex gap-1">
                        <div className="w-[182px] h-[322px] bg-primary">

                        </div>
                        <div className="w-[554px] h-[322px] bg-primary">

                        </div>
                    </div>
                    <div className="flex gap-1 mt-1">
                        <div className="w-[182px] h-[322px] bg-primary">

                        </div>
                        <div className="w-[182px] h-[322px] bg-primary">

                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="w-[367px] h-[158px] bg-primary">

                            </div>
                            <div className="w-[367px] h-[158px] bg-primary">

                            </div>
                        </div>
                    </div>
                </div>
            )}
            {year === 212 && (
                <div className="flex gap-1">
                    <div className="w-[360px] h-[649px] bg-primary"></div>
                    <div className="grid grid-cols-2 gap-1">
                        <div className="w-[185px] h-[322px] bg-primary"></div>
                        <div className="w-[185px] h-[322px] bg-primary"></div>
                        <div className="w-[185px] h-[322px] bg-primary"></div>
                        <div className="w-[185px] h-[322px] bg-primary"></div>
                    </div>
                </div>
            )}
            {year === 211 && (
                <div className="flex flex-col">
                    <div className="flex gap-1">
                        <div className="w-[551px] h-[322px] bg-primary"></div>
                        <div className="w-[185px] h-[322px] bg-primary"></div>
                    </div>
                    <div className="flex gap-1 mt-1">
                        <div className="flex flex-col gap-1">
                            <div className="w-[182px] h-[158px] bg-primary"></div>
                            <div className="w-[182px] h-[158px] bg-primary"></div>
                        </div>
                        <div className="w-[182px] h-[322px] bg-primary"></div>
                        <div className="w-[182px] h-[322px] bg-primary"></div>
                        <div className="w-[182px] h-[322px] bg-primary"></div>
                    </div>
                </div>
            )}
            {year === 210 && (
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                        <div className="w-[182px] h-[305px] bg-primary"></div>
                        <div className="w-[182px] h-[305px] bg-primary"></div>
                        <div className="w-[182px] h-[305px] bg-primary"></div>
                        <div className="w-[182px] h-[305px] bg-primary"></div>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-[368px] h-[340px] bg-primary"></div>
                        <div className="w-[368px] h-[340px] bg-primary"></div>
                    </div>
                </div>
            )}
            {year === 209 && (
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                        <div className="w-[507px] h-[267px] bg-primary"></div>
                        <div className="w-[224px] h-[267px] bg-primary"></div>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-[366px] h-[379px] bg-primary"></div>
                        <div className="w-[366px] h-[379px] bg-primary"></div>
                    </div>
                </div>
            )}
            {year === 208 && (
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                        <div className="w-[496px] h-[236px] bg-primary"></div>
                        <div className="w-[239px] h-[236px] bg-primary"></div>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-[254px] h-[408px] bg-primary"></div>
                        <div className="grid grid-cols-2 gap-1">
                            <div className="w-[238px] h-[200px] bg-primary"></div>
                            <div className="w-[238px] h-[200px] bg-primary"></div>
                            <div className="w-[238px] h-[200px] bg-primary"></div>
                            <div className="w-[238px] h-[200px] bg-primary"></div>
                        </div>
                    </div>
                </div>
            )}
            {year === 207 && (
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                        <div className="w-[524px] h-[288px] bg-primary"></div>
                        <div className="w-[211px] h-[288px] bg-primary"></div>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-[280px] h-[357px] bg-primary"></div>
                        <div className="w-[455px] h-[357px] bg-primary"></div>
                    </div>
                </div>
            )}
            {year === 206 && (
                <div className="flex flex-col gap-1">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="w-[243px] h-[163px] bg-primary"></div>
                        <div className="w-[243px] h-[163px] bg-primary"></div>
                        <div className="w-[243px] h-[163px] bg-primary"></div>
                        <div className="w-[243px] h-[163px] bg-primary"></div>
                        <div className="w-[243px] h-[163px] bg-primary"></div>
                        <div className="w-[243px] h-[163px] bg-primary"></div>
                    </div>
                      <div className="flex gap-1">
                        <div className="w-[183px] h-[312px] bg-primary"></div>
                        <div className="w-[554px] h-[312px] bg-primary"></div>
                    </div>
                </div>
            )}
        </>

    )
}