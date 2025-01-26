import React, { useEffect, useState } from "react";

type ProgressBarProps = {
  initialProgress?: number;
  speed?: number;
  setFinish: (value: boolean) => void;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  initialProgress = 0,
  speed = 50,
  setFinish,
}) => {
  const [progress, setProgress] = useState<number>(initialProgress);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFinish(false);
          return 100;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/100 backdrop-blur-sm">
      <div className="container text-center">
        <div className="w-full h-6 bg-gray-200 rounded-lg overflow-hidden mb-2">
          <div
            className="h-full bg-green-500 transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="font-bold text-white">{progress}%</p>
      </div>
    </section>
  );
};

export default ProgressBar;
