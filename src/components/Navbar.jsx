import { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo" onClick={(e) => {
        e.preventDefault();
        scrollToSection('home');
      }}>
        Lewis Manyasa
      </a>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <a href="#home" onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}>About</a>
        </li>
        <li>
          <a href="#services" onClick={(e) => {
            e.preventDefault();
            scrollToSection('services');
          }}>Services</a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}>Contact</a>
        </li>
        <li>
          <button className="cv-button">Download CV</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar; 