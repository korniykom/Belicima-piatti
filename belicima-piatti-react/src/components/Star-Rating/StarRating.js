import "./StarRating.css";

export default function StarRating({ rating = 5 }) {
  return (
    <div className="containerStyle">
      <div className="starContainerStyle">
        {Array.from({ length: 5 }, (_, i) => (
          <span>
            <Star key={i} />
          </span>
        ))}
        <span className="textStyle ">{rating}</span>
      </div>
    </div>
  );
}

function Star() {
  return (
    <div className="star">
      <span class="material-symbols-outlined">star_rate</span>
    </div>
  );
}
