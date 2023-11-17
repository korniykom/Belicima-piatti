import "./StarRating.css";
import { FaStar } from "react-icons/fa";

export default function StarRating({ rating }) {
  return (
    <div className="containerStyle">
      <div className="starContainerStyle">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>{i < rating ? <YellowStar /> : <WhiteStar />}</span>
        ))}
        <span className="textStyle ">{rating}</span>
      </div>
    </div>
  );
}

function WhiteStar() {
  return (
    <div className="star">
      <FaStar size={35} color={"#aaa"} />
    </div>
  );
}
function YellowStar() {
  return (
    <span className="yellowStar">
      <FaStar size={35} color={"orange"} />
    </span>
  );
}
