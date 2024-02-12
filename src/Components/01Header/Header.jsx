import React, { useState } from "react";
import "./Header.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { GiMoon } from "react-icons/gi";
import { BsEmojiSunglasses } from "react-icons/bs";
import ToggleTheme from "../01ToggleTheme/ToggleTheme";

const Header = () => {
  const [isActive, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!isActive);
  };

  return (
    <>
      <header className="header">
        <section className="navbar">
          <div className="logo">
            <span className="letters">M</span>
            <span>
              <GiMoon />
            </span>
            <span>
              <BsEmojiSunglasses />
            </span>
            <span className="letters">N</span>
          </div>
          <div className="link-btn">
            <ul className={`links ${isActive ? "active" : ""}`}>
              {isActive && (
                <div className="nav-close" onClick={toggleMenu}>
                  <IoCloseCircleOutline />
                </div>
              )}

              <li>About</li>
              <li>Project</li>
              <li>Contact</li>
            </ul>
            <div className="icons">
              <div className="menu-btn" onClick={toggleMenu}>
                <TbMenuDeep />
              </div>
              <div className="theme-btn">
                <ToggleTheme />
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
