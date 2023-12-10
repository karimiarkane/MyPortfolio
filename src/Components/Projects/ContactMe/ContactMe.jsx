import React, { useRef } from "react";
import "./ContactMe.css";
import Title from "../../Title/Title";
import emailjs from '@emailjs/browser';

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
      <div className="contactMeContainer">
        <Title title="Contact Me" />

        <form ref={form} onSubmit={sendEmail} >
        
          <input type="text" name="user_name"  placeholder="full name " />
          <input type="email" name="user_email" placeholder="your email"/>
          <textarea name="message"  placeholder="message"/>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
