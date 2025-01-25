/** @format */

import SectionTitle from "@/components/Common/SectionTitle";
import { ROUTES } from "@/utility/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { demoCards } from "./data";

const Cards: React.FC = () => {
  return (
    <section className="pb-16">
      <SectionTitle
        title="Invitation Card Designs"
        paragraph="Browse our extensive collection of customizable invitation cards, perfect for every occasion and celebration."
        center
        mb="50px"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {demoCards.map(
          ({ language, category, templateId, imageUrl, title }, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-primary transition-shadow duration-300 text-center border border-primary"
            >
              <Link
                href={ROUTES.GET_TEMPLATE_BY_LANGUAGE_CATEGORY_TEMPLATE_ID(
                  language,
                  category,
                  templateId,
                )}
              >
                <Image
                  src={imageUrl}
                  alt={title}
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-1xl lg:text-2xl font-semibold mb-2">
                  {title}
                </h3>
                <p className="text-gray-600">
                  Click below to explore more about this design.
                </p>
                <p className="mt-3 text-green-600">
                  <strong>Price: Free</strong>
                </p>
                <button className="mt-3 inline-block text-blue-600 hover:text-blue-700 font-medium">
                  Customize This Card
                </button>
              </Link>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default Cards;
