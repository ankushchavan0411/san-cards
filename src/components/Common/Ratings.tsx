/** @format */

import React from "react";

interface RatingsProps {
  rating: number;
  maxRating?: number;
  reviews?: number;
}

const Ratings: React.FC<RatingsProps> = ({
  rating,
  maxRating = 5,
  reviews = 33,
}) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        {Array.from({ length: filledStars }).map((_, index) => (
          <svg
            key={`filled-${index}`}
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M11 17.033L4.482 19.41a1.532 1.532 0 0 1-2.226-1.616l.863-5.031L.463 9.2A1.535 1.535 0 0 1 1.463 7.6l5.051-.734 2.259-4.577a1.534 1.534 0 0 1 2.752 0l2.259 4.577 5.051.734a1.523 1.523 0 0 1 1.238 1.6L17.881 12.8l.863 5.031a1.534 1.534 0 0 1-2.226 1.617L11 17.033z" />
          </svg>
        )}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <svg
            key={`empty-${index}`}
            className="w-4 h-4 text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3 border border-primary">
        {rating.toFixed(1)}
        <span className="border-primary ml-1 border-l px-1">
          {reviews} Reviews
        </span>
      </span>
    </div>
  );
};

export default Ratings;
