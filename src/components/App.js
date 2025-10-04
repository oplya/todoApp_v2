import { useState } from 'react'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
// import DeleteMe from './components/Todos/DeleteMe'
// Проверка изоляции классов из TodoForm.module.css
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((todo, idx) => idx !== index))
  }

  return (
    <div className="App">
      <h1>Todo APP</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
      />
      {/* <DeleteMe /> */}
    </div>
  )
}

export default App
