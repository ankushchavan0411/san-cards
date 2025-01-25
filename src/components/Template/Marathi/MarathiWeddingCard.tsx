import React, { useState } from "react";
import html2canvas from "html2canvas";

const MarathiWeddingCard: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    groomName: "राजवर्धन",
    groomDetails:
      "श्री रामचंद्र शंकरराव निकम यांचे नातू व श्री आनंदराव रामचंद्र निकम रा. सांगली, ता. मिरज, जि. सांगली यांचे ज्येष्ठ चिरंजीव",
    brideName: "राजनंदिनी",
    brideDetails:
      "श्री. आनंदराव तुकाराम पाटील यांचे नात व श्री सदाशिव आनंदराव निकम रा. सांगली, ता. मिरज, जि. सांगली यांची कन्या",
    weddingDate: "रविवार, दिनांक २१ नोव्हेंबर २०२१",
    weddingTime: "दु. ३ वा. २१ मि.",
    venue: "श्री गणेश मल्टिपर्पज हॉल, मलकापूर सातारा रोड, कराड",
    inviter: "समस्त निकम परिवार",
    contact: "9876543210",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
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

  return (
    <div className="bg-gray-100 min-h-screen p-6 font-[Noto+Sans+Devanagari]">
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&family=Laila:wght@400;700&family=Tiro+Devanagari+Marathi:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Enter Invitation Details</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="groomName"
              value={userInfo.groomName}
              onChange={handleInputChange}
              placeholder="Groom's Name"
              className="w-full border rounded-lg p-2"
            />
            <textarea
              name="groomDetails"
              value={userInfo.groomDetails}
              onChange={handleInputChange}
              placeholder="Groom's Details"
              className="w-full border rounded-lg p-2"
            ></textarea>
            <input
              type="text"
              name="brideName"
              value={userInfo.brideName}
              onChange={handleInputChange}
              placeholder="Bride's Name"
              className="w-full border rounded-lg p-2"
            />
            <textarea
              name="brideDetails"
              value={userInfo.brideDetails}
              onChange={handleInputChange}
              placeholder="Bride's Details"
              className="w-full border rounded-lg p-2"
            ></textarea>
            <input
              type="text"
              name="weddingDate"
              value={userInfo.weddingDate}
              onChange={handleInputChange}
              placeholder="Wedding Date"
              className="w-full border rounded-lg p-2"
            />
            <input
              type="text"
              name="weddingTime"
              value={userInfo.weddingTime}
              onChange={handleInputChange}
              placeholder="Wedding Time"
              className="w-full border rounded-lg p-2"
            />
            <textarea
              name="venue"
              value={userInfo.venue}
              onChange={handleInputChange}
              placeholder="Venue"
              className="w-full border rounded-lg p-2"
            ></textarea>
            <input
              type="text"
              name="inviter"
              value={userInfo.inviter}
              onChange={handleInputChange}
              placeholder="Inviter"
              className="w-full border rounded-lg p-2"
            />
            <input
              type="text"
              name="contact"
              value={userInfo.contact}
              onChange={handleInputChange}
              placeholder="Contact"
              className="w-full border rounded-lg p-2"
            />
          </div>
        </div>

        <div>
          <div
            id="wedding-card"
            className="bg-gradient-to-r from-pink-100 to-purple-200 border border-gray-300 rounded-2xl shadow-lg max-w-3xl mx-auto p-6"
          >
            <div className="text-center">
              <h1 className="text-xl font-bold text-red-700 font-[Tiro+Devanagari+Marathi]">
                || श्री गणेशाय नमः ||
              </h1>
              <img
                src="/ganesh.png"
                alt="Ganesh"
                className="w-16 h-16 mx-auto my-4"
              />
            </div>

            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-purple-800 font-[Laila]">
                {userInfo.groomName}
              </h2>
              <p className="text-gray-700 font-[Noto+Sans+Devanagari]">
                {userInfo.groomDetails}
              </p>

              <h2 className="text-3xl font-bold text-purple-800 font-[Laila]">
                {userInfo.brideName}
              </h2>
              <p className="text-gray-700 font-[Noto+Sans+Devanagari]">
                {userInfo.brideDetails}
              </p>
            </div>

            <div className="text-center mt-8">
              <h2 className="text-4xl font-extrabold text-pink-600 font-[Tiro+Devanagari+Marathi]">
                शुभविवाह
              </h2>
            </div>

            <div className="text-center mt-6 space-y-4">
              <p className="text-gray-600 font-[Noto+Sans+Devanagari]">
                {userInfo.weddingDate}
              </p>
              <p className="text-gray-600 font-[Noto+Sans+Devanagari]">
                {userInfo.weddingTime}
              </p>
              <p className="text-gray-600 font-[Noto+Sans+Devanagari]">
                तरी आपण सर्वांनी सहकुटुंब सहपरिवार उपस्थित राहावे ही विनंती.
              </p>
            </div>

            <div className="mt-10">
              <div className="text-center border-t border-gray-300 pt-4 space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 font-[Tiro+Devanagari+Marathi]">
                  विवाहस्थळ
                </h3>
                <p className="text-gray-600 font-[Noto+Sans+Devanagari]">
                  {userInfo.venue}
                </p>
              </div>
              <div className="text-center border-t border-gray-300 pt-4 space-y-4 mt-4">
                <h3 className="text-lg font-semibold text-gray-700 font-[Tiro+Devanagari+Marathi]">
                  निमंत्रक
                </h3>
                <p className="text-gray-600 font-[Noto+Sans+Devanagari]">
                  {userInfo.inviter}
                </p>
                <p className="text-gray-600 font-[Noto+Sans+Devanagari]">
                  संपर्क: {userInfo.contact}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 space-x-4">
            <button
              onClick={downloadCard}
              className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600"
            >
              Download Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarathiWeddingCard;
