import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/MadSmiley.svg";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleMenu = () => {
    nav ? setNav(false) : setNav(true);
  };

  return (
    <div className="navbar">
      <div className="nav-layout">
        <Link to="home" smooth={true} offset={-80} duration={500}>
          <img src={Logo} alt="logo smiley" className="logo" />
        </Link>
        {/* web menu */}
        <ul className="links-list">
          <li className="list-item">
            <Link to="home" smooth={true} offset={-30} duration={500}>
              Home
            </Link>
          </li>
          <li className="list-item">
            <Link to="about" smooth={true} offset={0} duration={500}>
              About us
            </Link>{" "}
          </li>
          <li className="list-item">
            <Link to="menu" smooth={true} offset={10} duration={500}>
              Menu
            </Link>{" "}
          </li>
          <li className="list-item">
            <Link to="contact" smooth={true} offset={10} duration={500}>
              Contact
            </Link>{" "}
          </li>
        </ul>
        {!nav ? (
          <GiHamburgerMenu
            onClick={toggleMenu}
            size={30}
            className="mobnav-btn"
          />
        ) : (
          <AiOutlineClose
            onClick={toggleMenu}
            size={30}
            className="mobnav-btn"
          />
        )}
        {/* mobile menu */}
        <div className={nav ? "mobile-menu" : "mobile-menu-hidden"}>
          <ul className="mobile-list">
            <li className="list-item">
              <Link
                to="home"
                onClick={toggleMenu}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link
                to="about"
                onClick={toggleMenu}
                smooth={true}
                offset={-10}
                duration={500}
              >
                About us
              </Link>{" "}
            </li>
            <li className="list-item">
              <Link
                to="menu"
                onClick={toggleMenu}
                smooth={true}
                offset={-40}
                duration={500}
              >
                Menu
              </Link>{" "}
            </li>
            <li className="list-item">
              <Link
                to="contact"
                onClick={toggleMenu}
                smooth={true}
                offset={30}
                duration={500}
              >
                Contact
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
