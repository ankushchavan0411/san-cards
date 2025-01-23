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
  ];

  return (
    <nav className="mt-2 flex justify-center space-x-4">
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="hover:underline">
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default PolicyNavigationLinks;
