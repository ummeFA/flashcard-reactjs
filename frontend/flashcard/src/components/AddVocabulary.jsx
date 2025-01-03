import React from "react";
import { useNavigate } from "react-router-dom";

const AddVocabulary = () => {
  const navigate = useNavigate();

  const previousPage = () => {
    navigate(-1);
  };
  return (
    <div className="flex justify-center gap-5">
      <p>Add new Vocab</p>
      <button
        className="bg-blue-600 text-white p-2 border rounded-lg"
        onClick={previousPage}
      >
        back
      </button>
    </div>
  );
};

export default AddVocabulary;
