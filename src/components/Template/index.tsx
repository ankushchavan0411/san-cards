/** @format */
"use client";

// import Image from "next/image";
import { Metadata } from "next";
// import SakharpudaInvitation from "./SakharpudaInvitation";
import WeddingCardWithFabric from "./WeddingCardWithFabric";
// import BirthdayTemplate from "./BirthdayTemplate";
// import WeddingInvite from "./WeddingInvite";

export async function generateMetadata({
  params,
}: {
  params: { category: string; template: string };
}): Promise<Metadata> {
  const { category, template } = params;

  return {
    title: `${category.replace(/-/g, " ")} | Template ${template} | San Utsav`,
    description: `Explore our ${category.replace(
      /-/g,
      " ",
    )} - Template ${template}. Personalize your card with ease and celebrate your special moments with San Utsav.`,
    keywords: `${category.replace(
      /-/g,
      ", ",
    )}, template ${template}, San Utsav, Marathi invitation cards, personalized cards`,
    robots: "index, follow",
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template = ({ cardData }: any) => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-4">{cardData.title}</h1>
      <p className="text-lg mb-4">{cardData.description}</p>
      <div className="">
        {/* <Image
          src={cardData.image}
          alt={cardData.title}
          className="w-full h-auto"
          height={400}
          width={400}
        /> */}
        {/* <BirthdayTemplate /> */}
        {/* <WeddingInvite /> */}
        {/* <SakharpudaInvitation /> */}
        <WeddingCardWithFabric />
      </div>
    </div>
  );
};

export default Template;
