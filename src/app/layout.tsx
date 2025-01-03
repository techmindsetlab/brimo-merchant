import type { Metadata } from "next";
import "./globals.css";
import "react-multi-carousel/lib/styles.css";
import Navbar from "@/components/base/navbar";
import Footer from "@/components/base/footer";

export const metadata: Metadata = {
  title: "BRImo Merchant",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
