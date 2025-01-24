/** @format */

"use client";

import Error from "@/components/Common/Error";
import Loader from "@/components/Common/Loader";
import Template from "@/components/Template";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";

const TemplatePage = () => {
  const params = useParams();

  // Type assertion to safely access params
  const language = params?.language as string | undefined;
  const category = params?.category as string | undefined;
  const templateId = params?.templateId as string | undefined;

  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (language && category && templateId) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${window.location.origin}/api/template/${language}/${category}/${templateId}`,
          );

          if (!response.ok) {
            console.error("Failed to fetch card data");
          }
          const data = await response.json();
          setCardData(data);
        } catch (error) {
          console.error("Error fetching card data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [language, category, templateId, loading]);

  if (loading) {
    return <Loader />;
  }

  if (!cardData) {
    return <Error message="Card data not found." />;
  }

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
      <Template cardData={cardData} />
    </div>
  );
};

export default TemplatePage;
