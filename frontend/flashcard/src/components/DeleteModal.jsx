import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDatabaseStore } from "../../stores/databaseStore";

const DeleteModal = ({ onCancel, vocabulary }) => {
  const { deleteVocabulary } = useDatabaseStore();

  // Handle delete action
  const handleDelete = () => {
    deleteVocabulary(vocabulary.id);
    onCancel();
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h1 className="text-lg font-bold mb-4">Delete data?</h1>
          <div className="flex justify-end gap-2 mt-4">
            <button
              className="bg-gray-600 text-white font-bold p-3 border-2 rounded-lg border-black"
              onClick={onCancel}
            >
              <FontAwesomeIcon icon={faBan} className="mr-2" /> Cancel
            </button>
            <button
              className="bg-red-600 text-white font-bold p-3 border-2 rounded-lg border-black"
              onClick={handleDelete}
            >
              <FontAwesomeIcon icon={faTrash} className="mr-2" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
