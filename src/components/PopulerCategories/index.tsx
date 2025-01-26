/** @format */
"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import { LanguageFilter } from "@/types";
import { ROUTES } from "@/utility/routes";
import Link from "next/link";
import React, { useState } from "react";
import FilterButtons from "../Common/FilterButton";
import { populerCategories } from "./data";

const PopulerCategories: React.FC = () => {
  const [selectedFilter, setSelectedFilter] =
    useState<LanguageFilter>("marathi");

  const filterOptions: LanguageFilter[] = ["marathi", "english"];

  return (
    <section id="populer_categories" className="py-16">
      <SectionTitle
        title="Popular Categories"
        paragraph="Discover our most-loved categories featuring beautifully designed,
          customizable cards tailored to suit all your special moments and
          celebrations."
        center
        mb="50px"
      />

      <FilterButtons
        filterOptions={filterOptions}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center">
        {populerCategories[selectedFilter].map(
          ({ name, language, category, description, categoryId }, index) => (
            <Link
              key={categoryId}
              href={`${ROUTES.TEMPLATE_LIST_LANGUAGE_CATEGORY(language, category)}`}
            >
              <div className="bg-white px-2 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border hover:shadow-primary border-primary hover:cursor-pointer h-auto">
                <h3 className="text-2xl font-semibold mb-2 text-primary-500">
                  {name}
                </h3>
                <p className="text-gray-800">{description}</p>
              </div>
            </Link>
          ),
        )}
      </div>
    </section>
  );
};

export default PopulerCategories;
