/** @format */

import React from "react";

type PolicyLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const PolicyLayout: React.FC<PolicyLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white py-4">
        <h1 className="text-center text-3xl font-bold">{title}</h1>
      </header>
      <main className="p-6 max-w-3xl mx-auto bg-white rounded shadow mt-6">
        {children}
      </main>
      <footer className="text-center py-4 bg-gray-200 text-sm mt-6">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default PolicyLayout;
