/** @format */

import Cards from "@/components/Cards";
import Carousel from "@/components/Common/Carousel";
import ScrollUp from "@/components/Common/ScrollUp";
import CTA from "@/components/CTA";
import Hero from "@/components/Header/Hero";
import Testimonials from "@/components/Testimonials";
import PopulerCategories from "@/components/PopulerCategories";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <PopulerCategories />
      <Cards />
      <Carousel />
      <Testimonials />
      <CTA />
      <ScrollUp />
    </React.Fragment>
  );
}
