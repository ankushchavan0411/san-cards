/** @format */

import Contact from "@/app/components/ContactUs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | San Utsav",
  description:
    "Get in touch with San Utsav. Reach us for support, inquiries, or collaboration. We are here to assist you in creating personalized Marathi festival and invitation cards.",
  keywords:
    "San Utsav, Contact San Utsav, Marathi festival cards, invitation cards, personalized cards, customer support, inquiries, collaboration",
  robots: "index, follow",
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
