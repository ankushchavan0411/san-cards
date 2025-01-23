/** @format */

import React from "react";

const PopulerCategories: React.FC = () => {
  const services = [
    {
      name: "शुभविवाह",
      description: "Elegant wedding invitations to make your day special.",
    },
    {
      name: "साखरपुडा",
      description: "Traditional cards for engagement ceremonies.",
    },
    {
      name: "वाढदिवस",
      description: "Celebrate birthdays with our personalized cards.",
    },
    {
      name: "गृहप्रवेश",
      description: "New home? Get your customized housewarming cards.",
    },
    {
      name: "डोहाळेजेवण",
      description: "Cherish the newborn with our unique invitation designs.",
    },
    {
      name: "नामकरण",
      description:
        "Name your little one with our adorable naming ceremony cards.",
    },
    {
      name: "आभार",
      description: "Express gratitude with beautiful thank-you cards.",
    },
    {
      name: "श्रद्धांजली",
      description: "Honoring memories with respectful condolence cards.",
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
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopulerCategories;
