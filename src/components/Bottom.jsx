import React from "react";
import "./bottom.scss";
const Bottom = ({ openApp }) => {
  // console.log(openApp);
  return (
    <div className="bot-bar">
      <div className="icons-container">
        <div className="icon windows">
          <img src="src/assets/windows.png" alt="#" />
        </div>
        <div className="search">
          <i className="ri-search-line"></i>
          <input type="text" placeholder="Search" />
        </div>
        <div className="icon taskview">
          <img src="src/assets/taskView.png" alt="#" />
        </div>
        <div className="icon github " onClick={() => openApp("github")}>
          <img src="src/assets/github.png" alt="#" />
        </div>
        <div className="icon terminal">
          <img src="src/assets/terminal.png" alt="#" />
        </div>
        <div className="icon mail">
          <img src="src/assets/mail.png" alt="#" />
        </div>
        <div className="icon spotify" onClick={() => openApp("spotify")}>
          <img src="src/assets/spotify.png" alt="#" />
        </div>
        <div className="icon notepad" onClick={() => openApp("notepad")}>
          <img src="src/assets/notepad.png" alt="#" />
        </div>
        <div className="icon pdf" onClick={() => openApp("resume")}>
          <img src="src/assets/pdf.png" alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
