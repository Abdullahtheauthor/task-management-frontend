import "../task.css";
export default function CreateTask({ open }) {
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

          //   value={formInputs.userPass}
          //   onChange={handleChangePasswordInput}
          />
        </div>
        {/* //title */}

        {/* Assigne */}
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <label>Assignee: </label>
          <select id="status">
            <option value="">Goda</option>
            <option value="">Nira</option>
            <option value="">Sousannah</option>
            <option value="">Hania</option>
            <option value="">Basel</option>
            <option value="">Mohand</option>
          </select>
        </div>
        {/* // Assigne */}
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <label>Status: </label>
          <select id="status">
            <option value="">To Do</option>
            <option value="">In progress</option>
            <option value="">Blocked</option>
            <option value="">Done</option>
          </select>
        </div>

        <div style={{ display: "flex", marginBottom: "20px" }}>
          <label>Estimate</label>
          <input

          //   value={formInputs.userPass}
          //   onChange={handleChangePasswordInput}
          />
        </div>

        <div style={{ display: "flex", marginBottom: "20px" }}>
          <label>Tags</label>
          <input

          //   value={formInputs.userPass}
          //   onChange={handleChangePasswordInput}
          />
        </div>

        <label>Description</label>
        <textarea
          rows="4"
          cols="47"
          name="comment"
          form="usrform"
          value=""
        ></textarea>

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
          //   onClick={(e) => handleSubmit(e)}
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
