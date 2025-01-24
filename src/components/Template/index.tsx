/** @format */
"use client";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
} from "react-icons/io";
import Ratings from "../Common/Ratings";

// import BirthdayTemplate from "./BirthdayTemplate";
// import SakharpudaInvitation from "./SakharpudaInvitation";
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

const Template = ({ cardData }: any) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="py-8 mx-auto">
        <div className="lg:w-5/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mt-6 lg:mt-0 border border-primary p-4 border-r-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              TEMPLATE NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 uppercase">
              {cardData.title}
            </h1>
            <p className="leading-relaxed">{cardData.description}</p>
            <div className="flex mt-6">
              <span className="text-2xl font-bold flex gap-2">
                <span
                  className={`${cardData.isFree ? "line-through" : ""}`}
                >{`₹${cardData.price}`}</span>
                {cardData.isFree && (
                  <small className="text-green-500">Free</small>
                )}
              </span>
            </div>
            <div className="flex mb-4 gap-2">
              <Ratings rating={4} />
              <span className="text-gray-600 mt-2"> 20 Reviews</span>
              <span className="flex gap-1 items-center text-primary mb-2">
                <Link href={"#"}>
                  <IoLogoInstagram className="h-6 w-6" />
                </Link>
                <Link href={"#"}>
                  <IoLogoFacebook className="h-6 w-6" />
                </Link>
                <Link href={"#"}>
                  <IoLogoPinterest className="h-6 w-6" />
                </Link>
              </span>
            </div>
          </div>
          <div className="lg:w-1/2 border border-primary p-4">
            <Image
              className="w-full lg:h-auto h-64 object-cover object-center rounded"
              alt="ecommerce"
              src="https://dummyimage.com/400x400"
              width={400}
              height={400}
            />
            <button
              // onClick={downloadImage}
              className="w-full bg-primary text-white p-2 rounded-lg mt-4 hover:bg-primary-600"
            >
              Preview
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template;
