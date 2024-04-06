import Carousel from "@/components/Carousel";
import Category from "@/components/category";
import ProductNews from "@/components/productNews";
import Link from "next/link";

export default function Home() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <main className="py-5">
      <Carousel className="w-[100%]" />
      <Category />
      <ProductNews />
    </main>
  );
}
