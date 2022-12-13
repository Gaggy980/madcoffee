import React from "react";
import Cup from "../../assets/coffeecup.png";
import "./about.css";

const About = () => {
  return (
    <div name="about" className="page-layout media">
      <div className="content-contener">
        <h2 className="about-header">About Us</h2>
        <article className="article">
          Grab your early coffee and breakfast before you go to work, after your
          workout at our shack in Tallaght.Best local coffe in the hood.
          <br />
          We're keepin' it real.
        </article>
        <div className="main-content">
          <img src={Cup} alt="" className="cup-img" />
          <section className="working-time">
            <h2 className="list-header">We're opened:</h2>
            <ul className="time-list">
              <li>Monday_______ 7.30 a.m.-3.30 p.m.</li>
              <li>Tuesday_______ 7.30 a.m.-3.30 p.m.</li>
              <li>Wednesday_____ 7.30 a.m.-3.30 p.m.</li>
              <li>Thursday_______ 7.30 a.m.-3.30 p.m.</li>
              <li>Friday_________ 7.30 a.m.-3.30 p.m.</li>
              <li>Saturday_______ 9 a.m.-3 p.m.</li>
              <li>Sunday________ 9 a.m.-3 p.m.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
