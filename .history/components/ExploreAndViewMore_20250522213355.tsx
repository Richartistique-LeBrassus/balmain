import Image from "next/image";
import { Button } from "@/components/ui/button";
//import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
//import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import ProductsView from "@/components/ProductsView";
import Link from "next/link";


export default async function HomeSection() {

  return (
  <div className="w-full min-h-fit
    px-2
    lg:px-3
    xl:px-4
    2xl:px-5">
  <section className="flex flex-col h-full min-w-full bg-stone-50 rounded-xl
    lg:grid lg:grid-cols-2 lg:h-auto lg:max-w-4xl 2xl:max-w-6xl">
    
    <div className="h-[70vh] lg:h-auto flex flex-col items-center 
    justify-center text-center px-4 gap-5 py-auto w-full
    ">
      <div className="relative h-[40vh] sm:h-[60vh] w-full">
        <Image
          src="/imgs/dress.avif"
          alt="Eyewear"
          fill
          className="object-contain grayscale"
        />
      </div>
      <div className="text-sm uppercase text-black inline-block tracking-wide
      font-semibold font-sans">
        <h2 className="">Ready to Wear</h2>
        <h3 className="mb-2 text-xs">View More</h3>
      </div>
    </div>

    
    <div className="h-[70vh] lg:h-auto flex flex-col items-center 
    justify-center text-center px-4 gap-5 py-auto w-full
    ">
      <div className="relative h-[40vh] sm:h-[60vh] w-full">
        <Image
          src="/imgs/eyewear.avif"
          alt="Eyewear"
          fill
          className="object-contain grayscale"
        />
      </div>
      <div className="text-sm uppercase text-black inline-block tracking-wide
      font-semibold font-sans">
        <h2 className="">Ready to Wear</h2>
        <h3 className="mb-2 text-xs">View More</h3>
      </div>
    </div>

    <div className="min-h-screen lg:h-auto w-full flex flex-col items-center 
    justify-center text-center px-4 gap-5">
      <div className="relative h-[40vh] sm:h-[60vh] w-full">
        <Image
          src="/imgs/ysl-women.jpg"
          alt="Eyewear"
          fill
          className="object-contain grayscale"
        />
      </div>
      <div className="text-sm uppercase text-black">
        <h2 className="font-semibold mb-4 font-sans">Ready to Wear</h2>
        <h3 className="font-semibold mb-2 font-sans">View More</h3>
      </div>
    </div>

    <div className="min-h-screen lg:h-auto w-full flex flex-col items-center 
        justify-center text-center px-4 gap-5">
      <div className="relative h-[40vh] w-[45vw] 
      sm:h-[60vh] sm:w-[95vw]">
        <Image
          src="/imgs/eyes.avif"
          alt="Eyewear"
          fill
          className="object-contain grayscale"
        />
      </div>
      <div className="text-sm uppercase text-black">
        <h2 className="font-semibold mb-4 font-sans">Ready to Wear</h2>
        <h3 className="font-semibold mb-2 font-sans">View More</h3>
      </div>
    </div>

  </section>
</div>
  );
}