import { useState } from 'react'
import styles from './Todo.module.css'
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'

function Todo({ todo, deleteTodo, toggleTodo }) {
  const [isModalOpen, setModalOpen] = useState(false)
  const limit = 15

  const shortText =
    todo.text.length > limit ? `${todo.text.slice(0, limit)}...` : todo.text

  const shouldShowPointer = todo.text.length > limit

  return (
    <>
      <div
        className={`${styles.todo} ${
          todo.isCompleted ? styles.completedTodo : ''
        }`}
      >
        <RiTodoFill className={styles.todoIcon} />
        <div
          className={`${styles.todoText} ${
            shouldShowPointer ? styles.clickableText : styles.nonClickableText
          }`}
          onClick={() => {
            if (todo.text.length > limit) setModalOpen(true)
          }}
          title={todo.text.length > limit ? 'Show in full' : ''}
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
            <h3>Full text</h3>
            <p>{todo.text}</p>
            <button
              className={styles.closeButton}
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Todo
