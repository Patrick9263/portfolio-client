import React from "react";
import MyCard from "../Reusable/MyCard";
import uconn from "./uconn.png";

const Education = () => {
  return (
    <div className="mainSection">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p className="pageHeader">Education</p>
        <br />
        <MyCard title="University of Connecticut">
          <li>Bachelor of Science in Engineering</li>
          <li>Major in Computer Science and Engineering</li>
          <li>Concentration in Software Design and Development</li>
          <li>Minor in Mathematics</li>
        </MyCard>
      </div>
      <div className="icons">
        <img src={uconn} alt="uconn" />
      </div>
    </div>
  );
};

export default Education;
