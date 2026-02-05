import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/home";
import AboutUs from "./components/aboutus";
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import Letsdo from "./components/letsdo";
import Profile from "./components/profile";


function App() {
  return (
    <Router>
      <Navbar />
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route path="/letsdo" element={<Letsdo />} />
         <Route path="/profile" element={<Profile />} />
        
        

      </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
