import React, { useEffect } from "react";
import { useDatabaseStore } from "../../../../backend/databaseStore"; // Import Zustand store
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";

const ShowList = () => {
  const { data, isLoading, fetchData } = useDatabaseStore(); // Access Zustand store
  const navigate = useNavigate();

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Back to previous page
  const previousPage = () => {
    navigate(-1);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold mb-4">Vocabulary List</h1>
        <div className="">
          <input
            value="Search"
            placeholder="Search"
            className="p-2 border h-12 w-54"
          ></input>
          <span className="">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
        <button
          className="bg-blue-600 text-white p-3 border rounded-lg"
          onClick={previousPage}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back
        </button>
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
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">{item.id}</td>
                    <td className="px-4 py-2 border-b">{item.kanji}</td>
                    <td className="px-4 py-2 border-b">{item.hiragana}</td>
                    <td className="px-4 py-2 border-b">{item.english}</td>
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
    </div>
  );
};

export default ShowList;
