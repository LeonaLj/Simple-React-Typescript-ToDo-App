import React from 'react'
import { Todo } from '../model'
import { Container, Row, Col } from 'react-bootstrap'
import SingleTodo from './SingleTodo'


interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos: Todo[]
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <Container>
            <Row>
                <Col className='todos'>
                    <h2>Your todo list</h2>
                    {
                        todos.map(todo => (
                            <SingleTodo todo={todo}
                                key={todo.id}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        ))
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default TodoList
