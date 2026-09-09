import { useState } from 'react'
import Button from '../../components/Button/Button.jsx'
import './Registration.css'

const PAGE_VIEW = 'page'
const SUCCESS_VIEW = 'success'

const Registration = () => {
  const [view, setView] = useState(PAGE_VIEW)
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    favorite: 'Фэнтези',
    comment: '',
  })
  const [error, setError] = useState('')

  const set = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const { name, email, password, confirm } = form
    if (name.trim().length < 2) {
      setError('Укажите имя (минимум 2 символа).')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Введите корректный email.')
      return
    }
    if (password.length < 6) {
      setError('Пароль должен быть не короче 6 символов.')
      return
    }
    if (password !== confirm) {
      setError('Пароли не совпадают.')
      return
    }

    setError('')
    setView(SUCCESS_VIEW)
  }

  if (view === SUCCESS_VIEW) {
    return (
      <div className="registration">
        <div className="container registration__success">
          <span className="registration__success-icon" aria-hidden="true">🌸</span>
          <h1 className="registration__success-title">
            Добро пожаловать, {form.name.trim()}!
          </h1>
          <p className="registration__success-text">
            Аккаунт создан. Теперь вы часть фандома «Мира Аниме».
          </p>
          <div className="registration__success-actions">
            <Button to="/charecters" variant="primary">
              К персонажам →
            </Button>
            <Button onClick={() => setView(PAGE_VIEW)} variant="ghost">
              Зарегистрировать ещё
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="registration">
      <div className="registration__card container">
        <header className="registration__header">
          <h1 className="registration__title">✦ Регистрация</h1>
          <p className="registration__sub">
            Создайте аккаунт, чтобы сохранять любимых героев.
          </p>
        </header>

        <form className="form" onSubmit={onSubmit} noValidate>
          <div className="form__row">
            <div className="form__field">
              <label htmlFor="reg-name">Имя</label>
              <input
                id="reg-name"
                className="form__input"
                type="text"
                placeholder="Ваше имя"
                value={form.name}
                onChange={set('name')}
              />
            </div>

            <div className="form__field">
              <label htmlFor="reg-email">Email</label>
              <input
                id="reg-email"
                className="form__input"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={set('email')}
              />
            </div>
          </div>

          <div className="form__row">
            <div className="form__field">
              <label htmlFor="reg-password">Пароль</label>
              <input
                id="reg-password"
                className="form__input"
                type="password"
                placeholder="Минимум 6 символов"
                value={form.password}
                onChange={set('password')}
              />
            </div>

            <div className="form__field">
              <label htmlFor="reg-confirm">Повторите пароль</label>
              <input
                id="reg-confirm"
                className="form__input"
                type="password"
                placeholder="Ещё раз"
                value={form.confirm}
                onChange={set('confirm')}
              />
            </div>
          </div>

          <div className="form__field">
            <label htmlFor="reg-favorite">Любимый жанр</label>
            <select
              id="reg-favorite"
              className="form__select"
              value={form.favorite}
              onChange={set('favorite')}
            >
              <option>Фэнтези</option>
              <option>Sci-Fi</option>
              <option>Романтика</option>
              <option>Ужасы</option>
              <option>Спорт</option>
            </select>
          </div>

          <div className="form__field">
            <label htmlFor="reg-comment">О себе (необязательно)</label>
            <textarea
              id="reg-comment"
              className="form__textarea"
              rows={4}
              placeholder="Расскажите о своём любимом сериале…"
              value={form.comment}
              onChange={set('comment')}
            />
          </div>

          {error && <p className="registration__error" role="alert">{error}</p>}

          <Button type="submit" variant="primary" className="registration__submit">
            Создать аккаунт →
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Registration
