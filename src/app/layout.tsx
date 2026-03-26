import type { Metadata } from "next";
import { Zilla_Slab, Source_Sans_3 } from "next/font/google";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../index.css";

const zillaSlab = Zilla_Slab({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap"
});

const sourceSans3 = Source_Sans_3({ 
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "DadAlt Investments - Trustworthy Investment Strategies for Dads",
  description: "Expert, family-oriented investment strategies for dads looking to secure their family's financial future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${zillaSlab.variable} ${sourceSans3.variable} antialiased`}>
      <body suppressHydrationWarning className="bg-background text-foreground flex min-h-screen flex-col">
        <TooltipProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
