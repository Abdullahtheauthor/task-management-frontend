export default function Todo({ todo }) {
  // console.log("Todo status:", todo.assignee);
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
          minHeight: "400px",
          marginBottom: "20px", // Space between rows
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
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
        <label>{todo.description}</label>

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
          Delete
        </button>
      </div>
    </>
  );
}
