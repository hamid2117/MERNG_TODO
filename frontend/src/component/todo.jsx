import React from 'react'
import style from './todo.module.css'
// UI Components
import Checkbox from './ui/checkbox'
import StyledInput from './ui/styledinput'
//ReactIcons
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { RxDragHandleDots2 } from 'react-icons/rx'
const Todo = () => {
  return (
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
  )
}

export default Todo
