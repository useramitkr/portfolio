import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HeroSection from "@/components/home/heroSection";
import ServiceSection from "@/components/home/serviceSection";
import AboutSection from "@/components/home/aboutSection";
import PortfolioSection from "@/components/home/portfolioSection";
import FaqSection from "@/components/home/faqSection";
import FlightSearch from "@/components/home/temp2";
import Head from 'next/head';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <section>
        <Head>
          <title>Amit Kumar — Frontend Developer Portfolio</title>
          <meta name="description" content="Explore the portfolio of Amit Kumar, a passionate Frontend Developer based in India. Specialized in React, Next.js, Tailwind CSS, and building modern, responsive websites." />
          <meta name="keywords" content="Amit Kumar, Frontend Developer in India, React Developer, Next js Developer" />
          <meta name="author" content="Amit Kumar" />
          <meta property="og:title" content="Amit Kumar — Frontend Developer Portfolio" />
          <meta property="og:description" content="Explore the portfolio of Amit Kumar, a passionate Frontend Developer based in India. Specialized in React, Next.js, Tailwind CSS, and building modern, responsive websites." />
          <meta property="og:url" content="https://www.linkedin.com/in/useramitkr/" />
          <meta property="og:site_name" content="Amit Kumar - Portfolio" />
          <meta property="og:type" content="website" />
        </Head>

        <main className="overflow-hidden">
          {/* <FlightSearch /> */}
          <HeroSection />
          <ServiceSection />
          <AboutSection />
          <PortfolioSection />
          <FaqSection />
        </main>
      </section>
    </>
  );
}
