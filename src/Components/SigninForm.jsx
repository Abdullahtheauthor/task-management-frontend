

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "../form.css"; // Assuming the same styling as your sign-up form
import { UserContext } from "../Contexts/UserContext";

export default function SignInForm() {
  const navigate = useNavigate();

  const { userData } = useContext(UserContext); // Assuming UserContext contains user data
  console.log("Existing users", userData);

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

  // Handle sign-in form submission
  function handleSubmit(e) {
    e.preventDefault();

    const foundUser = userData.find(
      (user) =>
        user.userName === formInputs.userName &&
        user.userPass === formInputs.userPass
    );

    if (foundUser) {
      setErrorMessage(""); // Clear error if login is successful
      console.log("User signed in:", formInputs);
      navigate("/board"); // Redirect to dashboard or another page
    } else {
      setErrorMessage("Invalid username or password");
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
          <h1 style={{ marginBottom: "20px" }}>Sign In Form</h1>

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

          {/* Display error message if credentials are incorrect */}
          {errorMessage && (
            <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
}
