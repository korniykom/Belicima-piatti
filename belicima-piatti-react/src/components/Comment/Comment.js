import "./Comment.css";
import StarRating from "../Star-Rating/StarRating";

export default function Comment() {
  return (
    <>
      <div className="comment">
        <div className="avatar">
          <div className="photo"></div>
          <div className="name">Joe</div>
          <div className="StarRating">
            <StarRating rating={4} />
          </div>
        </div>
        <div className="box">
          <div className="text">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </div>
        </div>
      </div>
    </>
  );
}
