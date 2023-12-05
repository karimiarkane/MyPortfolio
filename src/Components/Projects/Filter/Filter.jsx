import React from 'react'
import './Filter.css'

const Filter = ({title,items} ) => {
    
  return (
  <div className="filterComponent">
    <div className="filterContainer container">
        <h3> {title} </h3>
        <ul>
            {  items.map((item) =>(
            <li>
                <label htmlFor={item}>{item}</label>
                <input type="checkbox" name={title} id={item} />
            </li>
            ))} 
        </ul>
    </div>
  </div>
  )
}

export default Filter