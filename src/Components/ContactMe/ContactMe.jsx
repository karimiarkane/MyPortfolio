import React, { useRef } from "react";
import "./ContactMe.css";
import Title from "../Title/Title";
import emailjs from '@emailjs/browser';
import img from "./enlarge_myimage.jpg"

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fnjd59c', 'template_z2the3d', form.current, "fD08be2oHXiLKb06p")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    <div className="ContactMe">
      <div className="contactMeContainer container">
        <Title title="Contact Me" />

        <div className="wrapper">
         
          <form ref={form} onSubmit={sendEmail} >
          
            <input type="text" name="user_name"  placeholder="full name " required />
            <input type="email" name="user_email" placeholder="your email" required/>
            <textarea name="message"  placeholder="message" required/>
            <input type="submit" className="submitBtn" value="Send"  />
          </form>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
