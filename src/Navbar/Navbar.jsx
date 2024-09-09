import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { SiTheboringcompany } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePageClick = (page, route) => {
    setActivePage(page);
    setIsOpen(false); // Close the modal
    navigate(route); // Navigate to the route
  };

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <h1><SiTheboringcompany /></h1>
        </div>
        <ul className="nav-links">
          {[
            { page: 'Home', route: '/' },
            { page: 'About', route: '/about' },
            { page: 'Services', route: '/services' },
            { page: 'Portfolio', route: '/portfolio' },
            { page: 'Blog', route: '/blog' },
            { page: 'Contact', route: '/contact' }
          ].map((item, index) => (
            <li
              key={index}
              className={`nav-item ${activePage === item.page ? 'active' : ''}`}
              onClick={() => handlePageClick(item.page, item.route)}
            >
              {item.page}
            </li>
          ))}
        </ul>
        <button className="cta-button">Sign Up</button>
        <div className="hamburger" onClick={toggleMenu}>
        <LuMenu />
        </div>
      </nav>

      {isOpen && (
        <div className="nav-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={toggleMenu}><IoClose /></button>
            <ul className="modal-links">
              {[
                { page: 'Home', route: '/' },
                { page: 'About', route: '/about' },
                { page: 'Services', route: '/services' },
                { page: 'Portfolio', route: '/portfolio' },
                { page: 'Blog', route: '/blog' },
                { page: 'Contact', route: '/contact' }
              ].map((item, index) => (
                <li
                  key={index}
                  className={`modal-item ${activePage === item.page ? 'active' : ''}`}
                  onClick={() => handlePageClick(item.page, item.route)}
                >
                  {item.page}
                </li>
              ))}
            </ul>
            <button className="cta-button modal-button">Sign Up</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;