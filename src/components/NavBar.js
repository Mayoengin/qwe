import React, { useState } from "react";
import HomeButton from "./HomeButton";
import linkedinLogo from "../images/linkedin.png";
import emailLogo from "../images/email.png";
import githubLogo from "../images/github.png";
import "../css/nav.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <ul className="navbar">
        <li className="home-button-container">
          <HomeButton />
        </li>
        <div className={`nav-items-container ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={closeMenu}>HOME</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>ABOUT</a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>SKILLS</a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>EXPERIENCE</a>
          </li>
          <li>
            <a href="#portfolio" onClick={closeMenu}>PORTFOLIO</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>CONTACT</a>
          </li>
        </div>
        <div className="nav-icons-container">
          <li>
            <a
              href="https://www.linkedin.com/in/mayo-engin-75154a205/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="LinkedIn" className="nav-icon" />
            </a>
          </li>
          <li>
            <a href="mailto:Mayo.engin@gmail.com">
              <img src={emailLogo} alt="Email" className="nav-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Mayoengin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="GitHub" className="nav-icon" />
            </a>
          </li>
        </div>
        <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
