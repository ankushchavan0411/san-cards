/** @format */

import React from "react";
import { whyChooseUs } from "./data";

const AboutUs: React.FC = () => {
  return (
    <div className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900  mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          At San Utsav, we aim to bring joy and celebration to your special
          events by offering personalized Marathi festival and invitation cards.
          We understand the importance of tradition and culture, and we work
          diligently to create beautiful, customizable cards that reflect the
          spirit of your occasions.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900  mb-4">
          Our Mission
        </h3>
        <p className="text-lg text-gray-600  mb-6">
          Our mission is to provide a seamless and creative experience for those
          looking to celebrate their festivals, weddings, engagements, and other
          special occasions with a unique touch. We aim to preserve the essence
          of Marathi culture while making it easier for you to create and share
          beautiful, personalized invitations with your loved ones.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900  mb-4">
          Why Choose San Utsav?
        </h3>
        <ul className="text-lg text-gray-600 space-y-4">
          {whyChooseUs.map((item, index) => (
            <li key={index}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-gray-900  mb-4 mt-6">
          Join Us in Celebrating Your Special Moments
        </h3>
        <p className="text-lg text-gray-600 ">
          Whether its a wedding, birthday, festival, or any other occasion, San
          Utsav is here to help you create the perfect invitation to share your
          happiness with your friends and family. Join us in celebrating Marathi
          culture and tradition with beautiful, meaningful, and personalized
          invitation cards.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
