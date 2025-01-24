/** @format */

import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      name: "शुभविवाह (Wedding)",
      description:
        "Celebrate the beginning of a new journey with our beautiful and traditional wedding invitation cards. Customize them to reflect the spirit of your love and commitment.",
      icon: "💍",
    },
    {
      name: "साखरपुडा (Engagement)",
      description:
        "Announce your engagement in a meaningful way with our Marathi-inspired engagement cards. Customize your invites for the big day.",
      icon: "💍",
    },
    {
      name: "वाढदिवस (Birthday)",
      description:
        "Make your birthday celebrations memorable with our fun and personalized birthday invitation cards. Choose from a variety of designs and themes.",
      icon: "🎂",
    },
    {
      name: "गृहप्रवेश (Housewarming)",
      description:
        "Celebrate your new home with our special housewarming invitation cards. Add your personal touch to invite loved ones to your new abode.",
      icon: "🏡",
    },
    {
      name: "डोहाळेजेवण (Baby Shower)",
      description:
        "Celebrate the arrival of new life with our baby shower cards. Traditional designs and customization options are available for this joyous occasion.",
      icon: "👶",
    },
    {
      name: "नामकरण (Naming Ceremony)",
      description:
        "Create beautiful invitations for your baby's naming ceremony. We offer traditional Marathi-themed invitation cards for this auspicious event.",
      icon: "👶💖",
    },
    {
      name: "आभार (Thank You)",
      description:
        "Send your heartfelt thanks with personalized Marathi thank you cards. Whether for an event or a special occasion, these cards express your gratitude.",
      icon: "🙏",
    },
    {
      name: "श्रद्धांजली (Condolence)",
      description:
        "Pay your respects with simple yet meaningful condolence invitation cards. Let us help you honor the memory of your loved ones.",
      icon: "🕯️",
    },
  ];

  return (
    <div className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          At San Utsav, we offer a wide range of customizable Marathi invitation
          cards for all your special occasions. From weddings to birthdays, we
          have the perfect card to make your event unforgettable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-primary transition-shadow duration-300 border border-primary hover:shadow-lg cursor-pointer"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
