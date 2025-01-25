import { Breadcrumb, GenerateBreadcrumbsProps } from "@/types";

// Function to create a slug from a title
export const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with dashes
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing dashes
};

// Convert to Title Case (capitalize each word, keeping the hyphens intact)
export const capitalize = (text: string) => {
  return text
    .split("-") // Split the string by hyphens
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter
    .join(" "); // Rejoin the words with hyphens
};

// Function to generate dynamic breadcrumbs
export const generateBreadcrumbs = ({
  language,
  category,
  templateId,
}: GenerateBreadcrumbsProps): Breadcrumb[] => {
  const breadcrumbs: Breadcrumb[] = [
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
            label: capitalize(category),
            href: `/template-lists/${language}/${category}`,
          },
        ]
      : []),
    ...(templateId
      ? [
          {
            label: capitalize(templateId),
            href: `/template-lists/${language}/${category}/${templateId}`,
          },
        ]
      : []),
  ];

  return breadcrumbs;
};
