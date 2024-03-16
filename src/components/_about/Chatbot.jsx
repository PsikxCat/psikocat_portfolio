'use client'

import { useState, useEffect, useTransition, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

import { fadeIn } from '@/utils'
import { sendQuestion } from '@/actions/sendQuestion'

export default function Chatbot() {
  const [showBot, setShowBot] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Hola, pregunta lo que quieras saber sobre mi.',
      owner: 'bot'
    }
  ])
  const [isPending, startTransition] = useTransition()
  const chatEndRef = useRef(null)

  // Determina en que punto del scroll se muestra el botón del chatbot
  const checkScroll = useCallback(() => {
    const scrollPosition = window.scrollY
    const activationPoint = 200

    if (scrollPosition > activationPoint) {
      setShowBot(true)
    } else {
      setShowBot(false)
      setShowChat(false)
    }
  }, [])

  const scrollToChatEnd = () => chatEndRef.current.scrollIntoView({ behavior: 'smooth' })

  // Verifica si el usuario ha hecho scroll para mostrar el botón del chatbot basado en checkScroll; ademas muestra el final del chat al crear un nuevo mensaje
  useEffect(() => {
    window.addEventListener('scroll', checkScroll)

    if (showChat) scrollToChatEnd()

    return () => {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [messages])

  // Envia la pregunta del usuario y recibe la respuesta del bot y las muestra en el chat
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!e.target.question.value) return

    setMessages(prevMessages => [...prevMessages, {
      id: Math.random().toString(36).slice(2),
      text: e.target.question.value,
      owner: 'user'
    }])

    startTransition(() => {
      sendQuestion(e.target.question.value)
        .then(answer => {
          setMessages(prevMessages => [...prevMessages, {
            id: Math.random().toString(36).slice(2),
            text: answer,
            owner: 'bot'
          }])
        })
        .catch(error => {
          console.error(error)
          setMessages(prevMessages => [...prevMessages, {
            id: Math.random().toString(36).slice(2),
            text: 'Lo siento, aparentemente hay un problema con el servidor. Por favor intenta de nuevo.',
            owner: 'bot'
          }])
        })
    })

    setTimeout(() => e.target.reset(), 100)
  }

  return (<>
    {/* botón del chatbot */}
    <AnimatePresence>
      {showBot && (
        <motion.div
          className="fixed top-1/2 left-0 z-[999] cursor-pointer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{
            type: 'spring',
            stiffness: 700,
            damping: 20
          }}
        >
          <Image
            src="/images/psikocat-logo.png" alt="chatbot" width={80} height={80}
            onClick={() => setShowChat((prev) => !prev)}
          />
        </motion.div>
      )}
    </AnimatePresence>

    {/* chatbot */}
    <AnimatePresence>
    {showBot && showChat && (
      <motion.section
        className='fixed top-[calc(50%+40px)] left-0 bottom-0 z-[899] w-[330px] border-r border-accent rounded-tr-xl bg-black/50 backdrop-blur-sm'
        variants={fadeIn('right', 0.1, 100, 0.2)}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        <div className='flex flex-col gap-2 h-full p-2 text-sm'>
          {/* mensajes del chat */}
          <article className='flex flex-col pt-5 pb-2 px-2 flex-1 gap-2 overflow-y-auto '>
            {messages?.map((message) => (
              <div key={message.id}
                className={` w-[80%] rounded-xl p-2 ${message.owner === 'bot' ? 'self-start bg-red-600/40' : 'self-end bg-white/20'}`}
              >
                <p className={`text-sm leading-4 ${message.owner === 'bot' ? 'text-left' : 'text-right'}`}>{message.text}</p>
              </div>
            ))}

            {/* elemento de referncia para end scroll del chat */}
            <div ref={chatEndRef} />
          </article>

          {/* input para preguntas del chat */}
          <form onSubmit={(e) => handleSubmit(e)} className='flex justify-center'>
            <input
              type="text"
              name="question"
              autoComplete='off'
              className='bg-black px-2 h-10 rounded-r-none border-red-600/60 ring-0'
            />
            <button type="submit" disabled={isPending} className='bg-red-600/60 rounded-r-lg px-2'>
              Enviar
            </button>
          </form>
        </div>
      </motion.section>
    )}
    </AnimatePresence>
  </>)
}
