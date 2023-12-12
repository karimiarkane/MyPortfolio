import React from "react";
import Title from "../Title/Title";
import "./Services.css";
import Service from "./Service/Service";
import ecommeceImg from "../../assets/ecommerce.jpg";
import apiImg from "../../assets/api.png";
import backendImg from "../../assets/backend.jpg";
import frontendImg from "../../assets/frontend.jpg";
import seo1Img from "../../assets/seo1.jpg";
import teachingImg from "../../assets/teaching.jpg";
import uiuxImg from "../../assets/uiux.jpg";

const Services = () => {
  const servicesArray = [
    {
      imageSrc: frontendImg,
      serviceName: "front end ",
      serviceDesciption: " I specialize in crafting interactive and responsive web applications using ReactJS. I am well-versed in HTML and CSS, creating seamless and aesthetically pleasing user interfaces.",
    },
    {
      imageSrc: uiuxImg,
      serviceName: "UI/UX",
      serviceDesciption: "I specialize in translating ideas into visually appealing designs",
    },
    // {
    //   imageSrc: ecommeceImg,
    //   serviceName: "Ecommerce",
    //   serviceDesciption: "i used to create ecommerce website",
    // },
    // {
    //   imageSrc: teachingImg,
    //   serviceName: "teaching ",
    //   serviceDesciption: "i used to teach  webdev",
    // },
    // {
    //   imageSrc: seo1Img,
    //   serviceName: "seo",
    //   serviceDesciption: "i used to create high seo website",
    // },
    
    // {
    //   imageSrc: backendImg,
    //   serviceName: "backend",
    //   serviceDesciption: "i used to create robust backend for website",
    // },
    // {
    //   imageSrc: apiImg,
    //   serviceName: "api",
    //   serviceDesciption: "i used to create api  and integrate them",
    // },
  ];
  return (
    <div className="Services section" id="Services">
         <Title title="Services" />;
      <div className="services-container container">
     
        {servicesArray.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
