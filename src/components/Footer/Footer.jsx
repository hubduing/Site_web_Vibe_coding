import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <Link to="/" className="footer__brand">
            ✦ Мир Аниме
          </Link>
          <p className="footer__about">
            Энциклопедия аниме-вселенной: легендарные персонажи, жанры и эпические
            саги японской анимации. Создано поклонниками для поклонников.
          </p>
        </div>

        <nav aria-label="Разделы">
          <h3 className="footer__title">Разделы</h3>
          <ul className="footer__links">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/charecters">Персонажи</Link></li>
            <li><Link to="/about">О компании</Link></li>
            <li><Link to="/registration">Регистрация</Link></li>
          </ul>
        </nav>

        <div>
          <h3 className="footer__title">Контакты</h3>
          <ul className="footer__links">
            <li><a href="mailto:hello@anime-world.ru">hello@anime-world.ru</a></li>
            <li><a href="https://github.com/" rel="noreferrer">GitHub</a></li>
            <li><a href="https://discord.com/" rel="noreferrer">Discord</a></li>
          </ul>
        </div>
      </div>

      <p className="footer__bottom">
        © {year} Мир Аниме: Хроники Героев. Все права защищены.
      </p>
    </footer>
  )
}

export default Footer
