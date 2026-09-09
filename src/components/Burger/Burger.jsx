import './Burger.css'

/**
 * Анимированная кнопка-«бургер» для мобильного меню.
 * `open` — текущее состояние, `onToggle` — обработчик переключения.
 */
const Burger = ({ open = false, onToggle, label = 'Меню' }) => {
  return (
    <button
      type="button"
      className={`burger${open ? ' open' : ''}`}
      onClick={onToggle}
      aria-expanded={open}
      aria-label={label}
    >
      <span className="burger__line" />
      <span className="burger__line" />
      <span className="burger__line" />
    </button>
  )
}

export default Burger
