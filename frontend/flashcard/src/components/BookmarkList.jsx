import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPenToSquare,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useBookmarkStore } from "../../stores/bookmarkStore"; // ✅ Import store

const BookmarkList = () => {
  const navigate = useNavigate();
  const { bookmarkedItems, removeBookmark } = useBookmarkStore(); // ✅ Correctly extract removeBookmark

  const previousPage = () => {
    navigate("/card");
  };

  const handleEdit = (vocabulary) => {
    navigate("/edit-vocabulary", { state: { vocabulary } });
  };

  const handleDelete = (id) => {
    console.log("Removing bookmark with ID:", id); // ✅ Debugging log
    if (removeBookmark) {
      removeBookmark(id); // ✅ Ensure function exists before calling
    } else {
      console.error("removeBookmark is undefined"); // ✅ Debugging log
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          Bookmarked List{" "}
          <span className="text-gray-600 text-lg">
            ({bookmarkedItems.length} items)
          </span>
        </h1>
        <div className="relative">
          <input
            placeholder="Search by Kanji or Hiragana"
            className="p-2 pl-10 border border-b-slate-800 h-12 w-72 rounded-md"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-4 text-gray-500"
          />
        </div>
        <button
          className="bg-purple-600 text-white font-bold p-3 border-2 rounded-lg border-black"
          onClick={previousPage}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back
        </button>
      </div>

      {/* Show bookmarked items in a list */}
      {bookmarkedItems.length === 0 ? (
        <p className="text-gray-500 text-lg">No bookmarks yet.</p>
      ) : (
        <ul className="w-full border border-gray-300 rounded-md shadow-md hover:cursor-pointer">
          {bookmarkedItems.map((card) => (
            <li
              key={card.id}
              className="p-4 border-b border-gray-300 flex items-center justify-between bg-white hover:bg-gray-100 transition"
            >
              {/* Card Data */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.kanji}
                </h3>
                <p className="text-gray-700 pt-3">
                  {card.hiragana} - {card.english}
                </p>
              </div>

              {/* Buttons (aligned to right) */}
              <div className="flex gap-4 ml-auto">
                <button className="p-2" onClick={() => handleEdit(card)}>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-orange-600 text-lg"
                  />
                </button>
                <button className="p-2" onClick={() => handleDelete(card.id)}>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="text-red-500 text-lg"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookmarkList;
