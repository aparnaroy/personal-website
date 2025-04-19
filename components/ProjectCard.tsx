'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'

// Color mapping for different technology categories
const getTechColor = (tech: string) => {
  const techLower = tech.toLowerCase()
  
  // Frontend technologies
  if (techLower.includes('react') || techLower.includes('angular') || techLower.includes('vue') || 
      techLower.includes('typescript') || techLower.includes('javascript')) {
    return 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-100'
  }
  
  // Backend technologies
  if (techLower.includes('node') || techLower.includes('express') || techLower.includes('spring')) {
    return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100'
  }
  
  // Database technologies
  if (techLower.includes('sql') || techLower.includes('mongo') || techLower.includes('postgres')) {
    return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
  }
  
  // Cloud/AWS technologies
  if (techLower.includes('aws') || techLower.includes('cloud') || techLower.includes('azure')) {
    return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100'
  }
  
  // AI/ML technologies
  if (techLower.includes('ai') || techLower.includes('ml') || techLower.includes('tensorflow') ||
      techLower.includes('gemini') || techLower.includes('openai')) {
    return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100'
  }
  
  // Default color for other technologies
  return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100'
}

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubLink: string
  demoLink: string
  imageUrl: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
  imageUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      className="card group"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.01 }}
    >
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`px-2 py-1 text-sm rounded-full ${getTechColor(tech)}`}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
        >
          <FiGithub className="mr-2" />
          GitHub
        </a>
        {demoLink !== '#' && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <FiExternalLink className="mr-2" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
} 