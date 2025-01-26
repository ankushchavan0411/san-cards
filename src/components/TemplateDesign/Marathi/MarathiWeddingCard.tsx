"use client";

import DynamicForm from "@/components/Common/DynamicForm";
import html2canvas from "html2canvas";
import React, { useState } from "react";
import * as Yup from "yup";

// Main Component
const MarathiWeddingCard: React.FC = () => {
  const [initialValues, setInitialValues] = useState({
    title: "|| श्री गणेशाय नमः ||",
    groomName: "विजय",
    brideDetails: "श्री. अरुण पवार यांची जेष्ठ सुकन्या रा.मुंबई.",
    brideName: "सुनिता",
    groomDetails: "श्री. गणेश सावंत यांचे जेष्ठ चिरंजीव रा.पुणे.",
    weddingDetails:
      "या शुभमुहूर्तावर करण्याचे योजिले आहे तरी या मंगल प्रसंगी आपण सहकुटुंब, सहपरिवार व मित्रमंडळी सह उपस्थित राहुन शुभाशिर्वाद ध्यावेत ही नम्र विनंती",
    weddingDate: "रविवार दि. २४/०८/२०२४ रोजी",
    weddingTime: "दु. १२ वा. ३० मि.",
    venue: "व्दारका लॉन्स, नगर -कल्याण रोड ,नेप्ती नाका, मुंबई.",
    inviter: "समस्त पवार परिवार",
    contact: "9988778999",
    image: {
      imageDataUrl: "",
    },
  });

  const validationSchema = Yup.object().shape({
    groomName: Yup.string().required("Groom's Name is required"),
    brideName: Yup.string().required("Bride's Name is required"),
    contact: Yup.string()
      .matches(/^\d{10}$/, "Invalid contact number")
      .required("Contact is required"),
    image: Yup.mixed()
      .nullable()
      .test(
        "fileSize",
        "File size should be less than 2MB",
        (value: any) => !value || (value && value.size <= 2 * 1024 * 1024),
      ),
  });

  const fields = [
    {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "Title's Name",
    },
    {
      name: "groomName",
      label: "Groom's Name",
      type: "text",
      placeholder: "Groom's Name",
      require: true,
    },
    {
      name: "groomDetails",
      label: "Groom's Details",
      type: "textarea",
      placeholder: "Groom's Details",
    },
    {
      name: "brideName",
      label: "Bride's Name",
      type: "text",
      placeholder: "Bride's Name",
      require: true,
    },
    {
      name: "brideDetails",
      label: "Bride's Details",
      type: "textarea",
      placeholder: "Bride's Details",
    },
    {
      name: "weddingDetails",
      label: "Wedding Details",
      type: "textarea",
      placeholder: "Wedding Details",
    },
    {
      name: "weddingDate",
      label: "Wedding Date",
      type: "text",
      placeholder: "Wedding Date",
    },
    {
      name: "weddingTime",
      label: "Wedding Time",
      type: "text",
      placeholder: "Wedding Time",
    },
    { name: "venue", label: "Venue", type: "textarea", placeholder: "Venue" },
    {
      name: "inviter",
      label: "Inviter",
      type: "text",
      placeholder: "Inviter",
    },
    {
      name: "contact",
      label: "Contact",
      type: "text",
      placeholder: "Contact",
      require: true,
    },
    {
      name: "image",
      label: "Upload Image",
      type: "file",
      require: true,
    },
  ];
  const handleSubmit = (values: any) => {
    console.log("Submitted Values:", values);

    // Update other fields
    setInitialValues((pre) => ({
      ...pre,
      ...values,
    }));

    // Check if the image field exists
    if (values.image) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageDataURL = e.target?.result;
        setInitialValues((pre) => ({
          ...pre,
          image: {
            ...values.image,
            imageDataUrl: imageDataURL,
          },
        }));
      };

      reader.readAsDataURL(values.image);
    }
  };

  const downloadCard = async () => {
    const cardElement = document.getElementById("wedding-card");
    if (cardElement) {
      const canvas = await html2canvas(cardElement);
      const link = document.createElement("a");
      link.download = "wedding-invitation.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  const userInfo = { ...initialValues };

  return (
    <section className="overflow-hidden">
      <div className="py-2 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Form Section */}
        <div className="border border-primary p-4">
          <h2 className="text-sm title-font text-gray-500 tracking-widest mb-4 uppercase">
            Enter Invitation Details
          </h2>
          <DynamicForm
            fields={fields}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          />
        </div>

        {/* Preview Section */}
        <div id="wedding-card" className="border border-primary p-4">
          <div className="text-center">
            <h1 className="text-sm font-semibold text-red-700 font-[Tiro+Devanagari+Marathi]">
              || श्री गणेशाय नमः ||
            </h1>
            <img
              src={userInfo?.image?.imageDataUrl}
              alt="Ganesh"
              className="w-16 h-16 mx-auto my-4"
            />
          </div>
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-purple-800 font-[Laila]">
              {userInfo.groomName}
            </h2>
            <p className="text-gray-700">{userInfo.groomDetails}</p>
            <h2 className="text-3xl font-bold text-purple-800 font-[Laila]">
              {userInfo.brideName}
            </h2>
            <p className="text-gray-700">{userInfo.brideDetails}</p>
          </div>
          <div className="text-center mt-8">
            <h2 className="text-4xl font-extrabold text-pink-600 font-[Tiro+Devanagari+Marathi]">
              शुभविवाह
            </h2>
          </div>
          <div className="text-center mt-6 space-y-4">
            <p className="text-gray-600">{userInfo.weddingDate}</p>
            <p className="text-gray-600">{userInfo.weddingTime}</p>
            <p className="text-gray-600">{userInfo.weddingDetails}</p>
          </div>
          <div className="mt-10">
            <div className="text-center border-t border-gray-300 pt-4 space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 font-[Tiro+Devanagari+Marathi]">
                विवाहस्थळ
              </h3>
              <p className="text-gray-600">{userInfo.venue}</p>
            </div>
            <div className="text-center border-t border-gray-300 pt-4 space-y-4 mt-4">
              <h3 className="text-lg font-semibold text-gray-700 font-[Tiro+Devanagari+Marathi]">
                निमंत्रक
              </h3>
              <p className="text-gray-600">{userInfo.inviter}</p>
              <p className="text-gray-600">संपर्क: {userInfo.contact}</p>
            </div>
          </div>
          <button
            onClick={downloadCard}
            className="w-full p-2 rounded-lg mt-4 text-white bg-primary hover:bg-primary-600"
          >
            Download Card
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarathiWeddingCard;
