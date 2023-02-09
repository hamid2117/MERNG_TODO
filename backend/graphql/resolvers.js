const ToDo = require('../models/todo')

const resolvers = {
  Query: {
    getToDos: async (parent, args) => {
      try {
        return await ToDo.find()
      } catch (error) {
        throw new Error(error)
      }
    },
  },

  Mutation: {
    createToDo: async (parent, args) => {
      try {
        const { toDoInput } = args
        return await ToDo.create(toDoInput)
      } catch (error) {
        throw new Error(error)
      }
    },
    deleteToDo: async (parent, args) => {
      try {
        const { toDoId } = args
        return await ToDo.findByIdAndDelete(toDoId)
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}
module.exports = resolvers
