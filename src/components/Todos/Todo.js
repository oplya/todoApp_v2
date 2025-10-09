import { useState } from 'react'
import styles from './Todo.module.css'
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'

function Todo({ todo, deleteTodo, toggleTodo }) {
  const [isModalOpen, setModalOpen] = useState(false)
  const limit = 15

  const shortText =
    todo.text.length > limit ? `${todo.text.slice(0, limit)}...` : todo.text

  return (
    <>
      <div
        className={`${styles.todo} ${
          todo.isCompleted ? styles.completedTodo : ''
        }`}
      >
        <RiTodoFill className={styles.todoIcon} />
        <div
          className={styles.todoText}
          onClick={() => {
            if (todo.text.length > limit) setModalOpen(true)
          }}
          title={todo.text.length > limit ? 'Показать полностью' : ''}
        >
          {shortText}
        </div>
        <RiDeleteBin2Line
          className={styles.deleteIcon}
          onClick={() => deleteTodo(todo.id)}
        />
        <FaCheck
          className={styles.checkIcon}
          onClick={() => toggleTodo(todo.id)}
        />
      </div>

      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setModalOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Полный текст задачи</h3>
            <p>{todo.text}</p>
            <button
              className={styles.closeButton}
              onClick={() => setModalOpen(false)}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Todo
