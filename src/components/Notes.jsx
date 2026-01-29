import React, { useEffect, useState } from "react";
import Window from "./Window";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./node.scss";
const Notes = ({ appName, closeApp }) => {
  const [notes, setnotes] = useState(null);

  useEffect(() => {
    fetch("/notes.md")
      .then((res) => res.text())
      .then((text) => setnotes(text));
  }, []);

  return (
    <Window appName={appName} closeApp={closeApp}>
      <div className="node-window">
        {notes ? (
          <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
            {notes}
          </SyntaxHighlighter>
        ) : (
          <p>loading...</p>
        )}
      </div>
    </Window>
  );
};

export default Notes;
