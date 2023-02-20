import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./Images/Logo.png";
import "./Home.css";

const Footer = () => {
  return (
    <>
      <div className="container">
        <nav>
          <div className="footer">
            <div className="footer_logo">
              <NavLink to="/">
                <img src={logo} alt="logo"></img>
              </NavLink>
              <p>Thanks to stick with me, Lets make a collaborative Journey</p>
            </div>

            <div className="footer_link">
              <p>
                Want know more about me, or just want to say hi! Feel free to
                message me.
              </p>
              <a href="#home">Eͤmͫaͣiͥl Mⷨeͤ</a>
              <a href="#home">LiͥnᴋⷦeͤdͩIͥn</a>
              <a href="#home">Dͩrͬiͥвввleͤ</a>
              <a href="#home">Вeͤhͪaͣncͨeͤ</a>
            </div>
          </div>
          <div className="copy_right">Copyright © MisbahHimel</div>
        </nav>
      </div>
    </>
  );
};

export default Footer;
