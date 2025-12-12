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
          <h1 className="font-black font-serif uppercase text-center text-2xl mb-6">Blending tradition with modern science</h1>
          <p className="text-xl font-serif font-light uppercase text-center leading-relaxed">
            Nuat Thai offers traditional Thai Massage Therapy known as a complimentary medicine for pain, muscle trauma, and stress. Our therapist - <em>Sri</em> Jintana Suipae is trained with the Royal Thai Medical board and has assisted numerous people with dealing with chronic and acute pain both in Thailand and South Africa</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
