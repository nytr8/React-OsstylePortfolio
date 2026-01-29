// resume.ts
// Full-Stack Developer

type Developer = {
name: string;
title: string;
location: string;
availability: "Full-Time" | "Internship" | "Contract";
portfolio?: string;
github: string;
linkedin: string;
email: string;
};

const profile: Developer = {
name: "Srutidev Barman",
title: "Full-Stack Developer (React • Node • TypeScript)",
location: "India",
availability: "Full-Time",
portfolio: "https://your-portfolio-link.com",
github: "https://github.com/yourusername",
linkedin: "https://linkedin.com/in/yourusername",
email: "youremail@gmail.com",
};

// --------------------------------------------------
// TECH STACK

const skills = {
frontend: [
"React",
"TypeScript",
"JavaScript (ES6+)",
"HTML5",
"CSS3",
"Tailwind CSS",
],

backend: [
"Node.js",
"Express.js",
"REST APIs",
"JWT Authentication (basic)",
],

database: [
"MongoDB",
"Mongoose",
"CRUD Operations",
],

tools: [
"Git",
"GitHub",
"Vercel",
"Postman",
"Figma",
],

concepts: [
"Component-based architecture",
"Async/Await",
"API integration",
"State management",
"Error handling",
],
};

// --------------------------------------------------
// PROJECTS

interface Project {
name: string;
type: "Frontend" | "Full-Stack";
description: string;
techStack: string[];
highlights: string[];
link?: string;
}

const projects: Project[] = [
{
name: "OS-Style Portfolio",
type: "Frontend",
description:
"A desktop-inspired portfolio.",
techStack: ["HTML", "CSS", "JavaScript"],
highlights: [
"Window-based UI system",
"Z-index layering and focus handling",
"Save and delete state logic",
"Custom taskbar experience",
],
link: "https://your-portfolio-link.com",
},

{
name: "Full-Stack Todo App",
type: "Full-Stack",
description:
"A task management application with complete CRUD functionality and persistent storage.",
techStack: [
"React",
"TypeScript",
"Node.js",
"Express",
"MongoDB",
"Tailwind CSS",
],
highlights: [
"REST API with Express",
"Create, update, delete tasks",
"Frontend-backend integration",
"Reusable React components",
],
},

{
name: "Anime Explorer App",
type: "Frontend",
description:
"An anime discovery app using a public API to display and explore anime data.",
techStack: ["React", "TypeScript", "Axios", "Jikan API"],
highlights: [
"API data fetching with async/await",
"Loading and error state handling",
"Reusable UI components",
],
},
];

// --------------------------------------------------
// EXPERIENCE

const experience = [
{
role: "Self-Taught Full-Stack Developer",
duration: "2024 – Present",
responsibilities: [
"Built full-stack applications using React and Node.js",
"Designed REST APIs and connected them to frontend apps",
"Worked extensively with TypeScript for scalable code",
"Solved real-world UI and state management problems",
],
},
];

// --------------------------------------------------
// EDUCATION

const education = {
background: "Self-Taught Developer",
focusAreas: [
"Web Development",
"Frontend Engineering",
"Backend Fundamentals",
"System Design Basics",
],
};

// --------------------------------------------------
// INTERESTS (TECH-RELEVANT)

const interests = [
"Building creative UI/UX experiences",
"2D Frame-by-Frame Animation",
"Anime-inspired visual storytelling",
"Learning system-level application design",
];

// --------------------------------------------------

export default {
profile,
skills,
projects,
experience,
education,
interests,
};
