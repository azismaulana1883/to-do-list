import { useSelector } from "react-redux"
import Todoitem from "./Todoitem"



function AppContent() {
    const todoList = useSelector((state) => state.todo.todoList)
    const filterStatus = useSelector((state) => state.todo.filterStatus)
    const sortedTodoList = [...todoList]
    sortedTodoList.sort((a,b) => new Date(b.time) - new Date(a.time))

    const filterTodoList = sortedTodoList.filter((item) => {
      if(filterStatus === 'all'){
        return true
      }
      return item.status ===  filterStatus
    })
  return (
    <div>
        {filterTodoList && filterTodoList.length > 0 ? filterTodoList.map((todo) => <Todoitem key={todo.id} todo = {todo}/>)
        : `'Tidak ada task'`}
    </div>
  )
}

export default AppContent