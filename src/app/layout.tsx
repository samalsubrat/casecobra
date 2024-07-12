import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CaseCobra",
  description: "Your Image on a Custom Phone Case.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Providers>
          <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
            <div className="flex-1 flex flex-col h-full">{children}</div>
            <Footer />
          </main>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
