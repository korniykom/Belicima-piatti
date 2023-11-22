import "./StarRating.css";
import { FaStar } from "react-icons/fa";

export default function SmallStarRating({ rating }) {
  return (
    <div className="containerStyle">
      <div className="starContainerStyle">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>{i < rating ? <YellowStar /> : <WhiteStar />}</span>
        ))}
        <span className="SmallTextStyle ">{rating}</span>
      </div>
    </div>
  );
}

function WhiteStar() {
  return (
    <div className="star">
      <FaStar size={15} color={"#aaa"} />
    </div>
  );
}
function YellowStar() {
  return (
    <span className="yellowStar">
      <FaStar size={15} color={"orange"} />
    </span>
  );
}
