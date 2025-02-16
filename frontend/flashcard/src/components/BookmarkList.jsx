import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faArrowLeft,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const BookmarkList = () => {
  const navigate = useNavigate();
  const previousPage = () => {
    navigate("/card");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold mb-4">Bookmarked List</h1>
        <div className="relative">
          <input
            value=""
            placeholder="Search by Kanji or Hiragana"
            className="p-2 pl-10 border border-b-slate-800 h-12 w-72 rounded-md"
          ></input>

          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-4 text-gray-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            className="bg-purple-600 text-white font-bold p-3 border-2 rounded-lg border-black"
            onClick={previousPage}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back
          </button>
          {/* <button
            className="bg-green-900 text-white font-bold p-3 border-2 rounded-lg border-black"
            // onClick={addVocabulary}
          >
            <FontAwesomeIcon icon={faAdd} className="mr-2" /> Add
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default BookmarkList;
