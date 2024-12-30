import {
  faAdd,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Navigate to new add-vocabulary component
  const addVocabulary = () => {
    navigate("add-vocabulary");
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="space-y-4 ">
        {/* Add data button */}
        <div className="">
          <button onClick={addVocabulary}>
            <FontAwesomeIcon
              icon={faAdd}
              className="bg-orange-700 text-white p-3 border border-black rounded-xl"
            />
          </button>
        </div>
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
        {/* Buttons */}
        <div className="flex justify-between">
          <button className="bg-blue-700 p-5 border rounded-l-2xl">
            <FontAwesomeIcon icon={faChevronLeft} className="text-white" />{" "}
          </button>
          <button className="bg-blue-700 p-5 border rounded-r-2xl">
            <FontAwesomeIcon icon={faChevronRight} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
