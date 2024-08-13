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
  prisma: {
    id: 16,
    name: 'Prisma',
    imageUrl: '/icons/prisma.svg',
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
  vite: {
    id: 13,
    name: 'Vite',
    imageUrl: '/icons/vitejs.svg',
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
      // 'https://i.ibb.co/0FLNxrt/netflix-clone.gif',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikoware_video.webp?alt=media&token=9daa8859-8a64-4097-8ef0-791961f52fe0',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikoware_thumb.webp?alt=media&token=69223e81-00ea-409f-aa52-7977e7e742ff',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikoware_1.webp?alt=media&token=ded8acb0-93bc-46a3-af22-db9a780debfb',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikoware_2.webp?alt=media&token=13cd9c80-6c15-4938-a4fa-42183b4a543a',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikoware_3.webp?alt=media&token=f92d8fd6-c073-43a2-8db6-5d11f541011f',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikoware_4.webp?alt=media&token=f74bb367-9b6f-450b-a35b-01af6f841f58',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikoware_5.webp?alt=media&token=503667ae-0197-42f8-b2b7-118fa5b4ab39'
    ],
    title: 'PsikoWare',
    liveUrl: 'https://psikoware-ecommerce.vercel.app/',
    codeUrl: 'https://github.com/PsikxCat/psikoware_ecommerce',
    description:
      'PsikoWare es una plataforma de comercio electrónico especializada en componentes para PC. Desarrollada con Next, ofrece una experiencia de compra fluida con un sistema de autenticación robusto y un panel de administración para la gestión de productos y pedidos.',
    extended_description:
      'PsikoWare E-commerce es una tienda en línea especializada en componentes para PC. Construida sobre Next.js y React con TypeScript, ofrece una experiencia de compra fluida y segura. La autenticación de usuarios se maneja a través de NextAuth, mientras que MongoDB sirve como base de datos robusta y escalable. La integración con MercadoPago proporciona una pasarela de pago confiable. El diseño responsivo se logra con Tailwind CSS, y se utiliza Chart.js para visualizaciones en el panel de administración. Firebase se emplea para el almacenamiento de imágenes, mejorando la gestión de contenido multimedia.',
    tags: [techsData.next, techsData.typescript, techsData.tailwind, techsData.mongodb]
  },
  {
    id: 2,
    imagesUrl: [
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikogames_video.webp?alt=media&token=e69dc07c-43b2-4b31-892d-6f49f6309095',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikogames_thumb.webp?alt=media&token=cbeb8aa5-a682-4fe7-b2e3-fe13ffec1991',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikogames_1.webp?alt=media&token=af16903a-9f0f-4970-a6d4-c71d34d899fd',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikogames_2.webp?alt=media&token=2e90bb3d-a1c2-4613-93a9-5c23a12f8193',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikogames_3.webp?alt=media&token=a53dddb3-6f74-4b2b-979b-2beb2136a678',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikogames_4.webp?alt=media&token=37171c71-6d83-41ab-8d42-7fcca8ee31d8                                 '
    ],
    title: 'PsikoGames',
    liveUrl: 'https://psikogames.vercel.app/',
    codeUrl: 'https://github.com/PsikxCat/psikogames',
    description:
      'PsikoGames es una plataforma de juegos web desarrollada con Next.js que ofrece una experiencia de juego interactiva con un sistema de autenticación robusto. La plataforma incluye tres juegos clásicos: Wordle, Minesweeper y Memory.',
    extended_description:
      'Psiko Games es una plataforma de juegos web que ofrece una experiencia de juego inmersiva con un sistema de autenticación robusto. Desarrollada con Next.js y React, utiliza TypeScript para un código más seguro y mantenible. La autenticación se maneja con NextAuth, ofreciendo múltiples proveedores. Prisma ORM se emplea para interactuar eficientemente con una base de datos PostgreSQL. La interfaz de usuario, construida con Tailwind CSS y componentes de Radix UI, es responsiva y atractiva. El proyecto también incorpora Framer Motion para animaciones fluidas y Zod para validación de datos.',
    tags: [techsData.next, techsData.typescript, techsData.prisma, techsData.framermotion]
  },
  {
    id: 3,
    imagesUrl: [
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fwhatscatt_video.webp?alt=media&token=cf666180-a539-4757-81c4-a5f16aee74e8',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fwhatscatt_thumb.webp?alt=media&token=7b88025f-8a2d-45b3-9c64-25a15bf6bad4',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fwhatscatt_1.webp?alt=media&token=255980f6-1aef-4eee-b5be-3abb97170002',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fwhatscatt_2.webp?alt=media&token=c13b7017-ba67-456e-832c-f297ec1a1b51'
    ],
    title: 'Whatscatt',
    liveUrl: 'https://whatscatt-app.vercel.app/',
    codeUrl: 'https://github.com/PsikxCat/whatscatt_app',
    description:
      'WhatsCatt App es un clon de WhatsApp Web que ofrece funcionalidades de mensajería en tiempo real. Esta aplicación proporciona una experiencia de chat fluida y familiar.',
    extended_description:
      'WhatsCatt App es un clon de WhatsApp Web que ofrece funcionalidades de chat en tiempo real. Desarrollada con Next.js y React, utiliza TypeScript para un desarrollo más seguro. La autenticación se maneja a través de Clerk, proporcionando opciones seguras de inicio de sesión. Convex se utiliza como base de datos en tiempo real y para el almacenamiento de archivos, permitiendo una experiencia de chat fluida. La interfaz de usuario se construye con Tailwind CSS y componentes de Radix UI. El proyecto también incluye integración planificada con la API de Google Generative AI para funcionalidades de chat asistido por IA.',
    tags: [techsData.next, techsData.typescript, techsData.tailwind]
  },
  {
    id: 4,
    imagesUrl: [
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikoflix_video.webp?alt=media&token=c8580fc4-5a20-4588-b630-c9e17d90c85f',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikoflix_thumb.webp?alt=media&token=9e3c42fb-48fa-4135-b998-19844a44f4c2',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikoflix_1.webp?alt=media&token=dc35c4cd-e97a-40e5-9385-020319c07707',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikoflix_2.webp?alt=media&token=f851a471-b396-4b2f-ac35-8150a5d73e37',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikoflix_3.webp?alt=media&token=931e75d2-d0dd-4a66-ab2e-71555671572a',
      'https://firebasestorage.googleapis.com/v0/b/fir-realtime-db-test-50a0a.appspot.com/o/portfolio%2Fpsikoflix_4.webp?alt=media&token=0954d917-e44b-4c0b-9913-3d3128776db0',
    ],
    title: 'Psikoflix',
    liveUrl: 'https://psikoflix.netlify.app/',
    codeUrl: 'https://github.com/PsikxCat/psikoflix',
    description:
      'PsikoFlix es un clon de la interfaz de usuario de Netflix, desarrollado con React y Vite. Utiliza la API de TMDB para mostrar información sobre películas y series, ofreciendo una experiencia similar a la plataforma de streaming original.',
    extended_description:
      'PsikoFlix es un clon de Netflix que ofrece una experiencia de streaming similar. Desarrollado con React y TypeScript, utiliza Vite como herramienta de construcción para un desarrollo rápido. La autenticación de usuarios y el almacenamiento de datos se manejan con Firebase. La API de TMDB se utiliza para obtener información actualizada sobre películas y series. React Router maneja la navegación, mientras que React Player se emplea para la reproducción de trailers. El diseño responsivo se logra con Tailwind CSS, y se incorporan características como scrollbars personalizados para mejorar la experiencia del usuario.',
    tags: [techsData.react, techsData.typescript, techsData.tailwind, techsData.vite]
  },
  // {
  //   id: 5,
  //   imagesUrl: [
  //     'https://i.ibb.co/0FLNxrt/netflix-clone.gif',
  //     'https://i.ibb.co/w64ybrc/thumb.png',
  //     'https://i.ibb.co/whJj0ww/netflix1.png',
  //     'https://i.ibb.co/p4WxyQv/netflix2.png'
  //   ],
  //   title: 'Netflix Clone',
  //   liveUrl: 'https://www.google.com/',
  //   codeUrl: 'https://www.google.com/',
  //   description:
  //     'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
  //   extended_description:
  //     'Este proyecto representa un clon de Netflix que ha sido desarrollado utilizando tecnologías tales como React, Redux, Firebase y Styled Components. En su funcionalidad, comprende una página de inicio de sesión y registro, así como una página principal que presenta un catálogo de películas. Por otra parte, proporciona una página dedicada a cada película, que incluye un reproductor de tráiler. Además, se destaca por su diseño receptivo, que se ajusta de manera óptima tanto a dispositivos móviles como a tabletas.',
  //   tags: [techsData.framermotion, techsData.javascript, techsData.css, techsData.sass]
  // },
  // {
  //   id: 6,
  //   imagesUrl: [
  //     'https://i.ibb.co/0FLNxrt/netflix-clone.gif',
  //     'https://i.ibb.co/w64ybrc/thumb.png',
  //     'https://i.ibb.co/whJj0ww/netflix1.png',
  //     'https://i.ibb.co/p4WxyQv/netflix2.png'
  //   ],
  //   title: 'Netflix Clone',
  //   liveUrl: 'https://www.google.com/',
  //   codeUrl: 'https://www.google.com/',
  //   description:
  //     'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
  //   extended_description:
  //     'Este proyecto representa un clon de Netflix que ha sido desarrollado utilizando tecnologías tales como React, Redux, Firebase y Styled Components. En su funcionalidad, comprende una página de inicio de sesión y registro, así como una página principal que presenta un catálogo de películas. Por otra parte, proporciona una página dedicada a cada película, que incluye un reproductor de tráiler. Además, se destaca por su diseño receptivo, que se ajusta de manera óptima tanto a dispositivos móviles como a tabletas.',
  //   tags: [techsData.typescript, techsData.javascript, techsData.css, techsData.sass]
  // },
  // {
  //   id: 7,
  //   imagesUrl: [
  //     'https://i.ibb.co/0FLNxrt/netflix-clone.gif',
  //     'https://i.ibb.co/w64ybrc/thumb.png',
  //     'https://i.ibb.co/whJj0ww/netflix1.png',
  //     'https://i.ibb.co/p4WxyQv/netflix2.png'
  //   ],
  //   title: 'Netflix Clone',
  //   liveUrl: 'https://www.google.com/',
  //   codeUrl: 'https://www.google.com/',
  //   description:
  //     'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
  //   extended_description:
  //     'Este proyecto representa un clon de Netflix que ha sido desarrollado utilizando tecnologías tales como React, Redux, Firebase y Styled Components. En su funcionalidad, comprende una página de inicio de sesión y registro, así como una página principal que presenta un catálogo de películas. Por otra parte, proporciona una página dedicada a cada película, que incluye un reproductor de tráiler. Además, se destaca por su diseño receptivo, que se ajusta de manera óptima tanto a dispositivos móviles como a tabletas.',
  //   tags: [techsData.figma, techsData.javascript, techsData.css, techsData.sass]
  // },
  // {
  //   id: 8,
  //   imagesUrl: [
  //     'https://i.ibb.co/0FLNxrt/netflix-clone.gif',
  //     'https://i.ibb.co/w64ybrc/thumb.png',
  //     'https://i.ibb.co/whJj0ww/netflix1.png',
  //     'https://i.ibb.co/p4WxyQv/netflix2.png'
  //   ],
  //   title: 'Netflix Clone',
  //   liveUrl: 'https://www.google.com/',
  //   codeUrl: 'https://www.google.com/',
  //   description:
  //     'This is a Netflix clone made with React, Redux, Firebase and Styled Components. It has a login and register page, a home page with a list of movies and a movie page with a trailer. It also has a responsive design for mobile devices and tablets.',
  //   extended_description:
  //     'Este proyecto representa un clon de Netflix que ha sido desarrollado utilizando tecnologías tales como React, Redux, Firebase y Styled Components. En su funcionalidad, comprende una página de inicio de sesión y registro, así como una página principal que presenta un catálogo de películas. Por otra parte, proporciona una página dedicada a cada película, que incluye un reproductor de tráiler. Además, se destaca por su diseño receptivo, que se ajusta de manera óptima tanto a dispositivos móviles como a tabletas.',
  //   tags: [techsData.express, techsData.css, techsData.react]
  // },

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

