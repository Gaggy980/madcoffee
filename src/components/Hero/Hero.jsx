import React from "react";
import Smile from "../../assets/MadSmiley.svg";
import "./hero.css";

const Hero = () => {
  return (
    <div name="home" className="page-layout hero">
      <h1 className="header">
        Mad <span>Coffee</span>
      </h1>
      <p>est. 2021</p>
      <div className="herosection">
        <p className="text-message">Start your day with a Smile!</p>
        <img src={Smile} alt="" className="smile" />
        <h2 className="location">Tallaght</h2>
      </div>
    </div>
  );
};

export default Hero;
