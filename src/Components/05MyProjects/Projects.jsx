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
        "This website serves as a digital showcase of my skills, experiences, and projects. Crafted with ReactJS and SASS, it embodies my passion for innovation and creativity in web development. Through this platform, I aim to share my journey, highlight my expertise, and connect with like-minded individuals and opportunities. So Explore my website Which is deployed on GitHub Pages",
      stack: ["React", "JavaScript", "SCSS"],
      deployLink: "",
      pImage: portfolioSS,
    },
    {
      id: 2,
      pName: "ToDo App",
      pDetail:
        "My TODO app created in ReactJs with facilitates efficient task management to organize and prioritize their activities effectively. Enhanced styling capabilities provided by SASS with the features of Create, Read, Edit and Delete (CRUD). So Explore my website Which is deployed on GitHub Pages.",
      stack: ["React", "JavaScript", "SCSS"],
      deployLink: "https://chandbutani.github.io/todo-app/",
      pImage: toDoSS,
    },
    {
      id: 3,
      pName: "Tour & Travel Website",
      pDetail:
        "Embark on a journey of exploration and discovery with our interactive tour and travel website. Crafted with HTML, CSS, and JavaScript, SwiperJS. So Explore my website Which is deployed on GitHub Pages",
      stack: ["HTML", "SCSS", "JavaScript", "SwiperJs"],
      deployLink: "https://chandbutani.github.io/Travel-Website/",
      pImage: moonTravelSS,
    },
  ];

  return (
    <>
      <div className="compoWrap">
        <div className="heading">Projects</div>
      </div>
    </>
  );
};

export default Projects;
