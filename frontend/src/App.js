import React from 'react'
import style from './App.module.css'
import Todo from './component/todo'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <main
        className={style.main}
        style={{
          backgroundImage: 'url(/bridge.jpg)',
        }}
      >
        <Todo />
      </main>
    </ApolloProvider>
  )
}

export default App
