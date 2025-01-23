/** @format */

import Carousel from "@/components/Common/Carousel";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Header/Hero";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <div>
        <h2 className="text-3xl font-semibold text-center my-8">
          Explore Our Invitation Card Designs
        </h2>
        <Carousel />
      </div>
      <ScrollUp />
    </div>
  );
}
