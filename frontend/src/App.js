import React from 'react'
import style from './App.module.css'
import Todo from './component/todo'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

// Create an instance of ApolloClient with the URL to the GraphQL server
// and the InMemoryCache for caching data
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

// The main component that wraps the Todo component with the ApolloProvider
function App() {
  return (
    // Wrap the Todo component with the ApolloProvider and pass the client instance
    <ApolloProvider client={client}>
      <main
        className={style.main}
        style={{
          // Set the background image for the main component
          backgroundImage: 'url(/bridge.jpg)',
        }}
      >
        {/* Render the Todo component */}
        <Todo />
      </main>
    </ApolloProvider>
  )
}

export default App
