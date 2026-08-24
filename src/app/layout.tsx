import type { Metadata } from "next";
import { Outfit, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  display: "swap"
});

const nastaliq = Noto_Nastaliq_Urdu({ 
  subsets: ["arabic"], 
  variable: "--font-nastaliq", 
  weight: ["400", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Safi Quran Online Academy | Learn Quran, Improve Tajweed, Build an Islamic Life",
  description: "Join Safi Quran Online Academy to learn Quran, improve Tajweed, and build an Islamic life. Online Quran classes for kids and adults by qualified teachers.",
  keywords: "Quran, Tajweed, Islamic Education, Safi Quran Online Academy, Online Quran Classes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${nastaliq.variable}`}>
        {children}
      </body>
    </html>
  );
}
