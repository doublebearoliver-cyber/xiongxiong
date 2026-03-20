import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* 左侧主要内容区 */}
      <div className="lg:col-span-8">
        {/* Tagline */}
        <section className="mb-16">
          <h1 className="text-2xl lg:text-3xl font-normal leading-relaxed">
            与自我欲望作斗争的行者
          </h1>
        </section>

        {/* 分隔线 */}
        <div className="border-t border-zinc-800 my-12" />

        {/* 核心技能 */}
        <section className="mb-12">
          <h2 className="text-zinc-500 text-sm mb-6">核心技能</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="text-zinc-600">▸</span>
              <span>AI coding</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-zinc-600">▸</span>
              <span>增长产品</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-zinc-600">▸</span>
              <span>良好的沟通能力</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-zinc-600">▸</span>
              <span>同理心</span>
            </li>
          </ul>
        </section>

        {/* 分隔线 */}
        <div className="border-t border-zinc-800 my-12" />

        {/* 价值观 */}
        <section className="mb-12">
          <h2 className="text-zinc-500 text-sm mb-6">价值观</h2>
          <p className="leading-relaxed text-zinc-300">
            崇尚和平、自由、平等和成长<br />
            不抗拒斗争但不喜欢斗争
          </p>
        </section>
      </div>

      {/* 右侧装饰区 - 非对称设计 */}
      <div className="lg:col-span-4 hidden lg:block">
        <div className="sticky top-8 h-full">
          {/* 装饰性色块 */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 h-full min-h-[400px] flex flex-col justify-between">
            <div className="text-zinc-600 text-sm">
              <span className="block mb-2">文章</span>
              <Link href="/posts" className="text-zinc-400 hover:text-white transition-colors">
                阅读思考 &rarr;
              </Link>
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
