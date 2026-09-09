import Button from '../../components/Button/Button.jsx'
import './AboutCompany.css'

const values = [
  { icon: '🎨', title: 'Креатив', desc: 'Каждая карточка — маленький арт-объект в аниме-стилистике.' },
  { icon: '🤝', title: 'Комьюнити', desc: 'Сообщество фанатов, которое растёт и вдохновляет друг друга.' },
  { icon: '📚', title: 'База знаний', desc: 'Точные данные о персонажах, сериалах и жанрах.' },
]

const team = [
  { initial: 'М', name: 'Мария', role: 'Главный редактор' },
  { initial: 'И', name: 'Игорь', role: 'Дизайнер вселенной' },
  { initial: 'С', name: 'Сакура', role: 'Куратор контента' },
]

const timeline = [
  { year: '2021', text: 'Идея «Мира Аниме» родилась на одном из фестивалей.' },
  { year: '2023', text: 'Запуск первой версии энциклопедии персонажей.' },
  { year: '2026', text: 'Пять тысяч героев и огромное комьюнити.' },
]

const AboutCompany = () => {
  return (
    <div className="about">
      {/* Миссия */}
      <section className="about__mission">
        <div className="container">
          <p className="about__kicker">✦ О нас</p>
          <h1 className="about__title">Мы собираем мир аниме по частям</h1>
          <p className="about__lead">
            «Мир Аниме» — независимая команда фанатов, которая создаёт самую
            живую энциклопедию японской анимации: от культовых героев до
            нишевых жанров.
          </p>
        </div>
      </section>

      {/* Ценности */}
      <section className="container about__values">
        <h2 className="section-title">Наши ценности</h2>
        <div className="about__values-grid">
          {values.map((v) => (
            <article key={v.title} className="about__value">
              <span className="about__value-icon" aria-hidden="true">{v.icon}</span>
              <h3 className="about__value-title">{v.title}</h3>
              <p className="about__value-desc">{v.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Команда */}
      <section className="container about__team">
        <h2 className="section-title">Команда</h2>
        <div className="about__team-grid">
          {team.map((m) => (
            <div key={m.name} className="about__member">
              <span className="about__member-avatar" aria-hidden="true">{m.initial}</span>
              <h3 className="about__member-name">{m.name}</h3>
              <p className="about__member-role">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Хронология */}
      <section className="container about__timeline">
        <h2 className="section-title">Наш путь</h2>
        <ol className="about__timeline-list">
          {timeline.map((t) => (
            <li key={t.year} className="about__timeline-item">
              <span className="about__timeline-year">{t.year}</span>
              <p className="about__timeline-text">{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="container about__cta">
        <Button to="/registration" variant="primary">
          Присоединиться к нам →
        </Button>
      </div>
    </div>
  )
}

export default AboutCompany
