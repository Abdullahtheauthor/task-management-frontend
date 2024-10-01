import { useState } from "react";

export default function SignUpForm() {
  let userData = [
    { username: "Abdullah@gmail.com", userPass: "enkdwnrwe$" },
    { username: "Ahmed@gmail.com", userPass: "enkdasdasdwnrwe$" },
    { username: "Wael@gmail.com", userPass: "q3q44324$" },
  ];

  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
    userData,
  });

  // Update email input
  function handleChangeEmailInput(e) {
    setFormInputs({ ...formInputs, email: e.target.value });
  }

  // Update password input
  function handleChangePasswordInput(e) {
    setFormInputs({ ...formInputs, password: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: formInputs.email,
      userPass: formInputs.password,
    };

    // Add new user to userData array
    setFormInputs({
      ...formInputs,
      userData: [...formInputs.userData, newUser], // Add the new user
      email: "", // Reset email field
      password: "", // Reset password field
    });
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
            value={formInputs.email}
            onChange={handleChangeEmailInput}
          />

          <label>User Password</label>
          <input
            type="password"
            value={formInputs.password}
            onChange={handleChangePasswordInput}
          />

          <button
            id="submit-loan-button"
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
        </div>
      </form>
    </div>
  );
}