import React from "react";
import "./Home.scss";

// https://github.com/jscottsmith/react-scroll-parallax#banner-layers-prop
// https://www.iconshock.com
// https://jacekjeznach.com/
// https://www.heropatterns.com/

// filter generator:
// https://codepen.io/sosuke/pen/Pjoqqp
// https://tests.christianoliff.com/hex-to-css-filter-generator/

// https://fontisto.com/icons

// https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#named-components

const Home = () => {
  return (
    <>
      <div className="home ">
        <p className="homeTitle" style={{ fontSize: "40px" }}>
          Hi, I&apos;m Patrick!
        </p>
        <p className="homeTitle" style={{ fontSize: "40px" }}>
          I&apos;m a software engineer at Travelers.
        </p>
        <p className="" style={{ color: "gray" }}>
          React and JavaScript Developer
        </p>
      </div>
    </>
  );
};

export default Home;
