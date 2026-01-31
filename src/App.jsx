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
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [bootStatus, setBootStatus] = useState("INITIALIZING...");
  const [time, setTime] = useState("");

  // Timer - separate useEffect
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const ampm = hours >= 12 ? "Pm" : "Am";
      hours = hours % 12 || 12; // Convert 0 to 12
      setTime(`${hours} : ${minutes} ${ampm}`);
    };

    updateTime(); // Run immediately
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Boot screen - separate useEffect
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
        setIsExiting(true);

        setTimeout(() => {
          setLoading(false);
        }, 600);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleActive = (val) => {
    const appKey = val.toLowerCase();
    setActiveApp((prev) => {
      if (prev.includes(appKey)) {
        return prev.filter((app) => app !== appKey);
      } else {
        return [...prev, appKey];
      }
    });
  };

  // --- 1. Boot Screen Render ---
  if (loading) {
    return (
      <div className={`boot-screen ${isExiting ? "fading-out" : ""}`}>
        <div className="boot-container">
          <div className="status-log">{bootStatus}</div>

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

  // --- 2. Main App Render ---
  return (
    <main className="fade-in">
      <div className="timer">
        <p>{time}</p>
      </div>
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
};

export default App;
