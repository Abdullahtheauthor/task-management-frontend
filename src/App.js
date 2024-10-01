import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Board from "./Components/Board.js";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import SignupForm from "./Components/SignupForm.js";
import SigninForm from "./Components/SigninForm.jsx";
import GeneralButton from "./Components/GeneralButton";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        {/* <Link to="/Signup">
          <button style={{ fontSize: "20px" }}>SignUpForm</button>
        </Link> */}
<GeneralButton label="click" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<SignupForm />} />
          <Route path="/Signin" element={<SigninForm />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
