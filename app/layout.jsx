import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const metadata = {
  title: "Sandra's Portfolio",
  description: "A Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* You can add other <meta> or <link> tags here */}
      </head>
      <body
        className="antialiased flex flex-col min-h-screen overflow-x-hidden font-sans"
        style={{ overflow: 'auto' }}
      >
        {/* Spline 3D Animation as global background */}
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none" style={{ overflow: 'hidden' }}>
          <iframe
            src="https://my.spline.design/unchained-PtKqeATKUjl0VBQGbPKKuC0i/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full"
            allow="autoplay; fullscreen"
            style={{ overflow: 'hidden' }}
          ></iframe>
        </div>
        {/* Main content above the animation */}
        <SmoothScrollProvider />
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}