/** @format */

import Cards from "@/components/Cards";
import Carousel from "@/components/Common/Carousel";
import ScrollUp from "@/components/Common/ScrollUp";
import CTA from "@/components/CTA";
import Hero from "@/components/Header/Hero";
import Testimonials from "@/components/Testimonials";
import TrendingCategories from "@/components/TrendingCategories";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <TrendingCategories />
      <Cards />
      <Carousel />
      <Testimonials />
      <CTA />
      <ScrollUp />
    </div>
  );
}
