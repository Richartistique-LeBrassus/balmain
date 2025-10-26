import HomeSection from "@/components/HomeSection";
import Newsletter from "@/components/Newsletter";
import Boutiques from "@/components/Boutiques";
import FallWinter25Video from "@/components/FallWinter25Video";
import FallWinter25Collection from "@/components/FallWinter25Collection";
//import SplashScreen from "@/components/ui/splashscreen";
import Categories from "@/components/Categories";
import ProductTypes from "@/components/ProductTypes";
import Palazzo from "@/components/Palazzo";
import Mens from "@/components/Mens";

export const dynamic = "force-static";
export const revalidate = 60;

export default async function HomePage() {
  return (
   <div className="scrollbar-hide">
      <div className="flex flex-col items-center justify-top 
        min-h-screen overflow-x-hidden">
        <HomeSection />
        <Palazzo />
        <Mens />
        <FallWinter25Video />        

        <Newsletter />
        <Boutiques />
      </div>
    </div>
  );
}
