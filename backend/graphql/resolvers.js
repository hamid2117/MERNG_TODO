const ToDo = require('../models/todo')

const resolvers = {
  Query: {
    getToDos: async () => {
      try {
        return await ToDo.find()
      } catch (error) {
        throw new Error(error)
      }
    },
  },

  Mutation: {
    createToDo: async (_, args) => {
      try {
        const { toDoInput } = args
        return await ToDo.create(toDoInput)
      } catch (error) {
        throw new Error(error)
      }
    },
    updateToDo: async (_, args) => {
      try {
        const { toDoId, toDoInput } = args
        return await ToDo.findOneAndUpdate(toDoId, toDoInput, { new: true })
      } catch (error) {
        throw new Error(error)
      }
    },
    deleteToDo: async (_, args) => {
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
