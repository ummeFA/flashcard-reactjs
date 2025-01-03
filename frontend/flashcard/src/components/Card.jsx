import {
  faAdd,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDatabaseStore } from "../../../../backend/databaseStore";

const Card = () => {
  const navigate = useNavigate();
  const { data, fetchData, isLoading } = useDatabaseStore();

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Navigate to new add-vocabulary component
  const addVocabulary = () => {
    navigate("add-vocabulary");
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < data.length - 1 ? prevIndex + 1 : 0
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data.length - 1
    );
  };

  if (isLoading) {
    return <div className="">Loading...</div>;
  }

  if (data.length === 0) {
    return <div className="">No data available</div>;
  }

  const currentCard = data[currentIndex];

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
            <h5 className="text-2xl font-semibold text-red">
              {currentCard.kanji}{" "}
            </h5>
          </div>
          {/* Back */}
          <div
            className={`absolute w-full h-full bg-green-800 border rounded-lg flex items-center justify-center`}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="flex flex-col justify-center">
              <h5 className="text-3xl font-bold text-white">
                {currentCard.hiragana}{" "}
              </h5>
              <p className=" text-white pt-5">{currentCard.english}</p>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-between">
          <button
            className="bg-blue-700 p-5 border rounded-l-2xl"
            onClick={handlePrevious}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-white" />{" "}
          </button>
          <button
            className="bg-blue-700 p-5 border rounded-r-2xl"
            onClick={handleNext}
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
