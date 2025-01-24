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
        className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 rounded-full font-medium"
      >
        Explore Our Services
      </Link>
    </section>
  );
};

export default CTA;
