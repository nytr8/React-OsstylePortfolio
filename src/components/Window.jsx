import React, { Children } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const Window = ({ children }) => {
  return (
    <Rnd
      default={{
        x: 500,
        y: 200,
        width: 800,
        height: 550,
      }}
    >
      <div className="top">
        <div>
          <p className="dash">-</p>
        </div>
        <div>
          <i className="copy ri-file-copy-line"></i>
        </div>
        <div>
          <i className="cross ri-close-line"></i>
        </div>
      </div>
      <div className="bot">{children}</div>
    </Rnd>
  );
};

export default Window;
