import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="text-lg font-medium hover:underline">
        NAME
      </Link>
      <nav className="flex items-center gap-8 text-sm">
        <Link href="/" className="hover:underline">
          首页
        </Link>
        <Link href="/posts" className="hover:underline">
          文章
        </Link>
        <Link href="/about" className="hover:underline">
          关于
        </Link>
      </nav>
    </header>
  );
}
