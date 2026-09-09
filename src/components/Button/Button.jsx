import { Link } from 'react-router-dom'
import './Button.css'

/**
 * Универсальная кнопка.
 * - c `to` — рендерит react-router `<Link>`
 * - c `href` — рендерит обычную `<a>` ссылку
 * - без них — рендерит `<button>`
 */
const Button = ({
  to,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  children,
  onClick,
  disabled = false,
}) => {
  const classes = `btn btn--${variant} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
