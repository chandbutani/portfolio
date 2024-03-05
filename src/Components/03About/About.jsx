import React from "react";
import "./About.scss";

function About() {
  return (
    <>
      <div className="compoWrap">
        <fieldset className="comFieldset">
          <legend className="heading">About Me...</legend>
        </fieldset>
        <p className="aboutMe">
          Hello, I'am Chand Butani. A Passionate
          <span>
            <b> Front-End Developer </b>
          </span>
          with a strong foundation in
          <span>
            <b> ReactJS </b>
          </span>
          and a knack for building intuitive and user-friendly web interfaces. I
          enjoy crafting pixel-perfect experiences that are both functional and
          visually appealing. Driven by a desire to continuously learn and
          improve, I stay up-to-date with the latest technologies and trends in
          the front-end development landscape.
        </p>
      </div>
    </>
  );
}

export default About;
