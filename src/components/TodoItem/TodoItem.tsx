import type { Todo } from '../../types/todo'
import './TodoItem.css'

type TodoItemProps = {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <article className={todo.completed ? 'todo-item completed' : 'todo-item'}>
      <button
        className="check-button"
        type="button"
        onClick={() => onToggle(todo.id)}
      >
        {todo.completed && '✓'}
      </button>
      <span className="todo-text">{todo.text}</span>
      <button
        className="delete-button"
        type="button"
        onClick={() => onDelete(todo.id)}
      >
        ×
      </button>
    </article>
  )
}
