import React from "react";
import Window from "./Window";
import "./cli.scss";
import Terminal from "react-console-emulator";

const Cli = ({ appName, closeApp }) => {
  const commands = {
    help: {
      description: "Display all available commands",
      usage: "help",
      fn: () => `
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
Type 'help <command>' for more details.
      `,
    },

    about: {
      description: "Information about this portfolio",
      usage: "about",
      fn: () => `
About This Portfolio
━━━━━━━━━━━━━━━━━━━━━━
Hi, I am Srutidev Barman.
Currently studying AI Full-Stack Development
at Sheryians Coding School.
      `,
    },

    contact: {
      description: "Display contact information",
      usage: "contact",
      fn: () => `
Contact Information
━━━━━━━━━━━━━━━━━━━━━━
GitHub:    https://github.com/nytr8
LinkedIn: https://www.linkedin.com/in/srutidev-barman-640380233/
Email:    srutidevbarman2002@gmail.com
      `,
    },

    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () => `
Technical Skills
━━━━━━━━━━━━━━━━━━━━━━━
Frontend:   React, JavaScript, HTML5, CSS/SCSS
Backend:    Node.js, Express
Tools:      Git, Vite, npm
Animation:  GSAP, Three.js, WebGL
Other:      REST APIs, Responsive Design
      `,
    },

    projects: {
      description: "View portfolio projects",
      usage: "projects",
      fn: () => `
Featured Projects
━━━━━━━━━━━━━━━━━━━━━━━━━
1. OS-Style Portfolio
   • Interactive terminal-based portfolio
   • Tech: React, SCSS, Vite
   • Command: open portfolio

2. Shutter Style Page Transition
   • GSAP shutter animation effect
   • Tech: GSAP, HTML, CSS, JavaScript
   • Command: open shutter
      `,
    },

    open: {
      description: "Open a project repository",
      usage: "open <project-name>",
      fn: (...args) => {
        const projectName = args.join(" ").toLowerCase();
        const projects = {
          portfolio: "https://github.com/nytr8/productivity-dashboard.git",
          shutter: "https://github.com/nytr8/GSAP-shutter-animation.git",
        };

        if (projects[projectName]) {
          window.open(projects[projectName], "_blank");
          return `Opening ${projectName} repository...`;
        }

        return `Project not found.
Available projects: ${Object.keys(projects).join(", ")}`;
      },
    },

    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },

    clear: {
      description: "Clear the terminal screen",
      usage: "clear",
      fn: () => "clear",
    },
  };

  return (
    <Window appName={appName} closeApp={closeApp}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          promptLabel="portfolio@me:~$"
          promptLabelStyle={{ color: "#00FF00" }}
          autoFocus
          noDefaults
          welcomeMessage={`
Welcome to my terminal 🚀
━━━━━━━━━━━━━━━━━━━━━━
Type 'help' to see available commands.
Enjoy exploring!
`}
        />
      </div>
    </Window>
  );
};

export default Cli;
