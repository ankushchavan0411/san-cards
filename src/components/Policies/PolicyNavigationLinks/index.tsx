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
    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 gap-4">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="hover:underline hover:text-primary hover:font-bold"
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
};

export default PolicyNavigationLinks;
