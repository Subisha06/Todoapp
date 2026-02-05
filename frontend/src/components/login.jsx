import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
try {
  const response = await axios.post("http://localhost:1000/api/v1/auth/login", formData);
let token=response.data.token
console.log('token',token)
localStorage.setItem('token',token)
  
  if (response.data.others && response.data.others._id) {
    sessionStorage.setItem("id", response.data.others._id);
  } else {
    console.warn("User ID not found in response:", response.data);
  }

  setMessage("Login successful!");
  navigate("/letsdo"); 

} catch (err) {
  console.error(err); 
  setMessage(err.response?.data?.message || "Login failed");
}
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Login;
