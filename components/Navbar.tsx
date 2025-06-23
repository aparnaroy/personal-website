'use client'

import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from './ThemeProvider'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-dark/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[74px]">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className="text-2xl font-fancy text-primary cursor-pointer"
          >
            <img src="/images/logo.png" alt="logo" className="w-[57px]" />
          </ScrollLink>

          <div className="flex items-center space-x-8">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                onClick={handleNavLinkClick}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                offset={-35}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                onClick={handleNavLinkClick}
              >
                Skills
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                onClick={handleNavLinkClick}
              >
                Projects
              </ScrollLink>
              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                onClick={handleNavLinkClick}
              >
                Experience
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-60}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                onClick={handleNavLinkClick}
              >
                Contact
              </ScrollLink>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-600 dark:text-gray-300"
              onClick={handleMobileMenuClick}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-[59px] left-0 right-0 bg-white/80 dark:bg-dark/80 backdrop-blur-lg shadow-lg border-t border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 15 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="block text-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                  onClick={handleNavLinkClick}
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={500}
                  offset={-35}
                  className="block text-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                  onClick={handleNavLinkClick}
                >
                  Skills
                </ScrollLink>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="block text-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                  onClick={handleNavLinkClick}
                >
                  Projects
                </ScrollLink>
                <ScrollLink
                  to="experience"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="block text-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                  onClick={handleNavLinkClick}
                >
                  Experience
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-60}
                  className="block text-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </ScrollLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
} 