import React, { useEffect, useState } from "react";
import "./aboutus.css";

const AboutUs = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`about ${show ? "show" : ""}`}>
      <h1>About Us</h1>

      <p>
        We help you organize your tasks, focus on what matters,
        and bring calm to your daily work and life.
      </p>

      <div className="about-cards">
        <div className="card">
          <h3> Our Mission</h3>
          <p>To simplify productivity and help people achieve more with less stress.</p>
        </div>

        <div className="card">
          <h3> Our Vision</h3>
          <p>A world where everyone stays organized, focused, and in control.</p>
        </div>

        <div className="card">
          <h3> Our Values</h3>
          <p>Clarity, simplicity, and calm-first design.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
