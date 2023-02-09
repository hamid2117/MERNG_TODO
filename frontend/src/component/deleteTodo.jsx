import { RxDragHandleDots2 } from 'react-icons/rx'
//Graphql
import { useMutation } from '@apollo/client'
import { DELETE_TODO } from '../mutations'
import { GET_TODOS } from '../queries'

const DeleteTodo = ({ id }) => {
  const [deleteTodo] = useMutation(DELETE_TODO, {
    variables: { toDoId: id },
    // Define the update function that updates the cache after the mutation is completed.
    update(cache, { data: { deleteToDo } }) {
      // Read the current list of todo items from the cache.
      const { getToDos } = cache.readQuery({ query: GET_TODOS })
      // Filter out the deleted todo item from the current list.
      const updatedData = getToDos.filter((data) => {
        return data.id !== deleteToDo.id
      })
      // Write the updated list back to the cache.
      cache.writeQuery({
        query: GET_TODOS,
        data: { getToDos: updatedData },
      })
    },
  })

  return <RxDragHandleDots2 onClick={deleteTodo} />
}

export default DeleteTodo
