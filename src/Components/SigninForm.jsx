import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  // Import axios to send requests

export default function SignInForm() {
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

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signin", {
        email: formInputs.email,
        password: formInputs.password,
      });

      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage("Invalid login credentials. Please try again.");
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form
        style={{
          padding: "20px",
          height: "100vh",
          width: "500px",
        }}
        onSubmit={handleSubmit}
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
          <h1>Sign In Form</h1>
          <input
            type="email"
            value={formInputs.email}
            onChange={handleChangeEmailInput}
            placeholder="Email"
          />
          <input
            type="password"
            value={formInputs.password}
            onChange={handleChangePasswordInput}
            placeholder="Password"
          />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
