import { HiHome, HiUser, HiRectangleGroup, HiEnvelope } from 'react-icons/hi2'

export const navLinks = [
  { name: 'home', path: '/home', icon: <HiHome/> },
  { name: 'portfolio', path: '/work', icon: <HiRectangleGroup /> },
  { name: 'sobre mi', path: '/about', icon: <HiUser /> },
  { name: 'contacto', path: '/contact', icon: <HiEnvelope /> },
]

export const techsData = {
  javascript: {
    id: 1,
    name: 'Javascript',
    imageUrl: '/icons/javascript.svg',
    color: '#F0DB4F55'
  },
  typescript: {
    id: 2,
    name: 'Typescript',
    imageUrl: '/icons/typescript.svg',
    color: '#2F74C055'
  },
  css: {
    id: 3,
    name: 'Css',
    imageUrl: '/icons/css.svg',
    color: '#2965F155'
  },
  sass: {
    id: 4,
    name: 'Sass',
    imageUrl: '/icons/sass.svg',
    color: '#CD679955'
  },
  tailwind: {
    id: 5,
    name: 'Tailwind',
    imageUrl: '/icons/tailwind.svg',
    color: '#06B6D455'
  },
  framermotion: {
    id: 6,
    name: 'Framer Motion',
    imageUrl: '/icons/framermotion.svg',
    color: '#0055FF55'
  },
  react: {
    id: 7,
    name: 'React',
    imageUrl: '/icons/react.svg',
    color: '#61DAFB55'
  },
  next: {
    id: 8,
    name: 'Next',
    imageUrl: '/icons/nextjs.svg',
    color: '#CCCCCC55'
  },
  mongodb: {
    id: 9,
    name: 'MongoDB',
    imageUrl: '/icons/mongodb.svg',
    color: '#47A24855'
  },
  nodejs: {
    id: 10,
    name: 'Node',
    imageUrl: '/icons/nodejs.svg',
    color: '#33993355'
  },
  express: {
    id: 11,
    name: 'Express',
    imageUrl: '/icons/express.svg',
    color: '#22222255'
  },
  firebase: {
    id: 12,
    name: 'Firebase',
    imageUrl: '/icons/firebase.svg',
    color: '#FFCA2855'
  },
  figma: {
    id: 13,
    name: 'Figma',
    imageUrl: '/icons/figma.svg',
    color: '#F24E1E55'
  },
  photoshop: {
    id: 14,
    name: 'Photoshop',
    imageUrl: '/icons/photoshop.svg',
    color: '#31A8FF55'
  },
  github: {
    id: 15,
    name: 'Github',
    imageUrl: '/icons/github.svg',
    color: '#CCCCCC55'
  }
}

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
    liveUrl: 'https://www.google.com/',
    codeUrl: 'https://www.google.com/',
    description:
      'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
    extended_description:
      'Este proyecto representa un clon de Netflix que ha sido desarrollado utilizando tecnologías tales como React, Redux, Firebase y Styled Components. En su funcionalidad, comprende una página de inicio de sesión y registro, así como una página principal que presenta un catálogo de películas. Por otra parte, proporciona una página dedicada a cada película, que incluye un reproductor de tráiler. Además, se destaca por su diseño receptivo, que se ajusta de manera óptima tanto a dispositivos móviles como a tabletas.',
    tags: [techsData.react, techsData.next, techsData.framermotion, techsData.tailwind]
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
    liveUrl: 'https://www.google.com/',
    codeUrl: 'https://www.google.com/',
    description:
      'It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
    extended_description:
      'Este proyecto representa un clon de Netflix que ha sido desarrollado utilizando tecnologías tales como React, Redux, Firebase y Styled Components. En su funcionalidad, comprende una página de inicio de sesión y registro, así como una página principal que presenta un catálogo de películas. Por otra parte, proporciona una página dedicada a cada película, que incluye un reproductor de tráiler. Además, se destaca por su diseño receptivo, que se ajusta de manera óptima tanto a dispositivos móviles como a tabletas.',
    tags: [techsData.css, techsData.sass, techsData.javascript]
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
    liveUrl: 'https://www.google.com/',
    codeUrl: 'https://www.google.com/',
    description:
      'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
    extended_description:
      'Este proyecto representa un clon de Netflix que ha sido desarrollado utilizando tecnologías tales como React, Redux, Firebase y Styled Components. En su funcionalidad, comprende una página de inicio de sesión y registro, así como una página principal que presenta un catálogo de películas. Por otra parte, proporciona una página dedicada a cada película, que incluye un reproductor de tráiler. Además, se destaca por su diseño receptivo, que se ajusta de manera óptima tanto a dispositivos móviles como a tabletas.',
    tags: [techsData.photoshop, techsData.figma, techsData.javascript]
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
    liveUrl: 'https://www.google.com/',
    codeUrl: 'https://www.google.com/',
    description:
      'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
    extended_description:
      'Este proyecto representa un clon de Netflix que ha sido desarrollado utilizando tecnologías tales como React, Redux, Firebase y Styled Components. En su funcionalidad, comprende una página de inicio de sesión y registro, así como una página principal que presenta un catálogo de películas. Por otra parte, proporciona una página dedicada a cada película, que incluye un reproductor de tráiler. Además, se destaca por su diseño receptivo, que se ajusta de manera óptima tanto a dispositivos móviles como a tabletas.',
    tags: [techsData.expression, techsData.mongodb, techsData.nodejs, techsData.firebase]
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
    liveUrl: 'https://www.google.com/',
    codeUrl: 'https://www.google.com/',
    description:
      'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
    extended_description:
      'Este proyecto representa un clon de Netflix que ha sido desarrollado utilizando tecnologías tales como React, Redux, Firebase y Styled Components. En su funcionalidad, comprende una página de inicio de sesión y registro, así como una página principal que presenta un catálogo de películas. Por otra parte, proporciona una página dedicada a cada película, que incluye un reproductor de tráiler. Además, se destaca por su diseño receptivo, que se ajusta de manera óptima tanto a dispositivos móviles como a tabletas.',
    tags: [techsData.framermotion, techsData.javascript, techsData.css, techsData.sass]
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
    liveUrl: 'https://www.google.com/',
    codeUrl: 'https://www.google.com/',
    description:
      'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
    extended_description:
      'Este proyecto representa un clon de Netflix que ha sido desarrollado utilizando tecnologías tales como React, Redux, Firebase y Styled Components. En su funcionalidad, comprende una página de inicio de sesión y registro, así como una página principal que presenta un catálogo de películas. Por otra parte, proporciona una página dedicada a cada película, que incluye un reproductor de tráiler. Además, se destaca por su diseño receptivo, que se ajusta de manera óptima tanto a dispositivos móviles como a tabletas.',
    tags: [techsData.typescript, techsData.javascript, techsData.css, techsData.sass]
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
    liveUrl: 'https://www.google.com/',
    codeUrl: 'https://www.google.com/',
    description:
      'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
    extended_description:
      'Este proyecto representa un clon de Netflix que ha sido desarrollado utilizando tecnologías tales como React, Redux, Firebase y Styled Components. En su funcionalidad, comprende una página de inicio de sesión y registro, así como una página principal que presenta un catálogo de películas. Por otra parte, proporciona una página dedicada a cada película, que incluye un reproductor de tráiler. Además, se destaca por su diseño receptivo, que se ajusta de manera óptima tanto a dispositivos móviles como a tabletas.',
    tags: [techsData.figma, techsData.javascript, techsData.css, techsData.sass]
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
    liveUrl: 'https://www.google.com/',
    codeUrl: 'https://www.google.com/',
    description:
      'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
    extended_description:
      'Este proyecto representa un clon de Netflix que ha sido desarrollado utilizando tecnologías tales como React, Redux, Firebase y Styled Components. En su funcionalidad, comprende una página de inicio de sesión y registro, así como una página principal que presenta un catálogo de películas. Por otra parte, proporciona una página dedicada a cada película, que incluye un reproductor de tráiler. Además, se destaca por su diseño receptivo, que se ajusta de manera óptima tanto a dispositivos móviles como a tabletas.',
    tags: [techsData.express, techsData.css, techsData.react]
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
