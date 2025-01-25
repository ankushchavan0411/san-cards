/** @format */

import Link from "next/link";
import { usePathname } from "next/navigation";

const PolicyNavigationLinks: React.FC = () => {
  const pathname = usePathname();

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
    <ul className="flex flex-col sm:flex-row sm:items-center sm:justify-between justify-center items-center text-center sm:text-left flex-wrap mb-6 text-sm font-medium sm:mb-0 gap-4">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`hover:underline hover:text-primary ${pathname === link.href ? "text-primary font-bold" : ""}`}
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
};

export default PolicyNavigationLinks;
