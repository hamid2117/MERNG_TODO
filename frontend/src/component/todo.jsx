import React from 'react'
import style from './todo.module.css'
// Components
import Checkbox from './checkbox'
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
  // Loading state, either show a loading indicator or the list of todos
  return (
    <section className={style.section}>
      <div>
        <img src='/mee.jpeg' className={style.profileImg} alt='Hamid' />
      </div>
      {/* To do header */}
      <div className={style.header}>
        <AiOutlineMenu />
        <h4>To do Today</h4>
        <BsChevronDown className={style.headerIcon} />
      </div>
      {loading ? (
        <div className='lds-hourglass'></div>
      ) : data.getToDos.length < 1 ? (
        <h3>Please Add Todo List ✅</h3>
      ) : (
        <div className={style.todoItemMain}>
          {/* Display each todo item */}
          {data.getToDos.map(({ task, completed, id }, index) => {
            return (
              <div>
                <div key={id} className={style.todoItemChild}>
                  {/* Checkbox component */}
                  <Checkbox id={id} checked={completed} />
                  <h4>{task}</h4>
                  {/* Delete todo component */}
                  <DeleteTodo id={id} />
                </div>
                {/* last todo item  not include divider below it */}
                {index + 1 !== data.getToDos.length && <hr />}
              </div>
            )
          })}
        </div>
      )}
      {/* Add todo input component */}
      <div>
        <AddTodoInput />
      </div>
    </section>
  )
}

export default Todo
