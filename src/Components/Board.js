import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CreateTask from "./CreateTask";
import "../task.css";

import { TodosContext } from "../Contexts/TodosContext";
import { UserContext } from "../Contexts/UserContext";

import Todo from "./Todo";
import FilteredButton from "./filteredButton";

export default function Board() {
  const navigate = useNavigate(); // Initialize navigate
  const [isCreateTaskOpen, setCreateTaskOpen] = useState(false);
  const { todos, setTodos } = useContext(TodosContext);
  const { userData, setUserData } = useContext(UserContext);

  // Handling create and cancel create task button
  function handleCancelButtonInCreateTask() {
    setCreateTaskOpen(false);
  }

  const handleCreateTaskButton = () => {
    setCreateTaskOpen(true);
    // Navigate to /board only when the create task button is clicked
    navigate("/board");
  };
  // Handling create and cancel create task button

  // Rendering todos
  const jsxTodos = todos.map((t) => {
    return <Todo key={t.id} todo={t}></Todo>;
  });

  // Filter Buttons
  const buttonsFilter = userData.map((u) => {
    return <FilteredButton value={u.userName}></FilteredButton>;
  });

  return (
    <div style={{ marginBottom: "200px" }}>
      <div style={{ background: "rgb(200,232,232)", width: "100%" }}>
        {buttonsFilter}

        <button
          style={{ marginLeft: "100px" }}
          onClick={handleCreateTaskButton} // Call this function on click
        >
          Create a task
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        {isCreateTaskOpen && (
          <CreateTask
            open={isCreateTaskOpen}
            onClose={handleCancelButtonInCreateTask}
          />
        )}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap", // Allow items to wrap to the next line
            justifyContent: "flex-start", // Align items to the start
            gap: "20px", // Space between todos
            width: "100%", // Full width of the parent
          }}
        >
          {jsxTodos}
          {/* {buttonFilter} */}
        </div>
      </div>
    </div>
  );
}
