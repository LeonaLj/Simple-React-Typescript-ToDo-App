import React, { useState, useEffect } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  // const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo("")
    }
  }

  useEffect(() => {
    const data = localStorage.getItem("List")
    if (data !== null && data.length > 0) {
      setTodos(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    if (todos.length) {
      localStorage.setItem("List", JSON.stringify(todos))
    }
  }, [todos])


  return (
    <div className="App">
      <div className='heading'>
        <h1>ToDo<span>List</span></h1>
      </div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
    </div>
  );
}

export default App;
