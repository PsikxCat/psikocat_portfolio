import { NextResponse } from 'next/server'
import mongoose from 'mongoose'

import connectToDB from '@/database'
import Contact from '@/models/Contact'
import { transporter, mailOptions } from '@/config/nodemailer'
import { generateEmailContent } from '@/utils'

export async function POST(request) {
  const formData = await request.json()
  const { name, email, subject, message } = formData

  try {
    await connectToDB()
    await Contact.create({ name, email, subject, message })

    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(formData),
      subject: `Nuevo mensaje de ${name}`,
    })

    return NextResponse.json({
      message: 'El mensaje se envio correctamente',
      success: true,
      status: 200
    })
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errors = {}
      for (const key in error.errors) errors[key] = error.errors[key].message

      return NextResponse.json({
        message: 'Ocurrió un error al enviar el mensaje',
        success: false,
        status: 400,
        errors
      })
    } else {
      return NextResponse.json({
        message: 'Ocurrió un error al enviar el mensaje',
        success: false,
        status: 500
      })
    }
  }
}
