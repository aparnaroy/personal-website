'use client';

import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Capital One Configuration Manager",
    description: "A web tool developed for Capital One enabling users to manage configurations with version control, role-based permissions for user groups, and status/approval workflows.",
    technologies: ['Java Spring Boot', 'AWS DynamoDB + EC2', 'React', 'TypeScript'],
    githubLink: "https://github.com/aparnaroy/capital-one-config",
    demoLink: "https://capital-one-config.vercel.app",
    imageUrl: "/images/yuh.png"
  },
  {
    title: "Care o'Clock",
    description: "An all-in-one health app that helps users track doctor appointments, set medication reminders, get personalized health information, manage daily tasks, and call emergency contacts—all by simply speaking to it.",
    technologies: ['React', 'TypeScript', 'MongoDB', 'Gemini API'],
    githubLink: "https://github.com/aparnaroy/Care-o-Clock",
    demoLink: "https://care-oclock.vercel.app",
    imageUrl: "/images/care-o-clock.png"
  },
  {
    title: "Aroma",
    description: "A personal recipe buddy that helps users save or instantly import recipes, generate tailored recipes with AI, plan meals for the week, and automatically create grocery lists based on their meal plan.",
    technologies: ['MongoDB', 'Angular', 'Node.js', 'Express', 'OpenAI API'],
    githubLink: "https://github.com/aparnaroy/Aroma",
    demoLink: "https://aroma-app.vercel.app",
    imageUrl: "/images/aroma.png"
  },
  {
    title: "Talk to the Hand",
    description: "1st place winner at HenHacks 2024! A website dedicated to bridging the gap between hearing and signing communities. Features live ASL translation from text or speech and an ASL learning hub.",
    technologies: ['React', 'TypeScript', 'HTML/CSS'],
    githubLink: "https://github.com/aparnaroy/TalkToTheHand",
    demoLink: "https://talk-to-the-hand.vercel.app",
    imageUrl: "/images/talk-to-the-hand.png"
  },
  {
    title: "Step to the Beat",
    description: "A fun take on listening to music while exercising! This mobile app detects your pace and instantly generates playlists to match your speed and preferred genre. Includes a playful UI and seamless Spotify integration.",
    technologies: ['React', 'TypeScript', 'HTML/CSS'],
    githubLink: "https://github.com/aparnaroy/TalkToTheHand",
    demoLink: "https://talk-to-the-hand.vercel.app",
    imageUrl: "/images/talk-to-the-hand.png"
  },
  {
    title: "Doodle",
    description: "A drawing app featuring custom brush sizes, color and opacity controls, an eraser, and doodle saving. Focused on intuitive UI and smooth drawing experience.",
    technologies: ['React', 'TypeScript', 'HTML/CSS'],
    githubLink: "https://github.com/aparnaroy/TalkToTheHand",
    demoLink: "https://talk-to-the-hand.vercel.app",
    imageUrl: "/images/talk-to-the-hand.png"
  },
  {
    title: "Taskly",
    description: "A to-do list app developed in 3 different versions/stacks, each featuring user authentication, data storage, and secure hosting: 1) Firebase, 2) Flask/MySQL, and 3) MongoDB/Node.js/Express on AWS EC2.",
    technologies: ['Firebase', 'Flask', 'MySQL', 'MongoDB', 'Node.js', 'Express', 'AWS EC2', 'JavaScript', 'HTML/CSS'],
    githubLink: "https://github.com/aparnaroy/TalkToTheHand",
    demoLink: "https://talk-to-the-hand.vercel.app",
    imageUrl: "/images/talk-to-the-hand.png"
  },
  {
    title: "StackPack Journey",
    description: "A puzzle platform game that guides players to mastering stack manipulation. Equipped with a StackPack, players must strategically collect (push) and use (pop) items scattered throughout the world to overcome obstacles and ultimately reunite with their lost soulmate.",
    technologies: ['React', 'TypeScript', 'Phaser'],
    githubLink: "https://github.com/aparnaroy/TalkToTheHand",
    demoLink: "https://talk-to-the-hand.vercel.app",
    imageUrl: "/images/talk-to-the-hand.png"
  },
  {
    title: "Mama's Freezeria",
    description: "A fresh take on Papa's Freezeria from CoolMathGames. A timed milkshake-making game where players race against the clock to drag and mix ingredients, tackling increasingly complex orders as the game progresses.",
    technologies: ['React', 'TypeScript', 'HTML/CSS'],
    githubLink: "https://github.com/aparnaroy/TalkToTheHand",
    demoLink: "https://talk-to-the-hand.vercel.app",
    imageUrl: "/images/talk-to-the-hand.png"
  },
  {
    title: "Planet Garden",
    description: "An e-commerce site for landscaping and gardening products. Features 3 levels of permissions: users can shop and make changes to their cart, admins can manage/edit products, and the CEO can manage the available inventory and all users.",
    technologies: ['React', 'TypeScript', 'HTML/CSS'],
    githubLink: "https://github.com/aparnaroy/TalkToTheHand",
    demoLink: "https://talk-to-the-hand.vercel.app",
    imageUrl: "/images/talk-to-the-hand.png"
  },
  {
    title: "GoLocal",
    description: "Developed in the HenHacks 2023 hackathon, this website facilitates communication between small Delaware businesses and their communities, promoting a culture of belonging and supporting local businesses. Includes a chatbot for quick customer support.",
    technologies: ['React', 'TypeScript', 'HTML/CSS'],
    githubLink: "https://github.com/aparnaroy/TalkToTheHand",
    demoLink: "https://talk-to-the-hand.vercel.app",
    imageUrl: "/images/talk-to-the-hand.png"
  },
  {
    title: "Binary Clock",
    description: "A program that displays a clock with time values represented in binary using shell scripts. Toggles between 24-hour and 12-hour displays when given OS signals.",
    technologies: ['React', 'TypeScript', 'HTML/CSS', 'Unix'],
    githubLink: "https://github.com/aparnaroy/TalkToTheHand",
    demoLink: "https://talk-to-the-hand.vercel.app",
    imageUrl: "/images/talk-to-the-hand.png"
  },
  {
    title: "Desh",
    description: "A custom shell that replicates core terminal functionality, supporting both built-in and external commands. Runs interactively by default or executes a script file if provided.",
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
      <div className="flex overflow-x-auto overflow-y-visible mt-0 pt-3 pb-4 mb-0 scrollbar-hide">
        <div className="flex space-x-8 animate-scroll-right w-max">
          {[...topProjects, ...topProjects, ...topProjects, ...topProjects, ...topProjects, ...topProjects].map((project, index) => (
            <div className="flex-none w-[350px]">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row - scrolls left */}
      <div className="flex overflow-x-auto pb-8 pt-2 scrollbar-hide">
        <div className="flex space-x-8 animate-scroll-left w-max">
          {[...bottomProjects, ...bottomProjects, ...bottomProjects, ...bottomProjects, ...bottomProjects, ...bottomProjects].map((project, index) => (
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
