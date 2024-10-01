import { useState } from "react";
import "../task.css";
export default function CreateTask({ open, onClose }) {
  const [taskForm, setTaskForm] = useState({
    title: "",
    Assignee: "",
    status: "Done",
    estimate: "",
    tag: "",
    Description: "",
  });
  return (
    <form
      style={{
        padding: "20px",
        height: "100vh",
        width: "500px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
          padding: "30px",
          background: "	rgb(232,232,232)",
          minHeight: "700px",
          marginBottom: "40px",
          borderRadius: "30px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Create a task</h1>

        <hr
          style={{
            color: "black",
            background: "red",
            width: "100%",
            marginBottom: "40px",
          }}
        />

        {/* title */}
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <label>Title</label>
          <input
            value={taskForm.title}
            onChange={(e) => {
              setTaskForm({ ...taskForm, title: e.target.value });
            }}
          />
        </div>
        {/* //title */}

        {/* Assigne */}
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <label>Assignee: </label>
          <select
            value={taskForm.Assignee}
            onChange={(e) => {
              // console.log()
              setTaskForm({ ...taskForm, Assignee: e.target.value });
            }}
          >
            <option value="Goda">Goda</option>
            <option value="Nira">Nira</option>
            <option value="Sousannah">Sousannah</option>
            <option value="Hania">Hania</option>
            <option value="Basel">Basel</option>
            <option value="Mohand">Mohand</option>
          </select>
        </div>
        {/* // Assigne */}

        {/* Status options */}
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <label>Status: </label>
          <select
            value={taskForm.status}
            onChange={(e) => {
              // console.log()
              setTaskForm({ ...taskForm, status: e.target.value });
            }}
          >
            <option value="To Do">To Do</option>
            <option value="In progress">In progress</option>
            <option value="Blocked">Blocked</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <div style={{ display: "flex", marginBottom: "20px" }}>
          <label>Estimate</label>
          <input
            value={taskForm.estimate}
            onChange={(e) => {
              setTaskForm({ ...taskForm, estimate: e.target.value });
            }}

            //   value={formInputs.userPass}
            //   onChange={handleChangePasswordInput}
          />
        </div>

        <div style={{ display: "flex", marginBottom: "20px" }}>
          <label>Tags</label>
          <input
            value={taskForm.tag}
            onChange={(e) => {
              setTaskForm({ ...taskForm, tag: e.target.value });
            }}
          />
        </div>
        {/* Description text area */}
        <label>Description</label>
        <textarea
          rows="4"
          cols="47"
          name="comment"
          form="usrform"
          value={taskForm.Description}
          onChange={(e) => {
            setTaskForm({ ...taskForm, Description: e.target.value });
          }}
        ></textarea>

        {/*///  Description text area */}

        {/* Sumbit Button */}
        <button
          id="submit-loan-button"
          type="button"
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "10px",
            Border: "none",
          }}
          //   onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
        {/* //Sumbit Button */}

        {/* Cancel button */}
        <button
          id="submit-loan-button"
          type="button"
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "10px",
            Border: "none",
          }}
          onClick={onClose}
        >
          Cancel
        </button>

        {/* //Cancel button */}

        {/* عرض رسالة الخطأ إن وجدت */}
        {/* {errorMessage && (
            <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
          )} */}
      </div>
    </form>
  );
}
