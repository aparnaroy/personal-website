'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiVideo, FiMonitor } from 'react-icons/fi'
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
  if (techLower.includes('sql') || techLower.includes('mongo') || techLower.includes('postgres') || techLower.includes('firebase')) {
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
  githubLink?: string
  liveLink?: string
  videoLink?: string
  slidesLink?: string
  imageUrl: string
}


export default function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  liveLink,
  videoLink,
  slidesLink,
  imageUrl,
}: ProjectCardProps) {
  return (
    <motion.div 
      className="group relative w-[350px] h-[300px] mt-2 rounded-lg overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.23)] flex flex-col"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative w-full h-[215px] group/image overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full translate-y-10 group-hover/image:translate-y-0 transition-transform duration-300">
            <p className="text-[13.5px] text-white mb-2.5">{description}</p>
            <div className="flex space-x-4 mb-0">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white font-bold hover:text-[#c181fc] text-[15.5px] transition-all duration-200"
                >
                  <FiGithub className="mr-1" />
                  GitHub
                </a>
              )}
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white font-bold hover:text-primary text-[15.5px] transition-all duration-200"
                >
                  <FiExternalLink className="mr-1" />
                  Live Site
                </a>
              )}
              {videoLink && (
                <a
                  href={videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white font-bold hover:text-[#ff63b4] text-[15.5px] transition-all duration-200"
                >
                  <FiVideo className="mr-1.5" />
                  Demo Video
                </a>
              )}
              {slidesLink && (
                <a
                  href={slidesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white font-bold hover:text-[#ff63b4] text-[15.5px] transition-all duration-200"
                >
                  <FiMonitor className="mr-1.5" />
                  Presentation
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Text below image */}
      <div className="pl-4 pr-4 pt-3 bg-white dark:bg-dark-lighter flex-1 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
        <div className="flex flex-wrap gap-1 mt-2 mb-5">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-1.5 py-0.5 text-[11px] rounded-full ${getTechColor(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>

  )
} 