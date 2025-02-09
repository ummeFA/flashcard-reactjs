import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
import DeleteModal from "./components/DeleteModal";

function App() {
  const location = useLocation();

  // Defining path where the navbar will be invisible
  const navbarHide = ["/", "/sign-up"];

  // Check if Navbar is visible
  const isNavbarVisible = !navbarHide.includes(location.pathname);

  return (
    <div className="flex flex-col h-screen">
      {/* Only render navbar if the current path is not the navbarHide array*/}
      {!navbarHide.includes(location.pathname) && <Navbar />}
      <ToastContainer />
      <div
        className={`flex-1 overflow-y-auto ${isNavbarVisible ? "pt-16" : ""}`}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/card" element={<Card />} />
          <Route path="/add-vocabulary" element={<AddVocabulary />} />
          <Route path="/edit-vocabulary" element={<EditVocabulary />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/show-list" element={<ShowList />} />
          <Route path="/delete" element={<DeleteModal />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
