'use client'

import React from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-dark-lighter py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/aparnaroy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              whileHover={{ y: -5 }}
            >
              <FiGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/aparna-roy1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              whileHover={{ y: -5 }}
            >
              <FiLinkedin />
            </motion.a>
            <motion.a
              href="mailto:deviroy2@gmail.com"
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              whileHover={{ y: -5 }}
            >
              <FiMail />
            </motion.a>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            © {currentYear} Aparna Roy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 