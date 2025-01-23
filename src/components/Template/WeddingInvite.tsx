/** @format */

// components/WeddingInvite.tsx
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Image from "next/image";

const WeddingInvite: React.FC = () => {
  const [brideName, setBrideName] = useState<string>("");
  const [groomName, setGroomName] = useState<string>("");
  const [weddingDate, setWeddingDate] = useState<string>("");
  const [venue, setVenue] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Handle input changes
  const handleBrideNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBrideName(e.target.value);
  const handleGroomNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setGroomName(e.target.value);
  const handleWeddingDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setWeddingDate(e.target.value);
  const handleVenueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setVenue(e.target.value);

  // Call Canva API to generate wedding invitation
  const generateWeddingInvite = async () => {
    setIsLoading(true);

    try {
      // Make an API call to Canva (use the appropriate endpoint for your template)
      // Replace with the actual Canva API endpoint
      const response = await axios.post("/api/canva", {
        brideName,
        groomName,
        weddingDate,
        venue,
      });

      // Assuming Canva API returns the image URL of the wedding invite
      const inviteImageUrl = response.data.imageUrl;
      setImageUrl(inviteImageUrl);
    } catch (error) {
      console.error("Error generating wedding invite:", error);
      setIsLoading(false);
    }
  };

  // Handle download
  const downloadImage = () => {
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "wedding_invite.png";
      link.click();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = 600;
        canvas.height = 400;
      }
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between p-4 space-y-4 lg:space-y-0">
      {/* Input Section */}
      <div className="flex-1 p-4 space-y-4">
        <h1 className="text-2xl font-semibold">Wedding Invitation</h1>

        <div>
          <label className="block mb-2 text-lg">Brides Name:</label>
          <input
            type="text"
            value={brideName}
            onChange={handleBrideNameChange}
            placeholder="Enter Bride's Name"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2 text-lg">Grooms Name:</label>
          <input
            type="text"
            value={groomName}
            onChange={handleGroomNameChange}
            placeholder="Enter Groom's Name"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2 text-lg">Wedding Date:</label>
          <input
            type="date"
            value={weddingDate}
            onChange={handleWeddingDateChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2 text-lg">Venue:</label>
          <input
            type="text"
            value={venue}
            onChange={handleVenueChange}
            placeholder="Enter Venue"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <button
          onClick={generateWeddingInvite}
          className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-600"
        >
          {isLoading ? "Generating Invite..." : "Generate Invitation"}
        </button>
      </div>

      {/* Preview and Download Section */}
      <div className="flex-1 p-4 space-y-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <div>
          {/* Display Canva Image or Canvas Preview */}
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="Wedding Invite Preview"
              className="w-full rounded-lg"
              width={400}
              height={400}
            />
          ) : (
            <canvas ref={canvasRef} className="w-full border rounded-lg" />
          )}
        </div>

        {imageUrl && (
          <button
            onClick={downloadImage}
            className="w-full bg-green-500 text-white p-2 rounded-lg mt-4 hover:bg-green-600"
          >
            Download Invitation
          </button>
        )}
      </div>
    </div>
  );
};

export default WeddingInvite;
