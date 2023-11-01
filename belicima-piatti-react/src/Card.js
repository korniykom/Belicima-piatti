import "./Card.css";
import StarRating from "./components/Star-Rating/StarRating";

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
          <StarRating rating={score} />
          <span className="price">ціна: {price}$</span>
        </div>
        <div className="second-element">
          <div>
            <span>{duration} хв.</span>
            <span class="material-symbols-outlined">schedule</span>
          </div>

          <span>{calories} калорій</span>
        </div>
        <div className="third-element">
          <span class="material-symbols-outlined">shopping_cart_checkout</span>
        </div>
      </div>
    </div>
  );
}
