import { gql } from '@apollo/client'

const GET_TODOS = gql`
  query Query {
    getToDos {
      id
      task
      completed
    }
  }
`

export { GET_TODOS }
