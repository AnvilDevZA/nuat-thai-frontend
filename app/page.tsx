import Image from "next/image";
import Nav from "./components/ui/layout/Nav";
import Footer from "./components/ui/layout/Footer";
import Hero from "./components/ui/layout/Hero";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="bg-[#fdf1e4] text-[#8f143d]">
        <article className="max-w-2xl m-auto py-10">
          <h1 className="font-black font-serif uppercase text-center text-2xl">Blending tradition with modern science</h1>
        </article>
      </main>
      <Footer />
    </>
  );
}
