import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "与自我欲望作斗争的行者",
  description: "AI coding | 增长产品 | 思考者",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-black text-white font-mono antialiased">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Header />
          <main className="mt-16">{children}</main>
          <footer className="mt-24 pt-8 border-t border-zinc-800 text-zinc-500 text-sm">
            <div className="flex justify-between items-center">
              <span>&copy; {new Date().getFullYear()} NAME</span>
              <span>{new Date().getFullYear()}</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
