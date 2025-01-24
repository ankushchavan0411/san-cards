/** @format */

import { Canvas, Text } from "fabric";
import { useEffect, useRef, useState } from "react";

// Define the shape of the card data
interface CardData {
  title: string;
  subtitle: string;
  names: string;
  date: string;
}

const WeddingCardWithFabric: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<Canvas | null>(null);

  // State for user input
  const [cardData, setCardData] = useState<CardData>({
    title: "Wedding Invitation",
    subtitle: "You're invited to celebrate the union of",
    names: "John & Jane",
    date: "Saturday, 24th February 2025",
  });

  useEffect(() => {
    // Initialize Fabric.js canvas
    if (canvasRef.current) {
      const canvas = new Canvas(canvasRef.current, {
        width: 600,
        height: 400,
        backgroundColor: "#f8f0e3",
      });

      fabricCanvasRef.current = canvas;

      // Add initial elements
      const addInitialElements = () => {
        const title = new Text(cardData.title, {
          top: 50,
          left: 150,
          fontSize: 30,
          fontFamily: "Cursive",
          fill: "#8b0000",
          selectable: false,
        });

        const subtitle = new Text(cardData.subtitle, {
          top: 100,
          left: 80,
          fontSize: 20,
          fontFamily: "Arial",
          fill: "#333",
          selectable: false,
        });

        const names = new Text(cardData.names, {
          top: 150,
          left: 200,
          fontSize: 40,
          fontFamily: "Cursive",
          fill: "#8b0000",
          selectable: false,
        });

        const date = new Text(cardData.date, {
          top: 220,
          left: 120,
          fontSize: 20,
          fontFamily: "Arial",
          fill: "#333",
          selectable: false,
        });

        canvas.add(title, subtitle, names, date);

        // Attach elements to canvas for dynamic updates
        (fabricCanvasRef.current as any).title = title;
        (fabricCanvasRef.current as any).subtitle = subtitle;
        (fabricCanvasRef.current as any).names = names;
        (fabricCanvasRef.current as any).date = date;
      };

      addInitialElements();

      // Cleanup on component unmount
      return () => {
        canvas.dispose();
      };
    }
  }, []);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));

    // Update canvas text dynamically
    if (fabricCanvasRef.current) {
      const element = (fabricCanvasRef.current as any)[name];
      if (element) {
        element.text = value;
        fabricCanvasRef.current.renderAll();
      }
    }
  };

  const exportCard = (): void => {
    if (fabricCanvasRef.current) {
      const dataURL = fabricCanvasRef.current.toDataURL({
        format: "png",
        quality: 1,
        multiplier: 1, // need to remove fix downloaded image corrupet
      });

      // Trigger download
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "wedding_card.png";
      link.click();
    }
  };

  return (
    <div className="editor">
      <div className="form">
        <h2 className="mb-4 font-bold text-lg">Customize Your Wedding Card</h2>
        <div className="mb-4">
          <label className="block font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={cardData.title}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Subtitle</label>
          <input
            type="text"
            name="subtitle"
            value={cardData.subtitle}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Names</label>
          <input
            type="text"
            name="names"
            value={cardData.names}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Date</label>
          <input
            type="text"
            name="date"
            value={cardData.date}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          onClick={exportCard}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Export Card
        </button>
      </div>
      <canvas ref={canvasRef} className="border mt-4" />
    </div>
  );
};

export default WeddingCardWithFabric;
