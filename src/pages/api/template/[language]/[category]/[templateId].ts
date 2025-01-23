/** @format */

import { NextApiRequest, NextApiResponse } from "next";

// Define the structure of the mock data
interface TemplateData {
  title: string;
  description: string;
  image: string;
}

interface CategoryData {
  [templateId: string]: TemplateData;
}

interface LanguageData {
  [category: string]: CategoryData;
}

interface MockData {
  [language: string]: LanguageData;
}

// Mock data with explicit types
const mockData: MockData = {
  marathi: {
    "dohale-jevan-invitation-card": {
      "template-17": {
        title: "Dohale Jevan Invitation Card",
        description:
          "Celebrate the upcoming arrival with our traditional Dohale Jevan card.",
        image: "/images/dohale-jevan-template-17.jpg",
      },
    },
  },
};

// API handler with properly typed mock data
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { language, category, templateId } = req.query;

  if (
    typeof language === "string" &&
    typeof category === "string" &&
    typeof templateId === "string" &&
    mockData[language]?.[category]?.[templateId]
  ) {
    res.status(200).json(mockData[language][category][templateId]);
  } else {
    res.status(404).json({ error: "Card not found" });
  }
}
