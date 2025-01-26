import MarathiWeddingCard from "@/components/TemplateDesign/Marathi/MarathiWeddingCard";

// Define a type for the template list
interface TemplateComponentEntry {
  id: string;
  TemplateComponent: React.FC;
}

// Define list
export const templateComponentsList: Record<string, TemplateComponentEntry> = {
  "template-wedding": {
    id: "template-wedding",
    TemplateComponent: MarathiWeddingCard,
  },
};
