import React from "react";
import Window from "./Window";
import "./resume.scss";
const Resume = ({ appName, closeApp }) => {
  return (
    <Window appName={appName} closeApp={closeApp}>
      <div className="resume-div">
        <iframe src="/assets/demo_resume.pdf" frameborder="0"></iframe>
      </div>
    </Window>
  );
};

export default Resume;
