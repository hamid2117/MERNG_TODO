import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { RxDragHandleDots2 } from 'react-icons/rx'
import Checkbox from './component/checkbox'
import './App.css'
import StyledInput from './component/styledinput'
function App() {
  return (
    <>
      <section
        style={{
          height: '100vh',
          backgroundSize: 'cover',
          background: 'url(/bridge.jpg) no-repeat center center fixed',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <div>
          <img
            src='/mee.jpeg'
            style={{ borderRadius: '50%', border: '2px solid white' }}
            alt='Hamid'
          />
        </div>
        <div
          style={{
            width: '18rem',
            display: 'grid',
            gridTemplateColumns: '2rem auto 2rem',
            alignItems: 'center',
            background: '#ffffff40',
            gap: '0.5rem',
            borderRadius: '0.6rem',
            padding: '0px 1.4rem',
            backdropFilter: 'blur(0.1rem)',
          }}
        >
          <AiOutlineMenu />
          <h4 style={{ color: 'white' }}>To do Today</h4>
          <BsChevronDown style={{ justifySelf: 'end' }} />
        </div>
        <div
          style={{
            borderRadius: '0.6rem',
            width: '21rem',
            background: 'white',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2rem auto 2rem',
              alignItems: 'center',
              padding: '0px 0.3rem',
            }}
          >
            <Checkbox />
            <h4>work</h4>
            <RxDragHandleDots2 />
          </div>
          <hr />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2rem auto 2rem',
              alignItems: 'center',
              padding: '0px 0.3rem',
            }}
          >
            <Checkbox />
            <h4>work</h4>
            <RxDragHandleDots2 />
          </div>
          <hr />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2rem auto 2rem',
              alignItems: 'center',
              padding: '0px 0.3rem',
            }}
          >
            <Checkbox />
            <h4>work</h4>
            <RxDragHandleDots2 />
          </div>
        </div>

        <div>
          <StyledInput />
        </div>
      </section>
    </>
  )
}

export default App
