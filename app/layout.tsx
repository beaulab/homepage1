import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEAULAB | 오직 뷰티만을 연구합니다",
  description: "뷰티 선택의 불확실성을 줄이는 BEAULAB 브랜드 페이지입니다."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
