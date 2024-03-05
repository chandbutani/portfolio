import React from "react";
import SocialMedia from "../00SocialMedia/SocialMedia";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <div className="compoWrap">
        <fieldset className="comFieldset">
          <legend className="heading">Contact Me...</legend>
        </fieldset>

        <div className="textWrap">
          <p className="p1">Have a Cool Project Ideas !!??</p>
          <p className="p1">Need Help Developing Your Application !!?? </p>
          <p className="p2">let's get in Touch...</p>

          <fieldset className="fieldSet">
            <legend>
              <SocialMedia />
            </legend>
          </fieldset>

          <p className="p2">Thanks for Scrolling</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
