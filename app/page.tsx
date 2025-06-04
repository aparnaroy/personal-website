'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiLinkedin, FiMail, FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../components/ThemeProvider'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import ExperienceCard from '../components/ExperienceCard'
import ContactForm from '../components/ContactForm'
import ParticlesBackground from '../components/ParticlesBackground'
import { Typewriter } from 'react-simple-typewriter'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import AboutSection from '../components/AboutSection'
import FloatingDots from '../components/FloatingDots'

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [currentText, setCurrentText] = useState(0)
  const texts = ['Software Engineer', 'Full Stack Developer', 'AI Enthusiast']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <main className="min-h-screen relative">
      {/* Background that starts after hero */}
      <div className="absolute inset-x-0 top-[100vh] bottom-0 bg-white dark:bg-dark -z-10">
        <FloatingDots />
      </div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-10">
        <ParticlesBackground className="absolute inset-0" />
        <div className="container mx-auto px-4 text-center relative z-10 select-none">
          <motion.h1 
            className="text-6xl md:text-8xl font-fancy text-primary mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Aparna Roy
          </motion.h1>
          <motion.div
            className="text-2xl md:text-4xl font-bold mb-12 min-h-[48px] md:min-h-[72px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* <div className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#e82389] via-[#8623e8] to-[#23c7e8]"> */}
            <div className="inline-block">
              <Typewriter
                words={['Software Engineer', 'Full Stack Developer', 'AI Enthusiast']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a 
              href="https://github.com/aparnaroy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl hover:text-primary transition-colors"
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FiGithub />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/aparna-roy1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl hover:text-primary transition-colors"
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FiLinkedin />
            </motion.a>
            <motion.a 
              href="mailto:deviroy2@gmail.com" 
              className="text-2xl hover:text-primary transition-colors"
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FiMail />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-6"
          >
            Skills
          </motion.h2>
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-8">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ProjectCard
                title="Capital One Configuration Manager"
                description="A web tool for managing configurations with version control, role-based permissions, and approval workflows."
                technologies={['Java Spring Boot', 'AWS DynamoDB', 'AWS EC2', 'React', 'TypeScript']}
                githubLink="https://github.com/aparnaroy/capital-one-config"
                demoLink="https://capital-one-config.vercel.app"
                imageUrl="/images/config-manager.png"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ProjectCard
                title="Care o'Clock"
                description="A voice-assisted health app for managing doctor appointments, medications, and emergency contacts."
                technologies={['React', 'TypeScript', 'MongoDB', 'Gemini API']}
                githubLink="https://github.com/aparnaroy/Care-o-Clock"
                demoLink="https://care-oclock.vercel.app"
                imageUrl="/images/care-o-clock.png"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ProjectCard
                title="Aroma"
                description="A recipe-keeping app with user authentication, recipe imports, grocery lists, and meal planning."
                technologies={['MongoDB', 'Angular', 'Node.js', 'Express', 'OpenAI API']}
                githubLink="https://github.com/aparnaroy/Aroma"
                demoLink="https://aroma-app.vercel.app"
                imageUrl="/images/aroma.png"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <ProjectCard
                title="Talk to the Hand"
                description="A website bridging the gap between hearing and signing communities with live ASL translation."
                technologies={['React', 'TypeScript', 'HTML/CSS']}
                githubLink="https://github.com/aparnaroy/TalkToTheHand"
                demoLink="https://talk-to-the-hand.vercel.app"
                imageUrl="/images/talk-to-the-hand.png"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-100 dark:bg-dark-lighter">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience
          </motion.h2>
          <motion.div 
            className="relative max-w-4xl mx-auto space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ExperienceCard
                title="Software Engineer Intern"
                company="JPMorgan Chase & Co."
                period="Jun 2024 - Aug 2024"
                description={[
                  "Collaborated within the Corporate Technology LOB to support Consumer Banking teams by delivering crucial decision-making insights through an online analytical processing (OLAP) tool, enhancing reporting efficiency by 40%."
                ]}
                skills={['SQL', 'PySpark', 'Databricks', 'Cloud Migration']}
                logoUrl="/images/udelsensify-logo.png"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ExperienceCard
                title="Code Sensei / Tutor"
                company="Code Ninjas"
                period="Jun 2023 - Present"
                description={[
                  "Teach 30+ students (ages 8-15) foundational coding concepts in JavaScript, C#, and game development through interactive sessions."
                ]}
                skills={['JavaScript', 'C#', 'Game Development', 'Teaching']}
                logoUrl="/images/code-ninjas.png"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ExperienceCard
                title="Software Development Intern"
                company="BioCurie"
                period="Mar 2023 - Sep 2023"
                description={[
                  "Led the development of a user-centric web application with Flask, Python, PostgreSQL, HTML/CSS, and JavaScript, enhancing overall functionality by 75%."
                ]}
                skills={['Python', 'Flask', 'PostgreSQL', 'JavaScript', 'HTML/CSS']}
                logoUrl="/images/biocurie.png"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <ExperienceCard
                title="Production Engineering Fellow"
                company="Major League Hacking (with Meta)"
                period="Jun 2023 - Sep 2023"
                description={[
                  "Created a personal portfolio website and established a CI/CD pipeline with automated testing and deployment."
                ]}
                skills={['Python', 'Flask', 'MySQL', 'Docker', 'Nginx', 'CI/CD']}
                logoUrl="/images/mlh.png"
                isLast={true}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="section-title"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 