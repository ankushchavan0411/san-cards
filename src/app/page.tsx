/** @format */

import Cards from "@/components/Cards";
import Carousel from "@/components/Common/Carousel";
import ScrollUp from "@/components/Common/ScrollUp";
import CTA from "@/components/CTA";
import Hero from "@/components/Header/Hero";
import Testimonials from "@/components/Testimonials";
import TrendingCategories from "@/components/TrendingCategories";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <TrendingCategories />
      <Cards />
      <Carousel />
      <Testimonials />
      <CTA />
      <ScrollUp />
    </React.Fragment>
  );
}
