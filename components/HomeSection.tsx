//import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
//import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import ProductsView from "@/components/ProductsView";
import Link from "next/link";

export const dynamic = "force-static";
export const revalidate = 60;

export default async function HomeSection() {
  //const products = await getAllProducts();
  //const categories = await getAllCategories();

  return (
    <div className="min-h-screen w-full cursor-pointer
      px-2 pt-2
      lg:px-3 lg:pt-3
      xl:px-4 xl:pt-4
      2xl:px-5 2xl:pt-5
      "    
    > 
      <div className="relative w-full rounded-xl overflow-hidden
      h-[98vh] lg:h-[97vh] 2xl:h-[96vh]">
        <video
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale
          brightness-135"
        />
        <div className="absolute inset-0 flex flex-col items-end justify-end text-center 
        tracking-widest bottom-1
        text-white uppercase p-4 text-xs drop-shadow-2xl">
          <h1 className="font-bold mb-4">
            Dark Elegance
          </h1>
          <h3 className="">
            Explore The Campaign
          </h3>
        </div>
      </div>
    </div>
  );
}
