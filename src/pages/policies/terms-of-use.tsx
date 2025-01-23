/** @format */

import PolicyLayout from "@/app/components/Policies/PolicyLayout";

export default function TermsOfUse() {
  return (
    <PolicyLayout title="Terms of Use">
      <p className="mb-4">
        By using our services, you agree to comply with the terms and conditions
        outlined below.
      </p>
      <h2 className="text-xl font-semibold mb-2">Usage Guidelines</h2>
      <p className="mb-4">
        Users must not engage in prohibited activities such as sharing
        copyrighted material without permission.
      </p>
      <h2 className="text-xl font-semibold mb-2">Account Responsibility</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account
        and for all activities under your account.
      </p>
    </PolicyLayout>
  );
}
