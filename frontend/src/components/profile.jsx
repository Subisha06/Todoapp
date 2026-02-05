import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./profile.css";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:1000/api/v1/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch((err) =>{
        let status=err.status
        if(status==401){
          navigate('/login')
        }
        console.log(err)});
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/"); 
  };

  if (!user) return <p>Loading...</p>; 

  return (
    <div className="profile-container">
      <h1>Profile</h1>

      <img
        src={user.image || "http://localhost:5500/frontend/src/components/download.png"}
        alt={user.username}
        className="profile-image"
      />

      <div className="profile-info">
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>

      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
}

export default Profile;
