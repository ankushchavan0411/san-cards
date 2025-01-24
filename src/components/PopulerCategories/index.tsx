/** @format */

import Link from "next/link";
import React from "react";

const PopulerCategories: React.FC = () => {
  const populerCategories = [
    {
      name: "शुभविवाह",
      description: "Elegant wedding invitations to make your day special.",
      link: "/template-list/marathi/wedding",
    },
    {
      name: "साखरपुडा",
      description: "Traditional cards for engagement ceremonies.",
      link: "/template-list/marathi/engagement",
    },
    {
      name: "वाढदिवस",
      description: "Celebrate birthdays with our personalized cards.",
      link: "/template-list/marathi/happy-birthday",
    },
    {
      name: "गृहप्रवेश",
      description: "New home? Get your customized housewarming cards.",
      link: "/template-list/marathi/housewarming",
    },
    {
      name: "डोहाळेजेवण",
      description: "Cherish the newborn with our unique invitation designs.",
      link: "/template-list/marathi/newborn",
    },
    {
      name: "नामकरण",
      description:
        "Name your little one with our adorable naming ceremony cards.",
      link: "/template-list/marathi/naming-ceremony",
    },
    {
      name: "आभार",
      description: "Express gratitude with beautiful thank-you cards.",
      link: "/template-list/marathi/thank-you",
    },
    {
      name: "श्रद्धांजली",
      description: "Honoring memories with respectful condolence cards.",
      link: "/template-list/marathi/condolence",
    },
  ];

  return (
    <section id="populer_categories" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Populer Categories</h2>
        <p className="text-lg text-gray-700 mt-3">
          Create free customised invitation cards online. For weddings,
          engagements, and birthdays, we have a unique collection of traditional
          Marathi invitation cards. After selecting a card from our unique
          selection and entering your information, your card is available to
          download.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {populerCategories.map((category, index) => (
          <Link key={index} href={category.link}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border hover:shadow-orange-400 border-orange-400 hover:cursor-pointer">
              <h3 className="text-2xl font-semibold mb-4 text-orange-500">
                {category.name}
              </h3>
              <p className="text-gray-800">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopulerCategories;
