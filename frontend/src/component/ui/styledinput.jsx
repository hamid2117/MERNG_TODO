import React, { useState } from 'react'

const StyledInput = () => {
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    console.log('Data submitted:', value)
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
        value={value}
        onChange={(event) => setValue(event.target.value)}
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
