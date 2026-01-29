import React from "react";
import Window from "./Window";
import "./github.scss";
import Card from "./Card";

const Github = ({ appName, closeApp }) => {
  // console.log(setActiveApp);
  const myProject = [
    {
      title: "productivity dashboard",
      description: "all in one productivity dashboard",
      liveLink: "https://nytr8.github.io/productivity-dashboard/",
      repoLink: "https://github.com/nytr8/productivity-dashboard.git",
      image: "src/assets/Screenshot 2026-01-25 160951.png",
    },
  ];
  return (
    <Window appName={appName} closeApp={closeApp}>
      <div className="container">
        <Card project={myProject[0]} />
      </div>
    </Window>
  );
};

export default Github;
