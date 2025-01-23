/** @format */

import AboutUs from "@/components/AboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | San Utsav",
  description:
    "Learn more about San Utsav. We offer personalized Marathi festival and invitation cards. Celebrate your special moments with traditional and customizable designs.",
  keywords:
    "San Utsav, About San Utsav, Marathi festival cards, invitation cards, personalized cards, custom wedding invitations, Marathi celebrations",
  robots: "index, follow",
};

const AboutUsPage = () => {
  return <AboutUs />;
};

export default AboutUsPage;
