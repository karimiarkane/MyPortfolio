import React, { useEffect, useState } from "react";
import "./Projects.css";
import Title from "../Title/Title";
import Filter from "./Filter/Filter";
import {IoIosArrowDown  , IoIosArrowUp} from "react-icons/io"


const Projects = () => {
  const [sortArrowUp,setSortArrowUp] = useState(false);
  const [filterArrowUp,setFilterArrowUp] = useState(false);

const hundleSortArrowIconClick = (event)=>{
setSortArrowUp(!sortArrowUp)
}

const hundleFitlerArrowIconClick = ()=>{
setFilterArrowUp(!filterArrowUp)
}

  const serviceFilter = ["Ecommerce" , "FrontEnd" , "Backend" , "gestion"]
  const technologiesFilter = ["Reactjs" , "Expressjs" , "Nodejs" , "wordpress"]
  return (
    <div className="Projects">
      <div className="projectsContainer container">
        <Title title="Projects" />
        <div className="filterSort">
          <div className="filter">
            <div className="filterBtn">
              <h3>Filter by</h3>
              <div onClick={hundleFitlerArrowIconClick} >
                {
                filterArrowUp  ? (  <IoIosArrowUp  className="filterArrow" /> ):  (<IoIosArrowDown  className="filterArrow"/> )
                             }
              </div>
            </div>

            <ul className= {filterArrowUp ? " active filterList" : "filterList"}>
              <li>
                <Filter title = "Service" items={serviceFilter}/>
              </li>
              <li>
                <Filter title ="technologies" items={technologiesFilter}/>
              </li>
            </ul>
 
          </div>
          <div className="sort">
          <div className="sortBtn">
              <h3>sort by</h3>
             <div onClick={hundleSortArrowIconClick}>
               {
                sortArrowUp   ?   <IoIosArrowUp  className="sortArraow"/> :  <IoIosArrowDown  className="sortArraow"/>
               }
             </div>
             
            </div>
            <ul className= {sortArrowUp ? " active sortList" : "sortList"} >
              <li>
                <label htmlFor="newest">Newest</label>
                <input type="radio" name="sort" id="newest" />
              </li>
              <li>
                <label htmlFor="latest">Latest</label>
                <input type="radio" name="sort" id="latest" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
