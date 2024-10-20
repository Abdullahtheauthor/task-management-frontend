import { useState, useContext, useEffect } from "react";
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

  // console.log("Inside board ", todos);

  // Handling create and cancel create task button
  function handleCancelButtonInCreateTask() {
    setCreateTaskOpen(false);
  }
  function handleSubmitlButtonInCreateTask(newTask) {
    // setCreateTaskOpen(false);
    // alert(typeof newTask.tags);
    const updatedTodos = [...todos, newTask];
    setTodos(updatedTodos);
    // console.log("updatedTodos", updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setCreateTaskOpen(false);
  }

  function handleSaveButtonInEdit(eidtedTask) {
    const updatedTodos = todos.map((t) => {
      if (eidtedTask.id === t.id) {
        return eidtedTask;
      } else {
        return t;
      }
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    console.log("editiiiing", updatedTodos);
    setTodos(updatedTodos);
  }

  const handleCreateTaskButton = () => {
    setCreateTaskOpen(true);
    // Navigate to /board only when the create task button is clicked
    navigate("/board");
  };
  // Handling create and cancel create task button

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
    setTodos(storageTodos);
  }, []);

  // Rendering todos
  const jsxTodos = todos.map((t) => {
    return <Todo key={t.id} todo={t} save={handleSaveButtonInEdit}></Todo>;
  });

  // Filter Buttons
  const buttonsFilter = userData.map((u) => {
    return <FilteredButton value={u.userName}></FilteredButton>;
  });

  return (
    <div
      style={{
        marginBottom: "200px",
        background: isCreateTaskOpen ? "rgba(90, 70, 225, 0.5)" : "none",
      }}
    >
      <div style={{ background: "rgb(200,232,232)", width: "100%" }}>
        {buttonsFilter}
        <FilteredButton value="All"></FilteredButton>

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
        }}
      >
        {isCreateTaskOpen && (
          <CreateTask
            open={isCreateTaskOpen}
            onClose={handleCancelButtonInCreateTask}
            submit={handleSubmitlButtonInCreateTask}
          />
        )}
      </div>

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
  );
}
