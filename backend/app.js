require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/typeDefs')

const server = new ApolloServer({ typeDefs, resolvers })

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
