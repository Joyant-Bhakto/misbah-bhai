import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import BookACall from "../Components/BookACall";
import logo from "../Assets/Logo.png";
import "./Navigation.css";

const Navigation = () => {
  const [sticky, setSticky] = useState(false);
  const stickyHeader = () => {
    if (window.scrollY >= 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", stickyHeader);
  return (
    <>
      <div className="container">
        <nav>
          <div className={sticky ? "header sticky" : "header"}>
            <div className="nav-logo">
              <NavLink to="/" className="title">
                <img src={logo} alt="logo"></img>
                <span>Misbah Himel</span>
              </NavLink>
            </div>
            <div className="nav-link ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav-hover link"
                }
              >
                Work
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav-hover link"
                }
              >
                About
              </NavLink>
              <a href="https://www.google.com/" className="nav-hover link">
                Resume
              </a>
              <BookACall />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
