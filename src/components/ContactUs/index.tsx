/** @format */

import SectionTitle from "@/components/Common/SectionTitle";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import PolicyLayout from "@/components/Policies/PolicyLayout";
import Link from "next/link";

const contactMethods = [
  {
    icon: <FaEnvelope className="h-6 w-6" />,
    title: "Contact Email",
    desc: "For any inquiries, support, or customization of your Marathi festival or invitation cards, reach us at: support@sanutsav.com",
    link: {
      name: "Send an Email",
      href: "mailto:support@sanutsav.com",
    },
  },
  {
    icon: <FaPhone className="h-6 w-6" />,
    title: "Connect via Phone",
    desc: "For quick assistance or inquiries regarding our services, feel free to call us during office hours: +91-XXXXXXXXXX",
    link: {
      name: "Call us",
      href: "tel:+91XXXXXXXXXX",
    },
  },
];

const ContactUs = () => {
  return (
    <PolicyLayout title="Contact Us">
      <section className="container px-8 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 uppercase">
            Let&rsquo;s connect
          </h1>
          <p className="mx-auto leading-relaxed text-base">
            Feel free to reach out for academic guidance, collaboration
            opportunities, or general inquiries. Looking forward to connecting
            with you.
          </p>
        </div>
        <ul className="mt-12 flex flex-col items-center gap-y-6 gap-x-0 md:flex-row md:gap-x-12 md:gap-y-0 lg:mt-0 lg:gap-x-0">
          {contactMethods.map((item, idx) => (
            <li
              key={idx}
              className="space-y-3 border-t py-6 w-full max-w-sm md:max-w-sm md:border-t-0 md:py-0 lg:max-w-none lg:border-l lg:px-12"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border text-primary border-primary mx-auto md:mx-0">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-center md:text-left xl:text-xl">
                {item.title}
              </h4>
              <p className="text-body-color text-center md:text-left">
                {item.desc}
              </p>
              <Link
                href={item.link.href}
                className="flex items-center justify-center gap-1 text-sm font-medium text-primary duration-150 hover:text-primary-400 md:justify-start"
              >
                {item.link.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PolicyLayout>
  );
};

export default ContactUs;
