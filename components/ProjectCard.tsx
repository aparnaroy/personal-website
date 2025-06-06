'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'

// Color mapping for different technology categories
export const getTechColor = (tech: string) => {
  const techLower = tech.toLowerCase()
  
  // Frontend technologies
  if (techLower.includes('react') || techLower.includes('angular') || techLower.includes('vue') || 
      techLower.includes('typescript') || techLower.includes('javascript')) {
    return 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-100'
  }
  
  // Backend technologies
  if (techLower.includes('node') || techLower.includes('express') || techLower.includes('spring') || techLower.includes('python') || techLower.includes('flask')) {
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
      className="group relative w-[350px] h-[285px] mt-2 rounded-lg overflow-hidden shadow-[0_0_13px_rgba(0,0,0,0.2)] flex flex-col"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative w-full h-[200px]">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-[13.5px] text-white mb-2.5">{description}</p>
            <div className="flex space-x-4 mb-1">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white font-semibold hover:text-[#c181fc] text-[15px] transition-all duration-200"
              >
                <FiGithub className="mr-1" />
                GitHub
              </a>
              {demoLink !== '#' && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white font-semibold hover:text-primary text-[15px] transition-all duration-200"
                >
                  <FiExternalLink className="mr-1" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Text below image */}
      <div className="pl-4 pr-4 pt-3 bg-white dark:bg-dark-lighter flex-1">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
        <div className="flex flex-wrap gap-1 mt-2 mb-5">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-1.5 py-0.5 text-[10.5px] rounded-full ${getTechColor(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>

  )
} 