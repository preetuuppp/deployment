import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import AddNote from "../components/AddNote";
import Notes from "../components/Notes";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/createnote" element={<AddNote />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
