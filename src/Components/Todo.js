import { TodosContext } from "../Contexts/TodosContext";
import { useContext, useState } from "react";

export default function Todo({ todo }) {
  const { todos, setTodos } = useContext(TodosContext);
  const [deleteDialogue, setDeleteDialogue] = useState(false);
  console.log("Insdie toto 400", todo);

  // console.log("Todo status:", todo.assignee);
  const handleDeleteClick = () => {
    setDeleteDialogue(true);
    // const updatedTodos = todos.filter((t) => {
    //   return todo.id !== t.id;
    // });
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
    // console.log("handleDeleteClick", updatedTodos);
    // setTodos(updatedTodos);
  };

  const handleYesDeleteButton = () => {
    const updatedTodos = todos.filter((t) => {
      return todo.id !== t.id;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    console.log("handleDeleteClick", updatedTodos);
    setTodos(updatedTodos);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          padding: "30px",
          background: "rgb(232,232,232)",
          width: "400px", // Width of each todo card
          height: "900px",
          // maxHeight:
          marginBottom: "20px", // Space between rows
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          position: "relative",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>{todo.title}</h1>
        <hr
          style={{
            color: "black",
            background: "red",
            width: "100%",
            marginBottom: "40px",
          }}
        />
        {/* Assigne */}
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <label>Assignee: </label>
          <label>{todo.assignee}</label>
        </div>
        {/* // Assigne */}

        {/* Status options */}
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <label>Status: </label>
          <label>{todo.status ? "Completed" : "Incomplete"}</label>
        </div>
        {/* Delete dialogue */}
        <div
          style={{
            // background: "rgba(255, 0, 0, 0.8)", // Red with transparency
            backgroundColor: "white",
            border: "thick double #32a1ce",
            width: "80%",
            position: "absolute", // Absolute position
            top: "50%", // Positioned 50% from the top
            left: "50%", // Positioned 50% from the left
            transform: "translate(-50%, -50%)", // Center it horizontally and vertically
            height: "100px",
            zIndex: "9999", // Higher z-index to ensure it's on top
            // display: "flex",
            justifyContent: "center",
            alignItems: "center",
            display: deleteDialogue ? " " : "none",
          }}
        >
          <p
            style={{
              color: "black",
              textAlign: "center",
            }}
          >
            Are you sure you want to delete this task?
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <button
              style={{
                padding: "10px 20px",
                margin: "0 10px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={handleYesDeleteButton}
            >
              Yes
            </button>
            <button
              style={{
                padding: "10px 20px",
                margin: "0 10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => setDeleteDialogue(false)}
            >
              No
            </button>
          </div>
        </div>

        {/* Estimate */}
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <label>Estimate: </label>
          <label>{todo.estimate} h</label>
        </div>
        {/* // Status options */}

        {/* Tags */}

        <div style={{ display: "flex", marginBottom: "20px" }}>
          <label>Tags: </label>
          <label>{todo.tags.map((tag) => ` '${tag}' `)}</label>
          {/* <input
              value={taskForm.tag}
              onChange={(e) => {
                setTaskForm({ ...taskForm, tag: e.target.value });
              }}
            /> */}
        </div>

        {/* //Tags */}

        {/* Description text area */}
        <label>Description:</label>
        <div
          style={{
            width: "300px" /* Set width */,
            height: "150px" /* Set height */,
            padding: "10px" /* Add padding */,
            border: "1px solid #ccc " /* Border to mimic textarea */,
            borderRadius: "4px" /* Rounded corners */,
            backgroundColor: "#f8f8f8" /* Background color */,
            overflowY: "scroll" /* Vertical scrollbar */,
            whiteSpace: "pre-wrap " /* Keep line breaks and spaces */,
          }}
        >
          {" "}
          {todo.description}
        </div>
        {/* <textarea style={{ width: "300px", height: "100px" }}>
          {todo.description}
        </textarea> */}

        {/*///  Description text area */}

        <button
          type="button"
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "10px",
            Border: "none",
          }}
          // onClick={onClose}
        >
          Edit
        </button>

        {/* Delete Button */}
        <button
          type="button"
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "10px",
            Border: "none",
          }}
          onClick={handleDeleteClick}
        >
          Delete
        </button>
        {/* // Delete Button */}
      </div>
    </>
  );
}
