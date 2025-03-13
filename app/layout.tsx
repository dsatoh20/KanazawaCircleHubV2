import { Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "金沢サークルハブ | 金沢大学のサークル・学生団体紹介",
  description: "金沢・北陸の学生向け、サークル情報まとめサイトです。各団体の活動内容から新歓スケジュールまで掲載しています。",
        
}

const noto_sans_jp = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-noto-sans-jp"
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={noto_sans_jp.className}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="/logo.svg" />
        <meta name="google-site-verification" content="ke2N6RueK9rn_X03e6mBlKuleS4rACdtuLYy_HN1KuQ" />
        <meta name="google-site-verification" content="iCQmDqkg_155IYDNIGYfgqzXLBcxQ0c8MkG8IRWjnrA" />
      </head>
      <body
        className={`${noto_sans_jp.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
