/** @format */

import PolicyLayout from "@/app/components/Policies/PolicyLayout";

export const metadata = {
  title: "San Utsav - Copyright Policy",
  description:
    "Understand the copyright policy of San Utsav. Learn about intellectual property rights, user responsibilities, and how to report copyright infringements.",
};

export default function CopyrightPolicy() {
  return (
    <PolicyLayout title="Copyright Policy">
      <h2 className="text-xl font-semibold mb-4">Introduction</h2>
      <p className="mb-4">
        At San Utsav, we are committed to respecting the intellectual property
        rights of others and complying with all applicable copyright laws. This
        policy outlines our approach to copyright, content ownership, and the
        procedures for reporting copyright violations.
      </p>

      <h2 className="text-xl font-semibold mb-4">Content Ownership</h2>
      <p className="mb-4">
        All content available on the San Utsav platform, including but not
        limited to designs, templates, text, images, graphics, and software, is
        the exclusive property of San Utsav or its licensors. This content is
        protected under applicable copyright laws and treaties.
      </p>
      <p className="mb-4">
        Users are prohibited from copying, reproducing, distributing, or
        modifying any content from the platform without prior written permission
        from San Utsav or the respective copyright owner.
      </p>

      <h2 className="text-xl font-semibold mb-4">User-Generated Content</h2>
      <p className="mb-4">
        Users may upload or create content using our platform. By submitting
        content, users affirm that they own the rights to the material or have
        obtained the necessary permissions to use it. San Utsav is not liable
        for any user-generated content that infringes on the rights of others.
      </p>

      <h2 className="text-xl font-semibold mb-4">Permitted Uses</h2>
      <p className="mb-4">
        Users are granted a limited, non-exclusive, and non-transferable license
        to use our platform for personal and non-commercial purposes. Any
        unauthorized use of our content is strictly prohibited and may result in
        legal action.
      </p>

      <h2 className="text-xl font-semibold mb-4">
        Reporting Copyright Infringements
      </h2>
      <p className="mb-4">
        If you believe that your copyrighted work has been used on our platform
        without authorization, please notify us by providing the following
        information:
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>Your name, address, and contact information.</li>
        <li>
          A description of the copyrighted work that you believe has been
          infringed.
        </li>
        <li>
          A URL or other specific location on our platform where the infringing
          content is located.
        </li>
        <li>
          A statement affirming that you believe in good faith that the use of
          the content is unauthorized.
        </li>
        <li>
          An electronic or physical signature of the person authorized to act on
          behalf of the copyright owner.
        </li>
      </ul>
      <p className="mb-4">
        You can send the above information to us at{" "}
        <a
          href="mailto:support@sancards.com"
          className="text-blue-600 hover:underline"
        >
          support@sancards.com
        </a>
        . We will promptly investigate and take appropriate action.
      </p>

      <h2 className="text-xl font-semibold mb-4">Termination of Accounts</h2>
      <p className="mb-4">
        San Utsav reserves the right to terminate user accounts that are found
        to be repeatedly infringing on the copyrights of others.
      </p>

      <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
      <p className="mb-4">
        We reserve the right to update or modify this Copyright Policy at any
        time. Any changes will be effective immediately upon posting. Users are
        encouraged to review this policy periodically to stay informed.
      </p>

      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <p>
        For any questions or concerns regarding this policy, please contact us
        at{" "}
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
