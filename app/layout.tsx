import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEAULAB | 오직 뷰티만을 연구합니다",
  description: "프리미엄 뷰티 큐레이션 플랫폼 BEAULAB의 현대적인 랜딩 페이지입니다."
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
