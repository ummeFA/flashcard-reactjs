import React, { useEffect, useState } from "react";
import { useDatabaseStore } from "../../stores/databaseStore"; // Import Zustand store
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faArrowLeft,
  faPenToSquare,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import DeleteModal from "./DeleteModal";

const ShowList = () => {
  const { data, isLoading, fetchData } = useDatabaseStore(); // Access Zustand store
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Back to previous page
  const previousPage = () => {
    navigate(-1);
  };

  // Navigate to add vocabulary component
  const addVocabulary = () => {
    navigate("/add-vocabulary");
  };

  // Edit a vocabulary
  const editVocabulary = () => {
    if (!selectedRow) {
      alert("Select a row first.");
      return;
    }
    navigate("/edit-vocabulary", { state: { vocabulary: selectedRow } });
  };

  // Open Delete modal when delete button is pressed
  const openDeleteModal = () => {
    if (!selectedRow) {
      alert("Select a row first");
      return;
    }
    console.log("Opening Delete Modal for:", selectedRow); // ✅ Debugging line

    setIsModalOpen(true);
  };

  // Close delete modal
  const closeDeleteModal = () => {
    setIsModalOpen(false);
  };

  // Handle row click
  const handleRowClick = (item) => {
    console.log("row selected ", item);
    setSelectedRow(item);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold mb-4">Vocabulary List</h1>
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
          <button
            className="bg-green-900 text-white font-bold p-3 border-2 rounded-lg border-black"
            onClick={addVocabulary}
          >
            <FontAwesomeIcon icon={faAdd} className="mr-2" /> Add
          </button>
        </div>
      </div>
      {isLoading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border-b">ID</th>
                <th className="px-4 py-2 border-b">Kanji</th>
                <th className="px-4 py-2 border-b">Hiragana</th>
                <th className="px-4 py-2 border-b">English</th>
                <th className="px-4 py-2 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item) => (
                  <tr
                    key={item.id}
                    className={`cursor-pointer ${
                      selectedRow?.id === item.id
                        ? "bg-blue-300"
                        : "hover:bg-blue-100"
                    }`}
                    onClick={() => handleRowClick(item)}
                  >
                    <td className="px-4 py-2 border-b">{item.id}</td>
                    <td className="px-4 py-2 border-b">{item.kanji}</td>
                    <td className="px-4 py-2 border-b">{item.hiragana}</td>
                    <td className="px-4 py-2 border-b">{item.english}</td>
                    <td className="px-4 py-2 border-b flex justify-center gap-2">
                      <button
                        className="bg-orange-600 text-white font-bold p-3 border-2 rounded-lg border-black"
                        onClick={editVocabulary}
                      >
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          className="mr-2"
                        />{" "}
                        Edit
                      </button>
                      <button
                        className="bg-red-600 text-white font-bold p-3 border-2 rounded-lg border-black"
                        onClick={openDeleteModal}
                      >
                        <FontAwesomeIcon icon={faTrash} className="mr-2" />{" "}
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-4 py-2 text-center text-gray-500"
                  >
                    No vocabulary found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
      {isModalOpen && (
        <DeleteModal onCancel={closeDeleteModal} vocabulary={selectedRow} />
      )}
    </div>
  );
};

export default ShowList;
