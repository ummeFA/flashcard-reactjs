import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-blue-400">
      <div className="text-lg font-bold">
        <Link to="/" />
        Flashcard
      </div>

      {/* Menu */}
      <div className="flex space-x-4">
        <Link to="/menu" />
        Menu
        <Link to="/logout" />
        Logout
      </div>
    </div>
  );
};

export default Navbar;
