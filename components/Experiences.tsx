'use client';

import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'JPMorgan Chase & Co.',
    period: 'Jun 2024 - Aug 2024',
    description: [
      'Collaborated within the Corporate Technology LOB to support Consumer Banking teams by delivering crucial decision-making insights through an online analytical processing (OLAP) tool, enhancing reporting efficiency by 40%.',
    ],
    skills: ['SQL', 'PySpark', 'Databricks', 'Cloud Migration'],
    logoUrl: '/images/udelsensify-logo.png',
  },
  {
    title: 'Code Sensei / Tutor',
    company: 'Code Ninjas',
    period: 'Jun 2023 - Present',
    description: [
      'Teach 30+ students (ages 8-15) foundational coding concepts in JavaScript, C#, and game development through interactive sessions.',
    ],
    skills: ['JavaScript', 'C#', 'Game Development', 'Teaching'],
    logoUrl: '/images/code-ninjas.png',
  },
  {
    title: 'Software Development Intern',
    company: 'BioCurie',
    period: 'Mar 2023 - Sep 2023',
    description: [
      'Led the development of a user-centric web application with Flask, Python, PostgreSQL, HTML/CSS, and JavaScript, enhancing overall functionality by 75%.',
    ],
    skills: ['Python', 'Flask', 'PostgreSQL', 'JavaScript', 'HTML/CSS'],
    logoUrl: '/images/biocurie.png',
  },
  {
    title: 'Production Engineering Fellow',
    company: 'Major League Hacking (with Meta)',
    period: 'Jun 2023 - Sep 2023',
    description: [
      'Created a personal portfolio website and established a CI/CD pipeline with automated testing and deployment.',
    ],
    skills: ['Python', 'Flask', 'MySQL', 'Docker', 'Nginx', 'CI/CD'],
    logoUrl: '/images/mlh.png',
    isLast: true,
  },
];

export default function Experiences() {
  return (
    <motion.div
      className="relative max-w-4xl mx-auto space-y-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
        >
          <ExperienceCard {...exp} />
        </motion.div>
      ))}
    </motion.div>
  );
}
