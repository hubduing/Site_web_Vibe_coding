import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Burger from '../Burger/Burger.jsx'
import Button from '../Button/Button.jsx'
import './HeaderMenu.css'

const links = [
  { to: '/', label: 'Главная' },
  { to: '/charecters', label: 'Персонажи' },
  { to: '/about', label: 'О компании' },
  { to: '/registration', label: 'Регистрация' },
]

const HeaderMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__brand">
          ✦ Мир Аниме
        </Link>

        <nav className="header__nav" aria-label="Основная навигация">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `header__link${isActive ? ' active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__cta">
          <Button to="/registration" variant="sakura">
            Войти
          </Button>
        </div>

        <span className="header__burger">
          <Burger open={open} onToggle={() => setOpen(!open)} />
        </span>
      </div>

      <div className="container">
        <nav
          className={`mobile-menu${open ? ' open' : ''}`}
          aria-label="Мобильная навигация"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `header__link${isActive ? ' active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default HeaderMenu
