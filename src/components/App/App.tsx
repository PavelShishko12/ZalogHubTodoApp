import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { EmptyState } from '../EmptyState/EmptyState'
import { TodoFilters } from '../TodoFilters/TodoFilters'
import { TodoForm } from '../TodoForm/TodoForm'
import { TodoList } from '../TodoList/TodoList'
import type { Todo, TodoFilter } from '../../types/todo'
import { loadTodos, saveTodos } from '../../utils/todoStorage'

export function App() {
  const [todos, setTodos] = useState<Todo[]>(loadTodos)
  const [filter, setFilter] = useState<TodoFilter>('all')

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  const visibleTodos = useMemo(
    () =>
      todos.filter((todo) => {
        if (filter === 'active') return !todo.completed
        if (filter === 'completed') return todo.completed
        return true
      }),
    [filter, todos],
  )

  const activeCount = todos.filter((todo) => !todo.completed).length

  function addTodo(text: string) {
    setTodos((currentTodos) => [
      {
        id: `${Date.now()}-${Math.random()}`,
        text,
        completed: false,
      },
      ...currentTodos,
    ])
  }

  function toggleTodo(id: string) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))
  }

  return (
    <main className="app-shell">
      <section className="todo-card">
        <header className="todo-header">
          <h1 id="page-title">Список задач</h1>
          <div className="task-count">
            <strong>{activeCount}</strong>
            <span>активных</span>
          </div>
        </header>

        <TodoForm onSubmit={addTodo} />
        <TodoFilters value={filter} onChange={setFilter} />
        {visibleTodos.length > 0 ? (
          <TodoList todos={visibleTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
        ) : (
          <EmptyState hasTodos={todos.length > 0} />
        )}
      </section>
    </main>
  )
}
