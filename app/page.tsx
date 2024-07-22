import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import LogoCarousel from "@/components/sections/logo-carousel";
import ProductShowcase from "@/components/sections/product-showcase";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoCarousel />
      <ProductShowcase />
    </>
  );
}
