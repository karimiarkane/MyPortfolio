import React, { useEffect, useState } from "react";
import "./Projects.css";
import Title from "../Title/Title";
import Filter from "./Filter/Filter";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
 import carpoolingImg from "../../assets/couvoiturage.jpg";
 import portfolioImg from "../../assets/portfolio.jpg";
 import signalerImg from "../../assets/report.jpg";
 import askImg from "../../assets/askquestion.jpg";
 import schoolManagement from "../../assets/schoolManagement.jpg";
import Project from "./Project/Project";

 


const Projects = () => {
const ProjectList = [
  {
    image : carpoolingImg,
    title : "carpooling App",
    description : "Carpooling app aimed to address the growing need for efficient and sustainable transportation solutions.",
    service : ["ui"],
    technologies : ["figma"],
    visit : "https://www.figma.com/file/D5G47L60dlucjen8hWT1sW/app-ui?type=design&node-id=0%3A1&mode=design&t=D7QH2H1vuhwUFRRZ-1",
  },
  {
    image : portfolioImg,
    title : "My Portfolio",
    description : "a portfolio to  showcase my skills, experiences, and projects.",
    service : ["ui", "frontend"],
    technologies : ["reactjs" ],
    visit:"https://github.com/karimiarkane/MyPortfolio",
    demo: "https://karimiarkane.github.io/MyPortfolio/"
  },
  {
    image :  schoolManagement,
    title : "school management system",
    description : "a platform to manage a university.",
    services : ["ui"],
    technologies : "figma",
    visit :  "https://www.figma.com/file/TdcU5x6vMKFNoQsAa91FfK?type=design"
  },
  {
    image :  askImg,
    title : "FAQ ",
    description : "Web page FAQ for our carpooling app",
    services : ["frontend"],
    technologies : ["vanilaJS"],
    visit : "https://github.com/karimiarkane/QuestionNroho.github.io",
    demo: " https://karimiarkane.github.io/QuestionNroho.github.io/"
  },
  {
    image :  signalerImg,
    title : "Report User",
    description : "web page to report users",
    services : ["frontend"],
    technologies : ["vanilaJS"],
    visit : "https://github.com/karimiarkane/NrohoSignaler.github.io",
    demo:"https://karimiarkane.github.io/NrohoSignaler.github.io/"
  },
]


  /* show and disable the filter and sort categories and item after and before arrowicon click*/
  const [sortArrowUp, setSortArrowUp] = useState(false);
  const [filterArrowUp, setFilterArrowUp] = useState(false);

  const hundleSortArrowIconClick = (e) => {
    e.stopPropagation(); // Prevents the click event from reaching the document
    setSortArrowUp(!sortArrowUp);
  };

  const hundleFitlerArrowIconClick = (e) => {
    e.stopPropagation();
    setFilterArrowUp(!filterArrowUp);
  };
  /****************************************************************** */

  /* hide the menu sort and filter list after an outside click  */

  const hundleOutsideClick = (event) => {
    const filterList = document.querySelector(".filterList ");
    const sortList = document.querySelector(".sortList ");
    if (
      filterArrowUp &&
      event.target !== filterList &&
      !filterList.contains(event.target)
    ) {
      // console.log("event.target = " , event.target )   ;
      // console.log("document.querySelector(.filterList ) = " , document.querySelector(".filterList ")  )
      setFilterArrowUp(false);
    }
    if (sortArrowUp && event.target !== sortList && !sortList.contains(event.target)) {
      setSortArrowUp(false);
    }
  };
  document.addEventListener("click", hundleOutsideClick);

  /****************************************************************** */

  const serviceFilter = [ "FrontEnd", "Ui",, "backend" , "api", "ecommerce" ];
  const technologiesFilter = ["Reactjs", "vanilaJS" , "figma" , "Expressjs" , "expressjs" , "nodejs" , "mongodb"] ;
  return (
    <div className="Projects" id="Projects">
      <div className="projectsContainer container">
        <Title title="Projects" />
        <div className="filterSort">
          <div className="filter">
            <div className="filterBtn">
              <h3>Filter by</h3>
              <div onClick={hundleFitlerArrowIconClick}>
                {filterArrowUp ? (
                  <IoIosArrowUp className="filterArrow" />
                ) : (
                  <IoIosArrowDown className="filterArrow" />
                )}
              </div>
            </div>

            <ul className={filterArrowUp ? " active filterList" : "filterList"}>
              <li>
                <Filter title="Service" items={serviceFilter} />
              </li>
              <li>
                <Filter title="technologies" items={technologiesFilter} />
              </li>
            </ul>
          </div>
          <div className="sort">
            <div className="sortBtn">
              <h3>sort by</h3>
              <div onClick={hundleSortArrowIconClick}>
                {sortArrowUp ? (
                  <IoIosArrowUp className="sortArraow" />
                ) : (
                  <IoIosArrowDown className="sortArraow" />
                )}
              </div>
            </div>
            <ul className={sortArrowUp ? " active sortList" : "sortList"}>
              <li>
                <label htmlFor="newest">Newest</label>
                <input type="radio" name="sort" id="newest"  />
              </li>
              <li>
                <label htmlFor="latest">Latest</label>
                <input type="radio" name="sort" id="latest" />
              </li>
            </ul>
          </div>
        </div>

     <div className="projectList">
      {
        ProjectList.map((item,index)=>(
          <Project project = {item} />
        ))
      }
     </div>
        </div>
      </div>
   
  );
};

export default Projects;
