import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Link to="/add-vocabulary" />
      Add new vocabulary
    </div>
  );
};

export default Menu;
