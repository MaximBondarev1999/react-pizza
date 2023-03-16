import { nanoid } from 'nanoid'
import { useState } from 'react'

export const PizzaBlock = (props) => {
  const [pizzaCount, setPizzaCount] = useState(0)
  const [sizeActive, setSizeActive] = useState(0)
  const [typeActive, setTypeActive] = useState(0)
  function addPizzaCount() {
    setPizzaCount(pizzaCount + 1)
  }
  // console.log(typeNames.props.types)
  const typeNames = ['тонкое', 'традиционное']
  return (
    <div className="pizza-block__component">
      <div className="pizza-block">
        <img
          className="pizza-block__image"
          src={props.imageUrl}
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{props.title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {props.types.map((type, i) =>
              <li
                key={nanoid()}
                className={typeActive == i ? 'active' : ''}
                onClick={() => setTypeActive(i)}
              >{typeNames[type]}</li>
            )}
          </ul>
          <ul>
            {props.sizes.map((size, index) =>
              <li
                key={nanoid()}
                className={sizeActive == index ? 'active' : ''}
                onClick={() => setSizeActive(index)}>{size}</li>
            )}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {props.price} ₽</div>
          <button onClick={() => addPizzaCount()} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>{pizzaCount}</i>
          </button>
        </div>
        <div />
      </div>
    </div>
  )
}
export default PizzaBlock;