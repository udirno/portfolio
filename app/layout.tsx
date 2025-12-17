import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Udirno Chaudhuri | Data Analyst & Technical Product Manager",
  description: "Portfolio of Udirno Chaudhuri - Data Analyst & Technical Product Manager specializing in RAG, automation, and product development.",
  keywords: ["Data Analyst", "Technical Product Manager", "RAG", "AI", "Automation", "Python"],
  authors: [{ name: "Udirno Chaudhuri" }],
  openGraph: {
    title: "Udirno Chaudhuri | Data Analyst & Technical Product Manager",
    description: "Portfolio of Udirno Chaudhuri - Data Analyst & Technical Product Manager",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
