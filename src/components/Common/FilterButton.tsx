"use client";

import { LanguageFilter } from "@/types";
import React from "react";
interface FilterButtonsProps {
  filterOptions: LanguageFilter[];
  selectedFilter: LanguageFilter;
  onFilterChange: (filter: LanguageFilter) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  filterOptions,
  selectedFilter,
  onFilterChange,
}) => {
  return (
    <div className="mb-8 flex justify-center space-x-4">
      {filterOptions.map((option) => (
        <button
          key={option}
          className={`rounded px-4 py-2 capitalize ${selectedFilter === option ? "bg-primary-600 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={() => onFilterChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
