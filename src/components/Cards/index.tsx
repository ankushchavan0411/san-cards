/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cards: React.FC = () => {
  const demoCards = [
    {
      id: 1,
      title: "Wedding",
      imageUrl:
        "https://dummyimage.com/400x300/7f7fff/333333?text=Wedding+Card",
      url: "/template/marathi/wedding-invitation-card/template-wedding",
    },
    {
      id: 2,
      title: "Birthday",
      imageUrl:
        "https://dummyimage.com/400x300/ff7f7f/333333?text=Birthday+Card",
      url: "/template/marathi/birthday-banner/template-birthday",
    },
    {
      id: 3,
      title: "Housewarming",
      imageUrl:
        "https://dummyimage.com/400x300/7fff7f/333333?text=Housewarming+Card",
      url: "/template/marathi/housewarming-card/template-housewarming",
    },
    {
      id: 4,
      title: "Naming Ceremony",
      imageUrl:
        "https://dummyimage.com/400x300/ffff7f/333333?text=Naming+Ceremony+Card",
      url: "/template/marathi/naming-ceremony-card/template-naming-ceremony",
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Card Designs</h2>
        <p className="text-lg text-gray-700">
          Explore our wide collection of personalized invitation cards for all
          occasions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {demoCards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
          >
            <Link href={card.url}>
              <Image
                src={card.imageUrl}
                alt={card.title}
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">
                Click below to explore more about this design.
              </p>
              <p className="mt-3 text-green-600">
                <strong>Price: Free</strong>
              </p>
              <Link
                href={card.url}
                className="mt-3 inline-block text-blue-600 hover:text-blue-700 font-medium"
              >
                Customize This Card
              </Link>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
