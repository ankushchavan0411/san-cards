/** @format */

"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import TemplateList from "@/components/TemplateList";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Template = {
  id: string;
  title: string;
  image: string;
};

type TemplatesData = {
  [language: string]: {
    [category: string]: Template[];
  };
};

// Mock data for templates
const mockTemplates: TemplatesData = {
  marathi: {
    "naming-ceremony": [
      {
        id: "template-1",
        title: "Template 1",
        image: "/images/template-1.jpg",
      },
      {
        id: "template-2",
        title: "Template 2",
        image: "/images/template-2.jpg",
      },
      {
        id: "template-3",
        title: "Template 3",
        image: "/images/template-3.jpg",
      },
    ],
  },
};

const TemplateListPage = () => {
  const params = useParams();
  let { language, category } = params || {};

  // Ensure `language` and `category` are strings
  language = Array.isArray(language) ? language[0] : language;
  category = Array.isArray(category) ? category[0] : category;

  const [templates, setTemplates] = useState<Template[]>([]);

  useEffect(() => {
    if (language && category) {
      const fetchedTemplates = mockTemplates[language]?.[category] || [];
      setTemplates(fetchedTemplates);
    }
  }, [language, category]);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: language
        ? language.charAt(0).toUpperCase() + language.slice(1)
        : "Language",
    },
    { label: category ? category.replace(/-/g, " ") : "Category" },
  ];

  return (
    <div className="py-8">
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
