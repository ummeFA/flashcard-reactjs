import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDatabaseStore } from "../../../../backend/databaseStore";

const AddVocabulary = () => {
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  // Accessing Zustand store's addVocabulary function
  const addVocabulary = useDatabaseStore((state) => state.addVocabulary);

  // Vocabulary state
  const [newKanji, setNewKanji] = useState("");
  const [newHiragana, setNewHiragana] = useState("");
  const [newEnglish, setNewEnglish] = useState("");

  const handleSave = async () => {
    // To prevent duplicate submission
    if (isSaving) return;
    setIsSaving(true);

    // Validation for empty fields
    if (!newKanji || !newHiragana || !newEnglish) {
      toast.error("Please fill in all fields.", { position: "top-right" });
      return;
    }

    const data = {
      kanji: newKanji,
      hiragana: newHiragana,
      english: newEnglish,
    };

    try {
      await addVocabulary(data);
      toast.success("Vocabulary Successfully saved!", {
        position: "top-right",
      });
      // Resetting the input field to empty
      setNewKanji("");
      setNewHiragana("");
      setNewEnglish("");
      navigate(-1);
    } catch (error) {
      console.error("Error saving data: ", error);
      toast.error("Failed to save data", { position: "bottom-right" });
    }
  };

  const previousPage = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 bg-cover h-screen">
      <ToastContainer />
      <p className="font-bold text-3xl mb-5">Add new Vocab</p>
      <div className="flex flex-col text-xl w-2/3">
        <input
          type="text"
          placeholder="Enter Kanji..."
          onChange={(e) => setNewKanji(e.target.value)}
          className="border border-black rounded p-3 mb-3"
        />
        <input
          type="text"
          placeholder="Enter Hiragana..."
          onChange={(e) => {
            setNewHiragana(e.target.value);
          }}
          className="border border-black rounded p-3 mb-3"
        />
        <input
          type="text"
          placeholder="Enter English..."
          onChange={(e) => {
            setNewEnglish(e.target.value);
          }}
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
  );
};

export default AddVocabulary;
