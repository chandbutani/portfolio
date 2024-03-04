import React from "react";
import "./SocialMedia.scss";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const SocialMedia = () => {
  const socialLinks = [
    {
      id: 1,
      logo: (
        <>
          <SiGmail />
        </>
      ),
      href: "mailto:chandbutanee@gmail.com",
      arealabel: "Mail",
    },
    {
      id: 2,
      logo: (
        <>
          <FaGithub />
        </>
      ),
      href: "https://github.com/chandbutani",
      arealabel: "Github",
    },
    {
      id: 3,
      logo: (
        <>
          <IoLogoLinkedin />
        </>
      ),
      href: "https://www.linkedin.com/in/chand-butani/",
      arealabel: "Linkedin",
    },
  ];
  return (
    <>
      <div className="mediaLogo">
        {socialLinks.map(({ id, logo, href, arealabel }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={arealabel}
          >
            {logo}
          </a>
        ))}
      </div>
    </>
  );
};
export default SocialMedia;
