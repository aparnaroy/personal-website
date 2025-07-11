'use client'

import React, { useEffect, useState } from 'react'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'

interface ParticlesBackgroundProps {
  className?: string
}

export default function ParticlesBackground({ className }: ParticlesBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  // Scroll listener to toggle parallax
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`absolute inset-0 -z-20 ${className}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
                // parallax: {
                //   enable: true,
                //   force: 30,  // Near top = strong parallax, otherwise super weak
                //   smooth: 100,
                // }
              },
              resize: {
                enable: true,
                delay: 0.5
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 220,
                duration: 0.4,
                speed: 0.2,
                easing: 'ease-out',
              },
            },
          },
          particles: {
            color: {
              value: ['#23c7e8', '#8623e8', '#e82389'],
            },
            links: {
              color: '#9640ed',
              distance: 170,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              random: false,
              speed: .7,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 500,
              },
              value: 30,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
} 