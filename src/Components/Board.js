import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateTask from "./CreateTask";

import "../task.css";

export default function Board() {
  const [isCreateTaskOpen, setCreateTaskOpen] = useState(false);
  return (
    <div style={{ background: "grey", width: "100%", height: "100vh" }}>
      <div style={{ background: "rgb(200,232,232)", width: "100%" }}>
        <button style={{ margin: "20px" }}>Goda</button>
        <button style={{ margin: "20px" }}>Nira</button>
        <button style={{ margin: "20px" }}>Hania</button>
        <button style={{ margin: "20px" }}>Sosusanah</button>
        <button style={{ margin: "20px" }}>Basel</button>
        <button
          style={{ marginLeft: "100px" }}
          onClick={() => {
            setCreateTaskOpen(true);
          }}
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
        {isCreateTaskOpen && <CreateTask open={isCreateTaskOpen} />}
      </div>
    </div>
  );
}
