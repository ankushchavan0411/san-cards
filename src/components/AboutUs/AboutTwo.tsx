/** @format */

import PolicyLayout from "@/components/Policies/PolicyLayout";
import React from "react";
import { whyChooseUs } from "./whyChooseUsData";

const AboutUsTwo: React.FC = () => {
  return (
    <PolicyLayout title="About Us">
      <section className="text-gray-600 body-font">
        <div className="container px-8 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 uppercase">
              Join Us in Celebrating Your Special Moments
            </h1>
            <p className="mx-auto leading-relaxed text-base">
              At San Utsav, we aim to bring joy and celebration to your special
              events by offering personalized Marathi festival and invitation
              cards. We understand the importance of tradition and culture, and
              we work diligently to create beautiful, customizable cards that
              reflect the spirit of your occasions. Whether its a wedding,
              birthday, festival, or any other occasion, San Utsav is here to
              help you create the perfect invitation to share your happiness
              with your friends and family. Join us in celebrating Marathi
              culture and tradition with beautiful, meaningful, and personalized
              invitation cards.
            </p>
          </div>
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 uppercase">
              Our Mission
            </h1>
            <p className="mx-auto leading-relaxed text-base">
              Our mission is to provide a seamless and creative experience for
              those looking to celebrate their festivals, weddings, engagements,
              and other special occasions with a unique touch. We aim to
              preserve the essence of Marathi culture while making it easier for
              you to create and share beautiful, personalized invitations with
              your loved ones.
            </p>
          </div>

          <div className="flex flex-col text-center w-full">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 uppercase">
              Why Choose San Utsav?
            </h1>
            <div className="grid grid-cols-3 gap-4">
              {whyChooseUs.map((item, index) => (
                <div className="border border-primary p-4" key={index}>
                  <h1 className="title-font text-gray-900 mb-1 font-bold">
                    {item.title}{" "}
                  </h1>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PolicyLayout>
  );
};

export default AboutUsTwo;
