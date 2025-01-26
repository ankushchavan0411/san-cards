type DemoCard = {
  id: number;
  title: string;
  imageUrl: string;
  language: string;
  category: string;
  templateId: string;
};

export const demoCards: DemoCard[] = [
  {
    id: 1,
    title: "Wedding",
    imageUrl: "https://dummyimage.com/400x300/7f7fff/333333?text=Wedding+Card",
    language: "marathi",
    category: "wedding-invitation-card",
    templateId: "template-wedding",
  },
  {
    id: 2,
    title: "Birthday",
    imageUrl: "https://dummyimage.com/400x300/ff7f7f/333333?text=Birthday+Card",
    language: "marathi",
    category: "birthday-banner",
    templateId: "template-birthday",
  },
  {
    id: 3,
    title: "Housewarming",
    imageUrl:
      "https://dummyimage.com/400x300/7fff7f/333333?text=Housewarming+Card",
    language: "marathi",
    category: "housewarming-card",
    templateId: "template-housewarming",
  },
  {
    id: 4,
    title: "Naming Ceremony",
    imageUrl:
      "https://dummyimage.com/400x300/ffff7f/333333?text=Naming+Ceremony+Card",
    language: "marathi",
    category: "naming-ceremony-card",
    templateId: "template-naming-ceremony",
  },
];
