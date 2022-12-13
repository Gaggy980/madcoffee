import React from "react";
import "./contact.css";
import { BsInstagram } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { SiTiktok } from "react-icons/si";

const Contact = () => {
  return (
    <div name="contact" className="page-layout">
      <div className="contact-contener">
        <h3 className="contact-title">Contact</h3>
        <div className="contact-links">
          <h3>Come and grab your coffee</h3>
          <a
            href="https://www.google.com/maps/place/Mad+Coffee/@53.2855985,-6.3779438,17z/data=!3m1!4b1!4m5!3m4!1s0x4867757fa968eb5b:0x793bd17594d211bf!8m2!3d53.285589!4d-6.3779319?hl=en"
            target="_blank"
          >
            <ImLocation2 className="icon" size={60} />
          </a>
          <h4>Old Blassington Rd,Tallaght,Dublin</h4>
          <h3>Check out our social media</h3>
          <a href="https://www.instagram.com/madcoffee__/" target="_blank">
            <BsInstagram className="icon" size={60} />
          </a>
          <h4>Instagram</h4>
          <a
            href="https://www.tiktok.com/@madcoffeegftgym?_t=8Y0bbkj0PaP&_r=1"
            target="_blank"
          >
            <SiTiktok className="icon" size={60} />
          </a>
          <h4>TikTok</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
