const ToDo = require('../models/todo')

// Resolvers for the GraphQL queries and mutations
const resolvers = {
  Query: {
    // Query to retrieve all ToDo items
    getToDos: async () => {
      try {
        // Find all ToDo items in the database
        return await ToDo.find()
      } catch (error) {
        throw new Error(error)
      }
    },
  },

  Mutation: {
    // Mutation to create a new ToDo item
    createToDo: async (_, args) => {
      try {
        const { toDoInput } = args
        // Create a new ToDo item in the database
        return await ToDo.create(toDoInput)
      } catch (error) {
        throw new Error(error)
      }
    },
    // Mutation to update a ToDo item
    updateToDo: async (_, args) => {
      try {
        const { toDoId, completed } = args
        // Update the ToDo item with the given id in the database
        const data = await ToDo.findOne({ _id: toDoId })
        data.completed = completed
        await data.save()
        return data
      } catch (error) {
        throw new Error(error)
      }
    },
    // Mutation to delete a ToDo item
    deleteToDo: async (_, args) => {
      try {
        const { toDoId } = args
        // Delete the ToDo item with the given id from the database
        return await ToDo.findByIdAndDelete(toDoId)
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}

module.exports = resolvers
