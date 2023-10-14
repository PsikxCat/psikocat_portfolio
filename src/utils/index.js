import { HiHome, HiUser, HiRectangleGroup, HiEnvelope } from 'react-icons/hi2'

export const navLinks = [
  { name: 'home', path: '/home', icon: <HiHome/> },
  { name: 'portfolio', path: '/work', icon: <HiRectangleGroup /> },
  { name: 'sobre mi', path: '/about', icon: <HiUser /> },
  { name: 'contacto', path: '/contact', icon: <HiEnvelope /> },
]

export const technologiesData = [
  {
    id: 1,
    name: 'Javascript',
    imageUrl: 'https://icongr.am/devicon/javascript-original.svg',
    color: '#F0DB4F55'
  },
  {
    id: 2,
    name: 'Typescript',
    imageUrl: 'https://icongr.am/devicon/typescript-plain.svg',
    color: '#2F74C055'
  },
  {
    id: 3,
    name: 'Css',
    imageUrl: 'https://icongr.am/devicon/css3-original.svg',
    color: '#2965F155'
  },
  {
    id: 4,
    name: 'Sass',
    imageUrl: 'https://icongr.am/devicon/sass-original.svg',
    color: '#CD679955'
  },
  {
    id: 5,
    name: 'Tailwind',
    imageUrl: '/icons/tailwind.svg',
    color: '#06B6D455'
  },
  {
    id: 6,
    name: 'Framer Motion',
    imageUrl: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-logo-shadow-tal-revivo.png',
    color: '#0055FF55'
  },
  {
    id: 7,
    name: 'React',
    imageUrl: 'https://icongr.am/devicon/react-original.svg',
    color: '#61DAFB55'
  },
  {
    id: 8,
    name: 'Next',
    imageUrl: '/icons/nextjs.svg',
    color: '#CCCCCC55'
  },
  {
    id: 9,
    name: 'MongoDB',
    imageUrl: 'https://icongr.am/devicon/mongodb-original.svg',
    color: '#47A24855'
  },
  {
    id: 10,
    name: 'Node',
    imageUrl: 'https://icongr.am/devicon/nodejs-original.svg',
    color: '#33993355'
  },
  {
    id: 11,
    name: 'Express',
    imageUrl: 'https://icongr.am/devicon/express-original.svg',
    color: '#CCCCCC55'
  },
  {
    id: 12,
    name: 'Github',
    imageUrl: 'https://icongr.am/devicon/github-original.svg',
    color: '#CCCCCC55'
  }
]

export const projectsData = [
  {
    id: 1,
    imagesUrl: [
      'https://i.ibb.co/0FLNxrt/netflix-clone.gif',
      'https://i.ibb.co/w64ybrc/thumb.png',
      'https://i.ibb.co/whJj0ww/netflix1.png',
      'https://i.ibb.co/p4WxyQv/netflix2.png'
    ],
    title: 'Netflix Clone',
    description:
      'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
    // tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Prismic'],
    tags: [technologiesData[7], technologiesData[1], technologiesData[4], technologiesData[5]]
  },
  {
    id: 2,
    imagesUrl: [
      'https://i.ibb.co/0FLNxrt/netflix-clone.gif',
      'https://i.ibb.co/w64ybrc/thumb.png',
      'https://i.ibb.co/whJj0ww/netflix1.png',
      'https://i.ibb.co/p4WxyQv/netflix2.png'
    ],
    title: 'Netflix Clone',
    description:
      'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
    tags: [technologiesData[7], technologiesData[1], technologiesData[5]]
  },
  {
    id: 3,
    imagesUrl: [
      'https://i.ibb.co/0FLNxrt/netflix-clone.gif',
      'https://i.ibb.co/w64ybrc/thumb.png',
      'https://i.ibb.co/whJj0ww/netflix1.png',
      'https://i.ibb.co/p4WxyQv/netflix2.png'
    ],
    title: 'Netflix Clone',
    description:
      'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
    tags: [technologiesData[7], technologiesData[1]]
  },
  {
    id: 4,
    imagesUrl: [
      'https://i.ibb.co/0FLNxrt/netflix-clone.gif',
      'https://i.ibb.co/w64ybrc/thumb.png',
      'https://i.ibb.co/whJj0ww/netflix1.png',
      'https://i.ibb.co/p4WxyQv/netflix2.png'
    ],
    title: 'Netflix Clone',
    description:
      'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
    tags: [technologiesData[8], technologiesData[2], technologiesData[5], technologiesData[6]]
  },
  {
    id: 5,
    imagesUrl: [
      'https://i.ibb.co/0FLNxrt/netflix-clone.gif',
      'https://i.ibb.co/w64ybrc/thumb.png',
      'https://i.ibb.co/whJj0ww/netflix1.png',
      'https://i.ibb.co/p4WxyQv/netflix2.png'
    ],
    title: 'Netflix Clone',
    description:
      'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
    tags: [technologiesData[8], technologiesData[2], technologiesData[5], technologiesData[6]]
  },
  {
    id: 6,
    imagesUrl: [
      'https://i.ibb.co/0FLNxrt/netflix-clone.gif',
      'https://i.ibb.co/w64ybrc/thumb.png',
      'https://i.ibb.co/whJj0ww/netflix1.png',
      'https://i.ibb.co/p4WxyQv/netflix2.png'
    ],
    title: 'Netflix Clone',
    description:
      'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
    tags: [technologiesData[8], technologiesData[2], technologiesData[5], technologiesData[6]]
  },
  {
    id: 7,
    imagesUrl: [
      'https://i.ibb.co/0FLNxrt/netflix-clone.gif',
      'https://i.ibb.co/w64ybrc/thumb.png',
      'https://i.ibb.co/whJj0ww/netflix1.png',
      'https://i.ibb.co/p4WxyQv/netflix2.png'
    ],
    title: 'Netflix Clone',
    description:
      'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
    tags: [technologiesData[8], technologiesData[2], technologiesData[5], technologiesData[6]]
  },
  {
    id: 8,
    imagesUrl: [
      'https://i.ibb.co/0FLNxrt/netflix-clone.gif',
      'https://i.ibb.co/w64ybrc/thumb.png',
      'https://i.ibb.co/whJj0ww/netflix1.png',
      'https://i.ibb.co/p4WxyQv/netflix2.png'
    ],
    title: 'Netflix Clone',
    description:
      'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
    tags: [technologiesData[8], technologiesData[2], technologiesData[5], technologiesData[6]]
  },

]

export const fadeIn = (
  direction, delay, distance = 80, duration = 1.5
) => {
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
