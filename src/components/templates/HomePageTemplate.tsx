import React from "react";
import { Hero } from "@/components/organisms/Hero";
import { Footer } from "@/components/organisms/Footer";

interface HomePageTemplateProps {
  isAmp?: boolean;
  className?: string;
}

export const HomePageTemplate: React.FC<HomePageTemplateProps> = ({
  isAmp = false,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col min-h-screen bg-[#0C1F2D] text-white ${className}`}
    >
      <main role="main" className="flex-grow">
        <Hero isAmp={isAmp} />
      </main>
      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
};
