import { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Add scrolled class when page is scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 60; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
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
          <a href="#skills" onClick={(e) => {
            e.preventDefault();
            scrollToSection('skills');
          }}>Skills</a>
        </li>
        <li>
          <a href="#education" onClick={(e) => {
            e.preventDefault();
            scrollToSection('education');
          }}>Education</a>
        </li>
        <li>
          <a href="#certifications" onClick={(e) => {
            e.preventDefault();
            scrollToSection('certifications');
          }}>Certifications</a>
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
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkTheme ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
          </button>
        </li>
        <li>
          <button className="cv-button">Download CV</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 