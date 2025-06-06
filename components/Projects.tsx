'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard'; // adjust path as needed

const projects = [
  {
    title: "Capital One Configuration Manager",
    description: "A web tool for managing configurations with version control, role-based permissions, and approval workflows.",
    technologies: ['Java Spring Boot', 'AWS DynamoDB + EC2', 'React', 'TypeScript'],
    githubLink: "https://github.com/aparnaroy/capital-one-config",
    demoLink: "https://capital-one-config.vercel.app",
    imageUrl: "/images/yuh.png"
  },
  {
    title: "Care o'Clock",
    description: "A voice-assisted health app for managing doctor appointments, medications, and emergency contacts.",
    technologies: ['React', 'TypeScript', 'MongoDB', 'Gemini API'],
    githubLink: "https://github.com/aparnaroy/Care-o-Clock",
    demoLink: "https://care-oclock.vercel.app",
    imageUrl: "/images/care-o-clock.png"
  },
  {
    title: "Aroma",
    description: "A recipe-keeping app with user authentication, recipe imports, grocery lists, and meal planning.",
    technologies: ['MongoDB', 'Angular', 'Node.js', 'Express', 'OpenAI API'],
    githubLink: "https://github.com/aparnaroy/Aroma",
    demoLink: "https://aroma-app.vercel.app",
    imageUrl: "/images/aroma.png"
  },
  {
    title: "Talk to the Hand",
    description: "A website bridging the gap between hearing and signing communities with live ASL translation.",
    technologies: ['React', 'TypeScript', 'HTML/CSS'],
    githubLink: "https://github.com/aparnaroy/TalkToTheHand",
    demoLink: "https://talk-to-the-hand.vercel.app",
    imageUrl: "/images/talk-to-the-hand.png"
  },
  {
    title: "Capital One Configuration Manager 1",
    description: "A web tool for managing configurations with version control, role-based permissions, and approval workflows.",
    technologies: ['AWS DynamoDB', 'AWS EC2', 'React', 'TypeScript'],
    githubLink: "https://github.com/aparnaroy/capital-one-config",
    demoLink: "https://capital-one-config.vercel.app",
    imageUrl: "/images/yuh.png"
  },
  {
    title: "Care o'Clock 1",
    description: "A voice-assisted health app for managing doctor appointments, medications, and emergency contacts.",
    technologies: ['React', 'TypeScript', 'MongoDB', 'Gemini API'],
    githubLink: "https://github.com/aparnaroy/Care-o-Clock",
    demoLink: "https://care-oclock.vercel.app",
    imageUrl: "/images/care-o-clock.png"
  },
  {
    title: "Aroma 1",
    description: "A recipe-keeping app with user authentication, recipe imports, grocery lists, and meal planning.",
    technologies: ['MongoDB', 'Angular', 'Node.js', 'Express', 'OpenAI API'],
    githubLink: "https://github.com/aparnaroy/Aroma",
    demoLink: "https://aroma-app.vercel.app",
    imageUrl: "/images/aroma.png"
  },
  {
    title: "Talk to the Hand 1",
    description: "A website bridging the gap between hearing and signing communities with live ASL translation.",
    technologies: ['React', 'TypeScript', 'HTML/CSS'],
    githubLink: "https://github.com/aparnaroy/TalkToTheHand",
    demoLink: "https://talk-to-the-hand.vercel.app",
    imageUrl: "/images/talk-to-the-hand.png"
  }
];

export default function Projects() {
  const midpoint = Math.ceil(projects.length / 2);
  const topProjects = projects.slice(0, midpoint);
  const bottomProjects = projects.slice(midpoint);

  return (
    <div className="relative">
      {/* Top row - scrolls right */}
      <div className="flex overflow-x-hidden overflow-y-visible mt-0 pt-3 pb-4 mb-0 scrollbar-hide">
        <div className="flex space-x-8 animate-scroll-right w-max">
          {[...topProjects, ...topProjects].map((project, index) => (
            <div className="flex-none w-[350px]">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row - scrolls left */}
      <div className="flex overflow-x-hidden pb-8 pt-2 scrollbar-hide">
        <div className="flex space-x-8 animate-scroll-left w-max">
          {[...bottomProjects, ...bottomProjects].map((project, index) => (
            <div className="flex-none w-[350px]">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-dark to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-dark to-transparent pointer-events-none"></div>
    </div>
  );
}
