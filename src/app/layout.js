import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "법무법인 에이파트 수원 개인회생파산센터",
  description: "수원 개인회생파산센터",
  icons: {
		icon: "/favicon.png",
	},
  openGraph: {
    title: "법무법인 에이파트 수원 개인회생파산센터",
    description: "수원 개인회생파산센터",
    url: "http://tymate.co.kr",
    images: [
      {
        url: "/preview.png",
        width: 600,
        height: 600,
        alt: "미리보기 이미지",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
