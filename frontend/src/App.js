import React from 'react'
import style from './App.module.css'
import Todo from './component/todo'

function App() {
  return (
    <main
      className={style.main}
      style={{
        backgroundImage: 'url(/bridge.jpg)',
      }}
    >
      <Todo />
    </main>
  )
}

export default App
