import React from 'react'
import "./Service.css"
 const Service = ({service}) => {
   
  return (
    <div className="Service">
        <div className="Service-container container">
            <img src={service.imageSrc} alt="" />
            <h3>{service.serviceName}</h3>
            <p>{service.serviceDesciption}</p>
        </div>
    </div>
  )
}
export default Service
