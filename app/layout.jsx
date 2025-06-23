import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sandra's Portfolio",
  description: "A Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* You can add other <meta> or <link> tags here */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen overflow-x-hidden`}
      >
        {/* Spline 3D Animation as global background */}
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
          <iframe
            src="https://my.spline.design/unchained-PtKqeATKUjl0VBQGbPKKuC0i/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full"
            allow="autoplay; fullscreen"
          ></iframe>
        </div>
        {/* Main content above the animation */}
        <Navbar />
        <div className="flex-grow relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}