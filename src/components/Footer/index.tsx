/** @format */
"use client";
import PolicyNavigationLinks from "@/components/Policies/PolicyNavigationLinks";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="my-8 border-y border-primary">
      <div className="w-full mx-auto py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between justify-center items-center text-center sm:text-left">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={"/san-utsav-logo.png"}
              className="h-18 w-52"
              alt="Logo"
              width={400}
              height={400}
            />
          </Link>
          <PolicyNavigationLinks />
        </div>
        <hr className="my-4 sm:mx-auto lg:my-4 border-primary" />
        <span className="block text-sm text-center">
          <p>&copy; {currentYear} San Utsav - All Rights Reserved.</p>
          {/* &copy; 2025 San Utsav - All Rights Reserved. */}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
