require('dotenv').config()
const { ApolloServer, gql } = require('apollo-server')
const connectDB = require('./db/connect')

const server = new ApolloServer()

// The `listen` method launches a web server.
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    const { url } = await server.listen()
    console.log(`Server ready at ${url}`)
  } catch (error) {
    console.log(error)
  }
}

start()
