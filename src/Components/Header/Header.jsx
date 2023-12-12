import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

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
  const header = document.querySelector("header");
  const aboutMe = document.querySelector(".AboutMe");

  const observer = new IntersectionObserver(function (entries, observer) {});

  /****************************************************** */

  useEffect(() => {
    const menuItem = document.querySelectorAll(".menuItem");
    menuItem.forEach((item) => {
      item.addEventListener("click", (event) => {
        menuItem.forEach((item) => {
          item.classList.remove("active");
        });
        event.target.classList.add("active");
      });
    });
    
   
  }, []);

  /****************************************************** */

  window.addEventListener("scroll",()=>{
    let a = document.querySelectorAll(".section")
    a.forEach((item) => {
       if (item.getBoundingClientRect().top > 0 && item.getBoundingClientRect().top <= window.innerHeight / 3) {

        document.querySelectorAll(".menuItem").forEach((item)=>{
                 item.classList.remove('active')
                })
                document.querySelector(`.${item.id}`).classList.add('active')
            
               
               

            }
       });
  })

   


  return (
    <header id="header">
      <div className="container Header-container">

        <div className="leftside_Header logo_container">khsni logoo</div>

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
              <a href="#Home" className="Home menuItem active">
                Home
              </a>
            </li>
            <li>
              <a href="#about_me" className="about_me menuItem">
                AboutMe
              </a>
            </li>
            <li>
              <a href="#Services" className="Services menuItem">
                Services
              </a>
            </li>
            <li>
              <a href="#Projects" className="Projects menuItem">
                Projects
              </a>
            </li>
            {/* <li>
              <a href="#Quotes" className="Quotes menuItem">
                Quotes
              </a>
            </li> */}
            <li>
              <a href="#Contact" className="Contact menuItem">
                Contact
              </a>
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
