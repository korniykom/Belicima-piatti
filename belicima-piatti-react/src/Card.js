export default function Card({
  id,
  name,
  img,
  description,
  score,
  duration,
  price,
  calories,
  ingredients,
  steps,
}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={img} alt="dish description"></img>
      <div className="card-description">
        <div className="first-element">
          <span>stars</span> <span>{score}</span> <br />
          <span>ціна:</span> <span>{price}$</span>
        </div>
        <div className="second-element">
          <span>{duration}</span> <span>icon</span> <br />
          <span>{calories}</span> <span>калорій</span>
        </div>
        <div className="third-element">
          <span>Big Icon</span>
        </div>
      </div>
      <div className="detailed-description"></div>
      <div className="ingredients">
        <h3>Інгредієнти:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="steps">
        <h3>Кроки приготування:</h3>
        <ol>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
