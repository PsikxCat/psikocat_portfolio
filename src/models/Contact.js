import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Un nombre es requerido'],
    trim: true,
    minLength: [2, 'El nombre debe tener al menos 2 letras'],
    maxLength: [50, 'El nombre debe tener menos de 50 letras']
  },
  email: {
    type: String,
    required: [true, 'Un email es requerido'],
    match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'El email no es válido'],
  },
  subject: {
    type: String,
    required: [true, 'Un asunto es requerido'],
    trim: true,
    minLength: [2, 'El asunto debe tener al menos 2 letras'],
    maxLength: [100, 'El asunto debe tener menos de 50 letras']
  },
  message: {
    type: String,
    required: [true, 'Un mensaje es requerido'],
  }
},
{ timestamps: true })

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema)

export default Contact
