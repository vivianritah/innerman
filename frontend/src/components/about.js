// About.js
import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about-container">
      <div className="content-wrapper">
        <h1 className="page-title">About Us</h1>
        <div className="section motto-section">
          <h2 className="title">Our Motto</h2>
          <p className="text">Grow In Stature, Wisdom And Spirit</p>
        </div>
        <div className="section vision-section">
          <h2 className="title">Vision</h2>
          <p className="text">A joyful and prosperous generation standing for the truth and integrity.</p>
        </div>
        <div className="section mission-section">
          <h2 className="title">Mission</h2>
          <p className="text">To raise a God-fearing generation through a holistic quality education.</p>
        </div>
        <div className="section values-section">
          <h2 className="title">Core Values</h2>
          <ul className="values-list">
            <li>God-fearing</li>
            <li>Bible-Centred</li>
            <li>Integrity</li>
            <li>Teamwork</li>
            <li>Accountability</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
