/** @format */

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Header/Navbar";
import React from "react";
import "@/app/globals.css";

type PolicyLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const PolicyLayout: React.FC<PolicyLayoutProps> = ({ title, children }) => {
  return (
    <div className="container">
      <Navbar />
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <header className="bg-blue-600 text-white py-4">
          <h1 className="text-center text-3xl font-bold">{title}</h1>
        </header>
        <main className="p-6 max-w-3xl mx-auto bg-white rounded shadow mt-6 mb-6">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PolicyLayout;
