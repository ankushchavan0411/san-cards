/** @format */

import React from "react";
import { testimonialsData } from "./testimonialsData";

const Testimonials: React.FC = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-1">Hear from Our Happy Users</h2>
        <p className="text-lg text-gray-700">
          Discover what our satisfied users have to say about their experience
          with us.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center border border-primary hover:shadow-primary"
          >
            <p className="text-lg italic text-gray-600 mb-4">
              {`"${testimonial.feedback}"`}
            </p>
            <h4 className="font-semibold text-xl">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
