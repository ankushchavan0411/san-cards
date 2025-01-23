/** @format */

import PolicyLayout from "@/app/components/Policies/PolicyLayout";

export default function RefundPolicy() {
  return (
    <PolicyLayout title="Refund and Cancellation Policy">
      <p className="mb-4">
        Our refund and cancellation policy ensures transparency and customer
        satisfaction.
      </p>
      <h2 className="text-xl font-semibold mb-2">Refund Eligibility</h2>
      <p className="mb-4">
        Refunds are processed for unused services within 14 days of purchase.
        Certain conditions apply.
      </p>
      <h2 className="text-xl font-semibold mb-2">Cancellation</h2>
      <p>
        You can cancel your subscription at any time through your account
        settings. Cancellations take effect at the end of the billing cycle.
      </p>
    </PolicyLayout>
  );
}
