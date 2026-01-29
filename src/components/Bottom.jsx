import React from "react";
import "./bottom.scss";
const Bottom = () => {
  function handleClick(target) {
    console.log(target);
  }
  return (
    <div className="bot-bar">
      <div
        className="icons-container"
        onClick={(e) => {
          handleClick(e.target);
        }}
      >
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
        <div className="icon github ">
          <img src="src/assets/github.png" alt="#" />
        </div>
        <div className="icon terminal">
          <img src="src/assets/terminal.png" alt="#" />
        </div>
        <div className="icon mail">
          <img src="src/assets/mail.png" alt="#" />
        </div>
        <div className="icon spotify">
          <img src="src/assets/spotify.png" alt="#" />
        </div>
        <div className="icon notepad">
          <img src="src/assets/notepad.png" alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
