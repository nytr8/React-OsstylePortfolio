import React from "react";
import Window from "./Window";
import "./spotify.scss";
const Spotify = ({ appName, closeApp }) => {
  return (
    <Window width="30vw" height="40vh" appName={appName} closeApp={closeApp}>
      <div className="spotify-div">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "5px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLZ52XmnySJg?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </Window>
  );
};

export default Spotify;
