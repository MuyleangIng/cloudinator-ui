"use client";

import FeatureSection from "@/components/homepage/FeatureSection";
import HeroSection from "@/components/homepage/HeroSection";
import FeatureService from "@/components/homepage/FeatureService";
import FrameworkSection from "@/components/homepage/FrameworkSection";
import ServiceComponent from "@/components/homepage/ServiceComponent";
import WhyUsSection from "@/components/homepage/WhyUsSection";
import {ParallaxProvider} from "react-scroll-parallax";

export default function HomePage() {
  return (
      <>
          <ParallaxProvider>
              <HeroSection />
          </ParallaxProvider>
          <FeatureSection />
          <ServiceComponent />
          <FrameworkSection />
          <FeatureService />
          <WhyUsSection />
      </>
  );
}
