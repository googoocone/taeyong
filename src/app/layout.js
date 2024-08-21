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
    url: "https://tymate.co.kr",
    images: [
      {
        url: "/preview-image.png",
        width: 1200,
        height: 630,
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
