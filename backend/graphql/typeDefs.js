const { gql } = require('apollo-server')

//GraphQL Schemas
const typeDefs = gql`
  type ToDo {
    id: ID!
    task: String!
    completed: Boolean
  }

  input ToDoInput {
    task: String!
    completed: Boolean
  }

  type Query {
    getToDo(toDoId: ID!): ToDo!
    getToDos: [ToDo!]!
  }

  type Mutation {
    createToDo(toDoInput: ToDoInput): ToDo
    updateToDo(toDoId: ID!, toDoInput: ToDoInput): ToDo
    deleteToDo(toDoId: ID!): ToDo
    deleteToDos: [ToDo!]!
  }
`
module.exports = typeDefs
