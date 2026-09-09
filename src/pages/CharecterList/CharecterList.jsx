import { useState } from 'react'
import Card from '../../components/Card/Card.jsx'
import Button from '../../components/Button/Button.jsx'
import './CharecterList.css'

const characters = [
  { initial: 'Н', name: 'Нэко-Хару', title: 'Фэнтези', description: 'Кошка-воительница с клинком утренней зари.', tags: ['Фэнтези', 'Клинки'] },
  { initial: 'Д', name: 'Драконья Искра', title: 'Магия', description: 'Повелитель драконов, зажигающий звёзды.', tags: ['Магия', 'Исэкай'] },
  { initial: 'А', name: 'Айко', title: 'Sci-Fi', description: 'Инженер из будущего, путешественник во времени.', tags: ['Sci-Fi', 'Мэха'] },
  { initial: 'Ю', name: 'Юки', title: 'Романтика', description: 'Студентка, которая видит сны наяву.', tags: ['Романтика', 'Школа'] },
  { initial: 'К', name: 'Кайто', title: 'Приключения', description: 'Юный пират, ищущий затерянный остров.', tags: ['Приключения', 'Море'] },
  { initial: 'С', name: 'Сай', title: 'Ужасы', description: 'Охотник на божеств тьмы в трущобах Киото.', tags: ['Ужасы', 'Мистика'] },
  { initial: 'М', name: 'Мику', title: 'Комедия', description: 'Весёлая школьница с бесконечным запасом шуток.', tags: ['Комедия', 'Повседневность'] },
  { initial: 'Р', name: 'Рен', title: 'Спорт', description: 'Баскетболист, обыгрывающий саму гравитацию.', tags: ['Спорт', 'Драма'] },
]

const allTags = [...new Set(characters.flatMap((c) => c.tags))]

const CharecterList = () => {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState('Все')

  const norm = (s) => s.toLowerCase()
  const filtered = characters.filter((c) => {
    const matchesTag = activeTag === 'Все' || c.tags.includes(activeTag)
    const matchesQuery =
      query.trim() === '' || norm(c.name).includes(norm(query))
    return matchesTag && matchesQuery
  })

  return (
    <div className="catalog">
      <header className="catalog__head">
        <div className="container">
          <h1 className="catalog__title">✦ Галерея персонажей</h1>
          <p className="catalog__sub">
            Познакомьтесь с героями и злодеями аниме-вселенной. Найдите своего фаворита.
          </p>
        </div>
      </header>

      <section className="catalog__controls container">
        <input
          className="catalog__search"
          type="search"
          placeholder="Поиск по имени…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Поиск персонажа"
        />

        <div className="catalog__tags">
          {['Все', ...allTags].map((tag) => (
            <Button
              key={tag}
              variant={activeTag === tag ? 'primary' : 'ghost'}
              className="catalog__tag"
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </section>

      <section className="catalog__grid container">
        {filtered.length > 0 ? (
          filtered.map((card) => (
            <Card key={card.name} {...card} />
          ))
        ) : (
          <p className="catalog__empty">Никого не нашли. Попробуйте другой запрос 🌸</p>
        )}
      </section>
    </div>
  )
}

export default CharecterList
