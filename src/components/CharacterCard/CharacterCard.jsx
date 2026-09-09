import Button from '../Button/Button.jsx'
import './CharacterCard.css'

/**
 * Атмосферная карточка персонажа.
 *
 * Принимает объект персонажа (см. src/data/characters.js):
 * { name, kana, title, role, anime, description, tags, emblem, gradient }
 */
const CharacterCard = ({
  name,
  kana,
  title,
  role,
  anime,
  description,
  tags = [],
  emblem = '✨',
  gradient = ['#aa3bff', '#d47bff'],
  to = '/charecters',
}) => {
  const [from, toColor] = gradient

  return (
    <article className="ccard">
      {/* Анимированная градиентная «обложка» */}
      <div
        className="ccard__cover"
        style={{
          background: `linear-gradient(135deg, ${from}, ${toColor})`,
          '--cc-glow': toColor,
        }}
      >
        <span className="ccard__emblem" aria-hidden="true">
          {emblem}
        </span>
        {kana && <span className="ccard__kana">{kana}</span>}
        {/* неоновый блик поверх обложки */}
        <span className="ccard__shine" aria-hidden="true" />
      </div>

      <div className="ccard__body">
        {title && <span className="ccard__title">{title}</span>}
        <h3 className="ccard__name">{name}</h3>

        {(role || anime) && (
          <dl className="ccard__meta">
            {role && (
              <div className="ccard__meta-item">
                <dt>Роль</dt>
                <dd>{role}</dd>
              </div>
            )}
            {anime && (
              <div className="ccard__meta-item">
                <dt>Аниме</dt>
                <dd>{anime}</dd>
              </div>
            )}
          </dl>
        )}

        {description && <p className="ccard__desc">{description}</p>}

        {tags.length > 0 && (
          <div className="ccard__tags">
            {tags.map((tag) => (
              <span key={tag} className="ccard__tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <Button to={to} variant="ghost" className="ccard__btn">
          Подробнее →
        </Button>
      </div>
    </article>
  )
}

export default CharacterCard