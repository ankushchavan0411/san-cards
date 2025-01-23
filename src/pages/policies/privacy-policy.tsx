/** @format */

import PolicyLayout from "@/app/components/Policies/PolicyLayout";

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy">
      <p className="mb-4">
        Your privacy is important to us. This policy outlines how we collect,
        use, and protect your information.
      </p>
      <h2 className="text-xl font-semibold mb-2">Information Collection</h2>
      <p className="mb-4">
        We collect personal data when you use our services. This includes data
        provided during registration, payment, and communication.
      </p>
      <h2 className="text-xl font-semibold mb-2">How We Use Your Data</h2>
      <p>
        Your data is used to improve our services, process transactions, and
        provide support. We do not sell your information.
      </p>
    </PolicyLayout>
  );
}
