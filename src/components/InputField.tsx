import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}


const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={(e) => handleAdd(e)}>
                        <Form.Group>
                            <Form.Control value={todo} onChange={(e) => setTodo(e.target.value)} className='input-box' type="text" placeholder="Enter task..." onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Enter task..."} />
                        </Form.Group>
                        <Button className='input-btn' size="lg" type="submit">
                            Add <span>ToDo</span>
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default InputField