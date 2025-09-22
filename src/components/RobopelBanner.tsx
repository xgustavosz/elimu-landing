import Image from "next/image"
import Link from "next/link"

interface RobopelBannerProps {
    isFullWidth?: boolean
}

export default function RobopelBanner({ isFullWidth }: RobopelBannerProps) {
    return (
        <Link href="/robopel#seja-parceiro">
            <div
                className={`relative ${isFullWidth ? "w-full" : "w-[260px]"} h-[484px] flex flex-col font-audiowide text-3xl text-center align-center justify-start`}
                style={{
                    backgroundImage: "url('/images/background-robopel-banner.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-[#045071] opacity-90" />

                <div className="relative flex flex-col z-20 mt-[30px]">
                    <div className="relative w-10 h-10 mx-auto mb-6">
                        <Image src="/images/robopel-icon.svg" alt="Ícone Robopel" fill />
                    </div>
                    <p className="text-white">Seja parceiro</p>
                    <p className="text-secondary">ROBOPEL</p>
                    <p className="text-secondary">214</p>
                </div>

                <div className="absolute w-[246px] h-[243px] bottom-0 left-[-20px] scale-x-[-1]">
                    <Image src="/images/robopel-robot.png" alt="Robopel" fill />
                </div>
            </div>
        </Link>
    )
}