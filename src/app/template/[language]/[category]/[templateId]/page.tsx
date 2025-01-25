/** @format */

"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Error from "@/components/Common/Error";
import Loader from "@/components/Common/Loader";
import Template from "@/components/Template";
import { generateBreadcrumbs } from "@/utility";
import fetchService from "@/utility/fetchService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const TemplatePage = () => {
  const params = useParams();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Type assertion to safely access params
  const language = params?.language as string | undefined;
  const category = params?.category as string | undefined;
  const templateId = params?.templateId as string | undefined;

  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = `${apiUrl}/api/template/${language}/${category}/${templateId}`;
        const data = await fetchService(url);
        setCardData(data);
      } catch (error) {
        console.error("Error fetching card data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [language, category, templateId, apiUrl]);

  if (loading) {
    return <Loader />;
  }

  if (!cardData) {
    return <Error message="Template data not found." />;
  }

  const breadcrumbs = generateBreadcrumbs({ language, category, templateId });

  return (
    <div className="py-8 bg-gray-50 px-4">
      <Breadcrumb items={breadcrumbs} />
      <Template cardData={cardData} />
    </div>
  );
};

export default TemplatePage;
