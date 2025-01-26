/** @format */

import { ROUTES } from "@/utility/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      <div className="rounded-lg shadow-md hover:shadow-lg hover:shadow-gray-800 transition-shadow duration-300">
        <Link href={ROUTES.SERVICES}>
          <Image
            src={"/carousel/hero-page.svg"}
            alt={`hero`}
            className="h-auto w-full"
            width={1200}
            height={1200}
          />
        </Link>
      </div>
      <section className="relative bg-primary text-white py-20 md:py-28 hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url("/carousel/hero-page.svg")' }}
        />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Welcome to San Utsav
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Personalized Marathi festival and invitation cards for your special
            occasions.
          </p>
          <Link
            href={ROUTES.SERVICES}
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg text-xl transition duration-300"
          >
            Explore Our Services
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
