import React, { useState, useRef, useEffect } from 'react'
import { Col, Form } from 'react-bootstrap'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodoText, setEditTodoText] = useState<string>(todo.todo)

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        )
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()

        setTodos(todos.map((todo) => (
            todo.id === id ? { ...todo, todo: editTodoText } : todo
        )))
        setEdit(false)
    }


    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

    return (
        <Form className='todos-single' onSubmit={(e) => handleEdit(e, todo.id)}>
            {
                edit ? (
                    <Form.Control ref={inputRef} value={editTodoText} onChange={(e) => setEditTodoText(e.target.value)} className='todos-edit-form' type="text" placeholder="Edit task..." onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Edit task..."} />
                ) : (
                    todo.isDone ? (
                        <s className='todos-single-text'>{todo.todo}</s>
                    ) : (
                        <span className='todos-single-text'>{todo.todo}</span>
                    )
                )
            }

            <Col>
                <span className='icon' onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }
                }><AiFillEdit /></span>
                <span className='icon' onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
                <span className='icon' onClick={() => handleDone(todo.id)}><MdDone /></span>
            </Col>
        </Form>

    )
}

export default SingleTodo