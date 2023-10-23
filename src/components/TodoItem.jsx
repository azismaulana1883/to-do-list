import { MdDelete, MdEdit } from 'react-icons/md/index.esm'
import styles from '../styles/modules/todoItem.module.scss'
import { getClasses } from '../utils/getClasses'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../slices/todoSlice'
import toast from 'react-hot-toast'
import TodoModal from './TodoModal'
import { useState } from 'react'
import CheckButton from './CheckButton'


function Todoitem({todo}) {
    const dispatch = useDispatch()
    const [updateModalOpen, setUpdateModalOpen] = useState(false)

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
        toast.success('Task berhasil dihapus')
    } 

    const handleUpdate = () => {
        setUpdateModalOpen(true)
    }
  return (
      <>
    <div className={styles.item}>
        <div className={styles.todoDetails}>
            <CheckButton/>
            <div className={styles.texts}>
                <p className={getClasses([styles.todoText, todo.status === 'complete' && styles['todoText--completed']])}>
                    {todo.title}
                </p>
                <p className={styles.time}>{todo.time}</p>
            </div>
        </div>
        <div className={styles.todoActions}>
            <div className={styles.icon}
            onClick={handleDelete}
            onKeyDown={handleDelete}
            role='button'
            tabIndex={0}
            >
                <MdDelete/>
            </div>
            <div className={styles.icon}
            onClick={handleUpdate}
            onKeyDown={handleUpdate}
            role='button'
            tabIndex={0}>
                <MdEdit/>
            </div>
        </div>
    </div>
    <TodoModal todo={todo} type="update" modalOpen={updateModalOpen} setModalOpen={setUpdateModalOpen} />
    </>
  )
}

export default Todoitem