import React, { useState, useRef, useEffect } from "react";
import Window from "./Window";
import "./cli.scss";

const Cli = ({ appName, closeApp }) => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const welcomeMessage = `Welcome to my terminal 🚀
━━━━━━━━━━━━━━━━━━━━━━
Type 'help' to see available commands.
Enjoy exploring!`;

  // Commands config
  const commands = {
    help: () => `
Available Commands:
━━━━━━━━━━━━━━━━━━━━━━
help              - Display this help message
about             - Information about the portfolio
contact           - Show contact information
skills            - List technical skills
projects          - View portfolio projects
open <project>    - Open project repository
echo <text>       - Echo back the provided text
clear             - Clear the terminal screen
━━━━━━━━━━━━━━━━━━━━━━
Type 'help <command>' for more details.`,

    about: () => `
About This Portfolio
━━━━━━━━━━━━━━━━━━━━━━
Hi, I am Srutidev Barman.
Currently studying AI Full-Stack Development
at Sheryians Coding School.`,

    contact: () => `
Contact Information
━━━━━━━━━━━━━━━━━━━━━━
GitHub:    https://github.com/nytr8
LinkedIn:  https://www.linkedin.com/in/srutidev-barman-640380233/
Email:     srutidevbarman2002@gmail.com`,

    skills: () => `
Technical Skills
━━━━━━━━━━━━━━━━━━━━━━━
Frontend:   React, JavaScript, HTML5, CSS/SCSS
Backend:    Node.js, Express
Tools:      Git, Vite, npm
Animation:  GSAP, Three.js, WebGL
Other:      REST APIs, Responsive Design`,

    projects: () => `
Featured Projects
━━━━━━━━━━━━━━━━━━━━━━━━━
1. OS-Style Portfolio
   • Interactive terminal-based portfolio
   • Tech: React, SCSS, Vite
   • Command: open portfolio

2. Shutter Style Page Transition
   • GSAP shutter animation effect
   • Tech: GSAP, HTML, CSS, JavaScript
   • Command: open shutter`,

    open: (args) => {
      const name = args.join(" ").toLowerCase();
      const projects = {
        portfolio: "https://github.com/nytr8/productivity-dashboard.git",
        shutter: "https://github.com/nytr8/GSAP-shutter-animation.git",
      };
      if (projects[name]) {
        window.open(projects[name], "_blank");
        return `Opening ${name} repository...`;
      }
      return `Project not found.\nAvailable projects: ${Object.keys(projects).join(", ")}`;
    },

    echo: (args) => args.join(" "),

    clear: () => "__CLEAR__", // Special flag
  };

  // Initialize with welcome message
  useEffect(() => {
    setHistory([{ type: "output", text: welcomeMessage }]);
    setTimeout(() => inputRef.current?.focus(), 0);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on click anywhere in terminal
  const handleClick = () => inputRef.current?.focus();

  // Handle command execution
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const [cmd, ...args] = trimmed.split(" ");
    const command = cmd.toLowerCase();

    // Add user input to history first
    const newHistory = [...history, { type: "input", text: trimmed }];

    // Execute command
    if (commands[command]) {
      const result = commands[command](args);

      if (result === "__CLEAR__") {
        setHistory([]); // Clear everything
      } else {
        newHistory.push({ type: "output", text: result });
        setHistory(newHistory);
      }
    } else {
      newHistory.push({
        type: "error",
        text: `Command not found: ${command}\nType 'help' for available commands.`,
      });
      setHistory(newHistory);
    }

    setInput("");
  };

  return (
    <Window appName={appName} closeApp={closeApp}>
      <div className="cli-window" onClick={handleClick} ref={terminalRef}>
        {/* Render history */}
        {history.map((item, i) => (
          <div key={i} className={`terminal-line ${item.type}`}>
            {item.type === "input" && (
              <span className="prompt">portfolio@me:~$ </span>
            )}
            <span className="text">{item.text}</span>
          </div>
        ))}

        {/* Live input line */}
        <div className="terminal-line input-line">
          <span className="prompt">portfolio@me:~$ </span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>
    </Window>
  );
};

export default Cli;
