/** @format */

import SectionTitle from "@/components/Common/SectionTitle";
import { FaEnvelope, FaPhone } from "react-icons/fa";

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
    <section className="lg:py-28 md:py-14 sm:py-8">
      <div className="gap-8 lg:flex">
        <SectionTitle
          title="Let’s connect"
          paragraph="Feel free to reach out for academic guidance, collaboration
            opportunities, or general inquiries. Looking forward to connecting
            with you."
        />
        <div>
          <ul className="mt-12 items-center gap-x-12 gap-y-6 md:flex lg:mt-0 lg:gap-x-0">
            {contactMethods.map((item, idx) => (
              <li
                key={idx}
                className="space-y-3 border-t py-6 md:max-w-sm md:border-t-0 md:py-0 lg:max-w-none lg:border-l lg:px-12"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border text-body-color">
                  {item.icon}
                </div>
                <h4 className="text-lg font-medium text-body-color xl:text-xl">
                  {item.title}
                </h4>
                <p className="text-body-color">{item.desc}</p>
                <a
                  href={item.link.href}
                  className="flex items-center gap-1 text-sm font-medium text-indigo-600 duration-150 hover:text-indigo-400"
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
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
