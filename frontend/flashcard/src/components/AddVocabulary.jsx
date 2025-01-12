import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddVocabulary = () => {
  const navigate = useNavigate();

  const previousPage = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 bg-cover h-screen">
      <p className="font-bold text-3xl mb-5">Add new Vocab</p>
      <div className="flex flex-col text-xl w-2/3">
        <input
          type="text"
          placeholder="enter Kanji..."
          className="border border-black rounded p-3 mb-3"
        />
        <input
          type="text"
          placeholder="enter Hiragana..."
          className="border border-black rounded p-3 mb-3"
        />
        <input
          type="text"
          placeholder="enter English..."
          className="border border-black rounded p-3 mb-3"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-5 w-2/3">
        <button
          className="bg-green-600 text-white flex items-center justify-center p-3 border rounded-lg w-full md:w-1/2"
          onClick={previousPage}
        >
          <FontAwesomeIcon
            icon={faFloppyDisk}
            className="text-xl md:text-2xl"
          />
          <span className="hidden md:block ml-2 text-xl"> Save</span>
        </button>
        <button className="bg-blue-600 text-white flex items-center justify-center p-3 border rounded-lg w-full md:w-1/2">
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            className="text-xl md:text-2xl"
          />
          <span className="hidden md:block ml-2 text-xl">Back</span>
        </button>
      </div>
    </div>
  );
};

export default AddVocabulary;
