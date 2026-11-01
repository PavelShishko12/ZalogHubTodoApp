import './EmptyState.css'

type EmptyStateProps = {
  hasTodos: boolean
}

export function EmptyState({ hasTodos }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <p>{hasTodos ? 'Здесь пока пусто' : 'Пока нет задач'}</p>
      <span>{hasTodos ? 'Попробуйте выбрать другой фильтр' : 'Добавьте первую задачу выше'}</span>
    </div>
  )
}
