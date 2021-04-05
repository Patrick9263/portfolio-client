import React from "react";
import MyCard from "../Reusable/MyCard";
import travelers from "./travelers.png";
import uconn from "./uconn.png";

const Career = () => {
  return (
    <div className="mainSection">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p className="pageHeader">Career</p>
        <br />
        <MyCard
          title="Travelers Insurance"
          subTitle="Associate Software Engineer"
        >
          <li>Currently in a rotational program within personal insurance:</li>
          <li>
            <b>Year 1</b> - Ab Initio, Teradata/SQL, Jenkins/UCD, PowerShell.
            Used Ab Initio and Teradata as an ETL tool to consume and manipulate
            data used for analytics further down the data stream in order to make business decisions.
            Also worked with Jenkins/UCD and PowerShell to automate SQL script deployment.
          </li>
          <li>
            <b>Year 2</b> - React/JavaScript, C#, PowerShell.
            Worked on an application used by agents to quote and issue insurance policies
            made with a custom framework and React.
            Also worked with C# for the backend as well as PowerShell to automate development tasks.
          </li>
        </MyCard>
        <MyCard
          title="UConn Information Technology Services"
          subTitle="Support Specialist Lead"
        >
          <li>
            Re-imaged and set up computers as well as troubleshooted software/hardware-related
            problems for faculty members to maintain and improve faculty productivity.
          </li>
          <li>
            Created an Electron app to graphically run PowerShell scripts. This
            was used for automatically performing setup tasks for PCs
            with a fresh install of Windows.
          </li>
          <li>
            Hard drives were encrypted on these machines to protect important data.
          </li>
        </MyCard>
      </div>
      <div className="icons">
        <img src={travelers} alt="travelers" className="smallIconStyle" />
        <img src={uconn} alt="uconn" className="smallIconStyle" />
      </div>
    </div>
  );
};

export default Career;
