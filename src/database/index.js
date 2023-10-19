import mongoose from 'mongoose'

export default async function connectToDB() {
  try {
    // Si la conexión ya está establecida, no hacemos nada
    if (mongoose.connection.readyState === 1) return

    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB')
  } catch (error) {
    throw new Error('Error connecting to MongoDB: ' + error.message)
  }
}
