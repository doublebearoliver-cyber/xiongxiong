import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* 左侧主要内容区 */}
      <div className="lg:col-span-8">
        <section>
          <h1 className="text-2xl lg:text-3xl font-normal mb-12">文章</h1>

          {posts.length === 0 ? (
            <p className="text-zinc-500">暂无文章</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/posts/${post.slug}`}>
                    <div className="border-l-2 border-zinc-800 pl-6 py-2 hover:border-zinc-600 transition-colors">
                      <h2 className="text-lg font-normal mb-2 group-hover:text-zinc-300 transition-colors">
                        {post.title}
                      </h2>
                      <time className="text-zinc-500 text-sm">{post.date}</time>
                      {post.excerpt && (
                        <p className="text-zinc-400 mt-2 text-sm">{post.excerpt}</p>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* 右侧装饰区 */}
      <div className="lg:col-span-4 hidden lg:block">
        <div className="sticky top-8 h-full">
          <div className="bg-zinc-900 border border-zinc-800 p-6 h-full min-h-[400px] flex flex-col justify-between">
            <div className="text-zinc-600 text-sm">
              <span>思考</span>
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
