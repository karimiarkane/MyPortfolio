import React, { useState } from 'react'
import "./AboutMe.css"
import Title from './Title/Title'
import Image3 from '../Home/enlarge_myimage.jpg'


const AboutMe = () => {
  let formation = "i studied 2 years at esi and then i moved into bbzi studied 2 years at esi and then i moved into bbzi studied 2 years at esi and then i moved into bbzi studied 2 years at esi and then i moved into bbzi studied 2 years at esi and then i moved into bbzi studied 2 years at esi and then i moved into bbzi studied 2 years at esi and then i moved into bbz"
  let experience = "i built some websites like e commerce and portfolio website ..."
  let skills = "i know html css js and react c java github .."
  let karim = <div>karim hada an</div>

  let [diplayedText,setdiplayedText]=useState(formation)
  let [activeBtn,setactiveBtn]= useState('')

  function hundleAboutClick(event,text){
    setdiplayedText(text) // setting the text that will be displayed
    let threeBtns = document.getElementsByClassName('AboutClick')
    for (let i = 0; i < threeBtns.length; i++) {
      threeBtns[i].classList.remove('active-btn'); 
    }
   event.target.classList.add("active-btn")


  }
 


  return (
    <>
     <Title title="AboutMe"/>
     <div className="about-me">
    <div className="about-me-container container">
    <div className="image left-about">
        <img src={Image3} className="about-image"alt="mkachha"  />
        </div>
        <div className='right-about'>
          <h1 className='more-about'>Get to know me</h1>
          <div className='btns'>
            <button className='AboutClick active-btn' onClick={(event)=>hundleAboutClick(event,formation)}>Education</button>
            <button className='AboutClick'onClick={    (event)=>hundleAboutClick(event, skills)}>Skills</button>
            <button className='AboutClick'onClick={(event)=>hundleAboutClick(event, karim)}>Experience</button>
          </div>
          <div className='about-text'>{diplayedText}</div>
        </div>
       
     
       
    </div>
   </div>
     
   
    </>
   
  )
}

export default AboutMe