import React from "react";

interface HowToCreateInvitationProps {
  title?: string;
}

const HowToCreateInvitation: React.FC<HowToCreateInvitationProps> = ({
  title = "How to Create Invitation",
}) => {
  const steps = [
    {
      step: 1,
      title: "Enter your information in respective fields",
      description:
        "You can enter text in any language. Fill in all the required details to get started with your invitation.",
    },
    {
      step: 2,
      title: "Click on Preview button",
      description:
        "Once you've filled out the details, click the preview button to see how your invitation looks.",
    },
    {
      step: 3,
      title: "Check the preview of your card",
      description:
        "Review your invitation card. If needed, make changes to the content or layout before finalizing.",
    },
    {
      step: 4,
      title: "Download your card",
      description:
        "Once you're happy with the preview, click on the download button to save your invitation card.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-4">
      <div className="mb-6">
        <h2 className="font-bold text-gray-900">{title}</h2>
      </div>
      <div className="space-y-4">
        {steps.map(({ step, title, description }) => (
          <div className="flex items-start space-x-4 text-sm" key={step}>
            <div className="flex-shrink-0">
              <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center">
                {step}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToCreateInvitation;
