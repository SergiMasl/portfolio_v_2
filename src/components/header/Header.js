import React, { useState } from "react";
import "./header.css";

export default function Header() {
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">
          Sergey
        </a>

        <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                <i className="uil uil-estate nav-icon"></i>Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <i className="uil uil-user nav-icon"></i>About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                <i className="uil uil-file-alt nav-icon"></i>Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#serviservicesse" className="nav-link">
                <i className="uil uil-briefcase-alt nav-icon"></i>Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                <i className="uil uil-scenery nav-icon"></i>Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <i className="uil uil-message nav-icon"></i>Contact
              </a>
            </li>
          </ul>
          <div className="nav-close" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-times nav-icon"></i>
          </div>
        </div>

        <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps nav-icon"></i>
        </div>
      </nav>
    </header>
  );
}
