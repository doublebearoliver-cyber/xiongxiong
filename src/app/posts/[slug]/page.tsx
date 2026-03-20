import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* 左侧主要内容区 */}
      <div className="lg:col-span-8">
        <article>
          <header className="mb-12">
            <h1 className="text-2xl lg:text-3xl font-normal mb-4">{post.title}</h1>
            <time className="text-zinc-500 text-sm">{post.date}</time>
          </header>

          <div className="prose prose-invert prose-zinc max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </div>

      {/* 右侧装饰区 */}
      <div className="lg:col-span-4 hidden lg:block">
        <div className="sticky top-8 h-full">
          <div className="bg-zinc-900 border border-zinc-800 p-6 h-full min-h-[400px] flex flex-col justify-between">
            <div className="text-zinc-600 text-sm">
              <span>阅读</span>
            </div>
            <div className="text-zinc-700 text-xs">
              <span>{new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
