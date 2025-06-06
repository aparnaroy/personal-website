'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiLinkedin, FiMail, FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../components/ThemeProvider'
import Navbar from '../components/Navbar'
import ExperienceCard from '../components/ExperienceCard'
import ContactForm from '../components/ContactForm'
import ParticlesBackground from '../components/ParticlesBackground'
import { Typewriter } from 'react-simple-typewriter'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import AboutSection from '../components/AboutSection'
import FloatingDots from '../components/FloatingDots'
import Projects from '@/components/Projects'
import Experiences from '@/components/Experiences'

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
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="container mx-auto px-4 lg:px-14"> */}
        <div className="h-8"></div>
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center mb-6 relative inline-block"
            >
              Skills
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#16bdde] to-transparent opacity-85"></span>
            </motion.h2>
          </div>
          <div className="h-6"></div>
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-10 pb-20 mb-10">
        <div className="container mx-auto px-8">
        {/* <div className="container mx-auto px-0 sm:px-0 lg:px-0"> */}
          <div className="text-center">
            <motion.h2 
              className="section-title relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Projects
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#16bdde] to-transparent opacity-85"></span>
            </motion.h2>
          </div>
          <Projects />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-100 dark:bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h2 
              className="section-title relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Experience
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#16bdde] to-transparent opacity-85"></span>
            </motion.h2>
          </div>
          <div className="h-4"></div>
          <Experiences />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h2 
              className="section-title relative inline-block"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#16bdde] to-transparent opacity-85"></span>
            </motion.h2>
          </div>
          <div className="h-3"></div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 