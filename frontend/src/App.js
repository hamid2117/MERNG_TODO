import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { RxDragHandleDots2 } from 'react-icons/rx'
import Checkbox from './component/checkbox'
import style from './App.module.css'
import StyledInput from './component/styledinput'
function App() {
  return (
    <main
      className={style.main}
      style={{
        backgroundImage: 'url(/bridge.jpg)',
      }}
    >
      <section className={style.section}>
        <div>
          <img src='/mee.jpeg' className={style.profileImg} alt='Hamid' />
        </div>
        <div className={style.header}>
          <AiOutlineMenu />
          <h4>To do Today</h4>
          <BsChevronDown className={style.headerIcon} />
        </div>
        <div className={style.todoItemMain}>
          {[...Array(3)].map(() => {
            return (
              <div className={style.todoItemChild}>
                <Checkbox />
                <h4>work</h4>
                <RxDragHandleDots2 />
              </div>
            )
          })}
        </div>

        <div>
          <StyledInput />
        </div>
      </section>
    </main>
  )
}

export default App
