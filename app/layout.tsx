import type { Metadata } from "next";
import { Roboto_Mono, VT323, Tektur } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

const tekur = Tektur({
  variable: "--font-tekur",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vt323.variable} ${robotoMono.variable} ${tekur.variable} antialiased relative overflow-x-hidden`}
      >
        <div className="absolute top-0 z-[-2] w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] min-h-screen h-full"></div>
        <div className="flex justify-center p-16">
          <div className="w-full max-w-[1500px] h-fit">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
