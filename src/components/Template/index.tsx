/** @format */
"use client";

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

const Template = ({ cardData }: any) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="py-8 mx-auto">
        {/* Use grid for layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Left Section */}
          <div className="border border-primary p-4">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              TEMPLATE NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 uppercase">
              {cardData.title}
            </h1>
            <p className="leading-relaxed">{cardData.description}</p>
            <div className="flex gap-4 mt-4 flex-wrap">
              <div className="text-2xl font-bold flex gap-2">
                <span className={`${cardData.isFree ? "line-through" : ""}`}>
                  {`₹${cardData.price}`}
                </span>
                {cardData.isFree && (
                  <small className="text-green-500">Free</small>
                )}
              </div>
              <Ratings rating={4} />
              <div className="text-gray-600">20 Reviews</div>
              <div className="flex gap-2 items-center text-primary">
                <Link href={"#"}>
                  <IoLogoInstagram className="h-6 w-6" />
                </Link>
                <Link href={"#"}>
                  <IoLogoFacebook className="h-6 w-6" />
                </Link>
                <Link href={"#"}>
                  <IoLogoPinterest className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="border border-primary p-4">
            <Image
              className="w-full h-auto object-cover object-center rounded"
              alt="ecommerce"
              src="https://dummyimage.com/400x400"
              width={400}
              height={400}
            />
            <button className="w-full bg-primary text-white p-2 rounded-lg mt-4 hover:bg-primary-600">
              Preview
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template;
