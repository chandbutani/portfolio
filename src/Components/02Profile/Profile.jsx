import React from "react";
import "./Profile.scss";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="intro">
          <div className="glass">
            <span className="coder">{`<coder>`}</span>
            <div className="name">Chand Butani</div>
            <div className="frontEnd">A Front-End Developer</div>

            <div className="mediaLogo">
              <a
                href="mailto:chandbutanee@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <SiGmail />
              </a>
              <a
                href="https://github.com/chandbutani"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/chand-butani/"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

// import { SiGmail } from "react-icons/si";
// <SiGmail />;

// import { FaGithub } from "react-icons/fa";
// <FaGithub />;

// import { IoLogoLinkedin } from "react-icons/io5";
// <IoLogoLinkedin />;
