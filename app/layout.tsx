import React from 'react'
import type { Metadata } from 'next'
import { Inter, Almarai } from 'next/font/google';
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const fancy_font = Almarai({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-fancy_font',
})

export const metadata: Metadata = {
  title: 'Aparna Roy',
  description: 'Aparna Roy\'s Personal Portfolio Website',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${fancy_font.variable} font-sans bg-white dark:bg-dark text-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 