import { gql } from '@apollo/client'

const CREATE_TODO = gql`
  mutation CreateToDo($toDoInput: ToDoInput) {
    createToDo(toDoInput: $toDoInput) {
      task
      completed
    }
  }
`
const UPDATE_TODO = gql`
  mutation UpdateToDo($toDoId: ID!, $updateToDoToDoInput2: ToDoInput) {
    updateToDo(toDoId: $toDoId, toDoInput: $updateToDoToDoInput2) {
      task
      completed
    }
  }
`

export { CREATE_TODO }
