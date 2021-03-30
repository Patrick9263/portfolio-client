import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.scss";

import logo from "./logo.png";
import home from "../assets/icons/png/interfaces/home.png";
import about from "../assets/icons/png/interfaces/nav-icon-list-a.png";
import career from "../assets/icons/png/editors/file-1.png";
import education from "../assets/icons/png/interfaces/person.png";
import projects from "../assets/icons/png/interfaces/code.png";
import contact from "../assets/icons/png/interfaces/email.png";
import gitHub from "../assets/icons/png/brand/github.png";
import linkedin from "../assets/icons/png/brand/linkedin.png";

const Navigation = () => {
  const purpleFilter =
    "invert(15%) sepia(98%) saturate(5270%) hue-rotate(264deg) brightness(92%) contrast(89%)";
  const whiteFilter =
    "invert(100%) sepia(100%) saturate(0%) hue-rotate(248deg) brightness(108%) contrast(101%)";
  const imgStyle = {
    width: "30%",
    filter: whiteFilter,
  };
  const selectedStyle = { ...imgStyle, filter: purpleFilter };
  const mediaStyle = {
    width: "25%",
    marginBottom: "20px",
    filter: purpleFilter,
  };

  const location = useLocation();
  const getImgStyle = (path) =>
    location.pathname === path ? selectedStyle : imgStyle;

  const linkButton = (to, image, altName, customStyle) => (
    <NavLink to={to} className="navLinks">
      <img
        src={image}
        alt={altName}
        style={{ ...getImgStyle(to), ...customStyle }}
      />
    </NavLink>
  );
  const socialMediaButton = (url, image, altName) => (
    <a href={url} target="_blank" rel="noreferrer" className="navBar">
      <img src={image} alt={altName} style={mediaStyle} />
    </a>
  );
  return (
    <div className="navBar">
      <img src={logo} alt=".logo()" style={{ width: "100%" }} />

      <div>
        {linkButton("/", home, ".home()", { width: "35%" })}
        {linkButton("/about", about, ".about()", {})}
        {linkButton("/career", career, ".career()", {})}
        {linkButton("/education", education, ".education()", {})}
        {linkButton("/projects", projects, ".projects()", { width: "40%" })}
        {linkButton("/contact", contact, ".contact()", { width: "35%" })}
      </div>

      <div>
        {socialMediaButton(
          "https://github.com/Patrick9263",
          gitHub,
          ".gitHub()"
        )}
        {socialMediaButton(
          "https://www.linkedin.com/in/patrick-smith1",
          linkedin,
          ".linkedIn()"
        )}
      </div>
    </div>
  );
};

export default Navigation;
