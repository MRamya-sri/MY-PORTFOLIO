import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Skills from "@/components/main/Skills";
import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Certificate from "@/components/main/Certificate";
import Resources from "@/components/main/Resources";
import Footer from "@/components/main/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificate />
      <Resources />
      <Footer /> 
    
      
      
      </body>
    </html>
  );
}
