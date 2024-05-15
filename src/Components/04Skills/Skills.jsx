import React from "react";
import "./Skills.scss";
import html from "../../Assets/images/S1HTML.png";
import css from "../../Assets/images/S2CSS.png";
import js from "../../Assets/images/S3JS.png";
import jquery from "../../Assets/images/S4JQuery.png";
import reactLogo from "../../Assets/images/S5React.png";
import scss from "../../Assets/images/S6Sass.png";
import mui from "../../Assets/images/S7MUI.png";
import github from "../../Assets/images/S8Github.png";

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
    // {
    //   id: 8,
    //   logo: github,
    //   label: "GitHub",
    // },
  ];
  return (
    <>
      <div className="compoWrap">
        <fieldset className="comFieldset">
          <legend className="heading">My Skills...</legend>
        </fieldset>
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
      </div>
    </>
  );
};

export default Skills;
