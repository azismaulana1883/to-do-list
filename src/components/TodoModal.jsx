import { useEffect, useState } from 'react';
import { Modal, Button as BootstrapButton, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../slices/todoSlice';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';

function TodoModal({type, modalOpen, setModalOpen, todo }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('active');
  const dispatch = useDispatch()

  useEffect( () => {
    if(type === 'update' && todo) {
      setTitle(todo.title)
      setStatus(todo.status)
    } else {
      setTitle('')
      setStatus('active')
    }
  }, [type, todo, modalOpen])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === ''){
      toast.error('Tolong masukkan title.')
      return
    }
    if (title && status) {
      if(type === 'add')
      {

        dispatch(addTodo({
          id: uuid(),
            title,
            status,
            time: new Date().toLocaleString()
        }))
        toast.success('Task Baru Berhasil Ditambahkan')
      }
      if(type === 'update')
      {
        if(todo.title !== title || todo.status !== status)
        { 
          dispatch(updateTodo({
            ...todo,
            title,
            status,
          }))
        } else {
          toast.error('Tidak ada update')
        }
      }
      setModalOpen(false)
    } else {
        toast.error('Title tidak boleh kosong!')
    }
  };

  return (
    <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{type === 'update' ? 'Update' : 'Add'} Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control as="select" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="active">Active</option>
              <option value="complete">Complete</option>
            </Form.Control>
          </Form.Group>
          <BootstrapButton variant="primary" type="submit">
            {type === 'update' ? 'Update' : 'Add'} Task
          </BootstrapButton>
          <BootstrapButton variant="secondary" onClick={() => setModalOpen(false)}>
            Cancel
          </BootstrapButton>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default TodoModal;
