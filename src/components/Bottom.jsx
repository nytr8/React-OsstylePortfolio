import React, { useState } from "react";
import "./bottom.scss";

const Bottom = ({ openApp }) => {
  const [searItem, setsearItem] = useState("");

  const handleSearch = () => {
    if (searItem.trim() === "") return;
    openApp(searItem.toLowerCase());
    setsearItem("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="bot-bar">
      <div className="dock-container">
        {/* Windows / Start */}
        <div className="icon-box win-btn">
          <img src="src/assets/icons8-eagle-67.png" alt="start" />
        </div>

        {/* Search Bar */}
        <div className="search-wrapper">
          <input
            value={searItem}
            type="text"
            placeholder="SEARCH SYSTEM..."
            onChange={(e) => setsearItem(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="search-btn" onClick={handleSearch}>
            <i className="ri-search-line"></i>
          </button>
        </div>

        <div className="divider"></div>

        {/* Apps Group */}
        <div className="apps-group">
          <div className="icon-box" onClick={() => openApp("github")}>
            <img src="src/assets/github.png" alt="github" />
          </div>
          <div className="icon-box" onClick={() => openApp("terminal")}>
            <img src="src/assets/terminal.png" alt="terminal" />
          </div>
          <div
            className="icon-box mail"
            onClick={() => window.open("mailto:srutidevbarman2002@gmail.com")}
          >
            <img src="src/assets/mail.png" alt="mail" />
          </div>
          <div className="icon-box" onClick={() => openApp("spotify")}>
            <img src="src/assets/spotify.png" alt="spotify" />
          </div>
          <div className="icon-box" onClick={() => openApp("notepad")}>
            <img src="src/assets/notepad.png" alt="notepad" />
          </div>
          <div className="icon-box" onClick={() => openApp("resume")}>
            <img src="src/assets/pdf.png" alt="resume" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
