const { gql } = require('apollo-server')

//GraphQL Schemas
const typeDefs = gql`
  type ToDo {
    id: ID!
    task: String!
    completed: Boolean
    createdAt: String
    updatedAt: String
  }

  input ToDoInput {
    task: String!
    completed: Boolean
  }

  type Query {
    getToDos: [ToDo!]!
  }

  type Mutation {
    createToDo(toDoInput: ToDoInput): ToDo
    updateToDo(toDoId: ID!, completed: Boolean): ToDo
    deleteToDo(toDoId: ID!): ToDo
  }
`
module.exports = typeDefs
