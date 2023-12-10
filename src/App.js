import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Services from "./Components/Services/Services";

import { useEffect } from "react";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/Projects/ContactMe/ContactMe";

function App() {
  //this is for changing the color of the
  let header;
  window.addEventListener("load", () => {
    header = document.querySelector("#header");
    const home = document.querySelector(".home");
    const options = {};
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          header.classList.add("slighter");
        } else {
          header.classList.remove("slighter");
        }
      });
    }, options);

    observer.observe(home);
  });

  /***************************************************************************/


  return (
    <>
      <Header/>
      <Home />
      <AboutMe />
      <Services />
      <Projects/>
      <ContactMe/>

    </>
  );
}

export default App;
