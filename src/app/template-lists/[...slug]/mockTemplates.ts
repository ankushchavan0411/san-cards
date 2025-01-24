/** @format */

type Template = {
  id: string;
  title: string;
  image: string;
  price: number;
  isFree: boolean;
};

type Category = {
  [category: string]: Template[];
};

type TemplatesData = {
  [language: string]: Category;
};

// Mock data for templates with type safety and updated language-specific titles
const mockTemplates: TemplatesData = {
  marathi: {
    "thank-you": [
      {
        id: "template-1",
        title: "सुविचार कार्ड (Marathi Thank You)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+1+Marathi",
        price: 99,
        isFree: true,
      },
      {
        id: "template-2",
        title: "फुलांचे आभार कार्ड (Floral Gratitude Card in Marathi)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+2+Marathi",
        price: 99,
        isFree: true,
      },
      {
        id: "template-3",
        title: "सामान्य आभार कार्ड (Minimalist Thank You Card in Marathi)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+3+Marathi",
        price: 99,
        isFree: false,
      },
    ],
    wedding: [
      {
        id: "template-1",
        title: "राजेशाही मराठी विवाह कार्ड (Royal Marathi Wedding Invitation)",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Marathi+Wedding+1",
        price: 199,
        isFree: true,
      },
      {
        id: "template-2",
        title: "पारंपारिक विवाह कार्ड (Traditional Marathi Wedding Card)",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Marathi+Wedding+2",
        price: 99,
        isFree: false,
      },
      {
        id: "template-3",
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
        id: "template-1",
        title: "आभार कार्ड (Hindi Thank You)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+1+Hindi",
        price: 99,
        isFree: true,
      },
      {
        id: "template-2",
        title: "फूलों का आभार कार्ड (Floral Gratitude Card in Hindi)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+2+Hindi",
        price: 99,
        isFree: true,
      },
      {
        id: "template-3",
        title: "साधारण आभार कार्ड (Simple Thank You Card in Hindi)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+3+Hindi",
        price: 99,
        isFree: false,
      },
    ],
    wedding: [
      {
        id: "template-1",
        title: "शाही हिंदी विवाह कार्ड (Royal Hindi Wedding Invitation)",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Hindi+Wedding+1",
        price: 199,
        isFree: true,
      },
      {
        id: "template-2",
        title: "परंपरागत हिंदी विवाह कार्ड (Traditional Hindi Wedding Card)",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Hindi+Wedding+2",
        price: 99,
        isFree: false,
      },
      {
        id: "template-3",
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
        id: "template-1",
        title: "Elegant Thank You Card (English)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+1+English",
        price: 99,
        isFree: true,
      },
      {
        id: "template-2",
        title: "Floral Gratitude Card (English)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+2+English",
        price: 99,
        isFree: true,
      },
      {
        id: "template-3",
        title: "Minimalist Thank You Card (English)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+3+English",
        price: 99,
        isFree: false,
      },
    ],
    wedding: [
      {
        id: "template-1",
        title: "Elegant English Wedding Invitation",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=English+Wedding+1",
        price: 199,
        isFree: true,
      },
      {
        id: "template-2",
        title: "Traditional English Wedding Card",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=English+Wedding+2",
        price: 99,
        isFree: false,
      },
      {
        id: "template-3",
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
        id: "template-1",
        title: "ధన్యవాదాలు కార్డు (Telugu Thank You Card)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+1+Telugu",
        price: 99,
        isFree: true,
      },
      {
        id: "template-2",
        title: "పువ్వులతో ధన్యవాదాలు (Floral Gratitude Card in Telugu)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+2+Telugu",
        price: 99,
        isFree: true,
      },
      {
        id: "template-3",
        title: "సాధారణ ధన్యవాదాలు (Simple Thank You Card in Telugu)",
        image:
          "https://dummyimage.com/1200x1200/f4a460/ffffff&text=Thank+You+Template+3+Telugu",
        price: 99,
        isFree: false,
      },
    ],
    wedding: [
      {
        id: "template-1",
        title: "తెలుగు వివాహ ఆహ్వానపత్రం (Telugu Wedding Invitation)",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Telugu+Wedding+1",
        price: 199,
        isFree: true,
      },
      {
        id: "template-2",
        title: "పారంపరిక తెలుగు వివాహ కార్డ్ (Traditional Telugu Wedding Card)",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Telugu+Wedding+2",
        price: 99,
        isFree: false,
      },
      {
        id: "template-3",
        title: "పువ్వులతో తెలుగు వివాహ డిజైన్ (Floral Telugu Wedding Design)",
        image:
          "https://dummyimage.com/1200x1200/ffcccb/000000&text=Telugu+Wedding+3",
        price: 49,
        isFree: true,
      },
    ],
  },
};

export default mockTemplates;
