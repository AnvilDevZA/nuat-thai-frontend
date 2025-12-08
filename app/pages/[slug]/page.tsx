import Nav from "@/app/components/ui/layout/Nav";
import { getPageBySlug, getAllPages } from "../../lib/wordpress"
import type { Metadata } from "next";
import Hero from "@/app/components/ui/layout/Hero";
import Footer from "@/app/components/ui/layout/Footer";

// Revalidate pages every hour
export const revalidate = 3600;

export async function generateStaticParams() {
  const pages = await getAllPages();

  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  return (
    <>
     <Nav />
      <Hero />
      <section className="bg-[#fdf1e4] text-[#8f143d]">
        <article className="max-w-2xl m-auto p-6">
             <h1 className="font-black font-serif capitalize text-center text-4xl">{page.title.rendered}</h1>
            <div
              className="font-light font-sans"
              dangerouslySetInnerHTML={{ __html: page.content.rendered }}
            />
        </article>
      </section>
        <Footer />
      </>
  );
}
