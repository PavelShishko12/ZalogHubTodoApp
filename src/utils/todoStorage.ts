import type { Todo } from '../types/todo'

const STORAGE_KEY = 'todoapp-todos'

export function loadTodos(): Todo[] {
  try {
    const savedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
    return Array.isArray(savedTodos) ? savedTodos : []
  } catch {
    return []
  }
}

export function saveTodos(todos: Todo[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}
