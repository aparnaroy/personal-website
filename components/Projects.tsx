'use client';

import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Capital One Configuration Manager",
    description: "A web tool developed for Capital One enabling users to manage configurations with version control, role-based permissions for user groups, and status/approval workflows.",
    technologies: ['Java', 'Spring Boot', 'AWS DynamoDB', 'AWS EC2', 'React', 'TypeScript', 'HTML/CSS'],
    videoLink: "https://drive.google.com/file/d/1OXA6QFJDji1krYU02BBpknGINZUG1a9-/view?usp=sharing",
    slidesLink: "https://docs.google.com/presentation/d/1sKrMTB52ngP9X5mUMVpc3e8BrSgj5WnZjdV3A22qN5w/edit?usp=sharing",
    imageUrl: "/images/config-manager.png"
  },
  {
    title: "Care o'Clock",
    description: "2nd place winner at HenHacks 2025! An all-in-one health app that helps users track doctor appointments, set medication reminders, get personalized health information, manage daily tasks, and call emergency contacts—all by simply speaking to it.",
    technologies: ['React', 'TypeScript', 'MongoDB', 'Gemini API', 'Bootstrap'],
    githubLink: "https://github.com/aparnaroy/Care-o-Clock",
    liveLink: "https://care-o-clock.up.railway.app",
    imageUrl: "/images/care-o-clock.png"
  },
  {
    title: "Aroma",
    description: "A personal recipe buddy that helps users save and instantly import recipes, generate tailored recipes with AI, plan meals for the week, and automatically create grocery lists based on their meal plan.",
    technologies: ['MongoDB', 'Angular', 'Node.js', 'Express', 'OpenAI API'],
    githubLink: "https://github.com/aparnaroy/Aroma",
    videoLink: "https://youtu.be/0A_lot3VZRs",
    imageUrl: "/images/aroma.png"
  },
  {
    title: "Talk to the Hand",
    description: "1st place winner at HenHacks 2024! A website dedicated to bridging the gap between hearing and signing communities. Features live ASL translation from text or speech and an ASL learning hub.",
    technologies: ['React', 'TypeScript', 'Chakra UI', 'HTML/CSS'],
    githubLink: "https://github.com/aparnaroy/TalkToTheHand",
    liveLink: "https://beniabra.github.io/TalkToTheHand",
    videoLink: "https://youtu.be/x2z2PumxJbA",
    imageUrl: "/images/talk-to-the-hand.png"
  },
  {
    title: "Step to the Beat",
    description: "A fun take on listening to music while exercising! This mobile app detects your pace and instantly generates playlists to match your speed and preferred genre. Includes a playful UI and seamless Spotify integration.",
    technologies: ['Java', 'Android Studio', 'XML', 'Spotify JDK'],
    githubLink: "https://github.com/aparnaroy/StepToTheBeat",
    videoLink: "https://youtu.be/TxoPalUzPjY",
    imageUrl: "/images/step-to-the-beat.png"
  },
  {
    title: "Taskly",
    description: "A to-do list app developed in 3 different versions/stacks, each featuring user authentication, data storage, and secure hosting: 1) Firebase, 2) Flask/MySQL, and 3) MongoDB/Node.js/Express on AWS EC2.",
    technologies: ['Firebase', 'Flask', 'MySQL', 'MongoDB', 'Node.js', 'Express', 'AWS EC2', 'JavaScript', 'HTML/CSS'],
    githubLink: "https://github.com/aparnaroy/Taskly-Firebase",
    liveLink: "https://taskly2do.web.app",
    imageUrl: "/images/taskly.png"
  },
  {
    title: "StackPack Journey",
    description: "A puzzle platform game that guides players to mastering stack manipulation. Equipped with a StackPack, players must strategically collect (push) and use (pop) items scattered throughout the world to overcome obstacles and ultimately reunite with their lost soulmate.",
    technologies: ['React', 'TypeScript', 'Phaser'],
    githubLink: "https://github.com/aparnaroy/StackPack-Journey",
    liveLink: "https://ud-s24-cisc374.github.io/final-project-yellow",
    videoLink: "https://drive.google.com/file/d/1VieNLLkLdERRm2x6FSnr-KLPQ-DvZZaL/view?usp=sharing",
    imageUrl: "/images/stackpack-journey.png"
  },
  {
    title: "Mama's Freezeria",
    description: "A fresh take on Papa's Freezeria from CoolMathGames. A timed milkshake-making game where players race against the clock to drag and mix ingredients, tackling increasingly complex orders as the game progresses.",
    technologies: ['JavaScript', 'HTML/CSS'],
    githubLink: "https://github.com/aparnaroy/mamas-freezeria",
    liveLink: "https://ud-cisc474.github.io/cisc474-project1-group-3",
    imageUrl: "/images/mamas-freezeria.png"
  },
  {
    title: "Doodle",
    description: "A drawing app featuring custom brush sizes, color and opacity controls, an eraser, and doodle saving. Focused on intuitive UI and smooth drawing experience.",
    technologies: ['Java', 'Android Studio', 'XML'],
    githubLink: "https://github.com/aparnaroy/Doodle",
    videoLink: "https://youtu.be/OoudZc0LD0w",
    imageUrl: "/images/doodle.png"
  },
  {
    title: "Planet Garden",
    description: "An e-commerce site for landscaping and gardening products. Features 3 levels of permissions: users can shop and make changes to their cart, admins can manage/edit products, and the CEO can manage the available inventory and all users.",
    technologies: ['React', 'TypeScript', 'HTML/CSS'],
    githubLink: "https://github.com/aparnaroy/Team15-PlanetGarden",
    liveLink: "https://aparnaroy.github.io/Team15-PlanetGarden",
    imageUrl: "/images/planet-garden.png"
  },
  {
    title: "Binary Clock",
    description: "A program that displays a clock with time values represented in binary using shell scripts. Toggles between 24-hour and 12-hour displays when given OS signals.",
    technologies: ['C', 'Bash', 'Shell Scripting', 'Unix'],
    githubLink: "https://github.com/aparnaroy/Binary-Clock",
    imageUrl: "/images/binary-clock.png"
  },
  {
    title: "Desh",
    description: "A custom shell built from scratch that replicates core terminal functionality, supporting both built-in and external commands. Runs interactively by default or executes a script file if provided.",
    technologies: ['C', 'Unix', 'Shell Programming'],
    githubLink: "https://github.com/aparnaroy/desh",
    imageUrl: "/images/desh.png"
  }
];

export default function Projects() {
  const midpoint = Math.ceil(projects.length / 2);
  const topProjects = projects.slice(0, midpoint);
  const bottomProjects = projects.slice(midpoint);

  return (
    <div className="relative">
      {/* Top row - scrolls right */}
      <div className="flex overflow-x-auto overflow-y-visible mt-0 pt-3 pb-3 mb-0 scrollbar-hide">
        <div className="flex space-x-8 animate-scroll-right w-max">
          {[...topProjects, ...topProjects, ...topProjects, ...topProjects, ...topProjects, ...topProjects].map((project, index) => (
            <div className="flex-none w-[380px]">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row - scrolls left */}
      <div className="flex overflow-x-auto pb-8 pt-2 scrollbar-hide">
        <div className="flex space-x-8 animate-scroll-left w-max">
          {[...bottomProjects, ...bottomProjects, ...bottomProjects, ...bottomProjects, ...bottomProjects, ...bottomProjects].map((project, index) => (
            <div className="flex-none w-[380px]">
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
