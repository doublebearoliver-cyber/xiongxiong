export default function AboutPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* 左侧主要内容区 */}
      <div className="lg:col-span-8">
        <section className="mb-12">
          <h1 className="text-2xl lg:text-3xl font-normal mb-12">关于</h1>

          <div className="border-t border-zinc-800 pt-8">
            <h2 className="text-zinc-500 text-sm mb-6">联系方式</h2>
            <ul className="space-y-4">
              <li>
                <span className="text-zinc-500 mr-4">手机</span>
                <a href="tel:18218345458" className="hover:text-zinc-300">
                  18218345458
                </a>
              </li>
            </ul>
          </div>

          <div className="border-t border-zinc-800 mt-12 pt-8">
            <h2 className="text-zinc-500 text-sm mb-6">一句话总结</h2>
            <p className="text-zinc-300 leading-relaxed">
              与自我欲望作斗争的行者
            </p>
          </div>
        </section>
      </div>

      {/* 右侧装饰区 */}
      <div className="lg:col-span-4 hidden lg:block">
        <div className="sticky top-8 h-full">
          <div className="bg-zinc-900 border border-zinc-800 p-6 h-full min-h-[400px] flex flex-col justify-between">
            <div className="text-zinc-600 text-sm">
              <span>联系</span>
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
