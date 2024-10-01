import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Board from "./Components/Board.js";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import SignupForm from "./Components/SignupForm.js";
import SigninForm from "./Components/SigninForm.jsx";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<SignupForm />} />
          <Route path="/Signin" element={<SigninForm />} />
          <Route path="/board" element={<Board />} /> {/* Direct access */}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
