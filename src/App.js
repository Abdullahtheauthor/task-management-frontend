import { BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';

 function App() {
  return (     
<BrowserRouter>
<>
<Navbar/>
     
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};





export default App;
