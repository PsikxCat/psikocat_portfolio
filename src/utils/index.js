import { HiHome, HiUser, HiRectangleGroup, HiEnvelope } from 'react-icons/hi2'

export const navLinks = [
  { name: 'home', path: '/home', icon: <HiHome/> },
  { name: 'portfolio', path: '/work', icon: <HiRectangleGroup /> },
  { name: 'sobre mi', path: '/about', icon: <HiUser /> },
  { name: 'contacto', path: '/contact', icon: <HiEnvelope /> },
]

export const projectsData = {
  slides: [
    {
      images: [
        {
          name: 'project x',
          image: '/images/thumb1.jpg',
          link: 'https://www.google.com',
        },
        {
          name: 'project x',
          image: '/images/thumb2.jpg',
          link: 'https://www.google.com',
        },
        {
          name: 'project x',
          image: '/images/thumb3.jpg',
          link: 'https://www.google.com',
        },
        {
          name: 'project x',
          image: '/images/thumb4.jpg',
          link: 'https://www.google.com',
        },
      ],
    },
    {
      images: [
        {
          name: 'project x',
          image: '/images/thumb5.jpg',
          link: 'https://www.google.com',
        },
        {
          name: 'project x',
          image: '/images/thumb6.jpg',
          link: 'https://www.google.com',
        },
        {
          name: 'project x',
          image: '/images/thumb7.jpg',
          link: 'https://www.google.com',
        },
        {
          name: 'project x',
          image: '/images/thumb8.jpg',
          link: 'https://www.google.com',
        },
      ],
    },
  ],
}

export const fadeIn = (direction, delay, distance = 80, duration = 1.5) => {
  return {
    hidden: {
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      opacity: 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      transition: {
        type: 'tween',
        duration, // duration: duration
        delay, // delay: delay
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration, // duration: duration
        delay, // delay: delay
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }
}
