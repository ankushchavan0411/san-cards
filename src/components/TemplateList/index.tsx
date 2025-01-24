/** @format */

import { TemplateListProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Ratings from "../Common/Ratings";

const TemplateList: React.FC<TemplateListProps> = ({
  templates,
  language,
  category,
}) => {
  if (!templates || templates.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-600">No templates found.</div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-6 capitalize">
        {category.replace(/-/g, " ")} Templates
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Link
            key={template.id}
            href={`/template/${language}/${category}/${template.id}`}
            className="border overflow-hidden hover:shadow-lg transition-shadow border-orange-400 rounded-lg shadow-sm hover:shadow-orange-400"
          >
            <div className="w-full">
              <Image
                src={template.image}
                alt={template.title}
                className="w-full h-full"
                width={1200}
                height={1200}
              />
              <div className="px-5 py-5">
                <h5 className="text-xl font-semibold tracking-tight">
                  {template.title}
                </h5>
                <Ratings rating={5} />
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold flex gap-2">
                    <span
                      className={`${template.isFree ? "line-through" : ""}`}
                    >{`₹${template.price}`}</span>
                    {template.isFree && (
                      <small className="text-green-500">Free</small>
                    )}
                  </span>
                  <button className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    {`Customize ${
                      !template.isFree ? "With Watermark" : "Free"
                    }`}
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TemplateList;
