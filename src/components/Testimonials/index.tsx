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
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">What Our Clients Say</h2>
        <p className="text-lg text-gray-700">
          Here are a few words from our happy customers.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md w-full sm:w-1/3"
          >
            <p className="text-lg italic text-gray-600 mb-4">
              "{testimonial.feedback}"
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
