import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
      {!todos.length && <h2>TodoList is empty</h2>}
    </div>
  )
}

export default TodoList
