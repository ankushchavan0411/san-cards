export const TEMPLATE_LISTS = "template-lists";
export const TEMPLATE_LIST = "template-list";
export const TEMPLATE = "template";
export const POLICIES = "policies";

export const ROUTES = {
  HOME: "/",
  ABOUT_US: "/about-us",
  CONTACT_US: "/contact-us",
  SERVICES: "/services",

  COPYRIGHT_POLICY: `/${POLICIES}/copyright-policy`,
  PRIVACY_POLICY: `/${POLICIES}/privacy-policy`,
  REFUND_POLICY: `/${POLICIES}/refund-and-cancellation-policy`,
  TERMS_OF_USE_POLICY: `/${POLICIES}/terms-of-use`,

  TEMPLATE_LISTS_LANGUAGE: (language: string) =>
    `/${TEMPLATE_LISTS}/${language}`,

  TEMPLATE_LIST_LANGUAGE_CATEGORY: (language: string, category: string) =>
    `/${TEMPLATE_LIST}/${language}/${category}`,

  TEMPLATE_LISTS_LANGUAGE_CATEGORY_TEMPLATE_ID: (
    language: string,
    category: string,
    templateId: string,
  ) => `/${TEMPLATE_LISTS}/${language}/${category}/${templateId}`,

  GET_TEMPLATE_BY_LANGUAGE_CATEGORY_TEMPLATE_ID: (
    language: string,
    category: string,
    templateId: string,
  ) => `/${TEMPLATE}/${language}/${category}/${templateId}`,
};
