import { faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/user"; // Import Zustand store

const Navbar = () => {
  const navigate = useNavigate();
  const { logoutUser } = useUserStore(); // Get logout function from Zustand
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // ✅ Logout Function: Calls Zustand store and redirects to login
  const handleLogout = () => {
    logoutUser();
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="bg-gray-100 text-slate-600 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="text-lg font-bold no-underline text-slate-700 hover:cursor-pointer"
            onClick={() => navigate("/card")}
          >
            Flashcard
          </div>

          {/* Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <span>Menu</span> <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black border rounded-md shadow-lg z-50">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/add-vocabulary"
                        className="block p-4 text-gray-700 hover:bg-blue-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Add new vocabulary
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/show-list"
                        className="block p-4 text-gray-700 hover:bg-blue-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Show list
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/bookmarkList"
                        className="block p-4 text-gray-700 hover:bg-blue-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Show Bookmarked List
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* ✅ Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition duration-200"
            >
              <span>Logout</span>
              <FontAwesomeIcon icon={faUser} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
