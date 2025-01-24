/** @format */

import { TemplatesData } from "@/types";
import { createSlug } from "@/utility";

// Mock data for templates
const mockTemplates: TemplatesData = {
  marathi: {
    "thank-you": [
      {
        id: createSlug("सुविचार कार्ड (Marathi Thank You)"),
        title: "सुविचार कार्ड (Marathi Thank You)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+1+Marathi",
        price: 99,
        isFree: true,
      },
      {
        id: createSlug("फुलांचे आभार कार्ड (Floral Gratitude Card in Marathi)"),
        title: "फुलांचे आभार कार्ड (Floral Gratitude Card in Marathi)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+2+Marathi",
        price: 99,
        isFree: true,
      },
      {
        id: createSlug(
          "सामान्य आभार कार्ड (Minimalist Thank You Card in Marathi)",
        ),
        title: "सामान्य आभार कार्ड (Minimalist Thank You Card in Marathi)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+3+Marathi",
        price: 99,
        isFree: false,
      },
    ],
    wedding: [
      {
        id: createSlug(
          "राजेशाही मराठी विवाह कार्ड (Royal Marathi Wedding Invitation)",
        ),
        title: "राजेशाही मराठी विवाह कार्ड (Royal Marathi Wedding Invitation)",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Marathi+Wedding+1",
        price: 199,
        isFree: true,
      },
      {
        id: createSlug(
          "पारंपारिक विवाह कार्ड (Traditional Marathi Wedding Card)",
        ),
        title: "पारंपारिक विवाह कार्ड (Traditional Marathi Wedding Card)",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Marathi+Wedding+2",
        price: 99,
        isFree: false,
      },
      {
        id: createSlug("फुलांचे विवाह डिझाइन (Floral Marathi Wedding Design)"),
        title: "फुलांचे विवाह डिझाइन (Floral Marathi Wedding Design)",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Marathi+Wedding+3",
        price: 49,
        isFree: true,
      },
    ],
  },
  hindi: {
    "thank-you": [
      {
        id: createSlug("आभार कार्ड (Hindi Thank You)"),
        title: "आभार कार्ड (Hindi Thank You)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+1+Hindi",
        price: 99,
        isFree: true,
      },
      {
        id: createSlug("फूलों का आभार कार्ड (Floral Gratitude Card in Hindi)"),
        title: "फूलों का आभार कार्ड (Floral Gratitude Card in Hindi)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+2+Hindi",
        price: 99,
        isFree: true,
      },
      {
        id: createSlug("साधारण आभार कार्ड (Simple Thank You Card in Hindi)"),
        title: "साधारण आभार कार्ड (Simple Thank You Card in Hindi)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+3+Hindi",
        price: 99,
        isFree: false,
      },
    ],
    wedding: [
      {
        id: createSlug(
          "शाही हिंदी विवाह कार्ड (Royal Hindi Wedding Invitation)",
        ),
        title: "शाही हिंदी विवाह कार्ड (Royal Hindi Wedding Invitation)",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Hindi+Wedding+1",
        price: 199,
        isFree: true,
      },
      {
        id: createSlug(
          "परंपरागत हिंदी विवाह कार्ड (Traditional Hindi Wedding Card)",
        ),
        title: "परंपरागत हिंदी विवाह कार्ड (Traditional Hindi Wedding Card)",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Hindi+Wedding+2",
        price: 99,
        isFree: false,
      },
      {
        id: createSlug(
          "फूलों से सजे विवाह कार्ड (Floral Wedding Invitation in Hindi)",
        ),
        title: "फूलों से सजे विवाह कार्ड (Floral Wedding Invitation in Hindi)",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Hindi+Wedding+3",
        price: 49,
        isFree: true,
      },
    ],
  },
  english: {
    "thank-you": [
      {
        id: createSlug("Elegant Thank You Card (English)"),
        title: "Elegant Thank You Card (English)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+1+English",
        price: 99,
        isFree: true,
      },
      {
        id: createSlug("Floral Gratitude Card (English)"),
        title: "Floral Gratitude Card (English)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+2+English",
        price: 99,
        isFree: true,
      },
      {
        id: createSlug("Minimalist Thank You Card (English)"),
        title: "Minimalist Thank You Card (English)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+3+English",
        price: 99,
        isFree: false,
      },
    ],
    wedding: [
      {
        id: createSlug("Elegant English Wedding Invitation"),
        title: "Elegant English Wedding Invitation",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=English+Wedding+1",
        price: 199,
        isFree: true,
      },
      {
        id: createSlug("Traditional English Wedding Card"),
        title: "Traditional English Wedding Card",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=English+Wedding+2",
        price: 99,
        isFree: false,
      },
      {
        id: createSlug("Floral English Wedding Invitation"),
        title: "Floral English Wedding Invitation",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=English+Wedding+3",
        price: 49,
        isFree: true,
      },
    ],
  },
  telugu: {
    "thank-you": [
      {
        id: createSlug("ధన్యవాదాలు కార్డు (Telugu Thank You Card)"),
        title: "ధన్యవాదాలు కార్డు (Telugu Thank You Card)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+1+Telugu",
        price: 99,
        isFree: true,
      },
      {
        id: createSlug(
          "పువ్వులతో ధన్యవాదాలు (Floral Gratitude Card in Telugu)",
        ),
        title: "పువ్వులతో ధన్యవాదాలు (Floral Gratitude Card in Telugu)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+2+Telugu",
        price: 99,
        isFree: true,
      },
      {
        id: createSlug("సాధారణ ధన్యవాదాలు (Simple Thank You Card in Telugu)"),
        title: "సాధారణ ధన్యవాదాలు (Simple Thank You Card in Telugu)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+3+Telugu",
        price: 99,
        isFree: false,
      },
    ],
    wedding: [
      {
        id: createSlug("తెలుగు వివాహ ఆహ్వానపత్రం (Telugu Wedding Invitation)"),
        title: "తెలుగు వివాహ ఆహ్వానపత్రం (Telugu Wedding Invitation)",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Telugu+Wedding+1",
        price: 199,
        isFree: true,
      },
      {
        id: createSlug(
          "పారంపరిక తెలుగు వివాహ కార్డ్ (Traditional Telugu Wedding Card)",
        ),
        title: "పారంపరిక తెలుగు వివాహ కార్డ్ (Traditional Telugu Wedding Card)",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Telugu+Wedding+2",
        price: 99,
        isFree: false,
      },
      {
        id: createSlug(
          "పువ్వులతో తెలుగు వివాహ డిజైన్ (Floral Telugu Wedding Design)",
        ),
        title: "పువ్వుతో తెలుగు వివాహ డిజైన్ (Floral Telugu Wedding Design)",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Telugu+Wedding+3",
        price: 49,
        isFree: true,
      },
    ],
  },
};

export default mockTemplates;
