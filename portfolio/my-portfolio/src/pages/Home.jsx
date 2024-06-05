import React, { useState, useEffect } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import '../css/Home.css'; 

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Front end Developer', 'Student', 'UI/UX Designer'];
  const [currentRole, setCurrentRole] = useState(roles[roleIndex]);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false); // Introduce isFlipped state

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); 

    return () => {
      clearTimeout(typingTimer);
    };
  }, [roleIndex]);

  useEffect(() => {
    setCurrentRole(roles[roleIndex]);
    setTypedText('');
    setCurrentIndex(0);
  }, [roleIndex]);

  useEffect(() => {
    const typingAnimation = setInterval(() => {
      if (currentIndex < currentRole.length) {
        setTypedText((prevText) => prevText + currentRole[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingAnimation);
      }
    }, 100); 

    return () => {
      clearInterval(typingAnimation);
    };
  }, [currentRole, currentIndex]);

  const handleClick = () => {
    setIsFlipped(!isFlipped); // Toggle isFlipped state
  };

  return (
    <section className="home-section">
       <div className="background-image"></div>
      <div className="text-container">
        <h1>Hello, Welcome to<span style={{color: "red"}}> <span style={{color: "black"}}>Jepz</span>Folio</span></h1>
        <h2 style={{fontSize: "3rem", color: "black"}}>I am a<span style={{color: "red"}}> {typedText}</span></h2>
        <p>
          My name is <span style={{color:'red', fontWeight: '600'}}>Jeff Francis D. Conson</span> and I am a 4th Year IT student<br/>
          Explore more within my portfolio and leave a message or contact me.
        </p>
        <a href="/about" className='learn-btn'>Learn More</a>
        <div className="links-container">
          <a href="https://www.facebook.com/jaxon.conson" className="link"><FaFacebook size={"2rem"}/></a>
          <a href="https://www.instagram.com/jfconson/" className="link"><FaInstagram size={"2rem"}/></a>
          <a href="https://github.com/Jepzaru" className="link"><FaGithub size={"2rem"}/></a>
        </div>
      </div>
      <div className={`image-container ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="front">
          <img src="/images/me.jpg" alt="Your Image" />
        </div>
        <div className="back">
          <img src="/images/me2.jpg" alt="Your Other Image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
