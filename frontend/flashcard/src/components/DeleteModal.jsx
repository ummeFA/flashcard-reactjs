import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DeleteModal = ({ onCancel }) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h1 className="text-lg font-bold mb-4">Delete data?</h1>
          <div className="flex justify-end gap-2 mt-4">
            <button
              className="bg-gray-600 text-white p-3 rounded"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button className="bg-red-600 text-white p-3 rounded">
              Delete
            </button>
          </div>
        </div>

        {/* The buttons */}
      </div>
    </div>
  );
};

export default DeleteModal;
