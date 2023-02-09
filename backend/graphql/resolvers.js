const ToDo = require('../models/todo')

const resolvers = {
  Query: {
    getToDo: async (parent, args) => {
      try {
        const { toDoId } = args
        return await ToDo.findById(toDoId)
      } catch (error) {
        throw new Error(error)
      }
    },
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
    updateToDo: async (parent, args) => {
      try {
        const { toDoId, toDoInput } = args
        return await ToDo.findOneAndUpdate(toDoId, toDoInput, { new: true })
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
    deleteToDos: async (parent, args) => {
      try {
        return await ToDo.remove()
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}
module.exports = resolvers
