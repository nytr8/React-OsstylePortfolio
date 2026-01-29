import React from "react";
import "./index.scss";
import Bottom from "./components/Bottom";
import Window from "./components/Window";
import Github from "./components/Github";
import Notes from "./components/Notes";
const App = () => {
  return (
    <main>
      <Bottom />
      <Github />
      <Notes />
    </main>
  );
};

export default App;
