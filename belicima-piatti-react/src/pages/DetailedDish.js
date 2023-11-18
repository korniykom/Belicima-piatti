import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./DetailedDish.css";
import Nav from "../components/Nav/Nav";
import StarRating from "../components/Star-Rating/StarRating";
import StepList from "../components/Step-List/Step-List";
import Comment from "../components/Comment/Comment";
import ShoppingList from "../components/Shopping-List/Shopping-List";
import Loading from "../components/Loading/Loading";
import ErrorLoading from "../components/ErrorLoading/Error";

const BASE_PAGE_URL = "http://localhost:5059/api/recipe";
const BASE_COMMENTS_URL = "http://localhost:5059/api/comments";

export default function DetailedDish() {
  const { id } = useParams();
  const [pageInfo, setPageInfo] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    //creating function to fetch data
    const fetchData = async () => {
      setIsLoading(true);
      try {
        fetch(`${BASE_PAGE_URL}/${id}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            //console.log(data);
            setPageInfo(data);
          });
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
      setIsLoading(false);
    };
    //calling function to fetch data
    fetchData();
  });
  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        fetch(`${BASE_COMMENTS_URL}/${id}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setComments(data);
          });
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
      setIsLoading(false);
    };
    fetchComments();
  });

  if (isLoading) {
    return (
      <div className="Loading">
        <Loading />
      </div>
    );
  }
  if (error) {
    return (
      <div className="Error">
        <ErrorLoading />
      </div>
    );
  }

  //TODO: add back link
  return (
    <div className="Page">
      <Nav backLink="#" title={pageInfo.name} />
      <img className="DishImg" src={pageInfo.img} alt="dish img" />
      <div className="StarRating">
        <StarRating rating={pageInfo.score} starSize={20} />
      </div>
      <div className="Description">{pageInfo.description}</div>
      <div className="TimePrice">
        <div className="Time">{pageInfo.duration} хв.</div>
        <div className="Price">{pageInfo.price} €$ </div>
      </div>
      <div>
        {/* {!isLoading && <ShoppingList ShoppingList={pageInfo.ingredients} />} */}
      </div>
      <div>
        <StepList StepList={pageInfo.steps} />
      </div>
      <p className="CommentsTitle">Коментарі</p>
      <div className="CommentSection">
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
