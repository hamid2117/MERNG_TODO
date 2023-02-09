import React from 'react'
import style from './todo.module.css'
// Components
import Checkbox from './ui/checkbox'
import AddTodoInput from './addTodoInput'
import DeleteTodo from './deleteTodo'
//ReactIcons
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
// GraphQL
import { useQuery } from '@apollo/client'
import { GET_TODOS } from '../queries'

const Todo = () => {
  const { loading, data } = useQuery(GET_TODOS)
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
      {loading ? (
        <>
          <div className='lds-hourglass'></div>
        </>
      ) : (
        <div className={style.todoItemMain}>
          {data.getToDos.map(({ task, completed, id }) => {
            return (
              <div key={id} className={style.todoItemChild}>
                <Checkbox id={id} checked={completed} />
                <h4>{task}</h4>
                <DeleteTodo id={id} />
              </div>
            )
          })}
        </div>
      )}
      <div>
        <AddTodoInput />
      </div>
    </section>
  )
}

export default Todo
