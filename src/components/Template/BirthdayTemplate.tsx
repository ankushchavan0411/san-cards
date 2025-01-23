/** @format */
import Image from "next/image";

// components/BirthdayTemplate.tsx
import React, { useEffect, useRef, useState } from "react";

const BirthdayTemplate: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("Happy Birthday!");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageUrl, setImageUrl] = useState<string>(""); // To store the generated image URL for preview

  // Function to draw birthday card with dynamic user input
  const drawBirthdayCard = (ctx: CanvasRenderingContext2D) => {
    // Clear the canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Set background color
    ctx.fillStyle = "#f7c8e0"; // Light pink background
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw the greeting text with dynamic name and message
    ctx.font = "40px Arial";
    ctx.fillStyle = "#ff6347"; // Tomato color for text
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(message, ctx.canvas.width / 2, ctx.canvas.height / 3);
    ctx.font = "30px Arial";
    ctx.fillText(`To: ${name}`, ctx.canvas.width / 2, ctx.canvas.height / 2);

    // Draw a birthday cake illustration
    ctx.beginPath();
    ctx.arc(
      ctx.canvas.width / 2,
      ctx.canvas.height / 2 + 50,
      40,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#ff6347";
    ctx.stroke();

    ctx.fillStyle = "#f5b342"; // Candle
    ctx.fillRect(ctx.canvas.width / 2 - 5, ctx.canvas.height / 2 - 50, 10, 40);

    // Update the image preview URL
    const image = canvasRef.current?.toDataURL("image/png");
    if (image) {
      setImageUrl(image); // Set image URL for preview
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = 500;
        canvas.height = 400;
        drawBirthdayCard(ctx);
      }
    }
  }, [name, message]);

  // Handle user input changes
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value);

  // Handle download
  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "birthday_card.png";
      link.click();
    }
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-between space-x-4 space-y-4 lg:space-y-0">
      {/* Input Section */}
      <div className="flex-1 p-4 space-y-4">
        <h1 className="text-2xl font-semibold">Birthday Greeting</h1>

        <div>
          <label className="block mb-2 text-lg">Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter the name"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2 text-lg">Message:</label>
          <input
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your message"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <button
          onClick={downloadImage}
          className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-600"
        >
          Download Image
        </button>
      </div>

      {/* Canvas and Preview Section */}
      <div className="flex-1 p-4 space-y-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <Image
          src={imageUrl}
          alt="Wedding Invite Preview"
          className="w-full rounded-lg"
          width={400}
          height={400}
        />
        {/* <canvas ref={canvasRef} className="w-full border rounded-lg" /> */}
      </div>
    </div>
  );
};

export default BirthdayTemplate;
