import React from "react";
import { Route, Routes } from "react-router-dom";
import Card from "../src/components/Card";
import AddVocabulary from "./components/AddVocabulary";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/add-vocabulary" element={<AddVocabulary />} />
      </Routes>
    </div>
  );
}

export default App;
