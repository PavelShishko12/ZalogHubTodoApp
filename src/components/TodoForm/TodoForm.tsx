import { useState } from 'react'
import './TodoForm.css'

type TodoFormProps = {
  onSubmit: (text: string) => void
}

export function TodoForm({ onSubmit }: TodoFormProps) {
  const [text, setText] = useState('')

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedText = text.trim()

    if (!trimmedText) return

    onSubmit(trimmedText)
    setText('')
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        id="new-todo"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Что нужно сделать?"
        maxLength={120}
      />
      <button type="submit">Добавить</button>
    </form>
  )
}
