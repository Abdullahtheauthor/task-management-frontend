import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// import { useState } from "react";
// import { UserContext } from "./Contexts/UserContext.js";

import "../form.css";
import { UserContext } from "../Contexts/UserContext";

export default function SignUpForm() {
  const navigate = useNavigate();

  const { userData, setUserData } = useContext(UserContext);
  console.log("123users", userData);

  const [formInputs, setFormInputs] = useState({ userName: "", userPass: "" });
  const [errorMessage, setErrorMessage] = useState("");

  // Update email input
  function handleChangeEmailInput(e) {
    setFormInputs({ ...formInputs, userName: e.target.value });
  }

  // Update password input
  function handleChangePasswordInput(e) {
    setFormInputs({ ...formInputs, userPass: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("users", userData);
    console.log(formInputs);
    const foundUser = userData.find(
      (user) => user.userName === formInputs.userName
    );
    console.log(foundUser);

    if (!foundUser) {
      setUserData([
        ...userData,
        { userName: formInputs.userName, userPass: formInputs.userPass },
      ]);
      console.log("users after set", userData);

      navigate("/board");

      setErrorMessage(""); // Clear error if successfully added
      console.log("User added:", formInputs);
    } else {
      setErrorMessage("User already exists");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "30px",
            background: "rgba(88, 59, 255, 0.8",
            minHeight: "700px",
            marginBottom: "40px",
            borderRadius: "30px",
          }}
        >
          <h1 style={{ marginBottom: "20px" }}>Sign Up Form </h1>

          <hr
            style={{
              color: "black",
              background: "red",
              width: "100%",
              marginBottom: "40px",
            }}
          />

          <label>User Email</label>
          <input
            type="email"
            value={formInputs.userName}
            onChange={handleChangeEmailInput}
          />

          <label>User Password</label>
          <input
            type="password"
            value={formInputs.userPass}
            onChange={handleChangePasswordInput}
          />

          <button
            type="button"
            style={{
              marginTop: "20px",

              width: "100%",
              padding: "10px",
              Border: "none",
            }}
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>

          {/* عرض رسالة الخطأ إن وجدت */}
          {errorMessage && (
            <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
}
