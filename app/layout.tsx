import React from 'react'
import type { Metadata } from 'next'
import { Inter, Pacifico } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import ParticlesBackground from '../components/ParticlesBackground'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const pacifico = Pacifico({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico'
})

export const metadata: Metadata = {
  title: 'Aparna Roy',
  description: 'Aparna Roy\'s Personal Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${pacifico.variable} font-sans bg-white dark:bg-dark text-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          <ParticlesBackground className="fixed inset-0 -z-10" />
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 