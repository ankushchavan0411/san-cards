/** @format */
"use client";
import React, { useState } from "react";
import Image from "next/image";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://dummyimage.com/800x400/ff7f7f/333333?text=Wedding+Card",
    "https://dummyimage.com/800x400/7f7fff/333333?text=Birthday+Card",
    "https://dummyimage.com/800x400/7fff7f/333333?text=Festival+Card",
    "https://dummyimage.com/800x400/ffff7f/333333?text=Invitation+Card",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Image */}
      <div className="relative w-full h-72 sm:h-96 md:h-[400px]">
        <Image
          src={images[currentIndex]}
          alt={`Invitation ${currentIndex}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Prev Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100 transition duration-300"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100 transition duration-300"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index
                ? "bg-blue-600"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
