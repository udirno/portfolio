import type { Metadata } from "next";
import { Inter, Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { EasterEgg } from "./components/EasterEgg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Udirno Chaudhuri - Data Analyst & Engineer",
  description: "Data analyst and engineer building semantic search, automation tools, and ethical reasoning systems. Projects using Python, Claude API, RAG, and modern web technologies.",
  keywords: ["Data Analyst", "Software Engineer", "RAG", "Semantic Search", "Python", "TypeScript", "FastAPI", "Next.js"],
  authors: [{ name: "Udirno Chaudhuri" }],
  openGraph: {
    title: "Udirno Chaudhuri - Data Analyst & Engineer",
    description: "Data analyst and engineer building semantic search, automation tools, and ethical reasoning systems.",
    type: "website",
    locale: "en_US",
    siteName: "Udirno Chaudhuri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Udirno Chaudhuri - Data Analyst & Engineer",
    description: "Data analyst and engineer building semantic search, automation tools, and ethical reasoning systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <EasterEgg />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
