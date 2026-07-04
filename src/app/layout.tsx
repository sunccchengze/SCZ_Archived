import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI核心概念闪卡 - 交互式学习",
  description: "38张AI核心概念闪卡，覆盖机器学习、深度学习、大语言模型等7大层级，支持键盘快捷键交互学习。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
