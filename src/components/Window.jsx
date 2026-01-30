import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const Window = ({
  children,
  width = "500px",
  height = "400px",
  appName,
  closeApp,
}) => {
  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: width,
        height: height,
      }}
      minWidth={300}
      minHeight={200}
      bounds="window"
      className="brutal-window-wrapper"
    >
      <div className="window-inner">
        {/* HEADER BAR */}
        <div className="window-header">
          <div className="title">{appName.toUpperCase()}</div>

          <div className="controls">
            <button className="ctrl-btn">
              <span className="dash">-</span>
            </button>
            <button className="ctrl-btn">
              <i className="ri-file-copy-line"></i>
            </button>
            <button
              className="ctrl-btn close"
              onClick={() => closeApp(appName)}
            >
              <i className="ri-close-line"></i>
            </button>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="window-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default Window;
