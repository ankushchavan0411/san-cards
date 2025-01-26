/** @format */

import React from "react";
import { LuLoader } from "react-icons/lu";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/100 backdrop-blur-sm">
      <LuLoader className="animate-spin-slow h-12  w-12 animate-spin text-primary-600" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
export default Loader;
