import React, { useState, useEffect } from "react";
import "./register.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Register = () => {
  const [show, setShow] = useState(false);
  const history=useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  

  useEffect(() => {
    setShow(true); 
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
      .post("http://localhost:1000/api/v1/auth/register",formData ) 
      .then((response)=>{
          console.log(response);
        })
     
          history("/login")
      setShowPopup(true);
    } catch (err) {
      console.log(err);
      alert("user already registered");
      history("/login")
    }
  };

  const closePopup = () => setShowPopup(false);
  
  return (
    <div className={`register ${show ? "show" : ""}`}>
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange} 
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Registration Successful!</h2>
            <p>Welcome, {formData.username}!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
