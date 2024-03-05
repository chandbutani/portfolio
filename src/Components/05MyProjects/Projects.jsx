import React from "react";
import "./Projects.scss";
import portfolioSS from "../../Assets/images/P1Portfolio SS.png";
import toDoSS from "../../Assets/images/P2ToDo App SS.png";
import moonTravelSS from "../../Assets/images/P3MoonTravel SS.png";

const Projects = () => {
  const myProjects = [
    {
      id: 1,
      pName: "Personal Portfolio Website",
      pDetail:
        "This website serves as a digital showcase of my skills, experiences and projects. Crafted with ReactJS and SASS, it embodies my passion for innovation and creativity in web development. So Explore my website.",
      pstack: "React   JavaScript   SASS",
      deployLink: "https://chandbutani.github.io/portfolio/",
      pGitHub: "https://github.com/chandbutani/portfolio",
      pImage: portfolioSS,
    },
    {
      id: 2,
      pName: "ToDo App",
      pDetail:
        "My TODO app created in ReactJs to organize and prioritize activities effectively. Enhanced styling capabilities provided by SASS with the features of Create, Read, Edit and Delete (CRUD). So Explore my website Which is deployed on GitHub Pages.",
      pstack: "React   JavaScript   SASS",
      deployLink: "https://chandbutani.github.io/todo-app/",
      pGitHub: "https://github.com/chandbutani/todo-app",
      pImage: toDoSS,
    },
    {
      id: 3,
      pName: "Tour & Travel Website",
      pDetail:
        "Embark on a journey of exploration and discovery with our interactive tour and travel website. Crafted with HTML, SASS, and JavaScript, SwiperJS. So Explore my website Which is deployed on GitHub Pages.",
      pstack: "HTML   SASS   JavaScript   SwiperJS",
      deployLink: "https://chandbutani.github.io/Travel-Website/",
      pGitHub: "https://github.com/chandbutani/Travel-Website",
      pImage: moonTravelSS,
    },
  ];

  return (
    <>
      <div className="compoWrap">
        <fieldset className="comFieldset">
          <legend className="heading">Projects</legend>
        </fieldset>
        {myProjects.map((value, i) => (
          <div className="projectWrap">
            <div className="pimg">
              <img src={value.pImage} alt="ProjectSS" />
            </div>
            <div className="pData">
              <p className="pheading">
                {value.id}
                {". "}
                {value.pName}
              </p>

              <p className="pDetail">{value.pDetail}</p>
              <p className="stack">
                <span className="stackHead">{"Stack: "}</span>
                {value.pstack}
              </p>
              <div className="plinks">
                <a
                  href={value.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Visit Site
                </a>

                <a
                  href={value.pGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Project Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
