/** @format */

// components/SakharpudaInvitation.tsx
import React, { useState, useRef, useEffect } from "react";
import Img from "next/image";

const SakharpudaInvitation: React.FC = () => {
  const [brideName, setBrideName] = useState<string>("");
  const [groomName, setGroomName] = useState<string>("");
  const [weddingDate, setWeddingDate] = useState<string>("");
  const [venue, setVenue] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isPreview, setIsPreview] = useState<boolean>(false);

  // Handle user input
  const handleBrideNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBrideName(e.target.value);
  const handleGroomNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setGroomName(e.target.value);
  const handleWeddingDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setWeddingDate(e.target.value);
  const handleVenueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setVenue(e.target.value);

  // Function to draw invitation on the canvas
  const drawInvitation = (ctx: CanvasRenderingContext2D) => {
    if (!canvasRef.current) return;

    // Clear previous canvas content
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Set background image
    const backgroundImage = new Image();
    backgroundImage.src = "/template/temp1.png";
    backgroundImage.onload = () => {
      // Draw the background image once it is loaded
      ctx.drawImage(backgroundImage, 0, 0, ctx.canvas.width, ctx.canvas.height);

      // Draw text over the background image
      ctx.font = "40px Arial";
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Bride and Groom Names
      ctx.font = "30px Arial";
      ctx.fillText(
        `Bride: ${brideName}`,
        ctx.canvas.width / 2,
        ctx.canvas.height / 2 - 40
      );
      ctx.fillText(
        `Groom: ${groomName}`,
        ctx.canvas.width / 2,
        ctx.canvas.height / 2 + 40
      );

      // Wedding Date and Venue
      ctx.font = "25px Arial";
      ctx.fillText(
        `Date: ${weddingDate}`,
        ctx.canvas.width / 2,
        ctx.canvas.height / 1.5
      );
      ctx.fillText(
        `Venue: ${venue}`,
        ctx.canvas.width / 2,
        ctx.canvas.height / 1.3
      );

      // Update the preview image URL
      const image = canvasRef.current?.toDataURL("image/png");
      if (image) {
        setImageUrl(image);
      }
    };
  };

  // Trigger canvas drawing whenever inputs change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = 800; // Adjust width and height for your design
        canvas.height = 600;
        drawInvitation(ctx);
      }
    }
  }, [brideName, groomName, weddingDate, venue]);

  // Handle download image
  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "sakharpuda_invitation.png";
      link.click();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between p-4 space-y-4 lg:space-y-0">
      {/* Input Section */}
      <div className="flex-1 p-4 space-y-4">
        <h1 className="text-2xl font-semibold">Sakharpuda Invitation</h1>

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
          onClick={() => {
            setIsPreview(true);
          }}
          className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-600"
        >
          Preview
        </button>
      </div>

      {/* Preview Section */}
      <div className="flex-1 p-4 space-y-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <canvas ref={canvasRef} className="w-full border rounded-lg" />
        {isPreview && (
          <div>
            {imageUrl && (
              <Img
                src={imageUrl}
                alt="Invitation Preview"
                className="w-auto h-auto mt-4 border rounded-lg"
                height={400}
                width={400}
              />
            )}
            <button
              onClick={downloadImage}
              className="w-full bg-orange-400 text-white p-2 rounded-lg mt-4 hover:bg-orange-500"
            >
              Download Invitation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SakharpudaInvitation;
