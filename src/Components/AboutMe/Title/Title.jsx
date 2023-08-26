import React from 'react'
import "./Title.css"
import { faLessThan , faSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Title = (props) => {
  return (
   <div className="title">
    <div className="title-container">
      <FontAwesomeIcon className="open-tag"  icon={faLessThan} />
      <div className='title-text'>{props.title}</div>
      <FontAwesomeIcon className='slash' icon={faSlash}  rotation={90} />
      <FontAwesomeIcon className="close-tag" icon={faLessThan}   rotation={180} />
    

    </div>
   </div>
  )
}

export default Title