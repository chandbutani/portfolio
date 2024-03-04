import React from "react";
import "./Skills.scss";
import html from "../../Assets/images/1HTML.png";
import css from "../../Assets/images/2CSS.png";
import js from "../../Assets/images/3JS.png";
import jquery from "../../Assets/images/4JQuery.png";
import reactLogo from "../../Assets/images/5React.png";
import scss from "../../Assets/images/6Sass.png";
import mui from "../../Assets/images/7MUI.png";
import github from "../../Assets/images/8Github.png";

const Skills = () => {
  const mySkills = [
    {
      id: 1,
      logo: html,
      label: "HTML",
    },
    {
      id: 2,
      logo: css,
      label: "CSS",
    },
    {
      id: 3,
      logo: js,
      label: "JS",
    },
    {
      id: 4,
      logo: jquery,
      label: "JQuery",
    },
    {
      id: 5,
      logo: reactLogo,
      label: "React.Js",
    },
    {
      id: 6,
      logo: scss,
      label: "SASS",
    },
    {
      id: 7,
      logo: mui,
      label: "MUI",
    },
    {
      id: 8,
      logo: github,
      label: "GitHub",
    },
  ];
  return (
    <>
      <div className="skillWrap">
        <div className="headingSkill">My Skills</div>
        {/* <fieldset className="skillField">
          <legend className="skillLable">My Skills</legend> */}
        <div className="cardWrap">
          {mySkills.map(({ id, logo, label }) => (
            <div className="card" key={id}>
              <fieldset className="cardField">
                <legend className="cardLable">{label}</legend>
                <img src={logo} alt="logo" />
              </fieldset>
            </div>
          ))}
        </div>
        {/* </fieldset> */}
      </div>
    </>
  );
};

export default Skills;
