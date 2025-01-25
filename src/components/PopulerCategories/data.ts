interface Category {
  name: string;
  description: string;
  language: string;
  category: string;
  categoryId: string;
}

interface PopulerCategories {
  marathi: Category[];
  english: Category[];
}

export const populerCategories: PopulerCategories = {
  marathi: [
    {
      name: "शुभविवाह",
      description: "Elegant wedding invitations to make your day special.",
      language: "marathi",
      category: "wedding",
      categoryId: "1",
    },
    {
      name: "साखरपुडा",
      description: "Traditional cards for engagement ceremonies.",
      language: "marathi",
      category: "engagement",
      categoryId: "2",
    },
    {
      name: "वाढदिवस",
      description: "Celebrate birthdays with our personalized cards.",
      language: "marathi",
      category: "birthday",
      categoryId: "3",
    },
    {
      name: "गृहप्रवेश",
      description: "New home? Get your customized housewarming cards.",
      language: "marathi",
      category: "housewarming",
      categoryId: "4",
    },
    {
      name: "डोहाळेजेवण",
      description: "Cherish the newborn with our unique invitation designs.",
      language: "marathi",
      category: "newborn",
      categoryId: "5",
    },
    {
      name: "नामकरण",
      description:
        "Name your little one with our adorable naming ceremony cards.",
      language: "marathi",
      category: "naming ceremony",
      categoryId: "6",
    },
    {
      name: "आभार",
      description: "Express gratitude with beautiful thank-you cards.",
      language: "marathi",
      category: "thank you",
      categoryId: "7",
    },
    {
      name: "श्रद्धांजली",
      description: "Honoring memories with respectful condolence cards.",
      language: "marathi",
      category: "condolence",
      categoryId: "8",
    },
  ],
  english: [
    {
      name: "Wedding",
      description: "Elegant wedding invitations to make your day special.",
      language: "english",
      category: "wedding",
      categoryId: "1",
    },
    {
      name: "Engagement",
      description: "Traditional cards for engagement ceremonies.",
      language: "english",
      category: "engagement",
      categoryId: "2",
    },
    {
      name: "Birthdays",
      description: "Celebrate birthdays with our personalized cards.",
      language: "english",
      category: "birthday",
      categoryId: "3",
    },
    {
      name: "Housewarming",
      description: "New home? Get your customized housewarming cards.",
      language: "english",
      category: "housewarming",
      categoryId: "4",
    },
    {
      name: "Dohalejevan",
      description: "Cherish the newborn with our unique invitation designs.",
      language: "english",
      category: "newborn",
      categoryId: "5",
    },
    {
      name: "Naming Ceremony",
      description:
        "Name your little one with our adorable naming ceremony cards.",
      language: "english",
      category: "naming ceremony",
      categoryId: "6",
    },
    {
      name: "Thank You",
      description: "Express gratitude with beautiful thank-you cards.",
      language: "english",
      category: "thank you",
      categoryId: "7",
    },
    {
      name: "Condolence",
      description: "Honoring memories with respectful condolence cards.",
      language: "english",
      category: "condolence",
      categoryId: "8",
    },
  ],
};
