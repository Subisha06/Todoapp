import React from 'react'
import "./home.css";
import { useNavigate } from 'react-router-dom';

const Home=()=> {
     const navigate = useNavigate();
     const login = () => {
    navigate("/login"); 
  };
  return (
    <div className='home'>
        <h1 className='words'>Organize Your <br/> work and life, Finally. </h1>
        <p>Become Focused, Organized  and calm with <br/> Todo app. Your personal Manager</p>
         <button className="home-btn"onClick={login}>Make ToDo</button>
    </div>
  )
}

export default Home