/** @format */

import { ROUTES } from "@/utility/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PolicyNavigationLinks: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { url: `${ROUTES.PRIVACY_POLICY}`, label: "Privacy Policy" },
    {
      url: `${ROUTES.REFUND_POLICY}`,
      label: "Refund Policy",
    },
    { url: `${ROUTES.TERMS_OF_USE_POLICY}`, label: "Terms of Use" },
    { url: `${ROUTES.COPYRIGHT_POLICY}`, label: "Copyright Policy" },
    { url: `${ROUTES.CONTACT_US}`, label: "Contact Us" },
  ];

  return (
    <ul className="flex flex-col sm:flex-row sm:items-center sm:justify-between justify-center items-center text-center sm:text-left flex-wrap mb-6 text-sm font-medium sm:mb-0 gap-4">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className={`hover:underline hover:text-primary ${pathname === link.url ? "text-primary font-bold" : ""}`}
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
};

export default PolicyNavigationLinks;
