import mongoose from 'mongoose'

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbName = process.env.DB_NAME
const serverPort = process.env.PORT || 8080

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { connection: null, promise: null }
}

async function dbConnect() {
  if (cached.connection) {
    return cached.connection
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    }

    cached.promise = mongoose
      .connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`, opts)
      .then(mongoose => {
        return mongoose
      })
  }

  cached.connection = await cached.promise
  return cached.connection
}

export default dbConnect
