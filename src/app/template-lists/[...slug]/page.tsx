"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import TemplateList from "@/components/TemplateList";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import mockTemplates from "./mockTemplates";

// Template type
type Template = {
  id: string;
  title: string;
  image: string;
  price: number;
  isFree: boolean;
};

const TemplateListPage = () => {
  const params = useParams();
  let { slug } = params ?? {};
  let [language, category, template] = slug;

  const [templates, setTemplates] = useState<Template[]>([]);

  // Fetch templates based on language and category
  useEffect(() => {
    if (language && category) {
      const fetchedTemplates = mockTemplates[language]?.[category] || [];
      setTemplates(fetchedTemplates);
    }
    if (language) {
      const fetchedTemplates = mockTemplates[language] || [];
      const allTemplates = Object.values(fetchedTemplates).flat();
      setTemplates(allTemplates);
    }
  }, [language, category, template]);

  // Dynamically create breadcrumb links based on URL segments
  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...(language
      ? [
          {
            label: language.charAt(0).toUpperCase() + language.slice(1),
            href: `/template-lists/${language}`,
          },
        ]
      : []),
    ...(category
      ? [
          {
            label: category.replace(/-/g, " ").toUpperCase(),
            href: `/template-lists/${language}/${category}`,
          },
        ]
      : []),
  ];

  return (
    <div className="py-8 bg-gray-50 px-4">
      <Breadcrumb items={breadcrumbs} />
      <TemplateList
        templates={templates}
        language={language || ""}
        category={category || ""}
      />
    </div>
  );
};

export default TemplateListPage;
