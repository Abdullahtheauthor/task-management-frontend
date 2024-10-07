import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Board from "./Components/Board.js";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import SignupForm from "./Components/SignupForm.js";
import SigninForm from "./Components/SigninForm.jsx";

import { uid } from "uid";

import { TodosContext } from "./Contexts/TodosContext";

// Hooks
import { useState } from "react";
import { UserContext } from "./Contexts/UserContext.js";

const todosIntial = [
  {
    id: uid(7),
    title: "Task1",
    description: "Studying something 1",
    assignee: "Abdullah@gmail.com",
    status: false,
    estimate: "20",
    tags: ["front"],
  },
  {
    id: uid(7),
    title: "Task2",
    description: "Studying something 2",
    assignee: "Ahmed@gmail.com",
    status: true,
    estimate: 15,
    tags: ["front", "back"],
  },
  {
    id: uid(7),
    title: "Task3",
    description: "Studying something 3",
    assignee: "Abdullah@gmail.com",
    status: false,
    estimate: "2",
    tags: ["front", "back"],
  },
  {
    id: uid(7),
    title: "Task3",
    description: "Studying something 3",
    assignee: "Wael@gmail.com",
    status: false,
    estimate: "2",
    tags: ["front", "back"],
  },
  {
    id: uid(7),
    title: "Task3",
    description:
      "Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3Studying something 3",
    assignee: "Ahmed@gmail.com",
    status: false,
    estimate: "2",
    tags: ["front", "back"],
  },
];

function App() {
  const [todos, setTodos] = useState(todosIntial);
  let userdetails = [
    { userName: "Abdullah@gmail.com", userPass: "enkdwnrwe$" },
    { userName: "Ahmed@gmail.com", userPass: "enkdasdasdwnrwe$" },
    { userName: "Wael@gmail.com", userPass: "q3q44324$" },
  ];
  // saving todos to locastorage
  localStorage.setItem("todos", JSON.stringify(todosIntial));
  const [userData, setUserData] = useState(userdetails);
  // console.log("khjkhwk", userData);
  console.log("users after set", userData);

  return (
    //
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <TodosContext.Provider value={{ todos, setTodos }}>
          <>
            <Navbar />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Signup" element={<SignupForm />} />
              <Route path="/Signin" element={<SigninForm />} />
              <Route path="/board" element={<Board />} /> {/* Direct access */}
            </Routes>
          </>
        </TodosContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
