/** @format */

"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import TemplateList from "@/components/TemplateList";
import { TemplatesData } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Mock data for templates
const mockTemplates: TemplatesData = {
  marathi: {
    wedding: [
      {
        id: "template-1",
        title: "Elegant Wedding Template",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Wedding+Template+1",
        price: 199,
        isFree: true,
      },
      {
        id: "template-2",
        title: "Traditional Wedding Card",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Wedding+Template+2",
        price: 99,
        isFree: false,
      },
      {
        id: "template-3",
        title: "Floral Wedding Design",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Wedding+Template+3",
        price: 49,
        isFree: true,
      },
    ],
    engagement: [
      {
        id: "template-1",
        title: "Elegant Engagement Card",
        image:
          "https://dummyimage.com/1200x1200/dedede/000000&text=Engagement+Template+1",
        price: 99,
        isFree: true,
      },
      {
        id: "template-2",
        title: "Golden Ring Theme",
        image:
          "https://dummyimage.com/1200x1200/dedede/000000&text=Engagement+Template+2",
        price: 149,
        isFree: false,
      },
      {
        id: "template-3",
        title: "Traditional Engagement Design",
        image:
          "https://dummyimage.com/1200x1200/dedede/000000&text=Engagement+Template+3",
        price: 89,
        isFree: true,
      },
    ],
    "happy-birthday": [
      {
        id: "template-1",
        title: "Colorful Birthday Template",
        image:
          "https://dummyimage.com/1200x1200/fdfd96/000000&text=Birthday+Template+1",
        price: 99,
        isFree: true,
      },
      {
        id: "template-2",
        title: "Modern Birthday Card",
        image:
          "https://dummyimage.com/1200x1200/fdfd96/000000&text=Birthday+Template+2",
        price: 99,
        isFree: false,
      },
      {
        id: "template-3",
        title: "Birthday Party Theme",
        image:
          "https://dummyimage.com/1200x1200/fdfd96/000000&text=Birthday+Template+3",
        price: 99,
        isFree: true,
      },
    ],
    housewarming: [
      {
        id: "template-1",
        title: "Elegant Housewarming Template",
        image:
          "https://dummyimage.com/1200x1200/9acd32/ffffff&text=Housewarming+Template+1",
        price: 99,
        isFree: false,
      },
      {
        id: "template-2",
        title: "Floral Housewarming Design",
        image:
          "https://dummyimage.com/1200x1200/9acd32/ffffff&text=Housewarming+Template+2",
        price: 99,
        isFree: true,
      },
      {
        id: "template-3",
        title: "Minimalist Housewarming Card",
        image:
          "https://dummyimage.com/1200x1200/9acd32/ffffff&text=Housewarming+Template+3",
        price: 99,
        isFree: true,
      },
    ],
    newborn: [
      {
        id: "template-1",
        title: "Adorable Newborn Template",
        image:
          "https://dummyimage.com/1200x1200/ffb6c1/000000&text=Newborn+Template+1",
        price: 99,
        isFree: true,
      },
      {
        id: "template-2",
        title: "Baby Shower Design",
        image:
          "https://dummyimage.com/1200x1200/ffb6c1/000000&text=Newborn+Template+2",
        price: 99,
        isFree: true,
      },
      {
        id: "template-3",
        title: "Pastel Baby Theme",
        image:
          "https://dummyimage.com/1200x1200/ffb6c1/000000&text=Newborn+Template+3",
        price: 99,
        isFree: false,
      },
    ],
    "naming-ceremony": [
      {
        id: "template-1",
        title: "Charming Naming Ceremony Template",
        image:
          "https://dummyimage.com/1200x1200/add8e6/000000&text=Naming+Ceremony+Template+1",
        price: 99,
        isFree: true,
      },
      {
        id: "template-2",
        title: "Adorable Baby Name Card",
        image:
          "https://dummyimage.com/1200x1200/add8e6/000000&text=Naming+Ceremony+Template+2",
        price: 99,
        isFree: true,
      },
      {
        id: "template-3",
        title: "Traditional Naming Invitation",
        image:
          "https://dummyimage.com/1200x1200/add8e6/000000&text=Naming+Ceremony+Template+3",
        price: 99,
        isFree: false,
      },
    ],
    "thank-you": [
      {
        id: "template-1",
        title: "Elegant Thank You Card",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+1",
        price: 99,
        isFree: true,
      },
      {
        id: "template-2",
        title: "Floral Gratitude Design",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+2",
        price: 99,
        isFree: true,
      },
      {
        id: "template-3",
        title: "Minimalist Thank You Template",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+3",
        price: 99,
        isFree: false,
      },
    ],
    condolence: [
      {
        id: "template-1",
        title: "Respectful Condolence Card",
        image:
          "https://dummyimage.com/1200x1200/808080/ffffff&text=Condolence+Template+1",
        price: 99,
        isFree: false,
      },
      {
        id: "template-2",
        title: "Elegant Memorial Card",
        image:
          "https://dummyimage.com/1200x1200/808080/ffffff&text=Condolence+Template+2",
        price: 99,
        isFree: false,
      },
      {
        id: "template-3",
        title: "Traditional Tribute Design",
        image:
          "https://dummyimage.com/1200x1200/808080/ffffff&text=Condolence+Template+3",
        price: 99,
        isFree: true,
      },
    ],
  },
};

const TemplateListPage = () => {
  const params = useParams();
  let { language, category } = params || {};
  console.log("params", params);

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
