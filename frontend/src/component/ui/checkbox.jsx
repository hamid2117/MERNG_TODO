import React from 'react'

const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <label className='custom-checkbox-container'>
      <input type='checkbox' checked={checked} onChange={onChange} />
      <span className='checkmark'></span>
    </label>
  )
}

export default CustomCheckbox