export const validateForm = (formData) => {
  const { name, email, subject, message } = formData
  const newErrors = []

  if (!name) newErrors.push('El nombre es requerido')
  else if (name.length < 2) newErrors.push('El nombre debe tener al menos 2 letras')
  else if (name.length > 50) newErrors.push('El nombre debe tener menos de 50 letras')

  if (!email) newErrors.push('El correo es requerido')
  else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) newErrors.push('El correo no es válido')

  if (!subject) newErrors.push('El asunto es requerido')
  else if (subject.length < 2) newErrors.push('El asunto debe tener al menos 2 letras')
  else if (subject.length > 100) newErrors.push('El asunto debe tener menos de 100 letras')

  if (!message) newErrors.push('El mensaje es requerido')

  return newErrors
}

export const generateEmailContent = (formData) => {
  const messageFieldsTranslations = {
    name: 'Nombre',
    email: 'Correo',
    subject: 'Asunto',
    message: 'Mensaje'
  }

  const stringData = Object.entries(formData)
    .reduce((acc, [key, value]) =>
      acc + `${messageFieldsTranslations[key]}: \n${value} \n \n`
    , '')

  const htmlData = Object.entries(formData)
    .reduce((acc, [key, value]) =>
      acc + `<h1 class="form-heading" aling="left">${messageFieldsTranslations[key]}:<h1/><p class="form-answer" aling="left">${value}</p>`
    , '')

  return {
    text: stringData,
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>Nuevo Mensaje Desde Portfolio</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`
  }
}
