import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Aside from "../components/aside";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guna-1610 - Portfolio",
  description: "Personal portfolio of Guna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Aside />
          <div className="main-content">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
