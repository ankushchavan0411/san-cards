/** @format */

import PolicyLayout from "@/app/components/Policies/PolicyLayout";

export default function CopyrightPolicy() {
  return (
    <PolicyLayout title="Copyright Policy">
      <p className="mb-4">
        We respect intellectual property rights and expect our users to do the
        same.
      </p>
      <h2 className="text-xl font-semibold mb-2">Content Ownership</h2>
      <p className="mb-4">
        All content on our platform is protected by copyright laws. Unauthorized
        use is prohibited.
      </p>
      <h2 className="text-xl font-semibold mb-2">Reporting Violations</h2>
      <p>
        If you believe your copyrighted work has been infringed, contact us with
        evidence, and we will take prompt action.
      </p>
    </PolicyLayout>
  );
}
