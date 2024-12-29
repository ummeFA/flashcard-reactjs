import React, { useState } from "react";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="space-y-4 ">
        <div
          className={`relative w-96 h-64 cursor-pointer transform transition-transform duration-500`}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
          onClick={handleFlip}
        >
          {/* Front */}
          <div
            className={`absolute w-full h-full bg-red-300 border rounded-lg flex items-center justify-center`}
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <h5 className="text-2xl font-semibold text-red">Front </h5>
          </div>
          {/* Back */}
          <div
            className={`absolute w-full h-full bg-green-800 border rounded-lg flex items-center justify-center`}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <h5 className="text-2xl font-semibold text-white">Back </h5>
          </div>
        </div>
      </div>
      {/* <div className="bg-red-200">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Back{" "}
          </h5>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
