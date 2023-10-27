export default function Card({
  id,
  name,
  img,
  score,
  duration,
  price,
  calories,
}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <div className="image">
        <img src={img} alt="dish description"></img>
      </div>
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
    </div>
  );
}
