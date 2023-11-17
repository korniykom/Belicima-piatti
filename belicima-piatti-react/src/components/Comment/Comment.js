import "./Comment.css";
import SmallStarRating from "../Star-Rating/SmallStarRating";

export default function Comment(name, text, rating) {
  return (
    <>
      <div className="comment">
        <div className="avatar">
          <div className="photo"></div>
          <div className="name">{name}</div>
          <div className="StarRating">
            <SmallStarRating rating={rating} />
          </div>
        </div>
        <div className="box">
          <div className="text">{text}</div>
        </div>
      </div>
    </>
  );
}
