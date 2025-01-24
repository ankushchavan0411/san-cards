/** @format */

import Link from "next/link";
import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-primary text-white text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Create Your Invitation, Banner?
      </h2>
      <p className="text-lg mb-8">
        Explore our collection of personalized Marathi festival banners and
        invitation cards for all occasions.
      </p>
      <Link
        href="/services"
        className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg text-xl transition duration-300"
      >
        Explore Our Services
      </Link>
    </section>
  );
};

export default CTA;
