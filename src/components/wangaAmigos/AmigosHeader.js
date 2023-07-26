import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import web_logo from "../images/wa_logo.svg";
import "../styles/wa_navbar.css";

const AmigosHeader = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 0) {
      setColor(true);
    } else {
      setColor(true);
    }
  };
  window.addEventListener("scroll", changeColor);
  const closeMenu = () => setClick(false);

  return (
    <div className="">
    <div className={color ? "  header header-bg" : "header"}>
      <div className="container ">
        <nav className=" d-flex align-items-center justify-content-between">
          <a
            href="/wanga-amigos"
            className="  text-decoration-none text-align-center "
          >
            <img src={web_logo} alt="logo" className=""/>
          </a>

          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "black" }} />
            ) : (
              <FaBars size={30} style={{ color: "black" }} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            
            <li className="nav-item">
              <a
                style={{ textDecoration: "none" }}
                href="/#"
                onClick={closeMenu}
              >
                About
              </a>
            </li>
           
            <li className="ps-5 nav-item">
              <a
                style={{ textDecoration: "none" }}
                href="/#"
                onClick={closeMenu}
              >
                How it works?
              </a>
            </li>
            <li className="ps-5 nav-item">
              <a
                style={{ textDecoration: "none" }}
                href="/"
                onClick={closeMenu}
              >
                Events
              </a>
            </li>
          
            
          </ul>
        </nav>
      </div>
    </div></div>
  );
};

export default AmigosHeader;
