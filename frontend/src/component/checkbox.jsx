import React, { useState } from 'react'
//GraphQL
import { useMutation } from '@apollo/client'
import { UPDATE_TODO } from '../mutations'
import { GET_TODOS } from '../queries'

const CustomCheckbox = ({ id, checked }) => {
  const [isChecked, setIsChecked] = useState(checked)
  const [trigger] = useMutation(UPDATE_TODO, {
    variables: { toDoId: id, completed: !isChecked },
    // Update the cache after a successful mutation
    update(cache, { data: { updateToDo } }) {
      // Read the current state of todos from the cache
      const { getToDos } = cache.readQuery({ query: GET_TODOS })
      // Update the todos array with the new completed status of the todo
      const updatedData = getToDos.map((data) => {
        if (data.id === updateToDo.id) {
          return {
            completed: updateToDo.completed,
            task: updateToDo.task,
          }
        }
        return data
      })
      // Write the updated todos array back to the cache
      cache.writeQuery({
        query: GET_TODOS,
        data: { getToDos: updatedData },
      })
    },
  })

  const handleChange = () => {
    setIsChecked(!isChecked)
    // Trigger the mutation
    trigger()
  }

  return (
    <label className='custom-checkbox-container'>
      <input type='checkbox' checked={isChecked} onChange={handleChange} />
      <span className='checkmark'></span>
    </label>
  )
}

export default CustomCheckbox
