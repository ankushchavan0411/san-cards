/** @format */
"use client";

import Image from "next/image";
import { Metadata } from "next";

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
      " "
    )} - Template ${template}. Personalize your card with ease and celebrate your special moments with San Utsav.`,
    keywords: `${category.replace(
      /-/g,
      ", "
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
      <div className="border p-4 rounded shadow border-orange-400">
        <Image
          src={cardData.image}
          alt={cardData.title}
          className="w-full h-auto"
          height={400}
          width={400}
        />
      </div>
    </div>
  );
};

export default Template;
