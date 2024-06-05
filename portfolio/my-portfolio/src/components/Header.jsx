import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src="/images/jeplogo3.png" alt="Logo" />
        <span style={{ fontWeight: '600' }}>Jepz<span style={{ color: 'red' }}>Folio</span></span>
      </div>
      <nav>
        <ul>
          <li><NavLink exact to="/" activeClassName="active"><FaHome style={{marginRight: "15px", marginBottom: "-3px"}}/>Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active"><FaCircleInfo style={{marginRight: "15px", marginBottom: "-3px"}}/>About</NavLink></li>
          <li><NavLink to="/projects" activeClassName="active"><FaFolderOpen style={{marginRight: "15px", marginBottom: "-3px"}}/>Projects</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">< FaPhoneAlt style={{marginRight: "15px", marginBottom: "-3px"}}/>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
