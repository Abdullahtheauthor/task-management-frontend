import { BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
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
        </Routes>
      </>
    </BrowserRouter>
  );
};





export default App;
