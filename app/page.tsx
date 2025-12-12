import Image from "next/image";
import Nav from "./components/ui/layout/Nav";
import Footer from "./components/ui/layout/Footer";
import Hero from "./components/ui/layout/Hero";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="bg-[#fdf1e4] text-[#8f143d] shadow-lg z-10">
        <article className="max-w-2xl m-auto py-10 px-6">
          <h1 className="font-black font-serif uppercase text-center text-2xl mb-6">Blending tradition with modern science</h1>
          <Image className="mb-6" src="/massage-back.jpg" height="320" alt="Thai Massage" />
          <p className="text-md font-sans font-light uppercase text-center leading-relaxed mb-4">
            Nuat Thai offers traditional Thai Massage Therapy known as a complimentary medicine for pain, muscle trauma, and stress. Our therapist - <em>Sri</em> Jintana Suipae is trained with the Royal Thai Medical board and has assisted numerous people with dealing with chronic and acute pain both in Thailand and South Africa</p>
          <h2 className="font-black font-serif uppercase text-center text-2xl mb-6">
            Our Holiday Specials
          </h2>
        </article>
      </main>
      <Footer />
    </>
  );
}
