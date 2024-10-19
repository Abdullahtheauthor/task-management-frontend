import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpForm() {
  const [formInputs, setFormInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleChangeInput(e) {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        username: formInputs.username,
        email: formInputs.email,
        password: formInputs.password,
      });

      if (response.status === 201) {
        navigate("/signin");
      }
    } catch (error) {
      setErrorMessage("Signup failed. Please try again.");
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
          <h1>Sign Up Form</h1>
          <input
            type="text"
            name="username"
            value={formInputs.username}
            onChange={handleChangeInput}
            placeholder="Username"
          />
          <input
            type="email"
            name="email"
            value={formInputs.email}
            onChange={handleChangeInput}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={formInputs.password}
            onChange={handleChangeInput}
            placeholder="Password"
          />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
