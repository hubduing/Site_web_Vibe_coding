import Button from '../../components/Button/Button.jsx'
import Card from '../../components/Card/Card.jsx'
import './Home.css'

const featured = [
  {
    initial: 'Н',
    name: 'Нэко-Хару',
    title: 'Фэнтези · Героиня',
    description: 'Кошка-воительница с клинком утренней зари, защищающая деревню у подножия Фудзи.',
    tags: ['Фэнтези', 'Клинки'],
  },
  {
    initial: 'Д',
    name: 'Драконья Искра',
    title: 'Магия · Дракон',
    description: 'Повелитель драконов, чьё пламя способно зажигать звёзды на ночном небе.',
    tags: ['Магия', 'Исэкай'],
  },
  {
    initial: 'А',
    name: 'Айко',
    title: 'Научная фантастика',
    description: 'Гениальный инженер из будущего, путешествующий сквозь пространство и время.',
    tags: ['Sci-Fi', 'Мэха'],
  },
]

const genres = [
  { icon: '🗡️', title: 'Фэнтези', desc: 'Миры, где магия встречает клинки' },
  { icon: '🚀', title: 'Sci-Fi', desc: 'Космос, мехи и далёкое будущее' },
  { icon: '💖', title: 'Романтика', desc: 'Истории о юности и первой любви' },
  { icon: '👻', title: 'Ужасы', desc: 'Тайны и божества тьмы' },
]

const Home = () => {
  return (
    <div className="home">
      {/* Секция-герой */}
      <section className="hero">
        <div className="petals" aria-hidden="true">
          {[...Array(18)].map((_, i) => (
            <span
              key={i}
              className="petal"
              style={{ left: `${(i * 5.5) % 100}%`, animationDuration: `${12 + (i % 6)}s`, animationDelay: `${i * 0.8}s` }}
            />
          ))}
        </div>

        <div className="container">
          <div className="hero__content">
            <p className="hero__kicker">✦ Энциклопедия аниме-вселенной</p>
            <h1 className="hero__title">Мир Аниме: Хроники Героев</h1>
            <p className="hero__text">
              Погрузитесь в эпические саги, узнайте о легендарных персонажах и
              откройте для себя магию японской анимации.
            </p>
            <div className="hero__actions">
              <Button to="/charecters" variant="primary">
                Начать путешествие →
              </Button>
              <Button to="/about" variant="ghost">
                О компании
              </Button>
            </div>
          </div>

          <div className="hero__art">
            <div className="hero__art-face" aria-hidden="true">🌸</div>
            <p className="hero__art-caption">Сакура веет над миром героев</p>
          </div>
        </div>
      </section>

      {/* Популярные персонажи */}
      <section className="container featured">
        <div className="section-head">
          <h2 className="section-title">Познакомьтесь с легендами</h2>
          <p className="section-sub">Топ-герои, о которых говорят в каждом фандоме.</p>
        </div>

        <div className="featured__grid">
          {featured.map((card) => (
            <Card key={card.name} {...card} />
          ))}
        </div>

        <Button to="/charecters" variant="ghost" className="featured__more">
          Все персонажи →
        </Button>
      </section>

      {/* Жанры */}
      <section className="container genres">
        <div className="section-head">
          <h2 className="section-title">Изучите жанры</h2>
          <p className="section-sub">От фэнтези до научной фантастики — для каждого есть своя сага.</p>
        </div>

        <div className="genres__grid">
          {genres.map((genre) => (
            <article key={genre.title} className="genre">
              <span className="genre__icon" aria-hidden="true">{genre.icon}</span>
              <h3 className="genre__title">{genre.title}</h3>
              <p className="genre__desc">{genre.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home