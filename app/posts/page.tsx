import {
  getAllPosts,
  getAllAuthors,
  getAllTags,
  getAllCategories,
  searchAuthors,
  searchTags,
  searchCategories,
} from "../lib/wordpress";
import { Metadata } from "next";
import { SearchInput } from "../components/posts/SearchInput";
import Link from "next/link";
import Footer from "../components/ui/layout/Footer";
import Hero from "../components/ui/layout/Hero";
import Nav from "../components/ui/layout/Nav";

export const metadata: Metadata = {
  title: "Articles",
  description: "Browse all our articles",
};

export const dynamic = "auto";
export const revalidate = 600;


export default async function Page({
    searchParams,
}: {
  searchParams: {
    author?: string;
    tag?: string;
    category?: string;
    page?: string;
    search?: string;
  };
}) {
  const params = await searchParams;
  const { author, tag, category, page: pageParam, search } = params;

  // Fetch data based on search parameters
  const [posts, authors, tags, categories] = await Promise.all([
    getAllPosts({ author, tag, category, search }),
    search ? searchAuthors(search) : getAllAuthors(),
    search ? searchTags(search) : getAllTags(),
    search ? searchCategories(search) : getAllCategories(),
  ]);


  return (
    <>
    <Nav />
    <Hero />
     <section className="bg-[#fdf1e4] text-[#8f143d]">
      <article className="max-w-4xl m-auto p-6">
           <h1 className="font-black font-serif capitalize text-center text-4xl">All Pages:</h1>
           <p>{posts.length} {posts.length === 1 ? "post" : "posts"} found
              {search && " matching your search"}
            </p>
        </article>
        <SearchInput defaultValue={search} />
    </section>
    <Footer />
    </>
  );
}