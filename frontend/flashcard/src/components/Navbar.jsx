import { faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close the dropdown
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Navigate to card
  const navigateToCard = () => {
    navigate("/card");
  };

  return (
    <div className="bg-gray-100 text-slate-600 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="text-lg font-bold no-underline text-slate-700 hover:cursor-pointer"
            onClick={navigateToCard}
          >
            {/* Logo */}
            {/* <Link
              to="/"
              className="no-underline text-white hover:cursor-pointer"
            /> */}
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
                        onClick={closeDropdown} // Close dropdown on click
                      >
                        Add new vocabulary
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        to="/edit-vocabulary"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                        onClick={closeDropdown} // Close dropdown on click
                      >
                        Edit vocabulary
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        to="/show-list"
                        className="block p-4 text-gray-700 hover:bg-blue-100"
                        onClick={closeDropdown} // Close dropdown on click
                      >
                        Show list
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/bookmarkList"
                        className="block p-4 text-gray-700 hover:bg-blue-100"
                        onClick={closeDropdown} // Close dropdown on click
                      >
                        Show Bookmarked List
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link
              to="/logout"
              className="flex items-center space-x-2 no-underline text-white"
            />
            <span>Logout</span> <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
