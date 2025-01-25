import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="mb-4">
      <ul className="flex text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {/* Render link for all but the last item */}
            {index < items.length - 1 ? (
              <Link
                href={item.href}
                className="hover:underline hover:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500">{item.label}</span> // Last item is not clickable
            )}
            {/* Separator */}
            {index < items.length - 1 && <span className="mx-1">/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
