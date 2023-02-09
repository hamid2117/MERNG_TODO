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

const DELETE_TODO = gql`
  mutation DeleteToDo($toDoId: ID!) {
    deleteToDo(toDoId: $toDoId) {
      id
    }
  }
`

export { CREATE_TODO, UPDATE_TODO, DELETE_TODO }
