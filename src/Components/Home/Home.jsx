import React from 'react'
import '../../Components/Home/Home.css'
import Image2 from './enlarge_myimage.jpg'
import file from './Black White Minimalist CV Resume.pdf'





const Home = () => {
    
    
  return (
    <div className="home section" id='Home' style={{marginTop :'60px'}}>
        <div className="container home-container">
            <div className="left-side">
                <div className="text">
                    <p className='salutation'>Hello there welcome to my website</p>
                    <h1 className='first-last-name'>I'am karim Iarkane</h1>
                    <h1 className='position'>Full stack Web developer designer </h1>
                </div>
                <div className="btn home-btn">
                    <a href={file} download={file}>Download cv</a>
                    <button>Contact Me</button>

                </div>
            </div>

            <div className="right-side">
                <img className='home-image' src={Image2} alt="mkachha"  />
            </div>
        </div>
    </div>
  )
}

export default Home