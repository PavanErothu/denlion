import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import web_logo from "./images/website_logo.png";
import "./styles/Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(true);
  const changeColor = () => {
    if (window.scrollY >= 0) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  
  window.addEventListener("scroll", changeColor);
  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="container">
        <nav className="container navbar">
          <a
            href="/"
            className="logo  text-decoration-none text-align-center text-white"
          >
            <img src={web_logo} alt="logo" style={{ width: "45px" }} />
            <span
              className="ps-2"
              style={{ fontSize: "1.3rem", fontFamily: "Montserrat" }}
            >
              <b>GUIDE JUNIORS</b>
            </span>
          </a>

          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#ffffff" }} />
            ) : (
              <FaBars size={30} style={{ color: "#ffffff" }} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                style={{ textDecoration: "none" }}
                href="/#home"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{ textDecoration: "none" }}
                href="/#ourstory"
                onClick={closeMenu}
              >
                Our Story
              </a>
            </li>
            {/* <li className='nav-item'>
                        <a style={{textDecoration: 'none'}} href='#findsenior' onClick={closeMenu}>Find Senior</a>
                    </li> */}
            <li className="nav-item">
              <a
                style={{ textDecoration: "none" }}
                href="/#founder"
                onClick={closeMenu}
              >
                Founder
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{ textDecoration: "none" }}
                href="/blogs"
                onClick={closeMenu}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{ textDecoration: "none" }}
                href="/#contact"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
            {/* <li className='nav-item'>
                        <a style={{border:"1px solid #FFAA3B" , textDecoration: 'none'}}  className="p-2" href='/signin' onClick={closeMenu}>Sign In</a>
                    </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
