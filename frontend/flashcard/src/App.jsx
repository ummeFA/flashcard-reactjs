import React from "react";
import { Route, Routes } from "react-router-dom";
import Card from "../src/components/Card";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
