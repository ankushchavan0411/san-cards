export type Template = {
  id: string;
  title: string;
  image: string;
  price: number;
  isFree: boolean;
};

export type Category = {
  [category: string]: Template[];
};

export type TemplatesData = {
  [language: string]: Category;
};

export type TemplateListProps = {
  templates: Template[];
  language: string;
  category: string;
};
