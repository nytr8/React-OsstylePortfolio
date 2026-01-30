import React, { useState, useEffect } from "react";
import "./index.scss";
import "./App.scss";

// Component Imports
import Bottom from "./components/Bottom";
import Github from "./components/Github";
import Notes from "./components/Notes";
import Resume from "./components/Resume";
import Spotify from "./components/Spotify";
import Cli from "./components/Cli";

const App = () => {
  const [activeApp, setActiveApp] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [bootStatus, setBootStatus] = useState("INITIALIZING...");

  useEffect(() => {
    const bootSteps = [
      { msg: "LOADING CORE...", prg: 20 },
      { msg: "SYNCING ASSETS...", prg: 45 },
      { msg: "BUILDING UI...", prg: 70 },
      { msg: "ALMOST THERE...", prg: 90 },
      { msg: "WELCOME.", prg: 100 },
    ];

    let step = 0;
    const interval = setInterval(() => {
      if (step < bootSteps.length) {
        setBootStatus(bootSteps[step].msg);
        setProgress(bootSteps[step].prg);
        step++;
      } else {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="boot-screen">
        <div className="boot-container">
          <div className="terminal-header">BOOT_SEQUENCE.EXE</div>

          <div className="status-log">
            <span className="prompt"></span> {bootStatus}
          </div>

          <div className="progress-wrapper">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="percentage">{progress}%</div>
        </div>
      </div>
    );
  }

  return (
    <main className="fade-in">
      {activeApp.map((app) => {
        const appProps = { key: app, appName: app, closeApp: handleActive };

        switch (app) {
          case "github":
            return <Github {...appProps} />;
          case "notepad":
            return <Notes {...appProps} />;
          case "resume":
            return <Resume {...appProps} />;
          case "spotify":
            return <Spotify {...appProps} />;
          case "terminal":
            return <Cli {...appProps} />;
          default:
            return null;
        }
      })}

      <Bottom openApp={handleActive} />
    </main>
  );

  function handleActive(val) {
    const appKey = val.toLowerCase();
    setActiveApp((prev) => {
      if (prev.includes(appKey)) {
        return prev.filter((app) => app !== appKey);
      } else {
        return [...prev, appKey];
      }
    });
  }
};

export default App;
