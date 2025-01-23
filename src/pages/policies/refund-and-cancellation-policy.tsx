/** @format */

import PolicyLayout from "@/app/components/Policies/PolicyLayout";

export const metadata = {
  title: "San Cards - Refund and Cancellation Policy",
  description:
    "Learn about our refund and cancellation policy at San Cards. Understand the eligibility criteria, refund process, and how to cancel your services easily.",
};

export default function RefundPolicy() {
  return (
    <PolicyLayout title="Refund and Cancellation Policy">
      <p className="mb-4">
        At San Cards, we aim to provide excellent service and ensure customer
        satisfaction. This policy outlines the conditions under which refunds
        and cancellations are processed.
      </p>

      <h2 className="text-xl font-semibold mb-4">Refund Eligibility</h2>
      <p className="mb-4">
        Refunds are applicable under the following conditions:
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>Refund requests are made within 14 days of purchase.</li>
        <li>The service or product was not used or downloaded.</li>
        <li>
          Refunds are not applicable for personalized or customized cards that
          have been downloaded.
        </li>
      </ul>
      <p className="mb-4">
        If your refund request meets the above criteria, we will process it
        promptly. Please note that the refund amount may exclude transaction
        fees, if any.
      </p>

      <h2 className="text-xl font-semibold mb-4">Cancellation Policy</h2>
      <p className="mb-4">
        You can cancel your subscription or order at any time. Here’s how
        cancellations work:
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>
          Cancellations can be initiated through your account settings or by
          contacting our support team.
        </li>
        <li>
          For subscription-based services, cancellations take effect at the end
          of the current billing cycle.
        </li>
        <li>
          No refunds will be provided for partially used subscription periods.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">How to Request a Refund</h2>
      <p className="mb-4">
        To request a refund, please contact our support team at{" "}
        <a
          href="mailto:support@sancards.com"
          className="text-blue-600 hover:underline"
        >
          support@sancards.com
        </a>{" "}
        with the following details:
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>Your name and contact information.</li>
        <li>Order ID or transaction details.</li>
        <li>A brief explanation of the issue.</li>
      </ul>
      <p className="mb-4">
        Once your request is reviewed, we will notify you of the approval or
        rejection of your refund. Approved refunds will be processed within 7–10
        business days.
      </p>

      <h2 className="text-xl font-semibold mb-4">Exclusions</h2>
      <p className="mb-4">The following are excluded from refunds:</p>
      <ul className="list-disc ml-8 mb-4">
        <li>
          Customized or personalized cards that have already been downloaded.
        </li>
        <li>
          Services purchased as part of a promotional or discounted offer.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
      <p className="mb-4">
        We reserve the right to update this policy as necessary. Any changes
        will be posted on this page and will take effect immediately.
      </p>

      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <p>
        If you have any questions about this policy, please contact us at{" "}
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
