import "./Card.css";
import StarRating from "../Star-Rating/StarRating";
import { Link } from "react-router-dom";

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
        <Link to={`http://localhost:3000/dishdetail/${id}`}>
          <img src={img} alt="dish description"></img>
        </Link>
      </div>
      <div className="card-description">
        <div className="first-element">
          <StarRating rating={score} />
          <span className="price">ціна: ${price}</span>
        </div>
        <div className="second-element">
          <div className="time">
            <span>{duration} хв.</span>
            <span class="material-symbols-outlined">schedule</span>
          </div>

          <span className="calories">{calories} калорій</span>
        </div>
        <div className="third-element">
          <span className="material-symbols-outlined">
            shopping_cart_checkout
          </span>
        </div>
      </div>
    </div>
  );
}
