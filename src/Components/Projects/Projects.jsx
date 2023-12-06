import React, { useEffect, useState } from "react";
import "./Projects.css";
import Title from "../Title/Title";
import Filter from "./Filter/Filter";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Projects = () => {
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

  const serviceFilter = ["Ecommerce", "FrontEnd", "Backend", "gestion"];
  const technologiesFilter = ["Reactjs", "Expressjs", "Nodejs", "wordpress"];
  return (
    <div className="Projects">
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
