import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
import { useDatabaseStore } from "../../stores/databaseStore";

const EditVocabulary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const vocabulary = location.state?.vocabulary;
  const { updateVocabulary } = useDatabaseStore();

  if (!vocabulary) {
    return <p className="text-red-600"> No vocabulary found.</p>;
  }

  // state for form inputs
  const [formData, setFormData] = useState({
    kanji: vocabulary.kanji,
    hiragana: vocabulary.hiragana,
    english: vocabulary.english,
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle save
  const handleSave = () => {
    updateVocabulary(vocabulary.id, formData);
    navigate("/show-list");
  };

  // Go to previous page
  const previousPage = () => {
    navigate("/show-list");
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gray-100 bg-cover h-screen">
        <p className="font-bold text-3xl mb-5">Edit Vocab</p>
        {/* flex flex-col text-xl w-2/3 */}
        <div className="flex flex-col text-xl w-2/3">
          <input
            type="text"
            name="kanji"
            onChange={handleChange}
            value={formData.kanji}
            className="border border-black rounded p-3 mb-3"
          />
          <input
            type="text"
            name="hiragana"
            onChange={handleChange}
            value={formData.hiragana}
            className="border border-black rounded p-3 mb-3"
          />
          <input
            type="text"
            name="english"
            onChange={handleChange}
            value={formData.english}
            className="border border-black rounded p-3 mb-3"
          />
        </div>
        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-5 w-2/3">
          <button
            className="bg-green-600 text-white flex items-center justify-center p-3 border rounded-lg w-full md:w-1/2 hover:bg-green-800"
            onClick={handleSave}
          >
            <FontAwesomeIcon
              icon={faFloppyDisk}
              className="text-xl md:text-2xl"
            />
            <span className="hidden md:block ml-2 text-xl"> Save</span>
          </button>
          <button
            onClick={previousPage}
            className="bg-blue-600 text-white flex items-center justify-center p-3 border rounded-lg w-full md:w-1/2 hover:bg-blue-800"
          >
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              className="text-xl md:text-2xl"
            />
            <span className="hidden md:block ml-2 text-xl">Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditVocabulary;
