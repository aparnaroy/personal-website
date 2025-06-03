'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string[]
  skills: string[]
  logoUrl: string
  isLast?: boolean
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  skills,
  logoUrl,
  isLast = false,
}: ExperienceCardProps) {
  return (
    <motion.div 
      className="relative pl-8"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Timeline line */}
      <div className={`absolute left-0 top-0 bottom-0 w-0.5 bg-primary/20 ${isLast ? 'h-full' : 'h-full'}`} />
      
      {/* Timeline dot */}
      <div className="absolute left-[-4px] top-0 w-3 h-3 rounded-full bg-primary" />
      
      {/* <div className="bg-white dark:bg-dark shadow-lg dark:shadow-[0_4px_20px_rgba(195,195,195,0.1)] hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgba(195,195,195,0.14)] transition-shadow rounded-lg p-6"> */}
      <div className="bg-white dark:bg-[#404040] shadow-lg hover:shadow-xl transition-shadow rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="relative w-[60px] h-[60px]">
              <Image
                src={logoUrl}
                alt={`${company} logo`}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-[1.3rem] font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-[1.07rem] text-primary font-bold">{company}</p>
            </div>
          </div>
          <p className="text-gray-500 dark:text-gray-300">{period}</p>
        </div>
        {/* <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p> */}
        <ul className="text-gray-600 dark:text-gray-300 mb-4 list-disc pl-4">
          {description.map((point, index) => (
            <li key={index} className="mb-2">
              {point}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm bg-primary/10 text-primary rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 