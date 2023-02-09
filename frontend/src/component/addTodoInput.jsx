import React, { useState } from 'react'

// GraphQL
import { useMutation } from '@apollo/client'
import { CREATE_TODO } from '../mutations'
import { GET_TODOS } from '../queries'

const StyledInput = () => {
  const [task, setTask] = useState('')
  const [addTodo] = useMutation(CREATE_TODO, {
    variables: { toDoInput: { task } },
    // Update the cache after a successful mutation
    update(cache, { data: { createToDo } }) {
      // Read the current state of todos from the cache
      const { getToDos } = cache.readQuery({ query: GET_TODOS })
      // Update the todos array with the new todo
      cache.writeQuery({
        query: GET_TODOS,
        data: { getToDos: [...getToDos, createToDo] },
      })
    },
  })
  const handleSubmit = () => {
    addTodo({ task })
    setTask('')
  }

  return (
    <div style={{ display: 'flex' }}>
      <input
        type='text'
        style={{
          background: 'white',
          border: 'none',
          padding: '1rem',
          fontSize: '1.2rem',
          flex: 1,
        }}
        value={task}
        onChange={(event) => setTask(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleSubmit()
          }
        }}
      />
      <button
        style={{
          background: '#ffffff90',
          color: 'white',
          padding: '1rem',
          border: 'none',
          fontSize: '1.2rem',
          cursor: 'pointer',
          backdropFilter: 'blur(0.1rem)',
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  )
}

export default StyledInput
