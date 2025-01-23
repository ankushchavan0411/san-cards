/** @format */

import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-orange-400 text-white py-20 md:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        // style={{ backgroundImage: 'url("/path/to/your-image.jpg")' }}
      ></div>

      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Welcome to San Utsav
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Personalized Marathi festival and invitation cards for your special
          occasions.
        </p>
        <Link
          href="/services"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg text-xl transition duration-300"
        >
          Explore Our Services
        </Link>
      </div>
    </section>
  );
};

export default Hero;
