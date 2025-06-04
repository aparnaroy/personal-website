'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Initialize EmailJS with my public key
    emailjs.init(publicKey)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: 'deviroy2@gmail.com',
          timestamp: new Date().toLocaleString()
        }
      )

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      if (error instanceof Error) {
        console.error('Error details:', {
          message: error.message,
          name: error.name,
          stack: error.stack
        })
      }
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white/1 dark:bg-dark/1 backdrop-blur-sm p-8 rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(195,195,195,0.15)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-lighter focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-lighter focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-lighter focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn btn-primary w-full flex items-center justify-center h-11"
      >
        {status === 'loading' ? (
          'Sending...'
        ) : (
          <>
            <FiSend className="mr-2" />
            Send Message
          </>
        )}
      </button>

      {status === 'success' && (
        <p className="text-green-500 text-center">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-center">
          Something went wrong. Please try again or contact me directly at deviroy2@gmail.com
        </p>
      )}
    </motion.form>
  )
} 