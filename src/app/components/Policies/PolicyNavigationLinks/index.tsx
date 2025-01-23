/** @format */

import Link from "next/link";

const PolicyNavigationLinks: React.FC = () => {
  const links = [
    { href: "/policies/privacy-policy", label: "Privacy Policy" },
    {
      href: "/policies/refund-and-cancellation-policy",
      label: "Refund Policy",
    },
    { href: "/policies/terms-of-use", label: "Terms of Use" },
    { href: "/policies/copyright-policy", label: "Copyright Policy" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="hover:underline me-4 md:me-6"
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
};

export default PolicyNavigationLinks;
