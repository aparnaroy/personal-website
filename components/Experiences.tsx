'use client';

import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'JPMorgan Chase & Co.',
    period: 'Jul 2025 - Present',
    description: [
      'Build and enhance a money-laundering detection web application for the Consumer & Community Banking LOB, reducing investigation time and enhancing user experience across the business.',
      'Contribute to both core and cross-functional teams to develop enterprise-wide tools that boost efficiency by integrating applications across the business.',
      'Perform comprehensive multi-level testing and continuous validation across services to ensure application reliability.',
      'Streamline deployments through CI/CD pipelines, accelerating release cycles while maintaining stability and quality.'
    ],
    skills: ['React', 'TypeScript', 'Java', 'Spring Boot', 'HTML/CSS', 'AWS Lambda', 'Jenkins'],
    logoUrl: '/images/chase.png',
  },
  {
    title: 'Code Sensei / Tutor',
    company: 'Code Ninjas',
    period: 'Jun 2023 - May 2025',
    description: [
      'Taught 30+ students (ages 8-15) foundational coding concepts in JavaScript, C#, and game development through interactive sessions.',
      'Guided students through 400+ programming projects, strengthening their problem-solving, logic, and mathematical thinking skills.'
    ],
    skills: ['JavaScript', 'C#', 'Game Development', 'Teaching', 'Unity'],
    logoUrl: '/images/code-ninjas.png',
  },
  {
    title: 'Software Engineer Intern',
    company: 'JPMorgan Chase & Co.',
    period: 'Jun 2024 - Aug 2024',
    description: [
      'Collaborated within the Corporate Technology LOB to support Consumer Banking teams by delivering crucial decision-making insights through an online analytical processing (OLAP) tool, enhancing reporting efficiency by 40%.',
      'Developed an OLAP cube using SQL and PySpark to streamline data modeling and financial forecasting, enabling senior executives to track business performance and identify strategic opportunities, increasing visibility of key metrics by 50%.',
      'Assisted in the cloud data migration of over 1 billion records, leveraging Databricks to generate multiple on-cloud reporting tables.'
    ],
    skills: ['SQL', 'PySpark', 'Databricks', 'Cloud Migration'],
    logoUrl: '/images/chase.png',
  },
  {
    title: 'Software Development Intern',
    company: 'BioCurie',
    period: 'Mar 2023 - Sep 2023',
    description: [
      'Coordinated closely with the CEO and Chief Scientist to develop a software solution for optimizing gene therapy production, decreasing development time by 30% for all programming teams by transitioning from Matlab to Python.',
      'Led the development of a user-centric web application with Flask, Python, PostgreSQL, HTML/CSS, and JavaScript, enhancing overall functionality by 75% by implementing dynamic visualizations, robust file uploads, and client-server communication.'
    ],
    skills: ['Python', 'Flask', 'PostgreSQL', 'JavaScript', 'HTML/CSS'],
    logoUrl: '/images/biocurie.png',
  },
  {
    title: 'Production Engineering Fellow',
    company: 'Major League Hacking (with Meta)',
    period: 'Jun 2023 - Sep 2023',
    description: [
      'Created a personal portfolio website using Python, Flask, Jinja, MySQL, Docker, Nginx, and unittest.',
      'Established a CI/CD pipeline with Bash scripts, Docker, and GitHub workflows for automated testing and deployment, reducing development time by 25%.',
      'Implemented Prometheus and Grafana monitoring, reducing downtime by 20% and improving response times by 35%.'
    ], 
    skills: ['Python', 'Flask', 'Jinja', 'MySQL', 'Docker', 'Nginx', 'Bash', 'CI/CD', 'Prometheus', 'Grafana'],
    logoUrl: '/images/mlh.png',
  },
  {
    title: 'Undergraduate Researcher',
    company: 'Sensify Lab | University of Delaware',
    period: 'Jan 2023 - May 2023',
    description: [
      'Developed procedural generation techniques and deep learning models to rapidly generate compelling and dynamic characters for game development in under 2 seconds using Python and C#.',
      'Leveraged scikit-learn for training and testing to evaluate the accuracy of character generation from text descriptions.'
    ], 
    skills: ['Python', 'C#', 'Unity', 'Deep Learning', 'pandas', 'scikit-learn'],
    logoUrl: '/images/sensify.jpg'
  },
  {
    title: 'Undergraduate Research Intern',
    company: 'Virginia Commonwealth University',
    period: 'May 2022 - Aug 2022',
    description: [
      'Created an automated testing tool for chatbots to refine and augment the training set using semantic clustering and a paraphrasing model, enhancing the chatbots\' ability to correctly classify intents by 5%.',
      'Crafted and optimized Python scripts to evaluate the performance of natural-language understanding models.'
    ], 
    skills: ['Python', 'Colab Notebook', 'Natural Language Processing', 'Semantic Clustering'],
    logoUrl: '/images/vcu.png',
    isLast: true
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
