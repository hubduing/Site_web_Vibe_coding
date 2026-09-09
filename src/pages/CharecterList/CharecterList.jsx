import { useState } from 'react'
import CharacterCard from '../../components/CharacterCard/CharacterCard.jsx'
import Button from '../../components/Button/Button.jsx'
import { characters, allTags } from '../../data/characters.js'
import './CharecterList.css'

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
          filtered.map((character) => (
            <CharacterCard key={character.id} {...character} />
          ))
        ) : (
          <p className="catalog__empty">Никого не нашли. Попробуйте другой запрос 🌸</p>
        )}
      </section>
    </div>
  )
}

export default CharecterList
