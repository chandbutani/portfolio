import React from "react";
import "./Profile.scss";
import SocialMedia from "../00SocialMedia/SocialMedia";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="intro">
          <div className="glass">
            <span className="coder">{`<coder/>`}</span>
            <div className="name">Chand Butani</div>
            <div className="frontEnd">A Front-End Developer</div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
