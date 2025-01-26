/** @format */

import Footer from "@/components/Footer";
import Navbar from "@/components/Header/Navbar";
import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "San Utsav - Free Online Marathi Festival & Invitation Cards",
  description:
    "Create personalized Marathi invitation cards online for free. Choose from our unique collection of traditional cards for weddings, engagements, birthdays, and festivals. Enter your details, and your card is ready to download instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Amiko:wght@400;600;700&family=Khand:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap"
        rel="stylesheet"
      />
      <body className="container bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
