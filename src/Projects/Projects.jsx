import React from "react";
import MyCard from "../Reusable/MyCard";
import dna from "./dna.svg";
import hackathon from "./hackathon.jpg";

const Education = () => {
  return (
    <div className="mainSection">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p className="pageHeader">Projects</p>
        <br />
        <MyCard title="Senior Design Project">
          <li>
            Developed a web-based application which allows pathologists easy
            access to Copy Number Variation (CNV) calling using Whole Genome
            Sequencing (WGS) data to improve research.
          </li>
          <li>
            Application cross referenced any CNVs found with reputable clinical
            databases to identify CNVs widely known to be associated with
            disease.
          </li>
          <li>Built a clinically relevant copy number variation database.</li>
          <li>
            Displayed copy number variations and clinical annotations to
            pathologists with a user-friendly GUI.
          </li>
        </MyCard>
        <MyCard title="UConn Hackathon">
          <li>
            The Hackathon theme was to find and solve present-day problems
            involving sports and games within 24 hours
          </li>
          <li>
            My team&apos;s solution to littering at sports venues was to develop
            a mobile application (Android) to promote recycling at sports
            venues. Users would place recyclables in a machine at the venue
            which would scan their QR code in the app. This would update their
            rewards in the app (e.g. points toward discounts on future game
            tickets, free t-shirts, etc.)
          </li>
        </MyCard>
      </div>
      <div className="icons">
        <img src={dna} alt="dna" className="React-logo" />
        <img src={hackathon} alt="hackathon" className="smallIconStyle" />
      </div>
    </div>
  );
};

export default Education;
