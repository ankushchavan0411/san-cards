/** @format */

import PolicyLayout from "@/app/components/Policies/PolicyLayout";

export const metadata = {
  title: "San Utsav - Terms of Use",
  description:
    "Review the terms and conditions for using San Utsav. Learn about user responsibilities, acceptable usage, and our policies to ensure a secure and fair experience.",
};

export default function TermsOfUse() {
  return (
    <PolicyLayout title="Terms of Use">
      <p className="mb-4">
        Welcome to San Utsav! By accessing and using our services, you agree to
        comply with the terms and conditions outlined in this document. Please
        read these terms carefully.
      </p>

      <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
      <p className="mb-4">
        By using San Utsav, you acknowledge that you have read, understood, and
        agree to be bound by these Terms of Use. If you do not agree, please
        discontinue use of our services.
      </p>

      <h2 className="text-xl font-semibold mb-4">Usage Guidelines</h2>
      <p className="mb-4">
        Users must adhere to the following guidelines to ensure a secure and
        respectful environment:
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>
          Do not share, upload, or distribute content that infringes on the
          intellectual property rights of others.
        </li>
        <li>
          Avoid any form of abusive, fraudulent, or illegal activity while using
          our platform.
        </li>
        <li>
          Respect the privacy of other users and refrain from unauthorized data
          collection or sharing.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">Account Responsibility</h2>
      <p className="mb-4">
        Users are responsible for maintaining the confidentiality of their
        account credentials and ensuring that their account is used responsibly.
        You agree to:
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>
          Notify us immediately of any unauthorized use of your account or
          security breach.
        </li>
        <li>
          Ensure the information provided during registration is accurate and
          up-to-date.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
      <p className="mb-4">
        All content available on the San Utsav platform, including designs,
        text, graphics, and images, is the property of San Utsav or its
        licensors and is protected by copyright laws. Unauthorized use,
        reproduction, or distribution is strictly prohibited.
      </p>

      <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
      <p className="mb-4">
        San Utsav is not liable for any damages or losses resulting from the use
        or inability to use our services. This includes, but is not limited to,
        direct, indirect, incidental, or consequential damages.
      </p>

      <h2 className="text-xl font-semibold mb-4">Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to update or modify these Terms of Use at any time.
        Any changes will be communicated via our website, and continued use of
        our services indicates your acceptance of the updated terms.
      </p>

      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <p>
        If you have questions or concerns about these Terms of Use, please
        contact us at{" "}
        <a
          href="mailto:support@sancards.com"
          className="text-blue-600 hover:underline"
        >
          support@sancards.com
        </a>
        .
      </p>
    </PolicyLayout>
  );
}
