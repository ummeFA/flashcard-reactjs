import React from "react";
import { Route, Routes } from "react-router-dom";
import Card from "../src/components/Card";
import AddVocabulary from "./components/AddVocabulary";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import ShowList from "./components/ShowList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import EditVocabulary from "./components/EditVocabulary";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <ToastContainer />
      <div className="flex-1 overflow-y-auto pt-16">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/card" element={<Card />} />
          <Route path="/add-vocabulary" element={<AddVocabulary />} />
          <Route path="/edit-vocabulary" element={<EditVocabulary />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/show-list" element={<ShowList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
