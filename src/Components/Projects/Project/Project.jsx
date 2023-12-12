import React from 'react'
import "./Project.css"

const Project = ({project}) => {
  return (
    <div className="project">
        <div className="projectContainer">
            <img src={project.image} alt="" />
            <h3 className='projectTitle'>{project.title}</h3>
            <div className="discription">{project.description}</div>
            <div className="view-demo">
                <input type="button" value="github" className='github' />
                {false  &&   <input type="button" value="demo" /> }
            </div>
        </div>
    </div>
  )
}

export default Project