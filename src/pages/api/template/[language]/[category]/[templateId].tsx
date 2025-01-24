/** @format */

import { NextApiRequest, NextApiResponse } from "next";

// Define the structure of the mock data
interface TemplateData {
  id: string;
  title: string;
  description: string;
  image: string;
  isFree?: boolean;
  price?: number;
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
    "wedding-invitation-card": {
      "template-wedding": {
        id: "template-wedding",
        title: "Wedding Invitation Card",
        description:
          "Celebrate the joyous union with our elegant Wedding invitation card.",
        image: "/images/dohale-jevan-template-wedding.jpg",
        isFree: true,
        price: 99,
      },
    },
    "birthday-banner": {
      "template-birthday": {
        id: "template-birthday",
        title: "Birthday Invitation Card",
        description:
          "Make birthdays special with our colorful and vibrant Birthday invitation card.",
        image: "/images/dohale-jevan-template-birthday.jpg",
        isFree: true,
        price: 99,
      },
    },
    "housewarming-card": {
      "template-housewarming": {
        id: "template-housewarming",
        title: "Housewarming Invitation Card",
        description:
          "Invite your loved ones to your new home with our warm Housewarming invitation card.",
        image: "/images/dohale-jevan-template-housewarming.jpg",
        isFree: true,
        price: 99,
      },
    },
    "naming-ceremony-card": {
      "template-naming-ceremony": {
        id: "template-naming-ceremony",
        title: "Naming Ceremony Invitation Card",
        description:
          "Celebrate the naming ceremony with our beautiful Naming Ceremony invitation card.",
        image: "/images/dohale-jevan-template-naming-ceremony.jpg",
        isFree: true,
        price: 99,
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
