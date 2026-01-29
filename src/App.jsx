import React, { useState } from "react";
import "./index.scss";
import Bottom from "./components/Bottom";
import Window from "./components/Window";
import Github from "./components/Github";
import Notes from "./components/Notes";
import Resume from "./components/Resume";
import Spotify from "./components/Spotify";
const App = () => {
  const [activeApp, setActiveApp] = useState([]);
  function handleActive(val) {
    setActiveApp((prev) => {
      if (prev.includes(val)) {
        // CLOSE window
        return prev.filter((app) => app !== val);
      } else {
        // OPEN window
        return [...prev, val];
      }
    });
  }
  return (
    <main>
      {activeApp.map((app) => {
        if (app === "github")
          return <Github key={app} appName="github" closeApp={handleActive} />;
        if (app === "notepad")
          return <Notes key={app} appName="notepad" closeApp={handleActive} />;
        if (app === "resume")
          return <Resume key={app} appName="resume" closeApp={handleActive} />;
        if (app === "spotify")
          return (
            <Spotify key={app} appName="spotify" closeApp={handleActive} />
          );
        return null;
      })}

      <Bottom openApp={handleActive} />
    </main>
  );
};

export default App;
