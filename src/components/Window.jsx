import React, { useMemo } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const Window = ({
  children,
  width = 500, // Changed to numbers for easier calculation
  height = 400,
  appName,
  closeApp,
}) => {
  // useMemo ensures the random position stays the same during re-renders
  // until the window is actually closed/reopened.
  const randomPos = useMemo(() => {
    // We parse the width/height in case they are passed as strings like "500px"
    const w = parseInt(width);
    const h = parseInt(height);

    // Calculate max bounds so window stays on screen
    const maxX = Math.max(0, window.innerWidth - w);
    const maxY = Math.max(0, window.innerHeight - h);

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  }, [width, height]);

  return (
    <Rnd
      default={{
        x: randomPos.x,
        y: randomPos.y,
        width: width,
        height: height,
      }}
      minWidth={300}
      minHeight={200}
      bounds="window"
      className="brutal-window-wrapper"
      dragHandleClassName="window-header" // Only drag by the header
    >
      <div className="window-inner">
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

        <div className="window-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default Window;
