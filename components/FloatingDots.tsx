'use client'

import React, { useEffect, useRef } from 'react'

interface Dot {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  colour: string
  opacity: number
  create: () => void
  animate: () => void
}

interface DotsConfig {
  nb: number
  distance: number
  d_radius: number
  array: Dot[]
}

const FloatingDots = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<DotsConfig | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const colorDot = [
      'rgb(22, 189, 222)', // primary blue
      'rgb(22, 189, 222)', // primary blue
    //   'rgb(150, 54, 245)', // secondary purple
      'rgb(232, 35, 137)', // accent pink
    ]

    const color = 'rgb(22, 189, 222)' // primary blue for stroke
    ctx.lineWidth = 0.3
    ctx.strokeStyle = color

    let mousePosition = {
      x: (30 * canvas.width) / 100,
      y: (30 * canvas.height) / 100,
    }

    const windowSize = window.innerWidth
    let dots: DotsConfig

    if (windowSize > 1300) {
      dots = {
        nb: 250,
        distance: 0,
        d_radius: 0,
        array: [],
      }
    } else if (windowSize > 1000) {
      dots = {
        nb: 200,
        distance: 0,
        d_radius: 0,
        array: [],
      }
    } else {
      dots = {
        nb: 170,
        distance: 0,
        d_radius: 0,
        array: [],
      }
    }

    // Initialize dots only once
    function initDots() {
      dots.array = []
      for (let i = 0; i < dots.nb; i++) {
        const dot = new (Dot as any)()
        dots.array.push(dot)
      }
      // First dot to be relatively large and blue
      dots.array[0].radius = 1.5
      dots.array[0].colour = 'rgb(22, 189, 222)' // primary blue
      dots.array[0].opacity = 0.4 // Match the maximum opacity
    }

    function Dot(this: Dot) {
      if (!canvas) return
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.vx = (-0.5 + Math.random()) * 0.5
      this.vy = (-0.5 + Math.random()) * 0.5
      this.radius = Math.random() * 2 + 0.8
      this.colour = colorDot[Math.floor(Math.random() * colorDot.length)]
      this.opacity = 0.2 + Math.random() * 0.1 // Random opacity between 0.2 and 0.6
    }

    Dot.prototype = {
      create: function(this: Dot) {
        if (!ctx || !canvas) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)

        // Use the dot's random opacity instead of distance-based calculation
        ctx.fillStyle = this.colour.slice(0, -1) + `,${this.opacity})`
        ctx.fill()
      },

      animate: function(this: Dot) {
        if (!canvas) return
        // Update position
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.y < 0 || this.y > canvas.height) {
          this.vy = -this.vy
        }
        if (this.x < 0 || this.x > canvas.width) {
          this.vx = -this.vx
        }
      },
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw all dots
      for (const dot of dots.array) {
        dot.animate()
        dot.create()
      }

      requestAnimationFrame(animate)
    }

    // Handle scroll
    const handleScroll = () => {
      mousePosition.x = window.innerWidth / 2
      mousePosition.y = window.innerHeight / 2

      const top = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)
      mousePosition.y += top
    }

    // Handle resize
    const handleResize = () => {
      if (!canvas) return
      canvas.width = document.body.scrollWidth
      canvas.height = window.innerHeight
      canvas.style.display = 'block'
      
      // Reinitialize dots on resize
      initDots()
    }

    // Initial setup
    handleResize()
    initDots()
    animate()

    // Event listeners
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  )
}

export default FloatingDots 