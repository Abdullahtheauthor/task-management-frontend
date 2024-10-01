import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import SignupForm from "./Components/SignupForm.js";
import SigninForm from "./Components/SigninForm.jsx";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        {/* <Link to="/Signup">
          <button style={{ fontSize: "20px" }}>SignUpForm</button>
        </Link> */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<SignupForm />} />
          <Route path="/Signin" element={<SigninForm />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
