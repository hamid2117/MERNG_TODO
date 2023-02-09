import React, { useState } from 'react'

// GraphQL
import { useMutation } from '@apollo/client'
import { UPDATE_TODO } from '../../mutations'
import { GET_TODOS } from '../../queries'

const CustomCheckbox = ({ id, checked }) => {
  const [isChecked, setIsChecked] = useState(checked)
  const [trigger] = useMutation(UPDATE_TODO, {
    variables: { toDoId: id, completed: !isChecked },
    refetchQueries: [{ query: GET_TODOS }],
  })
  const handleChange = () => {
    setIsChecked(!isChecked)
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
