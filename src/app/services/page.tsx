/** @format */

import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | San Utsav",
  description:
    "Explore our wide range of personalized Marathi invitation cards for every occasion, including weddings, birthdays, housewarmings, and more.",
  keywords:
    "San Utsav services, Marathi invitation cards, personalized cards, wedding cards, birthday cards, housewarming cards, baby shower cards, Marathi traditions,शुभविवाह,साखरपुडा,वाढदिवस,गृहप्रवेश,डोहाळे जेवण,नामकरण,आभार,श्रद्धांजली",
  robots: "index, follow",
};

const ServicesPage = () => {
  return (
    <div className="container px-32">
      <Services />
    </div>
  );
};

export default ServicesPage;
