import React from 'react';
import { FaLocationArrow } from "react-icons/fa";
import '../css/Projects.css';

const Projects = () => {
  return (
    <div>
      <div className="background-image"></div>
      <section className="projects-section">
        <div className="project-card">
          <img src="/images/Project1.png" alt="Project 1" />
          <div className="project-card-content">
            <h2 className="project-card-title">FlightWay</h2>
            <p className="project-card-description">A Travel Booking System Integrated with amadeus and paymongo as a main functionality of the system.</p>
            <div className="visit-website"><FaLocationArrow style={{marginBottom: '-3px'}}/> Visit Website</div>
          </div>
        </div>
        <div className="project-card">
          <img src="/images/Project2.png" alt="Project 2" />
          <div className="project-card-content">
            <h2 className="project-card-title">CIT -  Bus Reservation System</h2>
            <p className="project-card-description">A Bus Reservation System that reserves transportation services and manages various types of management with in the CIT - University</p>
            <div className="visit-website"><FaLocationArrow style={{marginBottom: '-3px'}}/> Visit Website</div> 
          </div>
        </div>
        <div className="project-card">
          <img src="/images/Project3.jpg" alt="Project 3" />
          <div className="project-card-content">
            <h2 className="project-card-title">BOIRD - Clothing Website</h2>
            <p className="project-card-description">A Clothing Website integrated with various features for buying and selling clothes.</p>
            <div className="visit-website"><FaLocationArrow style={{marginBottom: '-3px'}}/> Visit Website</div> 
          </div>
        </div>
        <div className="project-card">
          <img src="/images/Project4.png" alt="Project 4" />
          <div className="project-card-content">
            <h2 className="project-card-title">KADUGO - Bloodbank System</h2>
            <p className="project-card-description">A Bloodbank System designed for managing blood donations and requests efficiently.</p>
            <div className="visit-website"><FaLocationArrow style={{marginBottom: '-3px'}}/> Visit Website</div>
          </div>
        </div>
        <div className="project-card">
          <img src="/images/Project5.png" alt="Project 5" />
          <div className="project-card-content">
            <h2 className="project-card-title">SAKAY - Public Transportation System</h2>
            <p className="project-card-description">A Public Transportation System aimed at improving commuting experiences for citizens.</p>
            <div className="visit-website"><FaLocationArrow style={{marginBottom: '-3px'}}/> Visit Website</div> 
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
