/** @format */

import PolicyNavigationLinks from "@/components/Policies/PolicyNavigationLinks";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={"/san-utsav-logo.png"}
              className="h-18 w-52"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
          <PolicyNavigationLinks />
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {/* &copy; {new Date().getFullYear()} San Utsav All Rights Reserved. */}
          &copy; 2025 San Utsav All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
