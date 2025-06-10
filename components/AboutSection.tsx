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
          {/* <div className="flex flex-col md:flex-row items-center gap-8">
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
                I'm a Software Engineer with a passion for software development and artificial intelligence.
                I specialize in full-stack development and have experience working with various technologies and frameworks.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                When I'm not coding, you can find me teaching young students programming, participating in hackathons,
                or exploring new technologies and frameworks.
              </p>
            </div>
          </div> */}
        </div>
      )
    },
    {
      title: 'Education',
      content: (
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#404040] rounded-lg p-6 shadow-sm flex flex-col md:flex-row items-start gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                src="/images/ud.png"
                alt="University Logo"
                fill
                className="object-contain rounded"
                />
            </div>

            <div className="flex flex-col md:flex-row md:justify-between w-full gap-4">
              <div className="flex-1">
                <h3 className="text-[1.15rem] font-bold mb-2">University of Delaware</h3>
                <p className="md:text-[1.05rem] text-[0.95rem] text-gray-600 dark:text-gray-300 mb-2">
                  Honors Bachelor of Science in Computer Science
                </p>
                <div className="md:hidden text-sm mb-2">
                  <p className="md:text-[0.9rem] text-[0.8rem] text-gray-400 dark:text-gray-400">
                    Aug 2021 – May 2025
                  </p>
                  <p className="md:text-[0.9rem] text-[0.8rem] text-gray-400 dark:text-gray-400 mt-1">
                    GPA: 3.99
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="md:text-[0.9rem] text-[0.85rem] text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Concentration: </span>Software Engineering & Artificial Intelligence
                  </p>
                  <p className="md:text-[0.9rem] text-[0.85rem] text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Minors: </span>Cognitive Science, Game Studies
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:text-right text-sm">
                <p className="text-[0.9rem] text-gray-500 dark:text-gray-400">
                  Aug 2021 – May 2025
                </p>
                <p className="text-[0.9rem] text-gray-500 dark:text-gray-400 mt-2">
                  GPA: 3.99
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-[#404040] rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Relevant Coursework</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Data Structures</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Web Applications Security</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Operating Systems</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Algorithms</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Secure Software Design</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Educational Game Development</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Software Engineering</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Advanced Web Technologies</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Parallel Computing</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Human-Computer Interaction</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Systems Programming</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Database Systems</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Artificial Intelligence</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Discrete Mathematics</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">AI in Education</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Statistical Methods</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Logic for Programming</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Machine Organization</span>
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
          <div className="bg-white dark:bg-[#404040] rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Clubs & Organizations</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <p className="text-gray-600 dark:text-gray-300 text-[0.95rem] sm:text-[1rem]">Association for Computing Machinery - Women in Computing (ACM-W)</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <p className="text-gray-600 dark:text-gray-300 text-[0.95rem] sm:text-[1rem]">CS+ Social Good (CSSG)</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <p className="text-gray-600 dark:text-gray-300 text-[0.95rem] sm:text-[1rem]">Society of Asian Scientists and Engineers (SASE)</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <p className="text-gray-600 dark:text-gray-300 text-[0.95rem] sm:text-[1rem]">Delaware Kamaal (Competitive Bollywood Dance Team)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-[#404040] rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Hackathons</h3>
            <div className="flex items-start mb-3">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <p className="text-gray-600 dark:text-gray-300">HenHacks 2025 (University of Delaware)</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  2nd place - Health & Wellness Category
                </p>
              </div>
            </div>
            <div className="flex items-start mb-3">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <p className="text-gray-600 dark:text-gray-300">HenHacks 2024 (University of Delaware)</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  1st Place - LabWare Connections Hack
                </p>
              </div>
            </div>
            <div className="flex items-start mb-3">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <p className="text-gray-600 dark:text-gray-300">Technica 2023 (University of Maryland)</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Best Domain Name
                </p>
              </div>
            </div>
            <div className="flex items-start mb-3">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <p className="text-gray-600 dark:text-gray-300">HenHacks 2023 (University of Delaware)</p>
                </div>
              </div>
            </div>
            <div className="flex items-start mb-3">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <p className="text-gray-600 dark:text-gray-300">Technica 2022 (University of Maryland)</p>
                </div>
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
          <div className="bg-white dark:bg-[#404040] rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Awards</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <p className="text-gray-600 dark:text-gray-100 font-medium">Dean's List</p>
                    <p className="text-sm text-gray-400 dark:text-gray-300">All Semesters (2021 - 2025)</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Awarded each semester at the University of Delaware for maintaining a GPA of 3.5 or higher.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <p className="text-gray-600 dark:text-gray-100 font-medium">B. Bradford Barnes Memorial Scholarship (Full Scholarship)</p>
                    <p className="text-sm text-gray-400 dark:text-gray-300">Fall 2021 - Spring 2025</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Each year, the Delaware Higher Education Office selects one student to receive a full scholarship to the University of Delaware based on merit.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <p className="text-gray-600 dark:text-gray-100 font-medium">University of Delaware Trustee Scholarship</p>
                    <p className="text-sm text-gray-400 dark:text-gray-300">Fall 2021 - Spring 2025</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    A 4-year academic scholarship funded by the University of Delaware for undergraduate students.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <p className="text-gray-600 dark:text-gray-100 font-medium">Edward Malin Memorial Scholarship</p>
                    <p className="text-sm text-gray-400 dark:text-gray-300">Spring 2021</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Annually, one graduating senior at the Conrad Schools of Science is awarded a $2,500 merit scholarship.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <p className="text-gray-600 dark:text-gray-100 font-medium">Carson Scholarship</p>
                    <p className="text-sm text-gray-400 dark:text-gray-300">2016 - 2020</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    One student from each school in the U.S. is nominated by educators to apply for the scholarship, and a $1,000 award is given to selected applicants by the Carson Scholars Fund based on academic achievement and humanitarian qualities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#404040] rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <p className="text-gray-600 dark:text-gray-100 font-medium">Amazon Web Services (AWS) Cloud Practitioner</p>
                    <p className="text-sm text-gray-400 dark:text-gray-300">August 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center">
            <motion.h2 
              className="section-title relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About Me
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#16bdde] to-transparent opacity-85"></span>
            </motion.h2>
        </div>
        <div className="h-3"></div>
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
                  src="/images/aparna.png"
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
                <div className="flex flex-wrap gap-0 sm:gap-3 mb-6 justify-center md:justify-start">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`px-2 py-2 sm:px-3 md:px-4 text-sm font-medium transition-all duration-300 relative ${
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
                <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    I'm a Software Engineer with a passion for software development and artificial intelligence.
                    I specialize in full-stack development and have experience working with various technologies and frameworks.
                  </p>
                  <p className="mt-4">
                    When I'm not coding, you can find me teaching how to code, programming at hackathons,
                    or exploring new technologies.  
                  </p>
                  <p className="mt-4">
                    In my free time, I love to dance, hike, and watch movies/shows. I also love to travel and explore new places.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <>
              <motion.div 
                className="flex flex-wrap gap-0 sm:gap-3 mb-8 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-2 py-2 sm:px-3 md:px-4 text-sm font-medium transition-all duration-300 relative ${
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