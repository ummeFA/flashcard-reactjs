import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDatabaseStore } from "../../stores/databaseStore";
import { useBookmarkStore } from "../../stores/bookmarkStore"; // ✅ Import Bookmark Store

const Card = () => {
  const { data, fetchData, isLoading } = useDatabaseStore();
  const { bookmarkedItems, toggleBookmark } = useBookmarkStore(); // ✅ Zustand store

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
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

  const handleBookmark = (e) => {
    e.stopPropagation(); // Prevents card flip on click
    toggleBookmark(data[currentIndex]); // ✅ Toggle bookmark
  };

  if (isLoading) return <div>Loading...</div>;
  if (data.length === 0) return <div>No data available</div>;

  const currentCard = data[currentIndex];
  const isBookmarked = bookmarkedItems.some(
    (item) => item.id === currentCard.id
  );

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="space-y-4">
        <div
          className="relative w-96 h-64 cursor-pointer transform transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
          onClick={handleFlip}
        >
          {/* ⭐ Bookmark Button */}
          <button
            onClick={handleBookmark}
            className="absolute top-3 right-3 z-10 p-2 rounded-full"
          >
            <FontAwesomeIcon
              icon={faStar}
              className={`text-3xl ${
                isBookmarked ? "text-yellow-400" : "text-gray-100"
              }`}
            />
          </button>

          {/* Front */}
          <div
            className="absolute w-full h-full bg-emerald-600 border rounded-lg flex items-center justify-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <h5 className="text-2xl font-semibold text-white">
              {currentCard.kanji}
            </h5>
          </div>

          {/* Back */}
          <div
            className="absolute w-full h-full bg-emerald-600 border rounded-lg flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="flex flex-col justify-center">
              <h5 className="text-3xl font-bold text-white">
                {currentCard.hiragana}
              </h5>
              <p className="text-white pt-5">{currentCard.english}</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between space-x-4">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-800 shadow-lg transition"
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-white text-lg"
            />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-600 hover:bg-gray-800 shadow-lg transition"
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-white text-lg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
