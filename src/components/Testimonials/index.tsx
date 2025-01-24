/** @format */

import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ravi Deshmukh",
      feedback:
        "San Utsav made our wedding so special with personalized cards. Their designs are beautiful and unique!",
      location: "Pune, India",
    },
    {
      name: "Priya Patil",
      feedback:
        "I loved the naming ceremony card we ordered from San Utsav. It was exactly what I was looking for.",
      location: "Mumbai, India",
    },
    {
      name: "Anita Shah",
      feedback:
        "The birthday card designs are fantastic! Simple yet elegant. Highly recommended.",
      location: "Nagpur, India",
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">What Other Users Say</h2>
        <p className="text-lg text-gray-700">
          Here are a few words from happy users.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
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
