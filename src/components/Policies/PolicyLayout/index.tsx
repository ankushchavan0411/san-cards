/** @format */

import React from "react";
import "@/app/globals.css";

type PolicyLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const PolicyLayout: React.FC<PolicyLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-primary text-white py-4">
        <h1 className="text-center text-3xl font-bold">{title}</h1>
      </header>
      <main className="p-6 mx-auto bg-gray-50 rounded shadow">{children}</main>
    </div>
  );
};

export default PolicyLayout;
