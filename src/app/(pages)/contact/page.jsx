'use client'

import { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import { createAccount } from '@/utils/apiUtils'
import { validateForm } from '@/utils'

export default function ContactPage() {
  const [error, setError] = useState([])
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = {
      name: String(e.target.name.value),
      email: String(e.target.email.value).toLocaleLowerCase(),
      subject: String(e.target.subject.value),
      message: String(e.target.message.value)
    }

    const currentErrors = validateForm(formData)
    setError(currentErrors)

    const response = await createAccount(formData)
    const { message, success, errors } = response

    if (errors) {
      setLoading(false)
      console.error(message, errors)
    }

    if (success) {
      setLoading(false)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 5000)

      e.target.reset()
    }
  }

  return (
    <div className="page flex_center">
      <section className='flex_center_column gap-y-1 gap-x-5 lg:flex-row justify-evenly p-3 lg:w-[90%] xl:-[80%] pb-[5vh] md:pb-[7svh] lg:pb-0'>
        <h1 className='h1 mb-2 lg:mb-5 p-5'>Hablemos<span className="text-accent">.</span></h1>

        {/* formulario */}
        <form className='flex_center_column gap-y-6 md:pr-6 text-base min-w-[250px] max-w-[600px]'
          onSubmit={(e) => handleSubmit(e)} >
          <div className='flex max-[900px]:flex-col gap-6 w-full'>
            {/* nombre */}
            <input
              className='p-6 capitalize'
              name='name'
              autoComplete='off'
              placeholder='nombre'
            />
            {/* email */}
            <input
              className='p-6 lowercase placeholder:capitalize'
              name='email'
              autoComplete='off'
              placeholder='correo'
            />
          </div>
          {/* asunto */}
          <input
            className='p-6 capitalize'
            name='subject'
            autoComplete='off'
            placeholder='asunto'
          />
          {/* mensaje */}
          <textarea
            className='bg-transparent outline-none p-7 placeholder:capitalize'
            name='message'
            placeholder='mensaje'
          />
          {/* boton y confirmacion/error */}
          <div className='w-full flex_center justify-between'>
            <button className='flex_center h-[40px] rounded-full min-w-[100px] max-w-[50%] bg-darker py-3 border border-white/40 hover:border-accent transition-all duration-300 group' type='submit'>
              {loading
                ? (
                <svg aria-hidden="true" role="status" className="inline w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                </svg>
                  )
                : (
                <div className='flex_center'>
                  <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-100'>
                    Enviar
                  </span>
                  <BsArrowRight className='absolute text-[22px] text-accent opacity-0 translate-y-[120%] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200'/>
                </div>
                  )
              }
            </button>

            {error.length > 0 && <span className='text-accent font-semibold text-sm px-5'>{error[0]}</span>}
            {success && <span className='text-accent-2 font-bold text-sm px-5'>Mensaje enviado!</span>}
          </div>
        </form>
      </section>
    </div>
  )
}
