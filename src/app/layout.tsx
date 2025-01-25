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
      <body className="container bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
