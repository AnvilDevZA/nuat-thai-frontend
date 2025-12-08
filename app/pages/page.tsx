import { getAllPages } from "../lib/wordpress";
import { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/ui/layout/Footer";
import Hero from "../components/ui/layout/Hero";
import Nav from "../components/ui/layout/Nav";

export const metadata: Metadata = {
  title: "All Pages",
  description: "Browse all pages",
  alternates: {
    canonical: "/posts/pages",
  },
};

export default async function Page() {
  const pages = await getAllPages();

  return (
    <>
    <Nav />
    <Hero />
     <section className="bg-[#fdf1e4] text-[#8f143d]">
      <article className="max-w-4xl m-auto p-6">
           <h1 className="font-black font-serif capitalize text-center text-4xl">All Pages:</h1>
          <ul className="grid">
            {pages.map((page: any) => (
              <li key={page.id}>
                <Link href={`/pages/${page.slug}`}>{page.title.rendered}</Link>
              </li>
            ))}
          </ul>
        </article>
    </section>
    <Footer />
    </>
  );
}