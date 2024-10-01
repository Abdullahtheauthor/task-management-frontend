import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
<<<<<<< HEAD
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
 import SignupForm from './Components/SignupForm';
 import SigninForm from './Components/SigninForm';
 import GeneralButton from './Components/GeneralButton';
 function App() {
  return (     
<BrowserRouter>
<>
<Navbar/>
     <GeneralButton label="Click" />
     

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<SignupForm />} /> 
          <Route path="/Signin" element={< SigninForm />} /> 
=======
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
        {/* <Link to="/Signup">
          <button style={{ fontSize: "20px" }}>SignUpForm</button>
        </Link> */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<SignupForm />} />
          <Route path="/Signin" element={<SigninForm />} />
          <Route path="/board" element={<Board />} />
>>>>>>> a90587e3c41c548e67f1bc90a7d758322d8402a5
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
