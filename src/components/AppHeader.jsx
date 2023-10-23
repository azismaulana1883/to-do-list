import { useState } from "react"
import Button, { SelectButton } from "./Button"
import TodoModal from "./TodoModal"
import { useDispatch, useSelector } from "react-redux"
import { updateFilterStatus } from "../slices/todoSlice"


function AppHeader() {
    const [modalOpen, setModalOpen] = useState(false)
    const filterStatus = useSelector((state) => state.todo.filterStatus)
    const dispatch = useDispatch()

    const updateFilter = (e) => {
      dispatch(updateFilterStatus(e.target.value))
    }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
       <div className="d-flex justify-content-between align-items-center">
        <Button variant="primary" onClick={() => setModalOpen(true)}>Add Task</Button>
        <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="complete">Complete</option>
        </SelectButton>
        <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AppHeader