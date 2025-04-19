'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface TabContent {
  title: string
  content: React.ReactNode
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs: TabContent[] = [
    {
      title: 'About',
      content: (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/images/profile.jpg"
                alt="Aparna Roy"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-gray-600 dark:text-gray-300">
                I'm a Computer Science student at the University of Delaware with a passion for software development and artificial intelligence.
                I specialize in full-stack development and have experience working with various technologies and frameworks.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                When I'm not coding, you can find me teaching young students programming, participating in hackathons,
                or exploring new technologies and frameworks.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Education',
      content: (
        <div className="space-y-6">
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-2">University of Delaware</h3>
            <p className="text-gray-600 dark:text-gray-300">Bachelor of Science in Computer Science</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Expected Graduation: May 2025</p>
          </div>
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Relevant Coursework</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-gray-600 dark:text-gray-300">Data Structures & Algorithms</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-gray-600 dark:text-gray-300">Database Systems</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-gray-600 dark:text-gray-300">Software Engineering</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-gray-600 dark:text-gray-300">Computer Networks</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-gray-600 dark:text-gray-300">Artificial Intelligence</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Activities',
      content: (
        <div className="space-y-6">
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Hackathons</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Hack UD 2023</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">1st Place</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Hack the North 2023</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Finalist</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Clubs & Organizations</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-gray-600 dark:text-gray-300">Women in Computer Science</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-gray-600 dark:text-gray-300">Association for Computing Machinery</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Achievements',
      content: (
        <div className="space-y-6">
          <div className="bg-white dark:bg-dark-lighter rounded-lg p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Dean's List</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Fall 2022, Spring 2023</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-gray-600 dark:text-gray-300">National Merit Scholarship</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-gray-600 dark:text-gray-300">Google Women Techmakers Scholar</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-lighter">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-0">
          {activeTab === 0 ? (
            <motion.div 
              className="flex flex-col md:flex-row items-start gap-8 md:gap-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-primary mx-auto lg:w-72 lg:h-72"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Aparna Roy"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex flex-wrap gap-2 mb-6">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative ${
                        activeTab === index
                          ? 'text-primary'
                          : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                    >
                      {tab.title}
                      {activeTab === index && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                          layoutId="activeTab"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  <p>
                    I'm a Computer Science student at the University of Delaware with a passion for software development and artificial intelligence.
                    I specialize in full-stack development and have experience working with various technologies and frameworks.
                  </p>
                  <p className="mt-4">
                    When I'm not coding, you can find me teaching young students programming, participating in hackathons,
                    or exploring new technologies and frameworks.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <>
              <motion.div 
                className="flex flex-wrap gap-2 mb-8 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative ${
                      activeTab === index
                        ? 'text-primary'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    {tab.title}
                    {activeTab === index && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        layoutId="activeTab"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </motion.div>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {tabs[activeTab].content}
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  )
} 