import { RxDragHandleDots2 } from 'react-icons/rx'

// GraphQL
import { useMutation } from '@apollo/client'
import { DELETE_TODO } from '../mutations'
import { GET_TODOS } from '../queries'

const DeleteTodo = ({ id }) => {
  const [deleteTodo] = useMutation(DELETE_TODO, {
    variables: { toDoId: id },
    update(cache, { data: { deleteToDo } }) {
      const { getToDos } = cache.readQuery({ query: GET_TODOS })
      const updatedData = getToDos.filter((data) => {
        return data.id !== deleteToDo.id
      })
      cache.writeQuery({
        query: GET_TODOS,
        data: { getToDos: updatedData },
      })
    },
  })
  return <RxDragHandleDots2 onClick={deleteTodo} />
}

export default DeleteTodo
