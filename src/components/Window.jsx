import React, { Children } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const Window = ({
  children,
  width = "40vw",
  height = "50vh",
  appName,
  closeApp,
}) => {
  return (
    <Rnd
      default={{
        x: 500,
        y: 200,
        width: width,
        height: height,
      }}
    >
      <div className="top">
        <div>
          <p className="dash">-</p>
        </div>
        <div>
          <i className="copy ri-file-copy-line"></i>
        </div>
        <div className="cancel"
          onClick={() => {
            closeApp(appName);
          }}
        >
          <i className="cross ri-close-line"></i>
        </div>
      </div>
      <div className="bot">{children}</div>
    </Rnd>
  );
};

export default Window;
