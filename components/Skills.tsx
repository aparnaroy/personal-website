'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiAngular,
  SiSpring,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiR,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiFirebase,
  SiDatabricks,
  SiAmazon,
  SiGit,
  SiGithub,
  SiDocker,
  SiJenkins,
  SiJira,
  SiBitbucket,
  SiNginx,
  SiLinux,
  SiPostman,
  SiFigma,
  SiSharp,
  SiNextdotjs,
  SiTailwindcss
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

interface Skill {
  name: string
  icon: React.ReactNode
  color: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: <SiPython />, color: '#3776AB' },
      { name: 'Java', icon: <FaJava />, color: '#007396' },
      { name: 'C/C++', icon: <SiSharp />, color: '#00599C' },
      { name: 'C#', icon: <SiSharp />, color: '#239120' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      { name: 'R', icon: <SiR />, color: '#276DC3' },
      { name: 'Bash', icon: <SiLinux />, color: '#4EAA25' }
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: <SiReact />, color: '#61DAFB' },
      { name: 'Angular', icon: <SiAngular />, color: '#DD0031' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
      { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
      { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Spring Boot', icon: <SiSpring />, color: '#6DB33F' },
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
      { name: 'Express', icon: <SiExpress />, color: '#000000' },
      { name: 'Flask', icon: <SiFlask />, color: '#000000' }
    ]
  },
  {
    title: 'Databases & Data Processing',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'Oracle', icon: <SiOracle />, color: '#F80000' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
      { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
      { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
      { name: 'Databricks', icon: <SiDatabricks />, color: '#FF3621' },
      { name: 'PySpark', icon: <SiPython />, color: '#E25A1C' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS EC2', icon: <SiAmazon />, color: '#232F3E' },
      { name: 'AWS S3', icon: <SiAmazon />, color: '#232F3E' },
      { name: 'AWS DynamoDB', icon: <SiAmazon />, color: '#232F3E' },
      { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
      { name: 'Jenkins', icon: <SiJenkins />, color: '#D24939' },
      { name: 'Nginx', icon: <SiNginx />, color: '#009639' },
      { name: 'Linux', icon: <SiLinux />, color: '#FCC624' }
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: <SiGit />, color: '#F05032' },
      { name: 'GitHub', icon: <SiGithub />, color: '#181717' },
      { name: 'BitBucket', icon: <SiBitbucket />, color: '#0052CC' },
      { name: 'Jira', icon: <SiJira />, color: '#0052CC' },
      { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
      { name: 'JWTs', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' }
    ]
  }
]

export default function Skills() {
  return (
    <div className="px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, boxShadow: '0 1px 20px rgba(0, 0, 0, 0.2)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative bg-white dark:bg-dark-lighter p-6 rounded-lg shadow-lg pl-4 pr-4"
            // style={{
            //   border: '3px solid transparent',
            //   borderImage: 'linear-gradient(to bottom right, #e82389, #8623e8, #23c7e8) 1',
            // }}          
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 dark:bg-dark rounded-full select-none"
                >
                  <div style={{ color: skill.color }} className="text-xl">
                    {skill.icon}
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 