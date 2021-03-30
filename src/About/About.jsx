import React from "react";
import MyCard from "../Reusable/MyCard";
import react from "./react.svg";
import python from "./python.svg";
import cpp from "./cpp.svg";

const About = () => {
  return (
    <div className="mainSection">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p className="pageHeader">About Me</p>
        <br />
        <MyCard title="Overview">
          Software engineer at Travelers in a rotational program. Currently in
          the second year of the program, working with React/JavaScript, C# and
          PowerShell.
        </MyCard>
        <MyCard title="Skills">
          <li>
            React, JavaScript, HTML5, (S)CSS, REST APIs, Markdown, AsciiDocs
          </li>
          <li>Python, C/C++, C#, Java, MatLab</li>
          <li>PowerShell, Bash, MySQL, Git</li>
          <li>PC hardware</li>
        </MyCard>
        <MyCard title="Interests">
          <li>Photography</li>
          <li>Videogames</li>
          <li>Travel</li>
        </MyCard>
      </div>
      <div className="icons">
        <img
          src={react}
          alt="react"
          className="React-logo"
          style={{ height: "120px", width: "120px" }}
        />
        <img
          src={python}
          alt="python"
          className="React-logo"
          style={{ height: "120px", width: "120px" }}
        />
        <img
          src={cpp}
          alt="cpp"
          className="React-logo"
          style={{ height: "120px", width: "120px" }}
        />
      </div>
    </div>
  );
};

export default About;
