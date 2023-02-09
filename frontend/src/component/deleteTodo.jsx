import { RxDragHandleDots2 } from 'react-icons/rx'

// GraphQL
import { useMutation } from '@apollo/client'
import { DELETE_TODO } from '../mutations'
import { GET_TODOS } from '../queries'

const DeleteTodo = ({ id }) => {
  const [deleteTodo] = useMutation(DELETE_TODO, {
    variables: { toDoId: id },
    refetchQueries: [{ query: GET_TODOS }],
  })
  return <RxDragHandleDots2 onClick={deleteTodo} />
}

export default DeleteTodo
