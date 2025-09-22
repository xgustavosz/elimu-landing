import FeaturedMaterialsSection from "@/components/FeaturedMaterialsSection";
import RobopelCallSection from "@/components/RobopelCallSection";
import RobopelContactSection from "@/components/RobopelContactSection";
import RobopelHeroSection from "@/components/RobopelHeroSection";
import RobopelTimeLineSection from "@/components/RobopelTimeLineSection";

export default function RobopelPage() {
    return (
        <div className="font-lato">
            <RobopelHeroSection />
            <RobopelTimeLineSection />
            <FeaturedMaterialsSection />
            <RobopelCallSection />
            <RobopelContactSection />
        </div>
    )
}