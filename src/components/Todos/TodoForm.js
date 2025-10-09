import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const [warning, setWarning] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (!text.trim()) return
    addTodo(text.trim())
    setText('')
    setWarning('')
  }

  const textLimitHandler = (event) => {
    const value = event.target.value

    if (value.length > 150) {
      setWarning('Максимум 150 символов')
      return
    }

    if (value.length > 130) {
      setWarning(`Осталось ${150 - value.length} символов`)
    } else {
      setWarning('')
    }

    setText(value)
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={textLimitHandler}
        />
        <Button
          type="submit"
          title="Submit"
        >
          Submit
        </Button>
      </form>
      {warning && <p className={styles.warning}>{warning}</p>}
    </div>
  )
}

export default TodoForm
