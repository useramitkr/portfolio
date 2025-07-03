import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HeroSection from "@/components/home/heroSection";
import ServiceSection from "@/components/home/serviceSection";
import AboutSection from "@/components/home/aboutSection";
import PortfolioSection from "@/components/home/portfolioSection";
import FaqSection from "@/components/home/faqSection";
import FlightSearch from "@/components/home/temp2";

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
    <div className="overflow-hidden">
      {/* <FlightSearch /> */}
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <PortfolioSection />
      <FaqSection />
    </div>
  );
}
