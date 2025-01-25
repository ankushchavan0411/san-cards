/** @format */

import PolicyLayout from "@/components/Policies/PolicyLayout";
import React from "react";
import { sections, whyChooseUs } from "./data";

const AboutUsTwo: React.FC = () => {
  return (
    <PolicyLayout title="About Us">
      <section className="text-gray-600 body-font">
        <div className="container px-8 py-8 mx-auto">
          {sections.map((section, index) => (
            <div className="flex flex-col text-center w-full mb-16" key={index}>
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 uppercase">
                {section.title}
              </h1>
              <p className="mx-auto leading-relaxed text-base">
                {section.content}
              </p>
            </div>
          ))}

          <div className="flex flex-col text-center w-full">
            <h1 className="text-2xl font-medium title-font mb-6 text-gray-900 uppercase">
              Why Choose San Utsav?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <div
                  className="border border-primary p-6 rounded-lg shadow-sm"
                  key={index}
                >
                  <h2 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h2>
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
