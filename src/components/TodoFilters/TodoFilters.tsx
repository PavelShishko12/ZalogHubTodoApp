import type { TodoFilter } from '../../types/todo'
import './TodoFilters.css'

type TodoFiltersProps = {
  value: TodoFilter
  onChange: (filter: TodoFilter) => void
}

const filters: Array<{ value: TodoFilter; label: string }> = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'completed', label: 'Выполненные' },
]

export function TodoFilters({ value, onChange }: TodoFiltersProps) {
  return (
    <nav className="filters">
      {filters.map((filter) => (
        <button
          className={value === filter.value ? 'filter-button active' : 'filter-button'}
          key={filter.value}
          type="button"
          onClick={() => onChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </nav>
  )
}
