import Button from '../Button/Button.jsx'
import './Card.css'

/**
 * Карточка персонажа.
 * Если `image` не задан — показывается градиент с инициалом.
 */
const Card = ({
  image,
  initial = '?',
  title = '',
  name,
  description,
  tags = [],
  to = '/charecters',
}) => {
  return (
    <article className="card">
      <div className="card__image">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <span className="card__image--initial" aria-hidden="true">
            {initial}
          </span>
        )}
      </div>

      <div className="card__body">
        {title && <span className="card__title">{title}</span>}
        <h3 className="card__name">{name}</h3>
        {description && <p className="card__desc">{description}</p>}
        {tags.length > 0 && (
          <div className="card__tags">
            {tags.map((tag) => (
              <span key={tag} className="card__tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        <Button to={to} variant="ghost" className="card__btn">
          Подробнее →
        </Button>
      </div>
    </article>
  )
}

export default Card
