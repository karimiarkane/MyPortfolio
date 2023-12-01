import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  /****************************************************** */
  const [mobileNavbar, setmobileNavbar] = useState(false);
  function hundleToggleBtnNavbar() {
    setmobileNavbar(!mobileNavbar);
  }
  /*********************************************************** */
  const [lightMode, setLightMode] = useState(true);
  function hundleToggleBtnMode() {
    setLightMode(!lightMode);
  }
  /********************************************** */
  /* get the size of the window in  every resize*/
  const [width, setWidth] = useState(window.innerWidth);
  function handleResize() {
    setWidth(window.innerWidth);
  }
  window.addEventListener("resize", handleResize);
  /********************************************** */
  if (!lightMode) {
    document.querySelector("body").setAttribute("theme", "dark-mode");
  } else {
    document.querySelector("body").setAttribute("theme", "light-mode");
  }
  /******************************************************** */
  if (mobileNavbar) {
    document.querySelector("body").setAttribute("navbar", "opened");
  } else {
    document.querySelector("body").setAttribute("navbar", "closed");
  }

  /****************************************************** */
  const header = document.querySelector('header')
  const aboutMe = document.querySelector('.AboutMe')

  const observer = new IntersectionObserver(function(entries , observer){

  })
 

  return (
    <header id="header" >
      <div className="container Header-container">
        <div className="leftside_Header logo_container">karim bzyada</div>

        <div className="rightside_Header">
          <div className="toggle-btn-mode" onClick={hundleToggleBtnMode}>
            {width < 768 && lightMode && (
              <FontAwesomeIcon icon={faMoon} className="icon" />
            )}
            {width < 768 && !lightMode && (
              <FontAwesomeIcon icon={faSun} className="icon" />
            )}
          </div>

          <ul className={mobileNavbar ? "navbar active" : "navbar"}>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#about_me">AboutMe</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Quotes">Quotes</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            
            <div className="toggle-btn-mode" onClick={hundleToggleBtnMode}>
              {width > 768 && lightMode && (
                <FontAwesomeIcon icon={faMoon} className="icon" />
              )}
              {width > 768 && !lightMode && (
                <FontAwesomeIcon icon={faSun} className="icon" />
              )}
            </div>
          </ul>

          <div className="toggle-btn-navbar" onClick={hundleToggleBtnNavbar}>
            {width < 768 && !mobileNavbar && (
              <FontAwesomeIcon icon={faBars} className="icon" />
            )}
            {width < 768 && mobileNavbar && (
              <FontAwesomeIcon icon={faX} className="icon" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
