'use client'

import { useCallback } from 'react'
import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticlesContainer() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      className='absolute inset-0'
      id='tsparticles'
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: ''
          }
        },
        fpsLimit: 50,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'bubble',
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              opacity: {
                random: true,
                value: 0.4
              },
              size: 4
            }
          }
        },
        particles: {
          color: {
            value: '#fff'
          },
          links: {
            color: '#fff',
            distance: 111,
            enable: true,
            opacity: 0.2,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 0.1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              value_area: 1000
            },
            value: 100
          },
          opacity: {
            random: true,
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            random: true,
            value: 2
          }
        },
        detectRetina: true
      }}
    />
  )
}
