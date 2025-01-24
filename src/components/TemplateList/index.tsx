/** @format */

import Image from "next/image";
import Link from "next/link";

// Define the structure of template data
type Template = {
  id: string;
  title: string;
  image: string;
};

type TemplateListProps = {
  templates: Template[];
  language: string;
  category: string;
};

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {templates.map((template) => (
          <Link
            key={template.id}
            href={`/template/${language}/${category}/${template.id}`}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* <Image
              src={template.image}
              alt={template.title}
              className="w-full h-40 object-cover"
            /> */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{template.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TemplateList;
