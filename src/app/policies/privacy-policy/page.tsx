/** @format */

import PolicyLayout from "@/components/Policies/PolicyLayout";

export const metadata = {
  title: "San Utsav - Privacy Policy",
  description:
    "Learn how San Utsav collects, uses, and protects your personal information. Your privacy is our priority.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy">
      <p className="mb-4">
        At San Utsav, your privacy is of utmost importance to us. This Privacy
        Policy explains how we collect, use, and safeguard your personal
        information when you interact with our platform.
      </p>

      <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
      <p className="mb-4">
        We collect information to provide you with a seamless experience. The
        types of data we may collect include:
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>
          Personal information such as your name, email address, and phone
          number.
        </li>
        <li>Payment details for transactions.</li>
        <li>
          Usage data, including your interactions with our platform, IP address,
          and browser information.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">
        How We Use Your Information
      </h2>
      <p className="mb-4">We use the collected data to:</p>
      <ul className="list-disc ml-8 mb-4">
        <li>Process your orders and provide the requested services.</li>
        <li>Enhance and personalize your experience on our platform.</li>
        <li>Communicate updates, promotions, or important information.</li>
        <li>Ensure platform security and prevent fraudulent activities.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">
        Data Sharing and Disclosure
      </h2>
      <p className="mb-4">
        We do not sell your personal information. However, we may share data
        with trusted third parties for the following purposes:
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>Payment processing and order fulfillment.</li>
        <li>Improving platform functionality through analytics services.</li>
        <li>
          Complying with legal obligations, such as responding to lawful
          requests by public authorities.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">Data Security</h2>
      <p className="mb-4">
        We take data security seriously and implement appropriate measures to
        protect your information. However, no method of transmission over the
        Internet is entirely secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
      <p className="mb-4">
        Depending on your location, you may have the following rights regarding
        your personal data:
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>Access your data and request a copy.</li>
        <li>Request corrections to inaccurate or incomplete information.</li>
        <li>Request deletion of your data, subject to certain limitations.</li>
        <li>Opt-out of marketing communications.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">Cookies and Tracking</h2>
      <p className="mb-4">
        Our platform uses cookies and similar technologies to enhance your
        experience. You can manage your cookie preferences through your browser
        settings.
      </p>

      <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
      <p className="mb-4">
        We reserve the right to update this Privacy Policy as needed. Any
        changes will be posted on this page, and the updated policy will take
        effect immediately upon posting.
      </p>

      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <p>
        If you have questions or concerns about this Privacy Policy or your
        data, please contact us at{" "}
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
