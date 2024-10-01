import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export default function SignInForm() {
  const userData = [
    { username: "Abdullah@gmail.com", userPass: "enkdwnrwe$" },
    { username: "Ahmed@gmail.com", userPass: "enkdasdasdwnrwe$" },
    { username: "Wael@gmail.com", userPass: "q3q44324$" },
  ];

  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");  
  const navigate = useNavigate();
  function handleChangeEmailInput(e) {
    setFormInputs({ ...formInputs, email: e.target.value });
  }

  function handleChangePasswordInput(e) {
    setFormInputs({ ...formInputs, password: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const foundUser = userData.find(
      (user) => user.username === formInputs.email && user.userPass === formInputs.password
    );

    if (foundUser) {
      navigate("/")
    } else {
      setErrorMessage("Invalid login credentials. Please try again.");
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
            background: "rgba(88, 59, 255, 0.8)",
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
            value={formInputs.email}
            onChange={handleChangeEmailInput}
          />

          <label>User Password</label>
          <input
            type="password"
            value={formInputs.password}
            onChange={handleChangePasswordInput}
          />

          {/* عرض رسالة الخطأ إن وجدت */}
          {errorMessage && (
            <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
          )}

          <button
            id="submit-loan-button"
            type="button"
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "10px",
              border: "none",
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
