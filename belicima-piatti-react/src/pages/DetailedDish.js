import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./DetailedDish.css";
import Nav from "../components/Nav/Nav";
import StarRating from "../components/Star-Rating/StarRating";
import StepList from "../components/Step-List/Step-List";
import Comment from "../components/Comment/Comment";
import ShoppingList from "../components/Shopping-List/Shopping-List";
const BASE_PAGE_URL = "http://localhost:5059/api/recipe";
const BASE_COMMENTS_URL = "http://localhost:5059/api/comments";

export default function DetailedDish() {
  const { id } = useParams();
  const [pageInfo, setPageInfo] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`${BASE_PAGE_URL}/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setPageInfo(data);
      });
  }, []);
  useEffect(() => {
    fetch(`${BASE_COMMENTS_URL}/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setComments(data);
      });
  }, []);
  //TODO: add back link
  return (
    <div className="Page">
      <Nav backLink="#" title={pageInfo.name} />
      <img
        className="DishImg"
        src="https://www.nexxusdesigns.com/wp-content/uploads/2018/08/custom-404-image.jpg"
        alt="dish img"
      />
      <div className="StarRating">
        <StarRating rating={pageInfo.score} starSize={20} />
      </div>
      <div className="Description">{pageInfo.description}</div>
      <div className="TimePrice">
        <div className="Time">{pageInfo.duration} хв.</div>
        <div className="Price">{pageInfo.price} €$ </div>
      </div>
      <div>
        <ShoppingList ShoppingList={pageInfo.ingredients} />
      </div>
      <div>
        <StepList StepList={pageInfo.steps} />
      </div>
      <p className="CommentsTitle">Коментарі</p>
      <div>
        {comments.map((comment) => (
          <div>
            <Comment
              name={comment.name}
              text={comment.text}
              rating={pageInfo.score}
              key={comment.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
